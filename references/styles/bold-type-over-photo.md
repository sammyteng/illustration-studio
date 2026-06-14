---
slug: bold-type-over-photo
name_cn: 大字压图广告
name_en: Bold Type over Photo / Editorial Ad
channel: 出海品牌 campaign 主视觉 / 海报 KV / 杂志封面感广告 / 公众号头图
has_text: true
default_backend: gpt            # 有超大粗体标题 → gpt-image-2（中英文大字最稳、几乎不乱码）
default_ratio: "4:3"
one_liner: 满版纪实大照片 + 超大粗体白字压图穿插主体，外包一圈品牌色粗边框，一角 logo 锁定块，编辑广告的张力。
---

> 通用提炼 / 构图 / 渲染路径见 `_illustration-engine/ENGINE.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像 Edward Jones / Apple / Nike 那种满版海报——**一张高质量纪实生活照打底，一句巨大粗体白字直接压在脸上，字还和照片里的人前后穿插（部分被遮住）**，外面包一圈醒目品牌色粗边，一角钉一个 logo 块。不是插画、不是拼贴，是**「大照片 + 大字 + 一个强品牌色」三件套的编辑广告**。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **背景 / 照片（灵魂第一条）** | **1 张满版高质量纪实 / 生活方式实拍照**，真实人物或真实场景，自然光、真实景深、电影感色调；占满整幅、出血到边，**绝不是插画 / 拼贴 / 3D / 抠图棚拍** | `full-bleed single high-quality documentary lifestyle photograph, real person / real scene, natural light, cinematic color grade, shallow depth of field, edge-to-edge, NOT illustration / collage / 3D` |
| 2 | **超大粗体标题（灵魂第二条）** | **超大、极粗的无衬线白色标题**，跨 2-4 行铺满画面，字号巨大到顶天立地（占画面高度一大块），紧凑行距、几乎贴边；是 KV 的主角，不是角标 | `massive ultra-bold sans-serif white headline, spanning 2 to 4 lines filling most of the frame, huge type, tight leading, near edge, the hero of the layout` |
| 3 | **前后穿插遮挡（灵魂第三条 · depth）** | **部分文字被照片主体前后穿插遮挡**——人 / 物挡在某些字母前面，字又压在背景前面，制造真实的图文层叠纵深，**不是平贴一层字幕** | `the headline weaves in front of and behind the photo subject — the person / object occludes parts of some letters while the type sits over the background, real layered depth, NOT a flat caption layer` |
| 4 | **品牌色粗边框（灵魂第四条）** | **整幅图外包一圈 {{BRAND_COLOR}} 实心粗边框**（默认暖黄 `#F4C20D`），均匀宽边、四面包住、像杂志封面 / 户外海报的外框，是强识别记忆点 | `a solid thick {{BRAND_COLOR}} border framing the entire image on all four sides, even bold margin, magazine-cover / outdoor-poster style frame` |
| 5 | **logo 锁定块（一角）** | **一角放一个小品牌 logo 锁定块**：小色块 / 小条衬底 + 品牌名（白字或反白），干净、克制、只占一个角，是品牌签名不是装饰 | `a small brand logo lock-up in one corner — a tidy solid color chip / bar holding the brand name, clean, restrained, brand signature in a single corner` |
| 6 | **对比与张力** | 高对比：暗调照片 ↔ 纯白大字 ↔ 高饱和品牌边框；构图留出一块相对干净的照片区域承载大字，字与脸不打架 | `high contrast — moody photo vs pure white type vs saturated brand frame; composition leaves a cleaner photo zone to carry the big type without fighting the face` |
| 7 | **质感 / 真实度** | 照片要有真实摄影颗粒 / 微弱胶片质感，**不是 AI 油光塑料感**；皮肤、布料、环境细节真实；字边缘干净锐利（印刷级），与照片质感反差 | `authentic photographic grain / subtle film texture, real skin and fabric detail, NOT plasticky AI gloss; the type edges crisp and print-clean, contrasting the photo` |
| 8 | **中文标注 / 标题** | **3-6 处**：1 句巨型主标题（4-10 字最有力）+ 0-2 个小副标 + 1 个角落 logo 品牌名；主标是超大粗体白字，副标小一档，**都嵌进画面排版，不是浮层** | `3 to 6 text elements: one giant bold Chinese headline (4-10 chars), optional 1-2 small sub-lines, one corner brand name; all set as real layout typography, not a floating overlay` |
| 9 | **比例** | 默认 `3:4` 竖版海报 / 杂志封面感；横图 campaign 可切 `4:5` 或 `16:9` | `3:4 vertical poster / magazine-cover feel` |

> 一眼自检：把图缩成拇指大，**仍能看出「一张大照片 + 一句压在脸上的巨字 + 一圈彩边 + 一角 logo」**。看不到照片（变成插画 / 纯色底）、字太小太多、没有边框、字平贴没穿插 = 错。

---

## 配色

逻辑极简：**照片自然色 + 一个强品牌色（只用在边框 + logo 块）+ 纯白大字**。品牌色是唯一的人造高饱和色，绝不在画面里到处撒。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **品牌色 · 边框 + logo** | 暖黄 / Warm Yellow（默认，可换 `{{BRAND_COLOR}}`） | `#F4C20D` | 外框粗边 + 角落 logo 锁定块；全图唯一高饱和人造色 |
| **大字 · 标题** | 纯白 / Pure White | `#FFFFFF` | 超大粗体主标题（必要时副标也用白）；偶尔可反白成品牌色块上的深字 |
| **照片 · 主体调** | 自然实拍色（暖肤 / 暗环境为主） | 由照片决定 | 满版照片本身的真实色，偏电影暗调更出大字 |
| **副标 / logo 衬底备选** | 近黑 / Soft Black | `#111111` | 当品牌色是浅色时，logo 块或副标用深底压住，保证可读 |

可替换品牌色清单（`{{BRAND_COLOR}}` 换这些之一，整图气质随之变）：

| 品牌色 | HEX | 适合气质 |
|---|---|---|
| 暖黄（默认） | `#F4C20D` | 乐观、亲和、零售消费 |
| Shulex 品牌蓝 | `#2563EB`（按实际品牌色校准） | 科技、B2B、可信 |
| 正红 | `#E11D2A` | 决断、能量、campaign 大促 |
| 莹绿 | `#16A34A` | 增长、可持续、新势力 |
| 墨黑 | `#0A0A0A` | 高端、克制、奢侈感 |

铁律：
- **高饱和人造色只此一个**（边框 + logo 块同色）。照片里出现的颜色不算，那是真实世界的色。
- 大字**默认纯白**；只有当照片那块底太亮压不住时，才把字放进品牌色块里反白 / 用深字。
- **绝不**搞三四个强调色、彩虹渐变、霓虹炫光——这套靠「一张照片 + 一个色 + 白字」的克制取胜。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **背景**：不是满版实拍照片（用了插画 / 矢量 / 拼贴 / 3D 渲染 / 抠图棚拍白底 / 纯色块底 / 渐变底）
- ❌ **低质照片**：糊、噪点脏、AI 塑料油光、塑料假皮肤、廉价图库摆拍感、畸形手脸
- ❌ **字太小太多**：标题不够大、不顶天立地；或塞一大段正文 / 多条文案把画面写满
- ❌ **平贴字幕**：大字只是一层平的字幕浮在最上层，与照片主体**零穿插、零遮挡**（杀死本风格的纵深灵魂）
- ❌ **无边框**：缺那一圈品牌色粗边框；或边框太细 / 不闭合 / 多色花边
- ❌ **logo 喧宾**：logo 块做太大 / 居中 / 满天飞，不是克制地钉在一个角
- ❌ **配色**：超过一个高饱和人造强调色、彩虹渐变、霓虹、多色花框
- ❌ **风格串味**：白底手绘批注 / 孔版油印网点 / SaaS 科技扁平插画 / 小红书暖系马克笔 / 单线条社论 / 信息图表流程图（这些是隔壁皮肤，别撞）
- ❌ **标注**：写一堆概念词（「赋能 / 闭环 / 全球化战略 / 提质增效」）；标题不像广告口号像 PPT 标题

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。英文写画面主体 + 写死 DNA 关键词；中文只用于 3-6 个**画面内排版文字**（1 句巨型主标 + 可选副标 + 角落品牌名）。
> 有中文大字 → 走 `gpt`（gpt-image-2，超大中英文标题最稳、几乎不乱码）；本风格几乎总有字，默认 `gpt`。

```
Editorial advertising key visual / magazine-cover-style poster, {{RATIO}} aspect
ratio. The whole composition is ONE full-bleed, high-quality DOCUMENTARY
LIFESTYLE PHOTOGRAPH — never an illustration, collage, 3D render, or cutout
studio shot.

PHOTO (hero background): {{SUBJECT}} — a real person / real scene shot on a
proper camera, natural light, cinematic color grade, authentic shallow depth of
field, real photographic grain and subtle film texture, real skin and fabric
detail, edge-to-edge full bleed. Moody, slightly darker tone so white type pops.
The shot visualizes "{{COGNITIVE_ANCHOR}}". Composition leaves a cleaner photo
zone to carry the big headline without fighting the subject's face.

HARD CONSTRAINT 1 — MASSIVE HEADLINE: a huge ultra-bold sans-serif WHITE
headline, spanning 2 to 4 lines and filling most of the frame, enormous type,
tight leading, set near the edges — this oversized type is the HERO of the
layout, not a small caption.

HARD CONSTRAINT 2 — DEPTH / OCCLUSION: the headline weaves IN FRONT OF and
BEHIND the photo subject — the person or object occludes parts of some letters
while the rest of the type sits over the background, creating real layered
image-and-type depth. NOT a flat caption layer pasted on top.

HARD CONSTRAINT 3 — BRAND FRAME: a solid THICK {{BRAND_COLOR}} border framing
the entire image on all four sides, even bold margin, like a magazine cover /
outdoor poster frame — the single strongest brand cue and the ONLY high-saturation
man-made color in the whole image.

HARD CONSTRAINT 4 — LOGO LOCK-UP: a small, tidy brand logo lock-up in ONE corner
only — a solid {{BRAND_COLOR}} chip / bar holding the brand name "{{BRAND_NAME}}"
in clean reversed type. Restrained, a signature, never centered or oversized.

TYPOGRAPHY: {{LABELS}} — set as real, crisp, print-clean layout typography baked
into the artwork (the giant white headline plus an optional small sub-line and
the corner brand name), NOT a floating subtitle overlay.

CONTRAST: high contrast between the moody photo, the pure-white type, and the
saturated brand frame. Authentic photography, no plasticky AI gloss.

Avoid: illustration / vector / collage / 3D / gradient or solid-color background,
white studio cutout, low-quality or noisy photo, plastic AI skin, tiny type,
paragraphs of copy, a flat non-overlapping caption, missing or thin or multi-color
border, oversized centered logo, more than one saturated accent color, neon /
rainbow gradients, concept buzzwords, hand-drawn sketch, riso halftone, SaaS flat
illustration, single-line editorial.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `3:4`（默认竖版海报 / 封面）/ `4:5`（社媒）/ `16:9`（横版 campaign / 公众号头图）|
| `{{SUBJECT}}` | 一张满版纪实照的具体内容：谁 + 在干嘛 + 什么环境（如「一个戴耳机的客服在亮着多语言对话的屏幕前微笑」）|
| `{{COGNITIVE_ANCHOR}}` | 这张 KV 要传达的核心情绪 / 主张（如「服务全球用户，每一次对话都被听懂」）|
| `{{BRAND_COLOR}}` | 边框 + logo 块的品牌色，默认 `warm yellow #F4C20D`；可换 `Shulex blue #2563EB` / `red #E11D2A` 等 |
| `{{BRAND_NAME}}` | 角落 logo 块里的品牌名（如 `Shulex`）|
| `{{LABELS}}` | 3-6 个画面内文字，逐个写进引号：1 句巨型主标（4-10 字）+ 可选 1-2 个小副标 + 1 个角落品牌名，如 `the giant headline "让世界听懂你", a small sub-line "Let's win the world", corner brand name "Shulex"` |

---

## 示例提示词（主题：出海品牌 campaign 主视觉 · Shulex「让世界听懂你 / Let's win the world」）

> 认知锚点：**把客服做到全球用户都满意，靠的不是口号，是每一次真实对话都被听懂——这是一个有温度、可信赖的出海品牌姿态。**
> 隐喻 / 画面：一张满版纪实照——一位真实的多语言客服 / 用户在暖光环境里，面对亮着多国语言对话气泡的屏幕，神情专注而温暖；超大白字「让世界听懂你」压在画面上，部分字母被人物肩膀和屏幕前后穿插遮挡；外包一圈暖黄粗边框，右下角一个暖黄 logo 块写「Shulex」。
> 1 句巨型主标 + 1 句小副标 + 角落品牌名 = 3 处文字。可直接喂 `render.js`（`--backend gpt --aspect 4:3`）。

```
Editorial advertising key visual / magazine-cover-style poster, 3:4 aspect ratio.
The whole composition is ONE full-bleed, high-quality DOCUMENTARY LIFESTYLE
PHOTOGRAPH — never an illustration, collage, 3D render, or cutout studio shot.

PHOTO (hero background): a real multilingual customer-support agent, warm and
focused, sitting in a softly-lit modern workspace at golden hour, facing a screen
glowing with chat bubbles in several languages; shot on a proper camera, natural
warm light, cinematic color grade, authentic shallow depth of field, real
photographic grain and subtle film texture, real skin and fabric detail,
edge-to-edge full bleed. Moody warm tone so white type pops. The shot visualizes
"reaching global users so that every conversation is truly understood — a warm,
trustworthy outbound brand". Composition leaves a cleaner darker zone on the
upper and left side to carry the big headline without covering her face.

HARD CONSTRAINT 1 — MASSIVE HEADLINE: a huge ultra-bold sans-serif WHITE Chinese
headline reading "让世界听懂你", spanning 2 to 3 lines and filling most of the
frame, enormous type, tight leading, set near the edges — this oversized type is
the HERO of the layout, not a small caption.

HARD CONSTRAINT 2 — DEPTH / OCCLUSION: the headline weaves IN FRONT OF and BEHIND
the agent — her shoulder and the glowing screen occlude parts of some characters
while the rest of the type sits over the darker background, creating real layered
image-and-type depth. NOT a flat caption layer pasted on top.

HARD CONSTRAINT 3 — BRAND FRAME: a solid THICK warm yellow #F4C20D border framing
the entire image on all four sides, even bold margin, like a magazine cover /
outdoor poster frame — the single strongest brand cue and the ONLY high-saturation
man-made color in the whole image.

HARD CONSTRAINT 4 — LOGO LOCK-UP: a small, tidy brand logo lock-up in the bottom-
right corner only — a solid warm yellow #F4C20D chip holding the brand name
"Shulex" in clean dark reversed type. Restrained, a signature, never centered or
oversized.

TYPOGRAPHY: the giant white headline "让世界听懂你", a small white sub-line
"Let's win the world" tucked under it, and the corner brand name "Shulex" — all
set as real, crisp, print-clean layout typography baked into the artwork, NOT a
floating subtitle overlay.

CONTRAST: high contrast between the moody warm photo, the pure-white type, and the
saturated yellow frame. Authentic photography, no plasticky AI gloss.

Avoid: illustration / vector / collage / 3D / gradient or solid-color background,
white studio cutout, low-quality or noisy photo, plastic AI skin, tiny type,
paragraphs of copy, a flat non-overlapping caption, missing or thin or multi-color
border, oversized centered logo, more than one saturated accent color, neon /
rainbow gradients, concept buzzwords, hand-drawn sketch, riso halftone, SaaS flat
illustration, single-line editorial.
```
