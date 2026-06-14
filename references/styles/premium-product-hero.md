---
slug: premium-product-hero
name_cn: 高端产品 Hero
name_en: Premium Product Hero / DTC Ad
channel: 跨境 3C 爆款产品发布 hero / 电商落地页主视觉 / DTC 广告 / 产品 KV
has_text: true
default_backend: gpt            # 有字 → gpt-image-2（居中 wordmark + slogan + CTA 文字最稳）；纯产品无字时可切 gemini
default_ratio: "3:4"
one_liner: 极简高端 DTC 广告：单个英雄产品居中棚拍，浅灰柔渐影棚 + 身后弧形浮动情境屏，留白足、文字克制、向往感拉满。
---

> 通用提炼 / 构图 / 渲染路径见 `_illustration-engine/ENGINE.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像 Peloton / Apple / 高端 DTC 品牌的产品发布主图——**一个产品被供在中央，灯打得干净，背景是高级的浅灰渐变空气**，身后几块浮动的情境屏暗示「用它你的生活会变成什么样」，文字少到只剩品牌名、一句 slogan、一个 CTA。**贵、静、克制、让人想买**。
> 与库里其他风格的分界：这套是**写实 3D 棚拍质感的商业 KV**，不是手绘草图（keke）、不是孔版油印（riso）、不是扁平科技插画（saas-tech）、不是暖系纸感（xhs）、不是单线社论（editorial）。它的灵魂是「产品真实可信 + 影棚高级感 + 广告级排版」，三者缺一即垮。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **背景 / 影棚** | **浅中性灰 `#ECECEE` → 近白 `#FAFAFB` 的柔和径向渐变**，像无缝背景纸的专业影棚，干净到没有一丝杂物、没有真实房间、没有道具堆 | `seamless studio backdrop, soft radial gradient from light neutral grey #ECECEE to near-white #FAFAFB, clean, no clutter, no real room` |
| 2 | **英雄主体（灵魂第一条）** | **正中央 1 个产品**，写实精致 3D / 棚拍照级渲染，材质可信（金属/塑料/织物质感真实），占画面 **40–55%**，是绝对视觉焦点 | `ONE single hero product dead-center, photorealistic studio-shot 3D render, believable materials, occupying 40 to 55% of frame, the absolute focal point` |
| 3 | **棚拍光 + 软反射软阴影** | **柔光箱大面光**，产品有干净的边缘高光与柔和过渡；**底部一道柔和镜面倒影 + 接地软阴影**，把产品「放」在台面上，无硬黑投影 | `large soft-box studio lighting, clean rim highlights and smooth falloff, a gentle mirror reflection and soft contact shadow grounding the product, no hard black shadow` |
| 4 | **身后弧形浮动情境屏（灵魂第二条）** | 主体**身后 3–5 个浮动的情境卡 / 屏幕 / 面板**，沿一道**弧线带轻微透视**环绕展开，暗示使用场景；它们**比主体小、更虚、更淡**，绝不抢戏 | `3 to 5 floating context panels / screens arranged on a gentle curved arc with slight perspective behind the hero, softer, smaller, more recessed, never competing with the product` |
| 5 | **大量留白 + 呼吸感** | 主体四周**充足负空间**，构图上下居中、左右对称感强；整体疏朗、安静、有「高端品牌敢留白」的底气 | `generous negative space and breathing room around the product, centered and balanced composition, calm and airy, confident premium emptiness` |
| 6 | **广告级排版（灵魂第三条）** | **顶部居中品牌 wordmark**（全大写、细字距拉开）+ **中部或底部粗体 slogan 大字** + **一行细体副标** + **一个加粗 CTA**（按钮或强调短语）；全部**居中对齐、字号反差大、克制** | `top-centered brand wordmark in spaced-out uppercase, a bold large slogan, one thin subhead line, and a bold CTA — all center-aligned, high size contrast, restrained` |
| 7 | **质感 / 渲染** | 全图**精致、利落、商业成品级**：干净的渐变、真实的材质反射、无噪点、无廉价感；像顶级 DTC 品牌投放的成片，不是渲染 demo | `polished, crisp, commercial-grade finish, clean gradients, realistic material reflections, no noise, premium DTC campaign quality` |
| 8 | **配色克制** | **中性灰白主导** + **产品自身的真实颜色** + **黑色文字**；强调色（如有 CTA 高亮）只点一处、面积最小 | `neutral grey-white dominant, the product's own real color, black typography, at most one tiny accent on the CTA` |
| 9 | **比例** | 默认 `3:4` 竖版（落地页 / 广告位）；横版投放用 `16:9`，方版社媒用 `1:1` | `3:4 vertical hero (or 16:9 / 1:1)` |

> 一眼自检：把图缩成拇指大，**仍像一张「能直接投放的高端产品广告」**——一个干净产品居中、背景是高级浅灰空气、顶部品牌名、底部 slogan+CTA。看起来杂乱 / 多产品 / 高饱和 / 像手绘或截图 = 错。

---

## 配色

**极度克制的中性灰白体系**，颜色只服务于「让产品成为唯一的色彩焦点」。除产品本色与一处可选 CTA 强调外，全图无第二个抢眼色。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **影棚底 · 浅** | 浅中性灰 / Light Neutral Grey | `#ECECEE` | 背景径向渐变的外圈、产品身后的环境 |
| **影棚底 · 亮心** | 近白 / Near White | `#FAFAFB` | 渐变中心（产品正后方那束亮）、留白区 |
| **台面反射** | 浅银灰 / Pale Silver | `#E2E2E6` | 产品底部镜面倒影 / 接地区域 |
| **文字 · 主** | 近黑 / Ink Black | `#0A0A0B` | wordmark / slogan / 副标，正文与标题主色 |
| **文字 · 次** | 中灰 / Mid Grey | `#8A8A90` | 一行细体副标、次要说明，弱于主标题 |
| **CTA 强调（一抹·可选）** | 品牌 accent | 取产品本色或单一品牌色（如电光蓝 `#2B6BFF` / 暖橙 `#FF5A1F`，二选一，面积最小） | 只点一处：CTA 按钮 / 一个关键强调短语 |
| **产品本色** | 随产品而定 | —— | 产品自身真实颜色，是全图唯一允许「鲜活」的色彩来源 |

铁律：
- **背景永远是浅灰→白的柔渐变**，绝不深色、绝不彩色、绝不杂乱场景。
- **强调色 ≤ 1 处**，只在 CTA。slogan / wordmark 一律黑或近黑，不染色。
- **不堆高饱和**：除产品本色外，全图饱和度压到很低；产品因此自然「跳」出来。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **背景**：杂乱真实房间 / 道具堆 / 深色科技底 / 高饱和彩色背景 / 渐变发光霓虹 / 户外实景
- ❌ **多产品堆叠**：画面里 2 个及以上同等地位的产品（英雄产品只能有 1 个，身后情境屏不算产品）
- ❌ **抢戏情境屏**：身后面板做得和主体一样实、一样大、一样亮，或塞满细节抢焦点
- ❌ **高饱和 / 花哨**：除产品本色外出现第二个鲜艳大色块；马卡龙糖果色；彩虹渐变
- ❌ **风格串味**：手绘 / 草图 / 孔版油印 / 半色调网点 / 扁平矢量插画 / 拼贴 / 廉价剪贴画 / 单线社论风（这些是隔壁皮肤，别撞）
- ❌ **真实 UI 截图糊脸**：身后情境屏直接贴一张真实软件截图导致像素糊、字看不清、像盗图——要做成**干净的示意化界面/场景**，不是糊掉的真截图
- ❌ **廉价渲染感**：塑料假光、噪点、生硬黑投影、像 3D 软件默认渲染的 demo、产品悬空无接地
- ❌ **排版**：文字满天飞 / 多段落正文 / 左对齐挤一角 / 字体花哨 / 概念词堆砌（「赋能 / 闭环 / 提质增效」）；wordmark+slogan+副标+CTA 之外不要再加文字

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。英文写画面主体 + 写死 DNA 关键词；中文只用于 wordmark / slogan / 副标 / CTA 这几处**画面内广告文字**。
> 有中文文字 → 走 `gpt`（gpt-image-2，文字最稳）；纯产品无字 → 可切 `gemini`。

```
Premium minimalist DTC product hero advertisement, {{RATIO}} aspect ratio, in a
clean seamless studio: a soft radial gradient background going from light neutral
grey #ECECEE at the edges to near-white #FAFAFB behind the product — NEVER a
cluttered room, never dark, never a saturated or neon background.

HERO SUBJECT (the soul): ONE single product, {{SUBJECT}}, placed dead-center,
rendered as a photorealistic studio-shot 3D object with believable materials and
crisp edges, occupying roughly 40 to 55% of the frame as the absolute focal
point. It visualizes "{{COGNITIVE_ANCHOR}}". The product's own real color is the
only vivid color in the whole image.

STUDIO LIGHT + GROUNDING: large soft-box lighting with clean rim highlights and
smooth tonal falloff; a gentle mirror reflection and a soft contact shadow under
the product ground it on an invisible surface — no hard black shadow, no floating.

FLOATING CONTEXT ARC: behind the hero, {{PANELS}} floating context panels /
screens arranged along a gentle curved arc with slight perspective, hinting at
{{SCENARIO}}; they are smaller, softer, lighter and more recessed than the
product, clearly secondary, never competing for attention, shown as clean
stylized scenes — NOT blurry real screenshots.

COMPOSITION: generous negative space and breathing room around the product,
vertically centered, strong left-right balance, calm and airy with confident
premium emptiness.

PALETTE: neutral grey-white dominant, the product's true color, black
typography; at most one tiny accent {{ACCENT_CLAUSE}}. Everything else very low
saturation so the product naturally pops.

TYPOGRAPHY (advertising layout, restrained): a top-centered brand wordmark
{{WORDMARK}} in spaced-out uppercase; a bold large slogan {{SLOGAN}}; one thin
grey subhead line {{SUBHEAD}}; and one bold CTA {{CTA}}. All center-aligned,
high size contrast, plenty of space, nothing else written.

FINISH: polished, crisp, commercial-grade DTC campaign quality, clean gradients,
realistic material reflections, no noise, no cheap render look.

Avoid: cluttered or dark background, two or more equal products, oversized or
over-detailed context panels stealing focus, high saturation beyond the
product's own color, hand-drawn / sketch / risograph / halftone / flat vector /
collage / single-line editorial styles, blurry stolen-looking UI screenshots,
plastic fake lighting, harsh black shadows, floating un-grounded product, busy
text or multiple paragraphs.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `3:4`（默认竖版落地页/广告）/ `16:9`（横版投放）/ `1:1`（社媒方版）|
| `{{SUBJECT}}` | **一个**英雄产品的具体写实描述（材质 + 形态 + 颜色），如「a compact matte-black portable power bank with a small digital display」|
| `{{COGNITIVE_ANCHOR}}` | 这张图要让人 1 秒感受到的核心卖点 / 向往感（如「一块电量焦虑的解药，随身、安静、可靠」）|
| `{{PANELS}}` | `3`–`5`（身后情境屏数量）|
| `{{SCENARIO}}` | 产品被使用的几个情境（如「charging on a desk, in a backpack, plugged into a phone outdoors」），用来填弧形浮动屏 |
| `{{ACCENT_CLAUSE}}` | CTA 强调色，如 `on the CTA, a single electric-blue #2B6BFF highlight`；不要强调色就填 `, keep everything monochrome black-on-grey`|
| `{{WORDMARK}}` | 顶部品牌名（中文或英文短词），如 `"VOLTA"` 或 `"沃能"` |
| `{{SLOGAN}}` | 中部/底部粗体大字 slogan（中文短句最佳，6–12 字），如 `"随身的安心电量"` |
| `{{SUBHEAD}}` | 一行细体副标（中文短句），如 `"10000mAh · 30分钟充满 · 三口同充"` |
| `{{CTA}}` | 加粗 CTA 短语，如 `"立即抢购"` 或 `"了解更多 →"` |

> 文字总处数控制在 **3–6 处**（wordmark / slogan / 副标 / CTA 为主），不要让文字盖过产品。

---

## 示例提示词（主题：跨境 3C 爆款便携充电器产品发布 hero · slogan + CTA）

> 认知锚点：**一块「电量焦虑的解药」——小到能随身、安静到没存在感、可靠到你不用再想它；用了它，桌面、背包、户外的每个场景都有底气。**
> 隐喻 / 构图：哑光黑便携充电器居中棚拍，身后弧形排开 4 块淡淡的浮动情境屏（书桌充电 / 装进背包 / 户外插手机 / 三口同充），底部柔和倒影。3:4 竖版，顶部 wordmark + 中部粗体 slogan + 细副标 + 加粗 CTA，共 4 处中文文字。可直接喂 `render.js`（`--backend gpt --aspect 3:4`）。

```
Premium minimalist DTC product hero advertisement, 3:4 aspect ratio, in a clean
seamless studio: a soft radial gradient background going from light neutral grey
#ECECEE at the edges to near-white #FAFAFB behind the product — NEVER a cluttered
room, never dark, never a saturated or neon background.

HERO SUBJECT (the soul): ONE single product — a compact matte-black portable
power bank, rounded rectangular brick with a small crisp digital battery readout
and two USB-C ports, soft-touch matte finish — placed dead-center, rendered as a
photorealistic studio-shot 3D object with believable materials and razor-clean
edges, occupying roughly 50% of the frame as the absolute focal point. It
visualizes "an antidote to battery anxiety: small enough to carry, quiet enough
to forget, reliable enough to stop thinking about". The product's matte black is
the only deep tone in the whole image.

STUDIO LIGHT + GROUNDING: large soft-box lighting with a clean rim highlight
along the top edge and smooth tonal falloff across the matte body; a gentle
mirror reflection and a soft contact shadow under the power bank ground it on an
invisible glossy surface — no hard black shadow, no floating.

FLOATING CONTEXT ARC: behind the hero, four floating context panels arranged
along a gentle curved arc with slight perspective — one showing it charging on a
tidy desk, one tucked into a backpack pocket, one plugged into a phone outdoors,
one fast-charging three devices at once; all smaller, softer, lighter and more
recessed than the product, clearly secondary, shown as clean stylized scenes,
NOT blurry real screenshots.

COMPOSITION: generous negative space around the product, vertically centered,
strong left-right balance, calm and airy with confident premium emptiness.

PALETTE: neutral grey-white dominant, the product's matte black, black
typography; one tiny accent — on the CTA, a single electric-blue #2B6BFF
highlight. Everything else very low saturation so the power bank naturally pops.

TYPOGRAPHY (advertising layout, restrained): a top-centered brand wordmark "VOLTA"
in spaced-out uppercase; a bold large Chinese slogan "随身的安心电量" in the lower
third; one thin grey subhead line "10000mAh · 30分钟充满 · 三口同充" beneath it;
and one bold blue CTA "立即抢购". All center-aligned, high size contrast, plenty
of space, nothing else written.

FINISH: polished, crisp, commercial-grade DTC campaign quality, clean gradients,
realistic material reflections, no noise, no cheap render look.

Avoid: cluttered or dark background, two or more equal products, oversized or
over-detailed context panels stealing focus, high saturation beyond the
product's own color, hand-drawn / sketch / risograph / halftone / flat vector /
collage / single-line editorial styles, blurry stolen-looking UI screenshots,
plastic fake lighting, harsh black shadows, floating un-grounded product, busy
text or multiple paragraphs.
```
