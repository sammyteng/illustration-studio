---
slug: oriental-ink-guofeng
name_cn: 东方水墨国风
name_en: Oriental Ink / Guofeng
channel: 出海品牌主视觉 / 文化叙事长文 / 新中式品牌官网与 deck / 公众号封面 / 节气文化海报
has_text: false
default_backend: nano        # 无文字 → Gemini Nano Banana Pro（线条/晕染质感更精细）
default_ratio: "4:3"
---

# 东方水墨国风 · Oriental Ink / Guofeng

> 通用方法论（认知锚点 / 处境五问 / 构图 / 原创隐喻 / 渲染 / 质检双闸）见
> [`../../../_illustration-engine/ENGINE.md`](../../../_illustration-engine/ENGINE.md)。
> 本文件只写「这套风格长什么样、用什么色、什么绝对不能出现、提示词怎么拼」。

**一句话**：留白宣纸上的水墨晕染与工笔线，淡彩点染加一枚朱砂印章红——东方写意的文化质感。
**它的差异化牌**：水墨笔意是 AI 最难仿、最自带文化尊重的视觉，是出海「东方品牌」做身份表达与在地叙事的质感杀器。

---

## 视觉 DNA

每张提示词缺任一硬性必含项 = Gate 1 不过。

| # | 维度 | 硬性必含（要具体到能复现）|
|---|---|---|
| 1 | **背景** | **宣纸米白底 `#F5F1E6`，带细微纤维纸纹与极淡的自然泛黄**；**大面积留白（≥55% 画面是空白宣纸）**。底必须是纸，不是纯白、不是色块、不是渐变天空。 |
| 2 | **主材质 / 笔法** | **水墨晕染（ink wash / 渲染）为主体造型**：墨色有浓淡干湿五调、有水痕扩散的柔边、有飞白皴擦的干笔触；纸上能看到墨自然洇开的边缘。**这是风格命门，必须出现、必须是主角材质**。 |
| 3 | **线条** | **少量工笔细线（gongbi fine brush line）勾形定骨**：一两处关键轮廓用均匀有力的细墨线收一下，使写意不糊。线是辅助，墨晕是主体——别全图变成线描。 |
| 4 | **淡彩点染** | **局部、克制**的传统颜料淡彩：花青（青蓝）、赭石（土棕）、胭脂（暗红），只在 1–2 处点染，半透明叠在墨上，**不铺满、不喧宾夺主**。 |
| 5 | **点睛印章** | **一枚朱砂红印章（chop / seal）**，方形或长方，落在角落或题款处，是全图唯一的高饱和亮点、唯一的「正红」。**有且仅有这一处红**。 |
| 6 | **构图 / 气** | 中式写意章法：**计白当黑、疏密对比、一处主景 + 大片空**；可留一道「题款」式竖向空区（但本风格 has_text=false，不写字，只留气口）。意境优先于写实。 |
| 7 | **光影** | 不画西式投影 / 体积光 / 高光。明暗靠**墨的浓淡**自然呈现，纸面均匀柔光，无方向硬光。 |
| 8 | **比例** | 默认 **3:4 竖版**（立轴感）；横向叙事可 16:9（手卷感）。 |

> 新中式融合：题材可以是现代物（集装箱、芯片、地球、产线、品牌符号），但**必须用水墨语言重画**——现代形 + 水墨魂，不是把照片做旧。

---

## 配色

| 角色 | 颜色 | HEX | 用途 |
|---|---|---|---|
| **背景底**（必）| 宣纸米白 | `#F5F1E6` | 全图纸底，大面积留白 |
| **主色**（必）| 墨色浓淡 | 浓 `#1C1A17` → 淡 `#6E6A63` → 极淡 `#B8B2A6` | 晕染与勾线主体，靠浓淡分层 |
| 辅助 · 淡彩 | 花青 | `#3A5A78` | 局部点染（远意 / 冷调 / 水天）|
| 辅助 · 淡彩 | 赭石 | `#9C6B3F` | 局部点染（土 / 木 / 暖调）|
| 辅助 · 淡彩 | 胭脂 | `#8E3B4A` | 局部点染（花 / 暗红情绪，非正红）|
| **强调**（必 · 唯一正红）| 朱砂印章红 | `#C8362B` | 仅用于那一枚印章 / 极小点睛，全图独一份 |

> 铁律：**淡彩半透明、只点 1–2 处；正红只给印章一处**。一旦红多了、彩满了，文化质感立刻塌成廉价「中国风」。

---

## 禁忌（出现任一即 Gate 1 不过）

- ❌ **大红大金、龙凤祥云堆满**的喜庆/景区式「塑料中国风」——这是本风格最大的死因。
- ❌ 红色不止一处 / 淡彩铺满画面 / 高饱和荧光色。
- ❌ 纯白 `#FFFFFF` 死白底、纯色块底、西式渐变天空底（必须是宣纸纹理米白）。
- ❌ 锐利矢量 flat icon、扁平 UI 插画、马克笔/蜡笔卡通质感、3D 渲染、真实照片做旧。
- ❌ 西式硬投影 / 体积光 / 镜头光斑 / 赛博霓虹。
- ❌ 全图变成细线描（丢了墨晕主体）或全图糊成一团墨（丢了工笔骨）。
- ❌ 满构图、无留白、元素清单化（把题材里所有名词都画进去）。
- ❌ 图上出现真实品牌 Logo、未授权汉字书法字（本风格 has_text=false，**画面内不写字**，只留题款气口与那枚印章）。
- ❌ PPT 味 / 信息图味 / 多框多箭头。

---

## 提示词模板

> 一次只拼一张。主体写英文（生图引擎更稳），风格 DNA 关键词写死在模板里。
> 本风格 `has_text: false` → 默认走 nano（Gemini）→ **画面内不放中文标注文字**；
> `{{LABELS}}` 槽默认留空，仅当用户显式要文字版时才填（并改用 gpt 后端）。

```
Traditional Chinese ink-wash painting (shuimo / xieyi guofeng), on aged rice-paper (xuan paper)
background #F5F1E6 with fine fiber paper grain and faint natural yellowing, vast empty whitespace
(over half the frame is bare paper, calligraphic "leave-white-as-black" composition).

SUBJECT rendered in flowing INK WASH as the main material — five tonal values from deep black
#1C1A17 through grey #6E6A63 to pale #B8B2A6, wet bleeding soft edges where ink diffuses into the
paper, plus dry "flying-white" (feibai) drag strokes for texture; a few decisive GONGBI fine-brush
contour lines lock the key forms.

Restrained traditional pigment washes ONLY in 1–2 spots, semi-transparent over the ink — indigo
花青 #3A5A78, ochre 赭石 #9C6B3F, or rouge 胭脂 #8E3B4A. Never flooded.

Exactly ONE vermilion cinnabar seal / chop #C8362B in a corner as the single bright accent — the
only saturated red in the whole image.

No directional light or cast shadows; light/dark comes only from ink density. Poetic, suggestive,
xieyi (idea-writing) over realism, cultural dignity, modern-form-with-ink-soul if subject is modern.

SUBJECT: {{SUBJECT}}
COMPOSITION: {{COMPOSITION — e.g. single tall hanging-scroll motif + large void / handscroll left-to-right}}
RATIO: {{RATIO — default 3:4 vertical hanging-scroll}}
LABELS (leave EMPTY for default no-text version): {{LABELS}}

NEGATIVE: no festive big-red-and-gold tourist "plastic chinoiserie", no dragons/phoenix/cloud-clutter,
no second red anywhere, no flooded color, no fluorescent colors, no pure-white #FFFFFF background,
no flat vector icons, no marker/crayon cartoon, no 3D render, no real photo, no hard western shadows,
no cyber neon, no busy diagram, no logos, no readable text in the default version, no filled composition.
```

变量说明：`{{SUBJECT}}` 英文场景主体（用水墨语言重画的那个意象）；`{{COMPOSITION}}` 选立轴单景留白 / 手卷横展；`{{RATIO}}` 默认 3:4；`{{LABELS}}` 默认空，仅文字版填 3–6 个中文短题款（同时改 gpt 后端）。

---

## 示例提示词

**主题**：中国品牌出海的文化身份叙事 / 跨境「东方智造」品牌主视觉。
**认知锚点**（物理隐喻）：一艘满载货柜的远帆，被水墨化作传统江山长卷的一笔，从东方留白驶向世界——东方之根，扬帆出海。
**has_text: false → 画面内不写字**，下面这条可直接喂给 `render.js`（`--backend nano --aspect 4:3`）。

```
Traditional Chinese ink-wash painting (shuimo / xieyi guofeng), on aged rice-paper (xuan paper)
background #F5F1E6 with fine fiber grain and faint natural yellowing, vast empty whitespace —
over half the frame is bare luminous paper, calligraphic leave-white-as-black composition,
tall 3:4 hanging-scroll feel.

Main subject in flowing INK WASH as the dominant material: a single junk-sail cargo ship — its hull
loosely suggested as a stack of shipping containers but RE-DRAWN entirely in ink, not realistic —
sailing rightward across a few sparse ink-wash mountain ridges and faint water ripples that echo a
traditional landscape handscroll. Five tonal values from deep black #1C1A17 through grey #6E6A63 to
the palest #B8B2A6; wet bleeding soft edges where the distant mountains diffuse into the paper; dry
flying-white (feibai) drag strokes on the sail and water. A few decisive gongbi fine-brush lines lock
the ship's silhouette and rigging so it reads cleanly against the void.

Restrained pigment wash in just one or two spots: a thin indigo 花青 #3A5A78 glaze along the far
water horizon, and a faint ochre 赭石 #9C6B3F touch on the nearest ridge. Semi-transparent over the
ink, never flooded — the rest stays pure ink and bare paper.

Exactly ONE vermilion cinnabar seal #C8362B placed low in the right corner like a painter's chop —
the single saturated red and the only bright point in the whole image, sitting on a small reserved
title void where calligraphy would go (kept empty, no text).

No directional light, no cast shadows — depth comes only from ink density and the great emptiness
around the ship. Poetic, suggestive, dignified, modern-form-with-ink-soul: an Eastern brand setting
sail for the world.

NEGATIVE: no festive big-red-and-gold tourist plastic chinoiserie, no dragons / phoenix / cloud
clutter, no second red anywhere, no flooded color, no fluorescent colors, no pure-white #FFFFFF
background, no flat vector icons, no marker / crayon cartoon style, no 3D render, no real photo,
no hard western shadows or lens flare, no cyber neon, no busy diagram, no logos, no readable text,
no filled composition.
```

> 自检：3:4 ✅ / 宣纸米白留白 >50% ✅ / 墨晕为主体材质（五调+水痕+飞白）✅ / 工笔细线收骨 ✅ / 淡彩仅 2 处半透明 ✅ / 朱砂红仅印章一处 ✅ / 无投影无霓虹 ✅ / 现代题材（货柜船）用水墨重画非写实 ✅ / has_text=false 画面无字 ✅ / 单一认知锚点（东方之根扬帆出海）✅。
