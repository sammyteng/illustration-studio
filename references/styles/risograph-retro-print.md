---
slug: risograph-retro-print
name_cn: Riso 孔版印刷
name_en: Risograph / Retro Print
channel: 文创 / 文化 / 独立出版 / 内容创作者社群活动主视觉 / 态度海报 / 反 AI「要人味」内容
has_text: true
default_backend: gpt            # 有字 → gpt-image-2（中文标注最稳）；纯画面无字时可切 gemini
default_ratio: "4:3"
one_liner: 模拟孔版油印的套色错位、半色调网点、有限荧光专色，带独立出版的粗粝手工味。
---

> 通用提炼 / 构图 / 渲染路径见 `_illustration-engine/ENGINE.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像一张独立工作室用孔版油印机手工套印出来的海报——故意没对准、油墨没匀、网点透着光，**「印坏了」的粗粝感本身就是态度宣言**。
> 在 2026「反 AI、要人味」浪潮里，刻意的不完美 = 真人做的信号。这套是该信号的头号视觉载体。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **背景 / 纸底** | 米白 / 本白再生纸底 `#F4EFE3`，可见**轻微纸纤维肌理**与极淡发黄，绝不纯白、绝不发光、绝不渐变 | `warm off-white recycled paper stock #F4EFE3, faint paper fiber texture, slightly aged, never pure white` |
| 2 | **套色叠印（灵魂第一条）** | **2-3 个专色分版叠印**，色层交叠处**正片叠底混色**透出第三种脏色（粉+蓝叠出深紫），每个专色都是一整张「版」 | `2 to 3 spot color layers printed on top of each other, multiply blending where they overlap producing a muddy third color` |
| 3 | **套色错位（灵魂第二条 · misregistration）** | **刻意没对准**：每个色版相对线稿偏移 2-6px，边缘露出彩色重影 / 错边，**像手工换版没对齐**——这是态度，不是 bug | `deliberate misregistration, each color plate shifted 2 to 6 px off the key line, colored ghosting and offset edges at the borders, hand-printed mis-alignment` |
| 4 | **半色调网点（灵魂第三条 · halftone）** | 所有色块**不是平涂**，是**可见的半色调圆点网点**铺成的，点子粗、有疏密渐变，凑近能数得清；不是数码平涂、不是矢量纯色 | `visible coarse halftone dot screen filling every color area, dithered grain, dots you can count, NOT flat digital fill` |
| 5 | **油墨质感** | 油墨不匀：有**漏墨重压的深块**和**缺墨发白的飞白条纹**，颗粒感强，像滚筒压过纸面；专色边缘略毛 | `uneven riso ink, ink roller streaks, patchy over-inked dark spots and under-inked faded streaks, grainy, screen-printed feel` |
| 6 | **线条 / 形状** | 粗笨、扁平、剪纸 / 木刻 / 图章感的**实心形状**（非细线、非写实），轮廓肯定但带手作的不规整；可少量粗线 | `chunky flat cut-paper / linocut / stamp-like solid shapes, bold simplified silhouettes, hand-cut irregular edges` |
| 7 | **光影** | **无渐变、无写实投影、无高光**。体积全靠网点疏密 + 套色叠加表达，整体**平面化、印刷品**，不是 3D 渲染 | `flat, no gradient, no realistic drop shadow, no glossy highlight, depth only via halftone density` |
| 8 | **中文标注** | **3-6 处**短词（2-8 字），做成**孔版印的实心粗体字 / 图章字**，**字本身也带套色错位重影**，是画面一部分不是叠图层 | `3 to 6 short Chinese words printed as bold riso-stamped type, the type itself has the same misregistration ghosting` |
| 9 | **比例** | 默认 `3:4` 竖版海报 | `3:4 vertical poster` |

> 一眼自检：把图缩成拇指大，**仍能看出「这是印的、还印歪了」**——网点 + 错位 + 脏纸底三件套齐全 = 对。看起来干净、平滑、发光 = 错。

---

## 配色

有限专色，**只用 2-3 个，绝不全色域**。主色取荧光粉 + 钴蓝，强调点一抹荧光黄，叠印处自然生成深紫脏色。颜色按「分版」用，不是按好看堆。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **专色 1 · 主** | 荧光品红 / Fluoro Pink | `#FF48B0` | 主体大形状、最抢眼的那一版、主标注字 |
| **专色 2 · 主** | 钴蓝 / Cobalt Blue | `#0B4FBF` | 第二层结构 / 背景图形 / 次标注，与粉叠印 |
| **专色 3 · 强调（一抹）** | 荧光黄 / Fluoro Yellow | `#F2E40A` | 只点一处：高光点 / 一个关键符号 / 一条强调，面积最小 |
| **叠印脏色（自动生成）** | 深紫 / 墨紫 | `#3A1A5E`（粉×蓝正片叠底近似） | **不主动填**，靠粉蓝交叠处自然透出，是「真在套印」的证据 |
| **纸底** | 再生米白 | `#F4EFE3` | 全图底色，留白处即纸本身 |

铁律：
- **专色总数 ≤ 3**（粉 + 蓝固定，黄是可选的第三抹）。要换情绪就换那一抹强调，不堆第四色。
- 荧光粉 / 荧光黄是**荧光（fluorescent / neon）油墨**，要亮、要刺，不是粉嫩马卡龙、不是高级灰。
- 深紫**只能由叠印生成**，不许当第四个独立平涂色直接刷。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **背景**：纯白 / 发光白 / 渐变 / 柔和弥散光 / 干净无纹理底 / 暗色科技底
- ❌ **干净对齐**：色版精准对齐、零错位、矢量般锐利的边——这直接杀死本风格的灵魂
- ❌ **平涂数码色**：用纯色填充代替半色调网点（必须看得见点子和颗粒）
- ❌ **光影**：写实投影 / 高光 / 3D 体积 / 金属反光 / 玻璃拟态 / 任何「精致渲染感」
- ❌ **配色**：超过 3 个专色、全色域照片色、马卡龙粉嫩、高级灰、企业蓝商务风
- ❌ **风格串味**：写实插画 / 商业扁平插画 / 3D 卡通 / 矢量 icon 风 / SaaS 科技 UI / 白底手绘草图 / 单线条社论风（这几套是隔壁皮肤，别撞）
- ❌ **AI 光滑感**：一切「太干净、太完美、太对称、太顺滑」的成品——这套就是要反它
- ❌ **标注**：把字做成清晰锐利的数码字幕浮在上层（字必须也是印的、也带错位重影）；写概念词（「赋能 / 闭环 / 提质增效」）

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。英文写画面主体 + 写死 DNA 关键词；中文只用于 3-6 个**画面内印刷标注词**。
> 有中文标注 → 走 `gpt`（gpt-image-2，文字最稳）；纯画面无字 → 可切 `gemini`。

```
Risograph / retro screen-printed poster, {{RATIO}} aspect ratio, on warm
off-white recycled paper stock #F4EFE3 with faint paper fiber texture, slightly
aged — NEVER pure white, never glossy, never a gradient background.

Subject: {{SUBJECT}} — a single bold flat composition that visualizes
"{{COGNITIVE_ANCHOR}}". Built from chunky cut-paper / linocut / stamp-like
SOLID shapes, bold simplified silhouettes with hand-cut irregular edges, flat
and graphic, no realistic rendering.

RISO HARD CONSTRAINT 1 — SPOT COLORS: printed with ONLY {{SPOT_COLORS}} spot
ink layers — fluorescent magenta #FF48B0 and cobalt blue #0B4FBF{{YELLOW_CLAUSE}}.
Where the layers overlap they MULTIPLY into a muddy deep purple #3A1A5E. No
other colors, no full-color photo palette, no pastel.

RISO HARD CONSTRAINT 2 — MISREGISTRATION: each color plate is DELIBERATELY
shifted 2 to 6 px off the key outline, leaving colored ghosting and offset
edges at every border — like hand-changed plates that didn't line up. This
imperfect off-register look is intentional.

RISO HARD CONSTRAINT 3 — HALFTONE + INK: every colored area is filled with a
VISIBLE coarse halftone dot screen (dots you can count), NOT flat digital fill;
uneven riso ink with roller streaks, patchy over-inked dark spots and
under-inked faded streaks, heavy grain, true screen-printed texture.

LIGHTING: completely flat, no gradient, no drop shadow, no glossy highlight,
depth only from halftone dot density.

TYPOGRAPHY: {{LABELS}} — printed as bold riso-stamped Chinese type that ALSO
carries the same misregistration ghosting, sitting inside the print as part of
the artwork, not a clean overlay.

Mood: gritty independent zine / DIY print studio / 2026 anti-AI hand-made
statement; the "printed slightly wrong" texture is the whole point.
Avoid: pure white or glowing background, perfectly aligned plates, flat vector
fill, realistic shadows / 3D / glossy, more than 3 colors, pastel or corporate
palette, clean smooth AI gloss, photorealism, SaaS UI, single-line editorial,
white-paper sketch.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `3:4`（默认海报）/ `1:1`（社群头图）/ `4:5` |
| `{{SUBJECT}}` | 当前内容原创发明的**一个**剪纸 / 木刻感隐喻主体（一个粗笨实心形状能撑起的物件 + 动作）|
| `{{COGNITIVE_ANCHOR}}` | 这张图要让人 1 秒读懂的那句核心意思 |
| `{{SPOT_COLORS}}` | `two`（仅粉+蓝）或 `three`（粉+蓝+黄）|
| `{{YELLOW_CLAUSE}}` | 用三色时填 ` plus one small touch of fluorescent yellow #F2E40A on a single key accent`；两色时留空 |
| `{{LABELS}}` | 3-6 个中文短词，逐个写进引号，如 `the words "慢慢沉淀" "别急" "印坏了也算" "手作"` |

---

## 示例提示词（主题：知识沉淀方法论的态度海报 / 内容创作者社群活动主视觉）

> 认知锚点：**知识不是攒出来的，是一层层「印」上去、压实、沉下来的——歪一点、糙一点没关系，那是人手做过的证据。**
> 隐喻：一只手把一张张写满字的纸**一层层压进 / 印进**一个粗笨的沉淀容器（井 / 罐 / 层叠抽屉），层与层套色错位，最底层最实、最上层还在飞白。
> 三专色（粉+蓝+一抹黄）+ 4 处印刷标注。可直接喂 `render.js`（`--backend gpt --aspect 4:3`）。

```
Risograph / retro screen-printed poster, 3:4 aspect ratio, on warm off-white
recycled paper stock #F4EFE3 with faint paper fiber texture, slightly aged —
NEVER pure white, never glossy, never a gradient background.

Subject: a single chunky cut-paper hand pressing a stack of written-on paper
sheets DOWN into a tall stout vessel, the sheets compressing into dense sediment
layers at the bottom while the top sheet is still loose and half-printed — a
single bold flat composition that visualizes "knowledge isn't piled up, it is
pressed and printed down layer by layer until it settles; a little crooked and
rough is the proof a human made it". Built from chunky linocut / stamp-like
SOLID shapes, bold simplified silhouettes with hand-cut irregular edges, flat
and graphic, no realistic rendering.

RISO HARD CONSTRAINT 1 — SPOT COLORS: printed with ONLY three spot ink layers —
fluorescent magenta #FF48B0 and cobalt blue #0B4FBF plus one small touch of
fluorescent yellow #F2E40A on a single key accent (the loose top sheet). Where
the magenta and blue layers overlap they MULTIPLY into a muddy deep purple
#3A1A5E in the compressed sediment. No other colors, no full-color photo
palette, no pastel.

RISO HARD CONSTRAINT 2 — MISREGISTRATION: each color plate is DELIBERATELY
shifted 3 to 5 px off the key outline, leaving colored ghosting and offset edges
at the hand, the vessel and every paper layer — like hand-changed plates that
didn't line up. This imperfect off-register look is intentional.

RISO HARD CONSTRAINT 3 — HALFTONE + INK: every colored area is filled with a
VISIBLE coarse halftone dot screen (dots you can count), denser in the settled
bottom layers and faded toward the top sheet, NOT flat digital fill; uneven riso
ink with roller streaks, patchy over-inked dark spots and under-inked faded
streaks, heavy grain, true screen-printed texture.

LIGHTING: completely flat, no gradient, no drop shadow, no glossy highlight,
depth only from halftone dot density.

TYPOGRAPHY: the words "慢慢沉淀" "一层一层" "印坏了也算" "手作的证据" — printed as
bold riso-stamped Chinese type that ALSO carries the same misregistration
ghosting, sitting inside the print as part of the artwork, not a clean overlay.

Mood: gritty independent zine / DIY print studio / 2026 anti-AI hand-made
statement; the "printed slightly wrong" texture is the whole point.
Avoid: pure white or glowing background, perfectly aligned plates, flat vector
fill, realistic shadows / 3D / glossy, more than 3 colors, pastel or corporate
palette, clean smooth AI gloss, photorealism, SaaS UI, single-line editorial,
white-paper sketch.
```
