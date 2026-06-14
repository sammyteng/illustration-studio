---
slug: painterly-watercolor-gouache
name_cn: 新传统水彩水粉
name_en: Neo-Traditional Painterly
channel: 深度长文 / 编辑插画 / 高端品牌内容 / 情绪叙事（创作者·打工人处境）
has_text: false
default_backend: nano        # 无文字 → Gemini Nano Banana Pro（线条/质感更精细）；若加中文标注则切 gpt-image-2
default_ratio: "4:3"
one_liner: 水彩、水粉、彩铅等传统媒介手绘后扫描，保留笔触和纸纹，绘画感浓、情绪温度高。
---

# 视觉 DNA · 新传统水彩水粉（Neo-Traditional Painterly）

> 通用方法论（认知锚点 / 处境五问 / 构图 / 隐喻 / 渲染 / 质检）见 [`../../../_illustration-engine/ENGINE.md`](../../../_illustration-engine/ENGINE.md)。
> 本文件只写「这套风格长什么样、用什么色、什么绝对不能出现、怎么写提示词」。
> 角色设定：**无固定主角、不绑 IP**。靠真实物件 + 通用无名人物的处境动作说话。
> 一句话气质：像一张真水彩 / 水粉原作被扫描进杂志内文——湿笔晕开、厚涂留痕、纸纤维透出来，温润、有人味、有呼吸感。

---

## 一、视觉 DNA（必含项 · 缺一条即 Gate 1 不过）

这套风格的命门是「让人信这是**真实传统媒介手绘后扫描**的，不是 AI 直出 / 不是矢量 / 不是数字厚涂」。每条提示词必须同时写死下面 6 项：

| # | 维度 | 硬性必含（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **背景 / 纸** | **冷压水彩纸**底，明显**纸张纤维纹理 + 颗粒透出**；奶油白 / 暖米白，**绝不是死白屏幕白**。可有极轻的扫描偏色、纸边毛边、一两处自然水渍。 | `scanned watercolour on cold-press cotton rag paper, visible paper grain and fibre texture, cream off-white, faint paper deckle edge` |
| 2 | **媒介质感（灵魂）** | 三件套同框：① **水彩湿染** wet-on-wet（颜色边缘自然晕开、有水痕回流 backruns / blooms、透明叠色）② **水粉厚涂** gouache（不透明、可见笔刷拖痕和厚薄、哑光质感）③ **彩铅排线 / 墨线收边**（关键轮廓用墨线或彩铅勾，线有手抖、有起收笔）。 | `loose watercolour washes wet-on-wet with blooms and granulation, opaque gouache strokes with visible brush drag, coloured-pencil hatching, ink contour lines hand-drawn` |
| 3 | **边缘** | **笔刷自然毛糙边**——湿边晕开、干笔飞白、颜色不灌满轮廓（有的地方溢出、有的地方留白）。**绝不是矢量硬边 / flat icon 切边**。 | `soft feathered brush edges, paint bleeding past the outline in places, dry-brush ragged edges, NOT vector hard edges` |
| 4 | **颜色质地** | 颜色**手工不均匀**：同一块色有深浅过渡、颗粒沉淀（granulation）、半透明叠层能看见下层。整体**温润不艳**，像调色盘真颜料调出来的脏一点的复合色，不是数字纯色。 | `hand-mixed muted earthy colours, uneven pigment with granulation, semi-transparent layered glazes, slightly desaturated, never flat digital fills` |
| 5 | **光影 / 体积** | 体积靠**水彩叠色 + 一两笔水粉提亮**做出来，不靠数字渐变/投影。光是柔的、漫反射的、像自然光下的纸面。阴影是**透明叠色的暖灰**，不是黑色块、不是 drop-shadow。 | `soft diffuse light, volume built from layered washes and a few gouache highlights, transparent warm-grey shadows, no digital gradient, no drop shadow` |
| 6 | **构图 / 留白** | 大量纸面留白透气，主体 ≤ 画面约 **60%**；一个清晰的认知锚点物件 / 处境，不堆元素。气质是**编辑插画（editorial spot illustration）**的克制，不是满构图绘本。 | `generous paper negative space, single clear focal subject under ~60% of frame, editorial spot-illustration restraint` |

---

## 二、配色（自然柔和绘画色 · 主色 + 辅助 + 强调）

> 整体调性：赭石、暮蓝、苔绿、陶土、奶油白，**半透明叠色，温润不艳**。一张图主色调 1 个，辅助 1-2 个，强调只点一处。

| 角色 | 颜色 | HEX | 用途 |
|---|---|---|---|
| **底色 / 纸** | 奶油白 | `#F4EBDA` | 水彩纸底色（必），所有留白都是这个暖白，不是 `#FFFFFF` |
| **主色 A** | 暮蓝 | `#5B6E7C` | 主情绪基调 / 大面积湿染天空·墙·阴影区，沉静偏冷的灰蓝 |
| **主色 B** | 苔绿 | `#7A8C5E` | 自然 / 生长 / 喘息 / 植物与户外场景的主调 |
| **辅助** | 陶土 | `#B5694C` | 暖肤 / 木头 / 砖墙 / 让画面有体温的暖块 |
| **辅助** | 赭石 | `#A9803E` | 旧物 / 时间 / 沉淀 / 暖光，与暮蓝形成冷暖呼应 |
| **强调（点一处）** | 锈红 | `#9C3D2E` | **唯一高浓度色**，只点在认知锚点上（一个被拽的物件、一处血点般的关键）——大面积禁用 |
| **勾线** | 暖墨 / 深褐 | `#3E342B` | 墨线 / 彩铅轮廓，**不要纯黑 `#000`**，用偏暖的深褐更像真墨 |

配色铁律：
- 强调色 `#9C3D2E` 全图**只点一处**，做语义不做装饰；它是「这张图想说的那句话」的视觉落点。
- 所有色都是**半透明叠出来的复合色**，不要数字纯色平铺。允许并鼓励冷暖叠层（暮蓝压在陶土上、苔绿透出赭石）。
- 不确定时整张走**暮蓝 + 奶油白 + 一点陶土**的安全三色，再点一处锈红。

---

## 三、禁忌（出现任意一条即不合格）

- ❌ **矢量硬边 / flat icon / clean digital line**——这是整套风格的头号死敌，颜色灌满轮廓、切边干净 = 直接废。
- ❌ **数字感**：纯色平铺、CSS 渐变、drop-shadow 投影、塑料高光、发光、霓虹、赛博。
- ❌ **死白屏幕白底 `#FFFFFF`**（必须奶油水彩纸）；也不要做旧成褐色复古海报。
- ❌ **3D 渲染 / 写实照片 / 摄影质感 / Octane**。
- ❌ **卡通 / Q 版 / 可爱贴纸 / 吉祥物 / 表情包 / 绘本厚卡通**（暖度来自笔触，不是来自卖萌）。
- ❌ **高饱和荧光艳色**、马卡龙糖果色、油腻厚重油画感（这是水彩水粉，不是油画）。
- ❌ **满构图**、把主题里所有名词都画进去的元素清单。
- ❌ 图上写「Workflow / 系统架构 / 常见坑」这类**类型标题 / 信息图模块框**。
- ❌ 排线乱成一团 / 把媒介质感堆到看不清主体（质感要服务隐喻，不是炫技）。

---

## 四、提示词模板（替换 `{{...}}` 占位 · 一次一张，不要拼图）

> 英文写画面主体（生图模型对英文媒介词响应最准），中文只在 `{{LABELS}}` 出现（本风格默认 `has_text:false`，多数图 0 标注）。
> **模板里写死了这套风格的 DNA 关键词，不要删。**

```
A hand-painted traditional-media editorial illustration, scanned from real
paper, {{RATIO}} aspect ratio.

SUBJECT: {{SUBJECT}} — one quiet focal scene that visualizes
"{{COGNITIVE_ANCHOR_ONE_LINE}}". {{COMPOSITION_NOTE}}

MEDIUM (this is the soul, keep all three): painted in loose WATERCOLOUR
wet-on-wet washes with visible blooms / backruns and pigment granulation,
combined with opaque GOUACHE strokes showing brush drag and matte body,
plus a few COLOURED-PENCIL hatchings and hand-drawn INK CONTOUR lines with
natural wobble and start/stop marks. Colours are hand-mixed, muted and
slightly desaturated, built from semi-transparent layered glazes so lower
layers show through; pigment is uneven, never a flat digital fill.

EDGES: soft feathered brush edges, paint bleeding past the outline in some
places and leaving dry-brush ragged gaps in others — absolutely NOT vector
hard edges, NOT clean flat icon shapes.

PAPER: the whole image sits on warm cream cold-press cotton-rag watercolour
paper {{PAPER_NOTE}}, with clearly visible paper grain and fibre texture,
faint deckle paper edge, gentle scan-like warmth. Never pure screen-white.

LIGHT: soft diffuse natural light; volume comes from layered washes and one
or two gouache highlights; shadows are transparent warm-grey glazes, no
digital gradient, no drop shadow.

COLOUR PALETTE: {{PALETTE}} — overall warm, painterly, low-saturation,
restrained. One single high-chroma accent of rust red #9C3D2E placed only on
{{ACCENT_TARGET}}; everywhere else stays muted.

COMPOSITION: generous paper negative space, the subject under ~60% of the
frame, editorial spot-illustration restraint, calm and emotionally warm.

LABELS: {{LABELS}}

MOOD: tender, human, breathing, high-end editorial — like an original
watercolour spot illustration printed inside a thoughtful long-form essay.

AVOID: vector art, flat icons, clean digital lines, filled-to-the-outline
shapes, CSS gradients, drop shadows, glossy highlights, glow, neon, cyber,
3D render, photoreal, cartoon, chibi, cute sticker, mascot, emoji, oily heavy
oil-paint, high-saturation fluorescent colours, busy cluttered composition,
type-label headers, infographic blocks.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `3:2`（默认长文）/ `16:9` / `4:5`（杂志开本竖版） |
| `{{SUBJECT}}` | 当前文章原创发明的**一个**隐喻 / 处境（真实物件 + 通用无名人物的物理动作：被拽、被压、被筛、被淹、缝、接、称） |
| `{{COGNITIVE_ANCHOR_ONE_LINE}}` | 这张图要让人 1 秒读懂的那句核心意思（处境 / 断言 / 状态转换） |
| `{{COMPOSITION_NOTE}}` | 视角与机位，如 `a slightly high three-quarter view, the figure small in a large quiet space` |
| `{{PAPER_NOTE}}` | 可空；或 `with one or two natural water stains near the edge` 增加真实感 |
| `{{PALETTE}}` | 例：`dusk slate-blue #5B6E7C as the dominant mood, cream #F4EBDA paper, a warm terracotta #B5694C block and ochre #A9803E glow for warmth` |
| `{{ACCENT_TARGET}}` | 在哪个物件上点锈红，如 `the one thread being pulled` / `the single unread dot` |
| `{{LABELS}}` | 默认 `no text at all, let the painting speak`；如确需中文标注（此时改走 gpt-image-2 后端）：`3–4 tiny hand-written Chinese captions "{{词1}}" "{{词2}}" in small brushy ink, like figure notes, never a big headline` |

---

## 五、示例提示词（完整可直接渲染 · 主题：内容创作者/打工人处境的情绪叙事）

主题：深度长文谈「内容创作者一个人扛起整条生产线，选题、素材、成稿、发布全压在一个人身上，时间被无限拉扯」——一个人困在堆成山的素材里、被一根根线往不同方向拽。
锚点类型：**用户处境**（"这不就是我吗"）。`has_text:false`，0 标注，让画面说话。后端：Gemini Nano Banana Pro（纯画面）。

> 下面这条可直接喂给 `render.js`（`--backend nano --aspect 4:3 --has-text false`）。

```
A hand-painted traditional-media editorial illustration, scanned from real
paper, 3:2 aspect ratio.

SUBJECT: a single small lone figure sitting on a low stool at the centre,
surrounded by a quiet rising tide of loose papers, notebooks and sticky
notes piling up like soft dunes; from the figure's body several thin threads
stretch outward to the four corners of the frame, each thread pulled taut by
an unseen weight, gently tugging the figure in different directions — one
quiet focal scene that visualizes "a solo content creator carries the whole
production line alone, pulled thin between picking topics, gathering material,
finishing drafts and publishing". A slightly high three-quarter view, the
figure small in a large quiet space.

MEDIUM (this is the soul, keep all three): painted in loose WATERCOLOUR
wet-on-wet washes with visible blooms / backruns and pigment granulation,
combined with opaque GOUACHE strokes showing brush drag and matte body,
plus a few COLOURED-PENCIL hatchings and hand-drawn INK CONTOUR lines with
natural wobble and start/stop marks. Colours are hand-mixed, muted and
slightly desaturated, built from semi-transparent layered glazes so lower
layers show through; pigment is uneven, never a flat digital fill.

EDGES: soft feathered brush edges, paint bleeding past the outline in some
places and leaving dry-brush ragged gaps in others — absolutely NOT vector
hard edges, NOT clean flat icon shapes.

PAPER: the whole image sits on warm cream cold-press cotton-rag watercolour
paper with one or two natural water stains near the edge, with clearly
visible paper grain and fibre texture, faint deckle paper edge, gentle
scan-like warmth. Never pure screen-white.

LIGHT: soft diffuse natural light; volume comes from layered washes and one
or two gouache highlights; shadows are transparent warm-grey glazes, no
digital gradient, no drop shadow.

COLOUR PALETTE: dusk slate-blue #5B6E7C as the dominant mood across the paper
dunes and shadows, cream #F4EBDA paper, a warm terracotta #B5694C block on
the figure for body heat and ochre #A9803E glow in one corner — overall warm,
painterly, low-saturation, restrained. One single high-chroma accent of rust
red #9C3D2E placed only on the one thread the figure is leaning hardest
against; everywhere else stays muted.

COMPOSITION: generous paper negative space, the subject under ~60% of the
frame, editorial spot-illustration restraint, calm and emotionally warm.

LABELS: no text at all, let the painting speak.

MOOD: tender, human, breathing, high-end editorial — like an original
watercolour spot illustration printed inside a thoughtful long-form essay.

AVOID: vector art, flat icons, clean digital lines, filled-to-the-outline
shapes, CSS gradients, drop shadows, glossy highlights, glow, neon, cyber,
3D render, photoreal, cartoon, chibi, cute sticker, mascot, emoji, oily heavy
oil-paint, high-saturation fluorescent colours, busy cluttered composition,
type-label headers, infographic blocks.
```
