---
slug: friendly-brand-cards
name_cn: 友好品牌卡片流
name_en: Friendly Brand Cards / Connected Flow
channel: 产品功能介绍图 / "我们能帮你做X" 营销图 / 跨境客服能力清单(友好版) / 品牌落地页主视觉
has_text: true
default_backend: gpt            # 有字 → gpt-image-2（粗体标题+卡片标签+CTA 文字最稳）；纯展示无字时才切 gemini
default_ratio: "4:3"
one_liner: 奶油底 + 粗体 type-led 大标题 + 一排圆角扁平小卡片，被一条细 accent 彩线串联，落到底部一个 accent 胶囊 CTA——干净、友好、有条理、文字主导的品牌营销图。
---

> 通用提炼 / 构图 / 渲染路径见 `_illustration-engine/engine.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像 The Knot 那类生活方式品牌落地页的头图——**奶油色干净底**上，一个**大号粗体黑标题**当主角，中间一排**宝丽来 / 圆角瓷砖感的小卡片**（每张一个简洁图标 + 一个标签词），被一条**细细的 accent 彩线**温柔地串成一条流，最后落到底部一个**圆角 accent 实心胶囊按钮**。整体克制、亲切、井井有条，**文字（标题 + 标签 + CTA）和图标共同承担信息**，不是纯插画。
> 用途：把「我们能帮你做这几件事」这类能力清单 / 功能卖点，做成一张让人 3 秒读懂、又显得友好不冰冷的品牌图。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **背景 / 底色** | **奶油 / 米白干净纯色** `#F4EFE6` 整面铺底，绝不渐变、绝不暗色、绝不科技底、绝不纸纤维粗粝肌理；可有极淡均匀的暖意，整体清爽通透、留白大 | `clean solid cream / off-white background #F4EFE6, calm and airy, generous negative space, never a gradient, never dark, never a tech UI` |
| 2 | **粗体 type-led 大标题（主角之一）** | **大号粗体黑色标题**，居中靠上，是视觉主角；**衬线 + 无衬线混排**（一两个词用粗衬线、其余无衬线，制造编辑感反差），字号大到占画面顶部一块；这是 type-led 排版，字本身就是设计 | `large bold black headline at top center as a hero element, mixing a bold serif word with clean sans-serif words, editorial type-led layout, the typography itself is the design` |
| 3 | **一排扁平小卡片（核心结构）** | 中部横排 **3-5 个圆角扁平小卡片**，宝丽来 / 圆角瓷砖（rounded tile）感，大小一致、间距均匀；**每张卡：1 个简洁线性 / 扁平图标 + 1 个短标签词**；卡面是**柔和粉彩色**（每张可不同的淡彩），**轻柔投影**让卡片微微浮起 | `a single horizontal row of 3 to 5 flat rounded cards, polaroid / rounded-tile feel, evenly spaced same size, each card holds ONE simple flat icon plus ONE short label, soft pastel card faces, gentle soft drop shadow lifting the cards` |
| 4 | **细 accent 彩线串联（灵魂）** | 一条**细的 accent 色线**把卡片 / 角标**串成一条流**，**圆角路由**（rounded corners、平滑转弯，不是直角折线），自然地穿过或绕过每张卡；**线两端各有一个小角标 icon**（小圆点 / 小箭头 / 小图标）收尾——这条线是「这些能力是连起来的」的隐喻 | `a single thin accent-colored connector line linking the cards in one continuous flow, rounded smooth routing with rounded corners, weaving past each card, with a small endpoint icon node at each end of the line` |
| 5 | **底部 accent 胶囊 CTA** | 画面底部一个**圆角 accent 色实心胶囊按钮**（pill / fully-rounded button），里面一个**行动词短句**白字；按钮是 accent 主色，干净、友好、明确召唤行动 | `at the bottom a solid accent-colored fully-rounded pill CTA button with a short white action phrase inside, clean and inviting` |
| 6 | **图标语言** | 所有图标统一**简洁扁平 / 细线性**，圆头、友好、一致粗细；不是写实、不是 3D、不是 emoji；每个图标只表达卡片标签那一个意思 | `consistent simple flat / thin-line friendly icons, rounded ends, uniform weight, one clear idea each, never realistic or 3D or emoji` |
| 7 | **形式 / 质感** | 整体**扁平矢量风**，干净利落、edges 清晰、布局对齐有秩序；**不是照片、不是 3D、不是拼贴、不是手绘潦草、不是孔版粗粝**；像精修过的品牌落地页 / 营销 banner | `flat clean vector illustration, crisp edges, orderly aligned layout, polished brand landing-page look, NOT a photo / 3D / collage / rough sketch / risograph` |
| 8 | **配色逻辑** | **奶油底 + 黑标题** 打底，**一个明快 accent 主色**贯穿（连接线 + CTA 用同一 accent，制造呼应），卡面用**几款柔和粉彩**点缀；accent 是唯一的「响色」，其余克制 | `cream base + black headline, ONE bright accent color carried through the connector line and the CTA pill, cards in a few soft pastels, accent is the only loud color` |
| 9 | **中文标注** | **3-6 处**：1 个粗体大标题（4-10 字）+ 3-5 个卡片标签词（2-6 字）+ 1 个 CTA 行动短句（4-8 字）；全部短、能读、来自真实语境 | `3 to 6 Chinese strings: one bold headline, 3 to 5 short card labels, one CTA action phrase` |
| 10 | **比例** | 默认 `3:4` 竖版（落地页头图 / 卡片营销图）| `3:4 vertical` |

> 一眼自检：缩成拇指大时，应能看出「上面一个大粗标题 + 中间一排彩色小卡 + 一条线串着 + 底下一个彩色按钮」四段式骨架，奶油底干净通透。看起来暗、挤、像截图、像照片、像手绘草稿 = 错。

---

## 配色

奶油底 + 黑标题打底，**一个明快 accent 主色**贯穿连接线与 CTA，卡面用几款**柔和粉彩**点缀。accent 是唯一响色，可按品牌情绪换（默认品红，可换暖黄）。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **底色** | 奶油 / 米白 | `#F4EFE6` | 整面背景，留白即底色本身 |
| **标题 / 文字** | 近黑墨 | `#1A1A1A` | 粗体大标题、卡片标签字 |
| **accent · 主响色（默认）** | 明快品红 / Magenta | `#EC4899` | 连接线 + CTA 胶囊 + 两端角标，全图唯一响色 |
| **accent · 可替换** | 暖黄 / Warm Yellow | `#FBBF24` | 想要更阳光友好时替换品红（同样只此一色贯穿） |
| **卡面 A · 柔粉** | Soft Pink | `#FBE3E8` | 卡片底色之一 |
| **卡面 B · 柔蓝** | Soft Blue | `#DCEAF6` | 卡片底色之一 |
| **卡面 C · 柔黄** | Soft Cream-Yellow | `#FBF0D9` | 卡片底色之一 |
| **卡面 D · 柔绿** | Soft Mint | `#DFEEE3` | 卡片底色之一 |
| **投影 / 描边** | 极淡暖灰 | `#E5DECF` | 卡片轻投影、可选 1px 细描边 |

铁律：
- **accent 只用 1 个**（品红或暖黄二选一），连接线 + CTA + 角标共用同一个，制造视觉呼应；不要连接线一色、CTA 另一色。
- 卡面是**柔和粉彩**（淡、奶油化），不是高饱和、不是荧光、不是企业商务蓝。
- **不许出现暗色 / 科技深底**；CTA 是唯一的实心彩块，且是 accent 色。
- 标题永远黑色，靠**字号 + 粗细 + 衬线/无衬线混排**出层次，不靠彩色文字。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **背景**：暗色 / 深色科技底 / 渐变 / 发光 / 照片底 / 粗粝纸纤维 / 杂乱纹理（必须奶油纯色干净底）
- ❌ **照片 / 3D / 拼贴**：真实照片、3D 渲染、写实质感、剪贴拼贴、立体卡片堆叠
- ❌ **手绘潦草**：草图线、抖动手绘线、铅笔感、孔版网点 / 错位（那是隔壁 risograph 皮肤）
- ❌ **科技 UI 截图**：仪表盘、真实软件界面截图、SaaS 控制台、代码、窗口 chrome
- ❌ **卡片堆太满**：超过 5 张卡、卡上塞多行字 / 多个图标、信息密度过载、留白被吃光
- ❌ **配色**：超过 1 个 accent 响色、高饱和荧光、企业商务蓝、暗色、卡面用纯色重彩而非柔彩
- ❌ **标题不够主角**：标题做成小字 / 普通正文字号 / 全无衬线无层次（必须 type-led 大粗标题、衬线无衬线混排）
- ❌ **连接线缺失或生硬**：没有那条 accent 串联线、或画成直角折线 / 粗黑线 / 多色线（必须细、accent 色、圆角平滑、两端有角标）
- ❌ **CTA 缺失或变样**：底部没有 accent 胶囊按钮、或做成方角 / 描边空心 / 非 accent 色
- ❌ **风格串味**：跨境 SaaS 科技蓝 accent 风 / 白底红橙蓝手绘批注 / 小红书暖系马克笔 / 极简单线社论 / 孔版印刷（这几套是隔壁皮肤，别撞）
- ❌ **标注**：写概念词（「赋能 / 闭环 / 提质增效」）；标签字过长成一句话；CTA 不是行动词

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。英文写画面主体 + 写死 DNA 关键词；中文只用于大标题 + 卡片标签 + CTA。
> 有中文标注（本风格 has_text=true 默认有）→ 走 `gpt`（gpt-image-2，粗体标题与标签文字最稳）；万一做纯展示无字版 → 才切 `gemini`。

```
Friendly brand marketing illustration, {{RATIO}} aspect ratio, on a clean solid
cream / off-white background #F4EFE6 — calm, airy, generous negative space,
NEVER a gradient, never dark, never a tech UI screenshot, never a photo. Flat
clean vector illustration with crisp edges and an orderly, polished brand
landing-page look (The Knot / lifestyle-brand vibe).

HERO HEADLINE (top center): {{HEADLINE}} — a LARGE bold black #1A1A1A headline
as a hero element, type-led editorial layout mixing one bold serif word with
clean sans-serif words, the typography itself is a main subject.

CARD ROW (middle): a single horizontal row of {{CARD_COUNT}} flat rounded cards,
polaroid / rounded-tile feel, all same size and evenly spaced, each lifted by a
gentle soft drop shadow. Each card holds exactly ONE simple flat friendly icon
(rounded ends, uniform thin-line weight) plus ONE short label underneath. The
cards depict, in order: {{CARDS}}. Card faces use soft pastels (soft pink
#FBE3E8, soft blue #DCEAF6, soft cream-yellow #FBF0D9, soft mint #DFEEE3),
calm and de-saturated.

CONNECTOR (soul element): a single THIN accent-colored connector line in
{{ACCENT_NAME}} {{ACCENT_HEX}} links all the cards in one continuous flow, with
rounded smooth routing and rounded corners (never sharp zig-zags), weaving past
each card, ending in a small icon node at each end — the visual metaphor that
these abilities are connected.

CTA (bottom): a solid {{ACCENT_NAME}} {{ACCENT_HEX}} fully-rounded pill button
with the short white action phrase {{CTA}} inside — clean and inviting.

COLOR RULE: cream base + black headline; ONLY ONE bright accent color
({{ACCENT_NAME}} {{ACCENT_HEX}}) carried through BOTH the connector line and the
CTA pill and the line end-nodes; cards in soft pastels; the accent is the single
loud color, everything else restrained. No second accent, no neon, no corporate
blue, no dark background.

Mood: friendly, tidy, clear, approachable brand page; the layout reads top to
bottom as headline → connected card row → CTA in three seconds.
Avoid: dark or tech background, gradient, photo / 3D / collage / rough hand
sketch / risograph dots, real software UI screenshots, more than 5 cards,
overcrowded cards, more than one accent color, neon or corporate-blue palette,
serif-less tiny headline, sharp zig-zag connector, square / outline-only CTA,
concept-word labels.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `3:4`（默认竖版头图）/ `1:1`（社群方图）/ `4:5` |
| `{{HEADLINE}}` | 大标题中文短句（4-10 字），写进引号，如 `the bold headline "AI 客服能帮你做什么"` |
| `{{CARD_COUNT}}` | `3`、`4` 或 `5`（别超 5）|
| `{{CARDS}}` | 逐张写「图标含义 + 中文标签」，如 `1) a magnifier-on-product icon labeled "售前选型", 2) a globe / speech-bubble icon labeled "多语言", 3) a ticket / checklist icon labeled "工单", 4) an upward-arrow icon labeled "提转化"` |
| `{{ACCENT_NAME}}` | `magenta`（默认）或 `warm yellow` |
| `{{ACCENT_HEX}}` | `#EC4899`（品红）或 `#FBBF24`（暖黄）|
| `{{CTA}}` | CTA 行动短句（4-8 字），写进引号，如 `"立即体验"` / `"预约演示"` |

---

## 示例提示词（主题：Shulex AI 客服能帮你做什么——售前选型 / 多语言 / 工单 / 转化 + CTA）

> 认知锚点：**Shulex AI 客服不是一个孤立功能，而是一条从「帮顾客选对产品」到「拉高成交」的连贯能力流——四张卡片被一条线串起来，落到一个明确的行动召唤。**
> 隐喻：一排宝丽来感的能力卡（放大镜选品 / 多语言对话气泡 / 工单清单 / 上扬转化箭头），被一条品红 accent 细线圆角串联，最后落到底部「立即体验」品红胶囊。
> 4 张卡 + 1 大标题 + 1 CTA = 6 处中文标注（达上限）。可直接喂 `render.js`（`--backend gpt --aspect 4:3`）。

```
Friendly brand marketing illustration, 3:4 aspect ratio, on a clean solid cream /
off-white background #F4EFE6 — calm, airy, generous negative space, NEVER a
gradient, never dark, never a tech UI screenshot, never a photo. Flat clean
vector illustration with crisp edges and an orderly, polished brand
landing-page look (The Knot / lifestyle-brand vibe).

HERO HEADLINE (top center): the bold headline "AI 客服能帮你做什么" — a LARGE
bold black #1A1A1A headline as a hero element, type-led editorial layout mixing
one bold serif word with clean sans-serif words, the typography itself is a main
subject.

CARD ROW (middle): a single horizontal row of 4 flat rounded cards, polaroid /
rounded-tile feel, all same size and evenly spaced, each lifted by a gentle soft
drop shadow. Each card holds exactly ONE simple flat friendly icon (rounded
ends, uniform thin-line weight) plus ONE short Chinese label underneath. The
cards depict, in order: 1) a magnifier hovering over a product box, labeled
"售前选型", 2) a speech bubble with a small globe / multiple language marks,
labeled "多语言", 3) a ticket / checklist clipboard icon, labeled "工单",
4) a rising upward arrow over a small cart, labeled "提转化". Card faces use
soft pastels (soft pink #FBE3E8, soft blue #DCEAF6, soft cream-yellow #FBF0D9,
soft mint #DFEEE3), calm and de-saturated.

CONNECTOR (soul element): a single THIN magenta #EC4899 connector line links all
four cards in one continuous flow, with rounded smooth routing and rounded
corners (never sharp zig-zags), weaving past each card, ending in a small round
icon node at each end — the visual metaphor that these abilities are connected
into one journey from choosing the right product to lifting conversion.

CTA (bottom): a solid magenta #EC4899 fully-rounded pill button with the short
white action phrase "立即体验" inside — clean and inviting.

COLOR RULE: cream base + black headline; ONLY ONE bright accent color
(magenta #EC4899) carried through BOTH the connector line and the CTA pill and
the line end-nodes; cards in soft pastels; the accent is the single loud color,
everything else restrained. No second accent, no neon, no corporate blue, no
dark background.

Mood: friendly, tidy, clear, approachable brand page; the layout reads top to
bottom as headline → connected card row → CTA in three seconds.
Avoid: dark or tech background, gradient, photo / 3D / collage / rough hand
sketch / risograph dots, real software UI screenshots, more than 5 cards,
overcrowded cards, more than one accent color, neon or corporate-blue palette,
serif-less tiny headline, sharp zig-zag connector, square / outline-only CTA,
concept-word labels.
```
