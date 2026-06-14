#!/usr/bin/env node
/*
 Illustration Studio · 自包含双后端渲染器（内置圆角+阴影后处理）
 用法:
   node render.js --backend both --aspect 4:3 --out /tmp/out --prompt "<英文主体 + 中文标注>"
   node render.js --has-text true --out /tmp/cover.png --prompt-file ./p.txt
 参数:
   --backend    gpt | nano | both       显式后端（优先级最高）
   --has-text   true | false            不给 --backend 时按规则自动选：有字→gpt-image-2，无字→gemini
   --aspect     4:3(默认) | 16:9 | 3:4 | 9:16 | 1:1
   --frame      true(默认) | false       给出图自动加圆角 + 柔和投影（--no-frame 关闭）
   --no-frame                           等同 --frame false
   --radius <px>                        圆角半径（默认按短边 ~4%）
   --nano-model pro | flash             默认 pro（失败自动降级 flash）
   --out        目录 或 .png 路径
   --prompt / --prompt-file             二选一
   后端规则：图上有文字 → gpt-image-2（文字最准）；纯画面无文字 → Gemini（更精细）

 依赖（公开 npm 包，本目录运行一次）:  npm install openai @google/genai sharp
   （sharp 仅用于圆角+阴影；没装时自动跳过后处理、不报错）
 凭证（只从环境变量读，绝不硬编码）:
   gpt-image-2 (OpenAI 兼容)：OPENAI_API_KEY  [+ 可选 OPENAI_BASE_URL 走自有路由]
   Gemini Nano Banana：GEMINI_API_KEY (或 GOOGLE_API_KEY / GOOGLE_AI_API_KEY)
*/
const path = require('path'), fs = require('fs'), https = require('https'), http = require('http');

const a = process.argv.slice(2);
const o = { backend: null, aspect: '4:3', nanoModel: 'pro', out: process.cwd(), hasText: null, frame: true, radius: null };
for (let i = 0; i < a.length; i++) {
  const k = a[i];
  if (k === '--backend') o.backend = a[++i];
  else if (k === '--has-text') o.hasText = a[++i];
  else if (k === '--aspect') o.aspect = a[++i];
  else if (k === '--nano-model') o.nanoModel = a[++i];
  else if (k === '--out') o.out = a[++i];
  else if (k === '--prompt') o.prompt = a[++i];
  else if (k === '--prompt-file') o.prompt = fs.readFileSync(a[++i], 'utf8');
  else if (k === '--frame') o.frame = (a[++i] !== 'false');
  else if (k === '--no-frame') o.frame = false;
  else if (k === '--radius') o.radius = parseInt(a[++i], 10);
}
if (!o.prompt) { console.error('需要 --prompt 或 --prompt-file'); process.exit(1); }
if (!o.backend) o.backend = o.hasText === 'true' ? 'gpt' : o.hasText === 'false' ? 'nano' : 'both';

const GSIZE = { '16:9': '1536x1024', '4:3': '1536x1024', '3:2': '1536x1024', '3:4': '1024x1536', '9:16': '1024x1536', '4:5': '1024x1536', '2:3': '1024x1536', '1:1': '1024x1024' };
const NANO = { '16:9': '16:9', '4:3': '4:3', '3:2': '16:9', '3:4': '3:4', '9:16': '9:16', '4:5': '3:4', '2:3': '3:4', '1:1': '1:1' };
const NANO_MODELS = { pro: 'gemini-3-pro-image-preview', flash: 'gemini-2.5-flash-image' };
const isDir = !o.out.endsWith('.png');
fs.mkdirSync(isDir ? o.out : path.dirname(o.out), { recursive: true });
const outPath = (tag) => isDir ? path.join(o.out, `${tag}-${Date.now()}.png`) : o.out.replace(/\.png$/, `-${tag}.png`);

function need(mod) { try { return require(mod); } catch { console.error(`缺少依赖 ${mod} —— 请先在本目录运行: npm install openai @google/genai sharp`); process.exit(1); } }

// 圆角 + 柔和投影（透明背景）。没装 sharp 时原样返回。
async function frameImage(buf) {
  let sharp; try { sharp = require('sharp'); } catch { console.error('  (跳过圆角阴影：未装 sharp，npm i sharp 可启用)'); return buf; }
  const meta = await sharp(buf).metadata();
  const W = meta.width, H = meta.height;
  const r = o.radius || Math.round(Math.min(W, H) * 0.04);
  const maskSvg = Buffer.from(`<svg width="${W}" height="${H}"><rect width="${W}" height="${H}" rx="${r}" ry="${r}"/></svg>`);
  const rounded = await sharp(buf).composite([{ input: maskSvg, blend: 'dest-in' }]).png().toBuffer();
  const pad = Math.round(Math.min(W, H) * 0.05);
  const dy = Math.round(pad * 0.45);
  const blur = Math.max(4, Math.round(pad * 0.55));
  const shadowSvg = Buffer.from(`<svg width="${W}" height="${H}"><rect width="${W}" height="${H}" rx="${r}" ry="${r}" fill="rgba(17,24,39,0.45)"/></svg>`);
  const shadow = await sharp(shadowSvg).blur(blur).png().toBuffer();
  const CW = W + pad * 2, CH = H + pad * 2;
  return await sharp({ create: { width: CW, height: CH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: shadow, left: pad, top: pad + dy }, { input: rounded, left: pad, top: pad }])
    .png().toBuffer();
}

async function getGpt(prompt) {
  const OpenAI = need('openai');
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) { console.error('FAIL gpt-image-2: 缺 OPENAI_API_KEY'); return null; }
  const baseURL = process.env.OPENAI_BASE_URL;
  const client = new OpenAI(baseURL ? { apiKey, baseURL } : { apiKey });
  const r = await client.images.generate({ model: 'gpt-image-2', prompt, size: GSIZE[o.aspect] || 'auto', quality: 'high', n: 1 });
  const it = r.data[0];
  if (it.b64_json) return Buffer.from(it.b64_json, 'base64');
  if (it.url) return await new Promise((res, rej) => { const c = it.url.startsWith('https') ? https : http; c.get(it.url, x => { const d = []; x.on('data', ch => d.push(ch)); x.on('end', () => res(Buffer.concat(d))); x.on('error', rej); }); });
  throw new Error('no image data in response');
}

async function getNano(prompt) {
  const { GoogleGenAI } = need('@google/genai');
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) { console.error('FAIL nano: 缺 GEMINI_API_KEY'); return null; }
  const ai = new GoogleGenAI({ apiKey });
  for (const m of [o.nanoModel, 'flash']) {
    try {
      const resp = await ai.models.generateContent({ model: NANO_MODELS[m] || m, contents: [{ text: prompt }], config: { responseModalities: ['TEXT', 'IMAGE'], imageConfig: { aspectRatio: NANO[o.aspect] || '4:3', imageSize: '2K' } } });
      for (const part of resp.candidates[0].content.parts) if (part.inlineData) return Buffer.from(part.inlineData.data, 'base64');
      throw new Error('no image part in response');
    } catch (e) { if (m === 'flash') throw e; console.error(`  nano ${m} 失败，降级 flash：${e.message}`); }
  }
}

async function save(buf, tag) {
  if (o.frame) { try { buf = await frameImage(buf); } catch (e) { console.error('  frame 失败，输出原图：', e.message); } }
  const fp = outPath(tag); fs.writeFileSync(fp, buf); return fp;
}

(async () => {
  const images = [];
  if (o.backend === 'gpt' || o.backend === 'both') { try { const b = await getGpt(o.prompt); if (b) { const f = await save(b, 'gptimage2'); images.push(f); console.error('OK gpt-image-2 ->', f); } } catch (e) { console.error('FAIL gpt-image-2:', e.message); } }
  if (o.backend === 'nano' || o.backend === 'both') { try { const b = await getNano(o.prompt); if (b) { const f = await save(b, 'nanobanana'); images.push(f); console.error('OK nano ->', f); } } catch (e) { console.error('FAIL nano:', e.message); } }
  console.log(JSON.stringify({ images, framed: o.frame, aspect: o.aspect }, null, 2));
})();
