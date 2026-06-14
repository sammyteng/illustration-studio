---
name_cn: 包豪斯几何构成
name_en: Bauhaus Geometric
slug: bauhaus-geometric
channel: B2B 课程/教育信息图 · 知识框架图解 · 方法论拆解 · 品牌 KV · 公众号长文配图
has_text: false
default_backend: nano   # 无字 → Gemini Nano Banana Pro；若按 477 规则给图加中文标注则改走 gpt-image-2
default_ratio: "1:1"
---

# 包豪斯几何构成 / Bauhaus Geometric

> 通用提炼 / 构图 / 渲染 / 质检见 `_illustration-engine/ENGINE.md`。
> 本文件只写这套风格的「长相 + 提示词」，不重复引擎方法论。
>
> 一句话：圆、三角、方三种基本几何形拼搭的**扁平无渐变**插画，三原色块构成、栅格对齐，把抽象概念翻译成最简几何符号。纯 CSS/SVG 即可 1:1 还原，无任何图片素材依赖。

---

## 视觉 DNA（必含项 · 缺任一即 Gate 1 不过）

每张图、每条提示词都必须同时满足这 6 条硬性必含项：

1. **背景**：纯白 `#F7F4ED`（暖白纸面）或纯净米白，**绝对无渐变、无纹理、无投影**。背景可叠一层**极淡的几何栅格基准线**（hairline grid，浅灰 `#D8D2C4`，1px），用来强调「模块化对齐」的理性气质——但栅格必须克制、不抢主体。

2. **形状语言 = 灵魂**：画面**只允许用基本几何原形**——正圆 / 半圆 / 四分之一圆扇形、等边或直角三角形、正方形 / 矩形、细长条带。**禁止任何不规则自由曲线、手绘抖动、有机形状**。所有形状边缘绝对干净、几何精确，像用圆规和三角板画出来的。

3. **填充 = 纯色块、零渐变**：每个形状内部是**单一纯色平涂（flat solid fill）**，绝对无渐变、无高光、无柔和阴影、无 3D 体积感。色块之间靠**硬边直接拼接 / 拼搭 / 叠压**，偶尔留 2-4px 白缝分隔。这是包豪斯扁平构成的命门。

4. **栅格对齐 / 模块化**：所有形状沿**隐形栅格**摆放，水平垂直 45° 对齐，构图工整、模块化、有建筑般的秩序感。元素之间的间距成倍数关系。整体像一张精心排布的几何海报，不是随意散落。

5. **线条**：极少或无描边。如需描边只用**均匀粗细的几何直线 / 正圆弧**（black `#1A1A1A`，2-4px，绝对均匀），充当结构分隔或几何 logomark 笔画。**禁止素描排线、阴影线、潦草批注线**。

6. **配色**：包豪斯三原色（红 `#E63946` + 黄 `#FFB703` + 蓝 `#0077B6`）+ 黑白，**纯色块无渐变**，每色只承担一个语义角色（见下）。比例写成显式 `{{RATIO}}` 变量，默认 1:1。

---

## 配色（三原色 + 黑白，每色一个语义，绝不滥用）

| 角色 | HEX | 语义用途 |
|---|---|---|
| **红 RED** | `#E63946` | 主结构 / 核心模块 / 关键节点 / 一处「重点」。最抢眼，只给最重要的那一块 |
| **黄 YELLOW** | `#FFB703` | 次级模块 / 流向 / 强调动作 / 能量与活力的那一块 |
| **蓝 BLUE** | `#0077B6` | 第三结构 / 理性框架 / 基础底座 / 沉稳的那一块 |
| **黑 BLACK** | `#1A1A1A` | 几何 logomark 笔画、结构分隔线、最少量的纯黑色块压稳画面 |
| **白 / 暖白底** | `#F7F4ED` | 大面积留白底，让三原色块呼吸；栅格基准线用浅灰 `#D8D2C4` |

**配色铁律**：
- **三原色 = 纯色平涂**，绝不调出渐变 / 中间色 / 莫兰迪降饱和版。要的就是高辨识度的原色冲击。
- 一张图里三原色**最多各出现 1-2 个主色块**，别让红黄蓝平均分割画面变成色卡；要有主次（通常红做主、黄蓝做辅）。
- 黑只做笔画 / 分隔 / 极小压稳块，**不要大面积黑底**（那是另一种风格）。

---

## 禁忌（命中任意一条即 Gate 1 不过）

- ❌ **任何渐变 / 高光 / 柔和投影 / 3D 体积 / 玻璃拟态**——这套就是死扁平。
- ❌ 不规则自由曲线、有机形状、手绘抖动线、潦草批注（那是 keke-sketch / editorial-line 的活）。
- ❌ 降饱和莫兰迪色 / 马卡龙糖果色 / 彩虹多色堆叠——只忠于红黄蓝三原色 + 黑白。
- ❌ 写实照片、真实 UI 截图、图标汤（icon soup）、廉价剪贴画。
- ❌ 卡通吉祥物 / Q 版 / 表情包 / 拟人卖萌主角（本风格**无主角**，靠几何符号说话）。
- ❌ 满构图、元素清单化（把主题里所有名词都堆成色块）、栅格散乱不对齐。
- ❌ 科技蓝渐变 + 亮 accent 那一套（那是 saas-tech 的活，本风格用纯三原色）。

---

## 提示词模板

> 英文写画面主体（生图模型对英文最敏感），中文写标注词（仅当按 477 规则给图加字时）。
> 模板已写死本风格 DNA 关键词，填变量即可。

**核心 DNA 关键词串（每条 prompt 必带，勿删）**：
`Bauhaus geometric constructivist illustration, built ONLY from basic geometric primitives — perfect circles, half-circles, quarter-circle arcs, equilateral and right triangles, squares and rectangles, thin bars; strictly FLAT solid-color fills, absolutely NO gradients, NO highlights, NO drop shadows, NO 3D volume; hard-edge color blocks butting and stacking on an invisible modular grid, everything snapped to horizontal / vertical / 45° alignment, architectural order; primary-color palette ONLY — red #E63946, yellow #FFB703, blue #0077B6, plus black #1A1A1A and warm-white paper background #F7F4ED with faint 1px light-grey grid lines; clean geometric edges as if drawn with compass and set-square; minimal uniform geometric strokes only where needed as a logomark; high contrast, high recognizability, generous negative space, subject ≤ 60% of frame, poster-like balance.`

**填空模板**：

```
Bauhaus geometric constructivist illustration of {{SUBJECT}}.
[在此用 1 个几何隐喻把抽象概念翻译成基本形拼搭：
 e.g. a method framework → stacked rectangles + circle nodes;
 a process → triangles pointing right as flow arrows;
 a structure → a grid of squares with one red square highlighted.]
Composition mode: {{COMPOSITION}}  (方法分层 / Workflow 流程 / 系统局部 / 概念隐喻，选 1).
Built only from circles, triangles, squares, thin bars — flat solid fills, NO gradients, NO shadows.
Palette strictly: red #E63946 (核心), yellow #FFB703 (次级/流向), blue #0077B6 (基础框架), black #1A1A1A (笔画/分隔), warm-white #F7F4ED background with faint 1px grid.
Everything aligned to a modular grid, horizontal/vertical/45°, architectural order, generous negative space, subject under 60% of frame.
{{LABELS}}   ← 仅当 has_text=true 时填：3-6 个中文短标注（2-6字，来自真实语境，几何无衬线小字，置于色块旁或下方）；has_text=false 时整段删掉。
Aspect ratio {{RATIO}}.
Flat vector poster, no photo, no UI screenshot, no cartoon mascot, no gradient, no 3D.
```

**变量说明**：
- `{{SUBJECT}}`：本张图的核心认知锚点（一句话画面），来自正文。
- `{{COMPOSITION}}`：从引擎构图库选 1（本风格最配 **方法分层 / 概念隐喻 / Workflow 流程 / 系统局部**）。
- `{{LABELS}}`：默认 `has_text=false` → 留空删除（走 nano 出纯画面）；若加字 → 3-6 个中文短标注，走 gpt-image-2。
- `{{RATIO}}`：默认 `1:1`；信息图长图可 `3:4`，长文头图可 `16:9`。

---

## 示例提示词（主题：销售方法论 / 知识框架几何化图解 · B2B 课程信息图）

> 下面这条**完整、可直接喂给 `render.js`**。主题：把一套 B2B 销售方法论的「三阶段框架」翻译成包豪斯几何构成。
> 本例 `has_text=true`（B2B 课程信息图常需要标注），故带 5 个中文短标注 → 按 477 规则走 `gpt-image-2`（文字最准）。
> 若要纯画面版，删掉标注那一句、把 `--backend` 切 `nano` 即可。

```
Bauhaus geometric constructivist illustration of a three-stage B2B sales methodology framework, abstract knowledge map. Translate the framework into stacked geometric primitives: three horizontal rectangular bands climbing left-to-right like ascending building blocks — the bottom band a flat solid blue #0077B6 rectangle (foundation stage), the middle band a flat solid yellow #FFB703 rectangle (development stage), the top band a flat solid red #E63946 rectangle (closing stage, the most important, sitting highest). On each band place one geometric node symbol: a blue circle, a yellow triangle pointing right (flow), a red square — each a clean flat primitive. A single black #1A1A1A thin bar connects the three nodes diagonally at 45° as an upward path, ending in a small black geometric logomark (a circle bisected by a triangle). Strictly flat solid-color fills, absolutely NO gradients, NO highlights, NO drop shadows, NO 3D volume; hard-edge color blocks aligned to an invisible modular grid, horizontal/vertical/45° only, architectural order, poster-like balance. Palette strictly primary colors — red #E63946, yellow #FFB703, blue #0077B6, black #1A1A1A — on a warm-white paper background #F7F4ED with faint 1px light-grey #D8D2C4 grid lines. Clean geometric edges as if drawn with compass and set-square, high contrast, high recognizability, generous negative space, subject under 60% of frame. Place five short Chinese labels in a minimal geometric sans-serif, small, beside each block: 「建立信任」 next to the blue band, 「挖掘需求」 next to the yellow band, 「推进成交」 next to the red band, 「方法论」 as a small caption near the logomark, 「三阶段」 as a tiny grid-aligned tag at top-left. Aspect ratio 1:1. Flat vector Bauhaus poster, no photo, no UI screenshot, no cartoon mascot, no gradient, no 3D.
```

**渲染命令（有字版 · gpt-image-2）**：

```bash
node "$HOME/shared-skills/_illustration-engine/render.js" \
  --backend gpt --aspect 1:1 --has-text true --out /tmp/illus-bauhaus \
  --prompt "<把上面整条 prompt 粘进来>"
```

**纯画面版**：删掉 `Place five short Chinese labels ...near the logomark.` 整句 → `--backend nano --has-text false`。
