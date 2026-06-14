#!/usr/bin/env node
/*
 内容配图家族 · 可复用渲染器（2026-06-14 验证可用）
 用法:
   node render.js --backend both --aspect 16:9 --out /tmp/out --prompt "<英文主体+中文标注>"
   node render.js --backend gpt  --aspect 3:4  --out /tmp/cover.png --prompt-file ./p.txt
 参数:
   --backend   gpt | nano | both        显式指定后端（优先级最高）
   --has-text  true | false             不给 --backend 时按规则自动选：有字→gpt-image-2，无字→gemini
   --aspect    16:9 | 3:4 | 1:1 | 9:16 | 4:3   默认 16:9
   --nano-model pro | flash              默认 pro（失败自动降级 flash）
   --out       目录 或 .png 路径
   --prompt / --prompt-file              二选一
   后端规则（477 定）：图上有文字→gpt-image-2（文字最准）；纯画面无文字→Gemini（更精细）
 后端 / 凭证（全部从环境变量读，绝不硬编码）:
   A flatkey gpt-image-2 : OPENAI_BASE_URL=https://router.flatkey.ai/v1, OPENAI_API_KEY<-FLATKEY_API_KEY
   B Gemini Nano Banana  : GOOGLE_AI_API_KEY<-GEMINI_API_KEY（注意 nano.js 读的是 GOOGLE_AI_API_KEY）
*/
const path = require('path'), fs = require('fs');
// 解析 image-master 源码位置（可移植）：优先 IMAGE_MASTER_SRC，其次常见安装路径
const H = process.env.HOME || '';
const IM = process.env.IMAGE_MASTER_SRC || [
  path.join(H, 'shared-skills/image-master/src'),
  path.join(H, '.claude/skills/image-master/src'),
  path.join(__dirname, '../image-master/src'),
].find(p => { try { require.resolve(path.join(p, 'gpt.js')); return true; } catch { return false; } });
if (!IM) { console.error('找不到 image-master，请先安装它，或用环境变量 IMAGE_MASTER_SRC 指定其 src 目录。'); process.exit(1); }
const gpt = require(path.join(IM, 'gpt.js'));
const nano = require(path.join(IM, 'nano.js'));

const a = process.argv.slice(2);
const o = { backend: null, aspect: '16:9', nanoModel: 'pro', out: process.cwd(), hasText: null };
for (let i = 0; i < a.length; i++) {
  const k = a[i];
  if (k === '--backend') o.backend = a[++i];
  else if (k === '--has-text') o.hasText = a[++i];
  else if (k === '--aspect') o.aspect = a[++i];
  else if (k === '--nano-model') o.nanoModel = a[++i];
  else if (k === '--out') o.out = a[++i];
  else if (k === '--prompt') o.prompt = a[++i];
  else if (k === '--prompt-file') o.prompt = fs.readFileSync(a[++i], 'utf8');
}
if (!o.prompt) { console.error('需要 --prompt 或 --prompt-file'); process.exit(1); }
// 后端选择：显式 --backend 优先；否则按"有字→gpt-image-2，无字→gemini"规则；都没给则 both
if (!o.backend) o.backend = o.hasText === 'true' ? 'gpt' : o.hasText === 'false' ? 'nano' : 'both';

const SIZE = { '16:9': '1536x1024', '4:3': '1536x1024', '3:4': '1024x1536', '9:16': '1024x1536', '1:1': '1024x1024' };

process.env.OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || 'https://router.flatkey.ai/v1';
if (process.env.FLATKEY_API_KEY) process.env.OPENAI_API_KEY = process.env.FLATKEY_API_KEY;
if (!process.env.GOOGLE_AI_API_KEY) process.env.GOOGLE_AI_API_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '';

const isDir = !o.out.endsWith('.png');
fs.mkdirSync(isDir ? o.out : path.dirname(o.out), { recursive: true });
const outPath = (tag) => isDir ? path.join(o.out, `${tag}-${Date.now()}.png`) : o.out.replace(/\.png$/, `-${tag}.png`);

(async () => {
  const images = [];
  if (o.backend === 'gpt' || o.backend === 'both') {
    try {
      const r = await gpt.generateImage(o.prompt, { size: SIZE[o.aspect] || 'auto', quality: 'high', n: 1, outputPath: outPath('gptimage2') });
      images.push(r[0].filePath); console.error('OK gpt-image-2 ->', r[0].filePath);
    } catch (e) { console.error('FAIL gpt-image-2:', e.message); }
  }
  if (o.backend === 'nano' || o.backend === 'both') {
    for (const m of [o.nanoModel, 'flash']) {
      try {
        const r = await nano.generateImage(o.prompt, { model: m, aspectRatio: o.aspect, imageSize: '2K', outputPath: outPath('nanobanana') });
        images.push(r[0].filePath); console.error(`OK nano(${m}) ->`, r[0].filePath); break;
      } catch (e) { console.error(`FAIL nano(${m}):`, e.message); }
    }
  }
  console.log(JSON.stringify({ images }, null, 2));
})();
