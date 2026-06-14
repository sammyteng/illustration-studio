---
slug: hybrid-3d-flat-isometric
name_cn: 3D融合扁平等距
name_en: 3D Meets Flat / Hybrid Isometric
channel: B2B 销售 deck 首屏 / 产品架构解释图 / 公众号头图 / 系统流程科普 / 官网 hero 配图
has_text: true
default_backend: gpt          # 有文字 → gpt-image-2（文字渲染准）；纯画面无文字时切 gemini
default_ratio: "4:3"
one_liner: Blender 质感的半立体物体嵌进干净扁平场景，30 度等距俯视，把系统流程摆成一个可俯瞰的小世界。
---

> 通用提炼 / 构图 / 渲染兜底 / 质检双闸见 `_illustration-engine/ENGINE.md`。
> 本文件只定义「3D 融合扁平等距」这套皮肤的**长相 + 提示词**，不重复引擎方法论。
> 与 `saas-tech-illustrations`（纯扁平蓝）刻意区分：本风格是**半立体 + 真等距 + 微缩世界**，不是平面图标流。

---

## 视觉 DNA（必含 6 项，缺任一 = Gate 1 不过）

复现这套风格，每条提示词都必须同时拿下以下 6 点：

1. **视角（最强特征）**：严格 **30° 等距俯视（true isometric, 2.5D）**，**平行投影、无消失点、无近大远小**。镜头像从斜上方俯瞰一张桌面/沙盘。绝不允许透视收束、广角、第一人称。

2. **维度混合（本风格的命门）**：**核心主体物用半写实软渲 3D**（Blender / Spline / Cinema4D clay render 质感）——有真实体积、圆润倒角、柔和材质；**背景、地台、连线、配件保持扁平矢量色块**，零厚度、零质感。形成「立体物站在扁平纸面上」的混合维度对撞。**不要全 3D 写实，也不要全扁平**。

3. **背景 / 地台**：浅冷调底——纯白 `#FFFFFF` 或极浅冷灰 `#F7F9FC`。主体下方可铺一块**扁平的等距地台/网格平面**（subtle isometric floor grid）当舞台，地台是平面色块、不是 3D 盒子。大面积留白，主体占画面 ≤ 60%。

4. **材质与光影**：物体表面**哑光软塑料 / clay / 磨砂金属**质感（matte, soft-touch），**单一柔和顶光**（soft single key light from top-left），**轻微高光 + 薄而软的接触阴影**（subtle highlight, thin soft contact shadow）。**禁硬高光、禁强反射、禁玻璃镜面、禁戏剧打光**。光影只用来交代体积，不渲染氛围。

5. **形状与母题**：圆角几何体（rounded-corner geometric solids）。母题摆成**可俯瞰的微缩世界 / 沙盘**：层叠堆栈（stacked layers）、模块化盒子（modular boxes / blocks）、连线数据流（connected nodes with flowing lines）、物流/管道节点（pipeline & logistics nodes）、传送带、漏斗、小服务器塔。**一图只用 1-2 个母题**，别把沙盘堆满。

6. **配色语义 + 比例**：科技冷调打底 + 蓝紫主色 + **单一**亮 accent（电子绿或橙）+ 中性灰过渡（见下「配色」）。比例默认 16:9，写成显式 `{{RATIO}}` 变量。

---

## 配色（蓝紫主调 + 单一亮 accent）

| 角色 | 默认 hex | 语义用途 |
|---|---|---|
| **主色 PRIMARY**（蓝紫） | `#6366F1`（靛蓝紫，深 `#4F46E5` / 浅 `#818CF8`） | 核心立体物、主模块、品牌存在感 |
| **辅助 SECONDARY**（科技冷蓝） | `#3B82F6`（次模块）+ 中性灰 `#94A3B8`（连线 / 地台网格 / 非焦点物） | 过渡、辅助盒子、平面连线、地台 |
| **强调 ACCENT（只 1 个）** | 电子绿 `#00FF95`（或橙 `#F97316`，二选一） | **只做语义强调**：关键节点 / 主数据流箭头 / 转化收口 / 一个发光高亮物。绝不铺满 |
| **背景 / 留白** | `#FFFFFF` 或极浅冷灰 `#F7F9FC` | 大面积留白，舞台干净 |

- accent **二选一**：科技解释图稳走**电子绿 `#00FF95`**；想要暖反差、物流/出货主题走**橙 `#F97316`**。做完在交付里说明抽了哪个。
- 中性灰 `#94A3B8` 专门给「扁平那一层」（连线、地台、配件），帮它和立体主体拉开维度。
- `PRIMARY` 与 `ACCENT` 在 input/prompt 里做成显式占位变量，方便 477 一键换成 Shulex 品牌色。

---

## 禁忌（命中即 Gate 1 不过）

- **透视 / 消失点 / 近大远小** —— 必须平行投影等距，这是本风格第一红线。
- **全写实 3D**（照片级渲染、PBR 反射、景深虚化、HDRI 环境光）—— 会丢掉「扁平对撞」的高级感，沦为普通 3D 渲染图。
- **全扁平**（所有东西零厚度）—— 那就变成 `saas-tech` 了，本风格必须有半立体主体。
- 玻璃拟物 / 镜面金属 / 强反光 / 霓虹辉光 / lens flare / 戏剧化打光 / 暗黑背景。
- 彩虹渐变堆叠、多个 accent 抢戏、满屏图标（icon soup）、廉价剪贴画。
- 真实产品 UI 截图 / 仪表盘截图 —— 要画**抽象**模块，不画真界面。
- 拟人卖萌吉祥物 / 卡通大眼角色（本风格**无主角**，靠物件 + 节点叙事）。

---

## 提示词模板

> 英文写画面主体，中文短标注原样放进 `{{LABELS}}`（出图模型能直接渲染中文字）。
> `{{PRIMARY}}` / `{{ACCENT}}` / `{{RATIO}}` 是显式变量，渲染前替换成真值。一次一张，不拼多张。

**变量**：`{{SUBJECT}}` 本张微缩世界主体母题 · `{{COMPOSITION}}` 构图（workflow / system-detail / concept-metaphor / method-layers）· `{{LABELS}}` ≤5 个中英文短标签 · `{{PRIMARY}}` 蓝紫主色 · `{{ACCENT}}` 单一亮强调色 · `{{RATIO}}` 比例。

```
Isometric 2.5D illustration, hybrid 3D-meets-flat style: semi-realistic soft-rendered 3D
objects (Blender / clay-render look) placed into a clean flat-vector scene.

Subject: {{SUBJECT}} — arranged as a tiny top-down miniature world / diorama on an
isometric stage. Single concept, one clear idea, not crowded.
Composition: {{COMPOSITION}}, strict 30-degree isometric top-down view, PARALLEL
projection, NO vanishing point, NO perspective. Generous empty space, subject under ~60%.

Dimension mix (core rule): the MAIN objects are volumetric, semi-realistic 3D with
rounded bevels, matte soft-touch / clay material, gentle volume and layering; the
background, ground plane, connector lines and small accessories stay FLAT vector color
blocks with zero thickness. A few stacked layers / modular boxes / connected data-flow
nodes sit on a flat isometric floor grid.

Lighting: one soft key light from top-left, subtle highlight, thin soft contact shadow
under each object — just enough to read volume. NO hard specular, NO glass / mirror
reflection, NO dramatic lighting, NO glow.

Background: pure white #FFFFFF [or very light cool gray #F7F9FC], a flat isometric ground
grid as the stage. Lots of clean negative space.

Color: blue-violet {{PRIMARY}} (deep #4F46E5) for the main 3D modules and brand presence;
tech blue #3B82F6 + neutral gray #94A3B8 for secondary boxes, the flat connector lines and
the ground grid; ONE bright accent {{ACCENT}} used only for the key node / the main data-flow
arrow / one glowing highlight object. Cool, sober, premium tech feel.

Short labels (max 5, tiny and legible, Chinese or English terms allowed): {{LABELS}}

Aspect ratio {{RATIO}}.

Avoid: perspective / vanishing point / depth-of-field, full photoreal 3D, PBR reflections,
fully-flat (everything must NOT be zero-depth), glass skeuomorphism, mirror metal, neon glow,
lens flare, dark dramatic lighting, rainbow gradients, icon soup, cheap clipart,
real product UI / screenshots, cartoon mascot characters.
```

> 标注上限 **≤ 5**（半立体物件本身已携带信息，标签要更克制，否则画面变挤）。
> 一张图只用 1 个 `{{ACCENT}}`；一句话讲不清主体 = 锚点不单一，回 shot list 重切。

---

## 示例提示词（主题：Shulex 跨境电商 AI 客服系统架构 · 等距解释图 · B2B deck 首屏）

> 锚点类型：流程 / 结构（多渠道跨境会话进来 → AI 客服引擎处理 → 工单分流 / 转化收口，整套摆成可俯瞰的微缩物流-客服小世界）。
> 构图：workflow（左输入 → 中处理 → 右输出）摆在等距沙盘上。accent 抽 **电子绿 `#00FF95`** 标主数据流 + 转化节点。可直接喂给 `render.js`。

```
Isometric 2.5D illustration, hybrid 3D-meets-flat style: semi-realistic soft-rendered 3D
objects (Blender / clay-render look) placed into a clean flat-vector scene.

Subject: a cross-border AI customer-service system shown as a tiny top-down miniature world.
On the LEFT, three small volumetric rounded chat-bubble blocks, each tagged with a different
language, feed into the scene. In the CENTER stands the hero object: a chunky semi-realistic
3D module — a small rounded server / brain-engine block in blue-violet — that routes the
conversations; thin flat connector lines fan out of it. On the RIGHT, the lines drop through
a low isometric funnel into a single glowing checkout / order node, next to a couple of
stacked modular boxes representing tickets and shipping nodes. Single concept, not crowded.
Composition: left-to-right workflow laid on an isometric stage, strict 30-degree top-down
view, PARALLEL projection, NO vanishing point, NO perspective. Generous empty space, subject
under ~60% of frame.

Dimension mix (core rule): the chat-bubble blocks, the central routing engine, the funnel and
the boxes are volumetric semi-realistic 3D with rounded bevels and matte clay material and
gentle layering; the ground plane, the connector lines, the language tags and the floor grid
stay FLAT vector color blocks with zero thickness.

Lighting: one soft key light from top-left, subtle highlight, thin soft contact shadow under
each object. NO hard specular, NO glass / mirror reflection, NO dramatic lighting, NO glow
except the single accent node.

Background: pure white #FFFFFF with a flat light-gray isometric ground grid as the stage.
Lots of clean negative space.

Color: blue-violet #6366F1 (deep #4F46E5) for the central routing engine and main modules;
tech blue #3B82F6 + neutral gray #94A3B8 for the secondary boxes, the flat connector lines and
the ground grid; ONE bright accent electric green #00FF95 used only for the main data-flow
arrow and the final conversion / checkout node. Cool, sober, premium B2B tech feel.

Short labels (max 5, tiny and legible): "多语言", "AI 客服", "智能分流", "工单", "转化".

Aspect ratio 16:9.

Avoid: perspective / vanishing point / depth-of-field, full photoreal 3D, PBR reflections,
fully-flat (everything must NOT be zero-depth), glass skeuomorphism, mirror metal, neon glow,
lens flare, dark dramatic lighting, rainbow gradients, icon soup, cheap clipart,
real product UI / screenshots, cartoon mascot characters.
```

（标注 5 个踩上限；单一 accent 电子绿只标主数据流 + 转化收口；蓝紫主、冷蓝/灰次、扁平连线与地台拉开维度、大留白；30° 真等距无透视；16:9——可直接喂 `render.js`。要换 Shulex 品牌色，把 `#6366F1` / `#4F46E5` 全替换即可。物流/出货主题想要暖反差，把 accent 整体换成橙 `#F97316`。）
