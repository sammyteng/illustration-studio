---
slug: minimal-lookbook-grid
name_cn: 极简 lookbook 网格
name_en: Minimal Lookbook Grid
channel: 跨境品牌选品 lookbook / 出海新品合集 / 极简产品目录情绪页 / 电商上新
has_text: true
default_backend: gpt            # 有字 → gpt-image-2（细线 header + 手写格文字最稳）；纯画面无字可切 gemini
default_ratio: "4:3"
one_liner: 奶油米白大底 + 极简粗体 header + 整齐对齐的宝丽来照片网格，editorial lookbook / contact-sheet 的克制选品感。
---

> 通用提炼 / 构图 / 渲染路径见 `_illustration-engine/ENGINE.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像一本出海品牌的极简选品册内页——上方一行冷静的粗体品牌名，一条细线牵到品类词；下方一组用小图钉别住、白边一致、调子统一的宝丽来照片，整整齐齐摊在大片奶油色留白里。**克制、对齐、透气**，是 contact-sheet 而不是拼贴墙。
> 适合「新品合集 / 选品情绪页 / 上新预告」这类要显得有审美、不喧哗的出海内容。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | 🌬️ **冷静大留白（灵魂第一条）** | **宽边距 + 格间留白足 + header 区上方留空**：照片网格只占画面**中部约 50-60%**，四周和顶部都是大片干净奶油底，整体 calm / airy，宁空勿满 | `generous negative space, lots of breathing room, uncluttered, airy, wide calm margins, the photo grid occupies only the middle ~55% of the frame, empty space above the header` |
| 2 | **背景 / 纸底** | 奶油 / 灰白干净纯色 `#F1EEE7`，**平、匀、无纹理无渐变无发光**，留白处即这块底色本身 | `clean flat cream / off-white background #F1EEE7, perfectly even, no texture, no gradient, no glow` |
| 3 | **极简 header（灵魂第二条）** | 顶部一行：**粗体无衬线品牌名** —— 一条**细水平连接线** —— **品类 / 副标题词**，三者一行排开，极简克制，字距舒展 | `minimal header row at top: a bold sans-serif brand name — a thin hairline horizontal connector line — a category / subtitle word, all on one line, lots of letter spacing, very restrained` |
| 4 | **宝丽来照片网格（灵魂第三条）** | **2×3（或 3×2）整齐对齐**的宝丽来照片，每张有**一致的白色厚边框**、轻微等大，网格**精准对齐、间距均匀**，像 contact-sheet | `a neatly aligned grid of 2 by 3 polaroid-style photos, each with a consistent thick white border, evenly spaced and precisely aligned like a contact sheet` |
| 5 | **小图钉（细节锚点）** | 每张宝丽来用**一枚小图钉**别在顶端，图钉小、低调、统一，制造「贴在 moodboard 上但很整齐」的轻物理感 | `each polaroid pinned at the top with a single small subtle thumbtack / push pin, tiny and tidy` |
| 6 | **照片基底 + 低饱和统一调** | 格内是**真实感产品 / 生活照**（非插画非矢量），整组**低饱和、统一冷静色调**，像同一台相机同一卷胶片拍的，柔光、无浓艳 | `real photographic product / lifestyle shots inside the frames (photographic, not illustration), all desaturated and color-matched to one calm muted palette, soft even light` |
| 7 | **可选手写体文字格** | 网格中**可有一格不放照片，改放一句手写体短语**（如品牌态度词），手写字小而轻，留白多，与照片格同尺寸对齐 | `optionally one grid cell holds NOT a photo but a short handwritten phrase in light casual script, same cell size, plenty of space around the words` |
| 8 | **光影 / 整体** | 整体**平、净、editorial**：极淡的照片落影制造一点点贴纸厚度，**无 3D、无重投影、无浓阴影、无花哨装饰** | `flat clean editorial layout, only a very faint soft shadow under each polaroid for slight depth, no 3D, no heavy shadows, no decorative clutter` |
| 9 | **比例** | 默认 `3:4` 竖版（lookbook 内页 / 电商情绪页） | `3:4 vertical lookbook page` |

> 一眼自检：把图缩成拇指大，**仍像「一本极简选品册摊开的内页」**——上方一行细 header + 下方一组对齐宝丽来 + 四周大片奶油留白三件套齐全 = 对。看起来塞满、重叠、做旧、浓艳 = 错。

---

## 配色

冷静、低饱和、近无彩。底是奶油灰白，照片统一压成柔和muted调，文字近黑细体，阴影极淡。**不堆色、不上高饱和。**

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **纸底 / 大留白** | 奶油灰白 / Cream Off-white | `#F1EEE7` | 全图底色，所有留白、边距、header 上方空区 |
| **宝丽来白边** | 近白 / Polaroid White | `#FBFAF6` | 每张照片的厚边框，比底色略亮、干净 |
| **照片内容（统一调）** | 低饱和柔和色 / Muted Palette | 以 `#C9C2B4` `#A9B0A8` `#D8CFC2` 为锚的灰调（暖灰 / 雾绿 / 米驼） | 格内产品 / 生活照整体压到这组 muted 区间，不出现高饱和原色 |
| **字 / header / 手写** | 近黑 / Near Black | `#2B2A28` | 品牌名、品类词、细连接线、手写体短语 |
| **细线 / 图钉 / 落影** | 极淡灰 / Faint Grey | `#D6D1C7` | header 连接线、小图钉、宝丽来下的极淡阴影 |

铁律：
- **照片统一调**：6 格不能各拍各的色，要像同一卷胶片——整组压到同一组 muted 灰调，**任何一格冒高饱和都算破功**。
- **文字一律近黑细 / 中粗**，不要彩色字、不要描边字、不要发光字。
- **阴影只做「一点点厚度」**，不是戏剧光影；浓重投影直接出戏。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **塞满 / 重叠**：照片铺满整个画面、格子贴边、留白被吃光、宝丽来互相重叠歪斜堆叠——这撞 `moodboard-scrapbook`（拼贴墙）的脸，本风格是**整齐对齐的 contact-sheet**，必须留白、必须对齐
- ❌ **做旧 / 拼贴质感**：牛皮纸底 / 胶带 / 撕纸边 / 咖啡渍 / 杂乱叠层 / 手账贴纸感（这是 `moodboard-scrapbook` / `mixed-media-collage` 的活，别撞）
- ❌ **手绘 / 线稿**：白底铅笔手绘草图（撞 `keke-sketch`）、单线条勾勒（撞 `editorial-line`）、水彩晕染（撞 `painterly`）、吉卜力厚涂动画感（撞 `ghibli`）——本风格格内是**真实照片**，不是任何插画
- ❌ **高饱和 / 花哨**：浓艳原色、霓虹、糖果色、彩色渐变背景、多色文字、装饰花纹、emoji、贴纸图案
- ❌ **背景**：纯白 / 发光白 / 渐变 / 暗色科技底 / 任何有纹理或肌理的底（必须是平匀奶油纯色）
- ❌ **光影**：3D 立体 / 重投影 / 戏剧打光 / 玻璃拟态 / 金属反光（只许极淡一点点贴纸落影）
- ❌ **header 失控**：品牌名做成巨型广告大字、加副标题一大段、塞 slogan / 价格 / 卖点堆料——header 必须只有「粗体名 + 细线 + 一个品类词」
- ❌ **标注**：把字做成浮在上层的清晰数码字幕去解释画面；写概念词（「赋能 / 闭环 / 提质增效」）；文字超过 header + 1 个手写格的量

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。英文写画面主体 + 写死 DNA 关键词；中文只用于 header 的品牌名/品类词 + 可选 1 个手写格短语。
> 有中文/英文文字 → 走 `gpt`（gpt-image-2，文字最稳）；纯画面无字 → 可切 `gemini`。

```
Minimal lookbook / contact-sheet page, {{RATIO}} aspect ratio, on a clean flat
cream / off-white background #F1EEE7 — perfectly even, NO texture, no gradient,
no glow. Editorial, restrained, calm.

🌬️ NEGATIVE SPACE — HARD CONSTRAINT: generous negative space, lots of breathing
room, uncluttered, airy, wide calm margins; the photo grid occupies ONLY the
middle ~55% of the frame, with clearly empty cream space above the header and
around all edges. Spacious, never crowded.

HEADER (top): a minimal one-line header — bold sans-serif brand name
{{BRAND}} — a thin faint hairline horizontal connector line — the category word
{{CATEGORY}}, all on a single line with wide relaxed letter spacing, near-black
#2B2A28 type, very restrained, plenty of empty cream space above it.

GRID: below the header, a neatly aligned grid of {{GRID}} polaroid-style photos,
each with a consistent thick clean white border #FBFAF6, evenly spaced and
PRECISELY aligned like a contact sheet, each polaroid pinned at the top with a
single small subtle faint-grey thumbtack. {{TEXT_CELL_CLAUSE}}

PHOTOS: inside the frames are real photographic {{SUBJECT}} shots (photographic,
NOT illustration, not vector), all desaturated and color-matched to ONE calm
muted palette (warm greys, soft fog-green, oat / muted taupe around #C9C2B4
#A9B0A8 #D8CFC2), soft even light, no high-saturation color anywhere.

LIGHTING / FINISH: flat clean editorial layout, only a very faint soft shadow
under each polaroid for a hint of sticker-thickness, no 3D, no heavy shadows,
no decorative clutter.

Mood: a calm minimal cross-border brand selection lookbook inner page; aligned,
quiet, premium-quiet, breathing.
Avoid: filled-up overlapping collage / scrapbook / moodboard wall, kraft paper
or distressed / taped / torn aesthetic, hand-drawn sketch, single-line
illustration, watercolor, ghibli painterly, high saturation or neon, multi-color
or outlined text, white or glowing or textured background, 3D / heavy shadows,
giant ad headline, price / slogan clutter.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `3:4`（默认 lookbook 内页）/ `4:5`（电商情绪页）/ `1:1`（合集封面） |
| `{{BRAND}}` | header 的粗体品牌名 / 系列名（用户给的真实名，未给则用概括占位如 `"NEW IN"`，不杜撰真品牌） |
| `{{CATEGORY}}` | 细线右侧的品类 / 副标题词（如 `"OUTDOOR"` `"户外新品"` `"3C 配件"`） |
| `{{GRID}}` | `2 by 3`（默认 6 格）/ `3 by 2` / `3 by 3`（够用就好，别贪多挤掉留白）|
| `{{TEXT_CELL_CLAUSE}}` | 要放手写格时填：`One of the grid cells holds NOT a photo but a short handwritten phrase {{HANDWRITE}} in light casual near-black script, same cell size, lots of space around the words.`；纯照片网格则留空 |
| `{{HANDWRITE}}` | 手写格的一句短语（2-8 字态度词，如 `"minimal calm"` `"慢慢挑"`）|
| `{{SUBJECT}}` | 格内拍的对象（如 `minimal outdoor gear / camping accessories` `minimal 3C accessories`），低饱和统一调 |

---

## 示例提示词（主题：跨境出海新品 lookbook —— 极简户外 / 3C 配件合集）

> 认知锚点：**这是一本「会挑货的品牌」的极简上新内页——不喊不堆，靠对齐的照片网格和大片留白，让人觉得「这家有审美、东西值得看」。**
> 构图：上方 `NEW IN —— OUTDOOR` 极简 header；下方 2×3 网格 = 5 张低饱和户外 / 3C 产品宝丽来（水壶、折叠椅、充电配件、帐篷一角、便携灯）+ 1 格手写「minimal calm」；四周大片奶油留白，每张小图钉别住。
> 一行 header + 1 手写格（共 ≤ 该风格文字上限）。可直接喂 `render.js`（`--backend gpt --aspect 4:3`）。

```
Minimal lookbook / contact-sheet page, 3:4 aspect ratio, on a clean flat cream /
off-white background #F1EEE7 — perfectly even, NO texture, no gradient, no glow.
Editorial, restrained, calm.

🌬️ NEGATIVE SPACE — HARD CONSTRAINT: generous negative space, lots of breathing
room, uncluttered, airy, wide calm margins; the photo grid occupies ONLY the
middle ~55% of the frame, with clearly empty cream space above the header and
around all edges. Spacious, never crowded.

HEADER (top): a minimal one-line header — bold sans-serif brand name "NEW IN" —
a thin faint hairline horizontal connector line — the category word "OUTDOOR",
all on a single line with wide relaxed letter spacing, near-black #2B2A28 type,
very restrained, plenty of empty cream space above it.

GRID: below the header, a neatly aligned grid of 2 by 3 polaroid-style photos,
each with a consistent thick clean white border #FBFAF6, evenly spaced and
PRECISELY aligned like a contact sheet, each polaroid pinned at the top with a
single small subtle faint-grey thumbtack. One of the grid cells holds NOT a
photo but a short handwritten phrase "minimal calm" in light casual near-black
script, same cell size, lots of space around the words.

PHOTOS: inside the other five frames are real photographic minimal outdoor /
camping-and-3C-accessory shots — an insulated water bottle, a folded camping
chair, a small portable charger and cable, a corner of a tent, a compact lantern
— photographic, NOT illustration, not vector, all desaturated and color-matched
to ONE calm muted palette (warm greys, soft fog-green, oat / muted taupe around
#C9C2B4 #A9B0A8 #D8CFC2), soft even light, no high-saturation color anywhere.

LIGHTING / FINISH: flat clean editorial layout, only a very faint soft shadow
under each polaroid for a hint of sticker-thickness, no 3D, no heavy shadows,
no decorative clutter.

Mood: a calm minimal cross-border brand selection lookbook inner page; aligned,
quiet, premium-quiet, breathing.
Avoid: filled-up overlapping collage / scrapbook / moodboard wall, kraft paper
or distressed / taped / torn aesthetic, hand-drawn sketch, single-line
illustration, watercolor, ghibli painterly, high saturation or neon, multi-color
or outlined text, white or glowing or textured background, 3D / heavy shadows,
giant ad headline, price / slogan clutter.
```
