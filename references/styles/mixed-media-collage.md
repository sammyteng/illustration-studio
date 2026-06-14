---
slug: mixed-media-collage
name_cn: 混合媒介拼贴
name_en: Collage / Mixed Media
one_liner: 实拍照片+手绘+剪报+材质硬拼在一起，层层叠叠刻意留剪裁毛边，触感强、有惊喜。
channel: 大促 campaign 主视觉 / 概念头图 / 杂志风专题封面 / 增长复盘头图 / scrapbook 风栏目
has_text: true
default_backend: gpt          # 有字 → gpt-image-2（中文标注不乱码）；纯画面无字才退 gemini
default_ratio: "4:5"
---

# 混合媒介拼贴 · Collage / Mixed Media

> 通用方法论（认知锚点 / 处境五问 / 构图模式 / 原创隐喻 / 质检双闸 / 渲染兜底）见
> [`../../../_illustration-engine/ENGINE.md`](../../../_illustration-engine/ENGINE.md)。
> 本文件只写这套风格「长什么样、用什么色、什么绝对不能出现、提示词怎么拼」。

**一句话气质**：把照片、矢量插画、剪纸、手写注记、胶带、做旧材质硬拼到一个画面里——层层叠叠、刻意留撕纸毛边和剪裁硬切口，元素之间故意错位、比例不协调制造超现实并置。带杂志剪报和 scrapbook 的编辑叙事感，触感和惊喜感强。剪贴的不完美 = 手工真实，对冲数字疲劳；层叠的纸面又天然好搭文字。

---

## 视觉 DNA

> 以下 6 条是**硬性必含项**，每条提示词缺任一 = Gate 1 不过。具体到能复现。

| # | 必含项 | 具体要求（写进提示词） |
|---|---|---|
| 1 | **做旧暖底 + 拼贴台面** | 背景是一张**做旧暖纸 / 牛皮纸 / 微泛黄旧纸** `#EFE6D3`，**带可见纸纤维纹理、轻微污渍、老化斑点**。整张图像「摊在桌上的拼贴台」，不是纯色背景。⚠️ 与「暖系马克笔风」的关键区分：那边是柔边手绘**画**在纸上；这边是**多种实体材质剪下来叠贴**上去。 |
| 2 | **多材质混搭（≥3 种）** | 同一画面必须并置**至少 3 种异质材质**：① 实拍照片碎片（保留照片原色与真实质感）② 手绘 / 矢量插画块 ③ 剪报 / 报纸 / 杂志文字条（cut-out newsprint）。可再加：剪纸色块、手写记号笔注记、票根 / 邮票 / 标签贴纸。 |
| 3 | **刻意毛边与硬切口** | 每个拼贴元素的边缘**必须可见且刻意**：撕纸的**毛茸茸纤维毛边（torn ragged deckle edge）** 与剪刀的**硬直切口（hard scissor cut）** 混用。**不要**干净的矢量描边、不要羽化柔边。 |
| 4 | **层叠 + 投影 + 错位** | 元素**层层叠压**，上层纸投下**真实软投影**（drop shadow）制造物理厚度；元素之间**故意错位、轻微旋转（±3–12°）、比例不协调**（小物件放超大 / 大物件压角），制造 surreal、scrapbook 的并置感。可见**胶带 / 订书钉 / 回形针 / 别针**把纸片"固定"在台面上。 |
| 5 | **撞色剪报块 + 照片原色** | 在做旧暖底上铺**高饱和撞色剪纸块**做信息层与视觉节奏（见配色）；**实拍照片碎片保留原色不调色**，靠它与撞色块的反差制造惊喜。叠纸边缘的软投影统一做层次。 |
| 6 | **杂志 / scrapbook 编辑感 + 比例** | 整体读起来像一页**手工杂志拼贴 / 剪贴簿**：有主图、有撕下来的标题字条、有手写批注箭头圈画。默认 **4:5 竖版**（campaign / 头图）；横头图可 16:9。比例写成显式 `{{RATIO}}` 变量。 |

---

## 配色

> 逻辑：**做旧暖底打底** → **高饱和剪报色块撞色** → **实拍照片保留原色** → **叠纸软投影统一做层次**。
> 一张图：暖底 1 个 + 撞色块挑 2–3 个（要撞、要跳）+ 1 个强调色钉死视觉焦点。

| 角色 | 颜色 | HEX | 用途 |
|---|---|---|---|
| **做旧暖底（主）** | 牛皮做旧纸 | `#EFE6D3` | 拼贴台面底色（必）。更深可用 `#E3D5B8`，更浅可用 `#F5EEDD` |
| **撞色剪报块 A** | 朱红 / 番茄红 | `#E63A2E` | 主撞色块 / 标题字条底 / 最跳的剪纸 |
| **撞色剪报块 B** | 钴蓝 | `#2D5BFF` | 第二撞色块 / 与红互补制造张力 |
| **撞色剪报块 C** | 芥末金黄 | `#F2B61E` | 暖呼应 / 高光块 / 票根贴纸 |
| **辅助** | 旧报灰白 | `#D8D2C4` | 剪报文字条底 / 中性透气块（压住别让全图都撞色）|
| **辅助** | 鼠尾草绿 | `#8FA67E` | 喘息色 / 植物剪影 / 平衡撞色 |
| **强调（钉焦点，挑 1）** | 荧光橙 **或** 荧光粉 | `#FF6A00` / `#FF2E88` | 只钉**一个**视觉焦点：手写圈画 / 高亮记号 / 主箭头。不抢主体 |
| **勾线 / 手写字** | 炭黑墨 | `#1A1A1A` | 手写批注、箭头、报纸黑字（这套**允许接近纯黑**，因为是印刷 / 墨水真实感）|

> 撞色是这套风格的命门：暖底负责"旧 / 暖 / 手工"，撞色块负责"跳 / 现代 / 信息层"。两者反差越对越好看。照片碎片**不要**调成统一滤镜色，保留原色才有惊喜感。

---

## 禁忌（命中任一即 Gate 1 不过）

- ❌ **干净矢量 / 柔边羽化**：所有边缘必须是撕 / 剪的物理边，不能是平滑矢量描边或高斯羽化。
- ❌ **纯色 / 渐变背景**：背景必须是做旧暖纸台面，不许纯白、纯色块、科技渐变。
- ❌ **单一材质**：只有插画、或只有照片、或只有色块——少于 3 种材质即不合格。
- ❌ **元素摆得太正 / 太对齐 / 太整齐**：拼贴的灵魂是错位与故意的不协调，规整网格 = PPT 味。
- ❌ **撞色变脏 / 全图撒色**：撞色块要纯要跳，但只占信息层；不要每块都撞导致糊成一团。
- ❌ **过度 3D 渲染 / 写实 CGI 厚塑**：要的是"纸的物理厚度 + 软投影"，不是 3D 建模光泽。
- ❌ **赛博 / 霓虹 / 故障艺术（glitch）** 冒充拼贴——这是数字味，与"手工真实"相反。
- ❌ 在图上写「Workflow / 拼贴风格 / 系统架构」这类**类型标题**（标注只能是真实语境短词）。
- ❌ 未授权真人脸 / 品牌 Logo / 隐私信息当照片碎片（事实锚定见引擎第 5 节）。

---

## 提示词模板

> 英文写画面主体，中文短标注原样放进 `{{LABELS}}`（gpt-image-2 能直接渲染中文字）。
> `{{SUBJECT}}` / `{{COMPOSITION}}` / `{{LABELS}}` / `{{RATIO}}` 是显式变量，出图前替换成真值。
> DNA 关键词已写死在模板里，**不要删**。

### 变量占位

| 变量 | 默认值 | 说明 |
|---|---|---|
| `{{SUBJECT}}` | — | 本张主体（campaign 主视觉 / 多渠道拼图 / 增长概念…）|
| `{{COMPOSITION}}` | `concept-metaphor` | 构图模式（concept-metaphor / before-after / map-route…）|
| `{{ACCENT}}` | 荧光橙 `#FF6A00` 或荧光粉 `#FF2E88` | 钉死单一焦点的强调色 |
| `{{LABELS}}` | — | ≤5 个中文短标注（杂志剪报感，短而真实）|
| `{{RATIO}}` | `4:5` | 渠道比例；横头图 `16:9` |

### 模板骨架

```
A handmade mixed-media collage illustration, scrapbook / cut-and-paste magazine
aesthetic — like physical paper scraps glued onto a desk, NOT a digital flat design.

Subject: {{SUBJECT}} — single clear concept, one idea, surreal scale juxtaposition.
Composition: {{COMPOSITION}}, layered scraps with deliberate misalignment, main
subject under ~60% of frame, breathing room around it.

Background / surface: an aged warm kraft / yellowed vintage paper desktop (#EFE6D3),
with visible paper fibers, faint stains and aging spots — the whole image reads as
a collage laid out on a table, never a flat color background.

Materials (MUST mix at least 3 heterogeneous textures): real photographic
cut-out fragments (keep their original photo colors, untouched), hand-drawn / vector
illustration blocks, and cut newspaper / magazine text strips. Optionally add cut-paper
color shapes, hand-written marker notes, stamps / tickets / label stickers.

Edges: every scrap has a DELIBERATE, visible edge — mix torn ragged deckle fibers
with hard straight scissor cuts. NO clean vector strokes, NO feathered soft edges.

Layering: scraps overlap and stack, upper paper casts a real soft drop shadow for
physical thickness; elements are intentionally rotated (±3–12°), off-register and
mismatched in scale (a tiny object blown up huge / a big one pinned in a corner) for a
surreal scrapbook juxtaposition; visible tape, staples, paper clips or push pins
"fixing" the scraps to the surface.

Color: aged warm kraft base (#EFE6D3); high-saturation clashing cut-paper blocks —
vermilion red #E63A2E, cobalt blue #2D5BFF, mustard gold #F2B61E — for the information
layer and visual rhythm; newsprint off-gray #D8D2C4 and sage green #8FA67E to calm it;
the photo fragments KEEP their original colors for contrast and surprise; ONE accent
{{ACCENT}} pinning a single focal point (a hand-drawn circle / highlight / main arrow);
black ink #1A1A1A for hand-written notes, arrows and newsprint type.

Hand-written / cut-out short labels (max 5, magazine-clipping feel, tiny and legible,
Chinese): {{LABELS}}

Aspect ratio {{RATIO}}. Tactile, surprising, editorial scrapbook feel — imperfection
reads as handmade authenticity.

Avoid: clean vector / feathered soft edges, flat solid or gradient background, single
material only, everything aligned too neatly (PPT look), muddy oversaturated color,
heavy 3D / glossy CGI render, cyber / neon / glitch faking collage, type-category
titles on the image, unauthorized real faces / brand logos.
```

> 拼词提醒：英文主体在前，中文短标签原样进 `{{LABELS}}`。一张图只用 1 个 `{{ACCENT}}` 钉焦点；
> 若一句话讲不清主体 = 锚点不单一，回 shot list 重切。

---

## 示例提示词

> **主题**：跨境大促 campaign 主视觉 / 销售增长「多渠道拼图」概念头图
> **锚点类型**：物理隐喻 + 结构（多个分散的销售渠道，被手工拼成一张完整的增长版图）
> **构图**：concept-metaphor（一张被拼起来的"销售增长地图"，缺角处正被一只手按上最后一块渠道拼图）
> **强调色**：抽**荧光橙 `#FF6A00`** 钉"最后一块拼图"焦点 + 上扬的增长箭头。
> **标注**：5 个，踩满上限。

```
A handmade mixed-media collage illustration, scrapbook / cut-and-paste magazine
aesthetic — like physical paper scraps glued onto a desk, NOT a digital flat design.

Subject: a cross-border sales-growth "multi-channel jigsaw" hero image — a large
incomplete jigsaw map of a growth chart is assembled from mismatched scraps, each
puzzle piece a different sales channel: one piece is a real photographic fragment of a
shopping cart, one a cut-out of a marketplace storefront, one a torn newspaper ad strip,
one a hand-drawn email envelope, one a cut-paper social icon; a hand-drawn arm reaches in
to press the LAST missing puzzle piece into the gap, and from the completed map a bold
hand-cut upward arrow climbs out of the top-right corner. Single clear concept, surreal
scale juxtaposition (the final piece is oversized).
Composition: concept-metaphor, layered scraps with deliberate misalignment, the jigsaw
map centered but tilted, the upward arrow breaking the frame; main subject under ~60% of
frame, breathing room around it.

Background / surface: an aged warm kraft / yellowed vintage paper desktop (#EFE6D3) with
visible paper fibers, faint coffee-ring stains and aging spots — the whole image reads as
a collage laid out on a table, never a flat color background.

Materials mixed (4+ textures): real photographic cut-out fragments (shopping cart, a
storefront — kept in original photo colors, untouched), hand-drawn vector blocks (the
envelope, the reaching arm, the arrow), cut newspaper / magazine text strips along the
edges, plus cut-paper color blocks and a couple of stamp / ticket stickers.

Edges: every scrap has a deliberate visible edge — torn ragged deckle fibers on the
newspaper strips and kraft pieces mixed with hard straight scissor cuts on the color
blocks. No clean vector strokes, no feathered soft edges.

Layering: scraps overlap and stack, upper paper casts a real soft drop shadow for physical
thickness; pieces are intentionally rotated ±3–12°, off-register and mismatched in scale;
visible strips of matte tape, two push pins and a paper clip "fix" the scraps to the desk.

Color: aged warm kraft base #EFE6D3; high-saturation clashing cut-paper blocks — vermilion
red #E63A2E, cobalt blue #2D5BFF, mustard gold #F2B61E — for the channel pieces and visual
rhythm; newsprint off-gray #D8D2C4 and sage green #8FA67E to calm it; the photo fragments
keep their original colors for surprise; ONE accent fluorescent orange #FF6A00 pinning the
LAST puzzle piece and the breakout growth arrow; black ink #1A1A1A for hand-written notes
and arrows.

Hand-written / cut-out short labels (max 5, magazine-clipping feel, tiny and legible,
Chinese): "大促来了", "多渠道", "最后一块", "增长", "拼齐了".

Aspect ratio 4:5. Tactile, surprising, editorial scrapbook feel — imperfection reads as
handmade authenticity.

Avoid: clean vector / feathered soft edges, flat solid or gradient background, single
material only, everything aligned too neatly (PPT look), muddy oversaturated color, heavy
3D / glossy CGI render, cyber / neon / glitch faking collage, type-category titles on the
image, unauthorized real faces / brand logos.
```

（标注 5 个踩满上限；单一强调色荧光橙只钉"最后一块拼图"+ 增长箭头；做旧暖底 + 红/蓝/金三撞色 + 照片碎片保留原色；比例 4:5——有字默认走 gpt-image-2。可直接喂给 `render.js`：
`node "$HOME/shared-skills/_illustration-engine/render.js" --has-text true --aspect 3:4 --out /tmp/illus --prompt "<上面整段>"`，4:5 取最接近的竖版 3:4。）
