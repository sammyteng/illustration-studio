---
slug: bold-line-retro-flat
name_cn: 粗线条复古平涂
name_en: Bold-line Retro Flat / Groovy
channel: 公众号封面 / 潮流趣味插画 / 品牌 IP / 有态度的内容配图
has_text: false              # 纯插画无字 → nano（Gemini，线条+质感更精细）；要加标题再切 gpt
default_backend: nano
default_ratio: "2:3"
one_liner: 粗均匀黑描边勾形 + 有限暖色平涂色块 + 70s groovy 落日条纹 + 丝网颗粒，deadpan 酷又慵懒。
---

> 通用提炼 / 构图 / 渲染路径见 `_illustration-engine/ENGINE.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：Matisse 的剪影 × Saul Bass 的 groovy 落日 × 现代潮牌平涂——一个简洁主角（拟人动物 / 酷人 / 物件）摆一个 deadpan 的酷动作（戴墨镜、举杯、瘫着），粗黑描边勾死轮廓，暖色块平涂填进去，背景一圈复古落日条纹，整张叠一层细颗粒丝网印。**慵懒、有态度、有记忆点**，不耍可爱、不写实。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **黑描边（灵魂第一条）** | **所有形状都用粗、均匀、肯定的黑色 outline 勾死**——线宽统一（不是有粗有细的写实线），轮廓闭合、自信、略复古海报感；不是细线、不是素描、不是写实勾勒 | `every shape outlined in a thick, even, confident BLACK contour line of uniform weight, bold poster-style outlines, NOT thin sketchy or realistic linework` |
| 2 | **暖色平涂（灵魂第二条）** | 描边内**纯色平涂，绝对无渐变、无光影过渡**，色块干净一刀切；调色板**有限暖色** ≤4 色（芥末黄 / 陶土红 / 青绿 / 奶油）；同一色块内不许有明暗变化 | `flat solid color fills inside the outlines, absolutely NO gradient and NO shading, clean hard-edged color blocks, limited warm retro palette of 4 colors max` |
| 3 | **groovy 复古背景（灵魂第三条）** | 背景是 **70s groovy 元素**：落日横条纹 / 同心半圆弧 / 平滑波浪线，居中放射或层层叠的暖色条带，像复古唱片封套 / Saul Bass 海报；不是纯色背景、不是科技网格 | `retro 1970s groovy background: a setting-sun banded stripes / concentric arcs / smooth wave lines radiating in warm tones, like a vintage record sleeve` |
| 4 | **丝网颗粒质感** | 整张图叠一层**细颗粒 / 丝网印 / risograph 噪点**，表面**不光滑**，像印在纸上的潮牌海报；颗粒要细而均匀，不破坏平涂色块的干净 | `a subtle fine grain / screen-print / risograph noise texture over the whole image, slightly matte and printed feel, never smooth or glossy` |
| 5 | **造型** | **简洁、肯定、略复古**的剪影造型——主角占据画面但形状高度概括（Matisse / cut-out 感），手脚物件都化成几个干净大块；一个酷动作传达态度 | `simple, confident, slightly retro Matisse cut-out silhouettes, highly simplified forms, one cool deadpan pose` |
| 6 | **主角与态度** | 一个**简洁主角**：拟人动物 / 酷人 / 物件拟人，做一个 **deadpan 的酷动作**（戴墨镜、举杯、叼牙签、瘫坐、翘脚），气质慵懒、酷、有态度，不萌不卖乖 | `a single simple character (anthropomorphic animal / cool figure / personified object) striking a deadpan-cool, lazy, attitude-loaded pose — sunglasses, raising a glass, slouching` |
| 7 | **光影** | **彻底平面化**：无渐变、无写实投影、无高光、无 3D 体积。深浅只靠色块并置和黑描边表达，整张是印刷品不是渲染图 | `completely flat, no gradient, no realistic drop shadow, no highlight, no 3D volume; an offset-printed poster, not a render` |
| 8 | **比例** | 默认 `2:3` 竖版（公众号封面 / 潮流插画）| `2:3 vertical` |

> 一眼自检：缩成拇指大仍能看出「**粗黑边勾的剪影 + 暖色平涂 + 背后一圈复古落日条纹 + 颗粒感**」四件套齐全 = 对；看起来写实 / 有渐变光 / 萌系 / 纯色干净背景 / 科技感 = 错。

---

## 配色

**有限暖复古调，≤4 色平涂 + 黑描边**。色块按「干净一刀切」铺，不靠明暗堆体积。背景落日条纹用同族暖色排序（黄→红→绿），主体用对比那一色跳出来。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **暖色 1 · 主** | 芥末黄 / Mustard Yellow | `#E8B23A` | 落日大色块 / 主体亮部 / 背景主条纹 |
| **暖色 2 · 主** | 陶土红 / Terracotta Red | `#D9573A` | 主角身体 / 第二层条纹 / 最跳的那一块 |
| **暖色 3 · 副** | 青绿 / Teal Green | `#2E8C82` | 点缀对比（墨镜 / 杯子 / 一条波浪 / 配饰），暖调里唯一的冷点 |
| **中性 · 底** | 奶油 / Cream | `#F2E7CE` | 留白 / 浅色块 / 最外圈底 |
| **描边 · 黑** | 墨黑 / Ink Black | `#1A1A1A` | 所有 outline + 极少量实心黑细节（瞳孔 / 文字感符号）|

铁律：
- **平涂总色 ≤4**（黄 + 红 + 绿 + 奶油），黑只做描边和极少实心点缀，不算入「色」。
- 暖色要**复古、略脏、不鲜艳刺眼**（陶土红不是消防红、芥末黄不是柠檬黄、青绿带灰）——是 70s 印刷褪色感，不是数码荧光。
- 青绿是**唯一的冷点缀**，面积最小，只点一两处做对比，别铺大面积。
- 同一色块内**绝不出现第二个明度**——要体积感就换相邻一块色，不许在块里打渐变。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **线条**：细线 / 写实勾勒 / 素描感 / 有粗有细的变线 / 没有描边的纯色块——必须是粗均匀黑 outline 勾死所有形
- ❌ **填色**：任何渐变 / 明暗过渡 / 写实光影 / 同色块内打高光暗部——必须一刀切平涂
- ❌ **背景**：纯色背景 / 干净留白底 / 科技网格 / 渐变天空——必须有 groovy 落日条纹 / 同心弧 / 波浪
- ❌ **质感**：光滑数码感 / 矢量 SaaS icon 风 / 玻璃拟态——必须叠细颗粒丝网印
- ❌ **气质**：可爱萌系 / 大眼卖乖 / Q 版幼态 / 治愈暖心——这套是 deadpan 酷、慵懒、有态度，不讨好
- ❌ **写实 / 3D**：照片 / 写实插画 / 3D 卡通 / 立体渲染 / 金属反光
- ❌ **配色**：超过 4 个平涂色 / 数码荧光鲜艳色 / 冷蓝商务调 / 马卡龙粉嫩 / 全色域照片色
- ❌ **风格串味**：孔版 riso 套色错位（隔壁 `risograph-retro-print`）/ 白底红橙蓝手绘批注 / 单线条社论风 / 暖系马克笔小红书风 / SaaS 科技蓝——这几套是隔壁皮肤，别撞脸

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。英文写画面主体 + 写死 DNA 关键词；纯画面无字 → 走 `nano`（Gemini，线条质感最精细）。
> 若要加一行标题字，再切 `gpt`（gpt-image-2，中文最稳），并把 `{{LABELS}}` 填进去。

```
Bold-line retro flat groovy illustration, {{RATIO}} aspect ratio. A vintage
screen-printed poster look that visualizes "{{COGNITIVE_ANCHOR}}".

SUBJECT: {{SUBJECT}} — a single simple character striking a deadpan-cool, lazy,
attitude-loaded pose. Highly simplified Matisse cut-out silhouettes, confident
slightly-retro forms, one clear cool gesture.

HARD CONSTRAINT 1 — BLACK OUTLINES: every shape is outlined in a thick, even,
confident BLACK contour line of uniform weight (#1A1A1A), bold poster-style
outlines, closed and self-assured — NOT thin, sketchy, realistic, or variable
linework.

HARD CONSTRAINT 2 — FLAT WARM FILLS: inside the outlines, flat solid color fills
ONLY — absolutely NO gradient, NO shading, NO light-and-shadow inside any block,
clean hard-edged color blocks. Limited warm retro palette of {{PALETTE}}: mustard
yellow #E8B23A, terracotta red #D9573A, teal green #2E8C82 (only tiny accent),
cream #F2E7CE. Slightly faded vintage tones, never neon-bright.

HARD CONSTRAINT 3 — GROOVY BACKGROUND: the background is a retro 1970s groovy
field — {{BG_MOTIF}} (a setting-sun of warm banded stripes / concentric arcs /
smooth wave lines) radiating in the warm palette, like a vintage record sleeve or
a Saul Bass poster. NOT a plain color, white, gradient sky, or tech grid.

HARD CONSTRAINT 4 — GRAIN: a subtle fine grain / screen-print / risograph noise
texture sits over the whole image; slightly matte, printed-on-paper feel, never
smooth or glossy.

LIGHTING: completely flat, no gradient, no drop shadow, no highlight, no 3D
volume — an offset-printed poster, not a render.

MOOD: deadpan, cool, lazy, retro, full of attitude and a memorable hook; Matisse
× modern streetwear × Saul Bass groovy.{{TYPOGRAPHY_CLAUSE}}

Avoid: thin or sketchy lines, no-outline color blocks, any gradient or shading,
realistic light, plain / white / gradient / tech-grid background, smooth glossy
vector look, cute kawaii / big-eyed / chibi softness, photorealism / 3D, more
than 4 flat colors, neon digital brights, cold corporate blue, riso color
misregistration, single-line editorial, white-paper hand sketch.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `2:3`（默认竖版封面）/ `3:4` / `1:1`（社群头图）|
| `{{SUBJECT}}` | 当前内容原创发明的**一个**简洁主角 + 一个酷动作（拟人动物 / 酷人 / 物件拟人，做 deadpan 的事）|
| `{{COGNITIVE_ANCHOR}}` | 这张图要让人 1 秒读懂的那句核心意思 / 态度 |
| `{{PALETTE}}` | `3 warm colors`（黄+红+奶油）或 `4 warm colors`（加一抹青绿）|
| `{{BG_MOTIF}}` | 选一种背景：`a setting-sun of warm banded horizontal stripes` / `concentric arcs` / `smooth wavy lines`，别堆全 |
| `{{TYPOGRAPHY_CLAUSE}}` | 纯画面无字时**留空**；要加标题时填 ` TYPOGRAPHY: {{LABELS}} rendered as bold retro condensed Chinese display type, baked into the poster as part of the print.` |
| `{{LABELS}}` | （仅 has_text 模式）3-6 个中文短词，逐个写进引号 |

---

## 示例提示词（主题：跨境打工人 / 卖家 deadpan 趣味插画 ——「大促扛住了，举杯庆祝」的酷猫）

> 认知锚点：**大促像一场仗，扛过来了——不嘶吼不庆功，就慵懒地戴着墨镜举一杯，deadpan 地酷一下，那种「老子撑住了」的态度。**
> 隐喻：一只戴墨镜的酷猫瘫在椅子里，一爪举着饮料杯，背后一轮 groovy 落日横条纹；脚边一个倒着的小包裹箱暗示「单都发完了」。纯画面无字 → 走 `nano`（Gemini）。
> 可直接喂 `render.js`（`--backend nano --aspect 2:3`）。

```
Bold-line retro flat groovy illustration, 2:3 aspect ratio. A vintage
screen-printed poster look that visualizes "the big sale was a battle and I
survived it — no cheering, just a deadpan lazy toast, that 'I held the line'
attitude".

SUBJECT: a cool cat in sunglasses slouching deep in a lounge chair, one paw
lazily raising a tall drink glass in a deadpan toast, hind legs crossed and
kicked up; a single small cardboard parcel box tipped over by its feet, hinting
all the orders just shipped out. A single simple character striking a
deadpan-cool, lazy, attitude-loaded pose. Highly simplified Matisse cut-out
silhouettes, confident slightly-retro forms, one clear cool gesture.

HARD CONSTRAINT 1 — BLACK OUTLINES: every shape — the cat, the sunglasses, the
glass, the chair, the box — is outlined in a thick, even, confident BLACK
contour line of uniform weight (#1A1A1A), bold poster-style outlines, closed and
self-assured — NOT thin, sketchy, realistic, or variable linework.

HARD CONSTRAINT 2 — FLAT WARM FILLS: inside the outlines, flat solid color fills
ONLY — absolutely NO gradient, NO shading, NO light-and-shadow inside any block,
clean hard-edged color blocks. The cat in terracotta red #D9573A, the chair and
glass in mustard yellow #E8B23A, the sunglasses and the drink as the only teal
green #2E8C82 accent, cream #F2E7CE in the highlights. Slightly faded vintage
tones, never neon-bright.

HARD CONSTRAINT 3 — GROOVY BACKGROUND: the background is a retro 1970s groovy
field — a setting-sun of warm banded horizontal stripes (mustard to terracotta)
radiating behind the cat like a vintage record sleeve or a Saul Bass poster. NOT
a plain color, white, gradient sky, or tech grid.

HARD CONSTRAINT 4 — GRAIN: a subtle fine grain / screen-print / risograph noise
texture sits over the whole image; slightly matte, printed-on-paper feel, never
smooth or glossy.

LIGHTING: completely flat, no gradient, no drop shadow, no highlight, no 3D
volume — an offset-printed poster, not a render.

MOOD: deadpan, cool, lazy, retro, full of attitude and a memorable hook; Matisse
× modern streetwear × Saul Bass groovy.

Avoid: thin or sketchy lines, no-outline color blocks, any gradient or shading,
realistic light, plain / white / gradient / tech-grid background, smooth glossy
vector look, cute kawaii / big-eyed / chibi softness, photorealism / 3D, more
than 4 flat colors, neon digital brights, cold corporate blue, riso color
misregistration, single-line editorial, white-paper hand sketch.
```
