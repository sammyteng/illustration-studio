---
slug: pixel-8bit-retro
name_cn: 像素8-bit复古
name_en: Pixel Art / 8-bit
channel: 小红书封面 / 公众号头图 / 游戏化叙事长文 / Gen Z & 开发者向内容 / 销售战报趣味头图
has_text: true
default_backend: gpt          # 有字 → gpt-image-2（中文字稳）；纯画面无字才退 gemini nano
default_ratio: "4:3"
---

# 视觉 DNA · 像素8-bit复古 / Pixel Art

> 通用提炼 / 构图 / 渲染兜底 / 质检双闸见 `_illustration-engine/ENGINE.md`。
> 本文件只定义「像素8-bit复古」这一套皮肤的**长相 + 提示词**，不复述引擎方法论。
>
> 一句话：复古游戏机的方格点阵画风——方块构图、有限色盘、像素字体、游戏 HUD，
> 怀旧又游戏化，辨识度极高、转发率高，深得 Gen Z 和开发者喜爱。

---

## 视觉 DNA

> 下列 5 项是**硬性必含**，每条提示词都要带齐；缺任一 = Gate 1 不过。
> 这套风格的灵魂是「硬边方块 + 有限色 + 游戏感」，三者一起出现才像 8-bit，少一个就垮成普通扁平图。

1. **背景**：纯色块或低饱和**单色底**（深蓝夜空 / 深紫 / 黑 / 草绿关卡底），可铺**像素网格地砖**或 8-bit 远景剪影（山、云、城堡、星星都用方块拼）。背景元素同样是方块拼的，**绝不出现平滑渐变或矢量曲线**。可选**视差分层**：远景剪影 + 中景平台 + 前景主体，营造横版游戏纵深。

2. **质感 / 渲染（最关键的辨识器）**：硬边方块像素（hard-edged blocky pixels）、**绝对无抗锯齿（no anti-aliasing）、绝对无平滑**，每个像素是清晰可数的方格。整体看上去像被放大的低分辨率精灵图（sprite），统一像素网格密度（pixel grid 一致，别一半粗一半细）。**渐变与光影用抖动点阵（dithering，棋盘格/斜纹排点）实现，不用任何平滑过渡**。

3. **形状语言**：一切用**方块堆叠**——角色、物件、图标都是 sprite 风格的方块拼图；轮廓硬、台阶状边缘（staircase edges），**不允许圆滑曲线、不允许细矢量描边**。物件控制在少量、可数、像复古游戏画面里那种「一眼数得清」的精度。

4. **游戏化元素（这套风格的专属符号，至少出现 1-2 个）**：像素字体文字（Press Start 2P / VT323 那种方块字）、游戏 HUD 部件——**进度条 / 血条（红绿格子条）/ 经验槽 / 金币计数 / 心形生命 / 关卡牌 LEVEL 1 / 通关旗 / 像素箭头**。文字标注本身也用像素字体渲染，是画面的一部分而非外贴。

5. **配色与比例**：复古游戏机**有限调色板**（见下「配色」），硬边纯色、**色块数量克制（建议主体 ≤ 6 色）**，分关卡可整体换色调；比例默认 `4:3`（致敬 CRT 老电视/街机屏），提示词里写成显式 `{{RATIO}}` 变量。

> **气质锚点**：FC/红白机、街机、像素 RPG 横版过关。怀旧 + 游戏化的**强情绪触发器**，要让人一眼回到童年游戏厅，并立刻 get 到「这是个可以打怪通关的故事」。

---

## 配色

> 复古游戏机有限色盘，硬边纯色无渐变，渐变一律用 dithering 点阵假装。
> 默认走「任天堂红蓝 + 关卡底色」，可整体换 CGA 复古盘做差异化。每条提示词只选 1 套基底，别混盘。

| 角色 | 默认 hex | 语义用途 |
|---|---|---|
| **主色 PRIMARY** | 任天堂红 `#E60012` / 任天堂蓝 `#0066CC` | 主角 sprite、关键物件、品牌存在感 |
| **辅助色 SECONDARY** | 关卡草绿 `#3DA34D`、泥土棕 `#8B5A2B`、夜空深蓝 `#1A1A40`、像素白 `#F8F8F8` | 背景地砖 / 平台 / 远景剪影 / 文字底 |
| **强调色 ACCENT（HUD 高亮，选 1）** | 金币黄 `#FFD000`（默认）/ 经验绿 `#39FF14` / 警示橙 `#FF7A00` | **只点 HUD 与"通关时刻"**：进度满格、金币、得分跳字、终点旗、升级闪光 |

**备选复古盘（差异化时整盘替换）**：
- **CGA 经典 4 色**：黑 `#000000` / 青 `#55FFFF` / 品红 `#FF55FF` / 白 `#FFFFFF`（最复古、最像老 DOS 游戏）。
- **Game Boy 绿 4 阶**：`#0F380F` / `#306230` / `#8BAC0F` / `#9BBC0F`（单色怀旧，做「闷头肝」叙事很对味）。

> **铁律**：色彩边界永远是**硬切**（hard color boundary），任何位置都不允许 CSS 那种平滑渐变；需要明暗过渡时只能用 ACCENT 与底色做 dithering 点阵。

---

## 禁忌

> 命中任一即 Gate 1 不过——这套风格最容易翻车的就是"画得太精致/太平滑"，反而丢了 8-bit 魂。

- ❌ **抗锯齿 / 平滑边缘 / 矢量曲线 / 高清写实**——只要边缘是顺滑的就不是像素画。
- ❌ **平滑渐变、霓虹辉光、玻璃拟态、柔和投影**——所有过渡必须 dithering，不许 blur。
- ❌ **现代扁平矢量 / Material 图标 / 手绘潦草 / 真实照片或照片拼贴**——会和库内其他 4 套（手绘、SaaS 科技、暖系、单线）撞或显廉价。
- ❌ **3D 渲染、等距 isometric 仿真光影、Minecraft 体素 3D**——这是**2D 正面/横版** sprite，不是 3D 体素建模。
- ❌ **色彩超量 / 彩虹堆叠 / 像素密度忽大忽小**——有限色 + 统一网格是底线。
- ❌ 像素字体写**长句概念词**（"提升协作效率""全链路智能化"）——HUD 文字只放短、能读、有游戏语境的词。

---

## 提示词模板

> 英文写画面主体，中文短标注放进 `{{LABELS}}`（出图模型可直接渲染中文方块字）。
> `{{PRIMARY}}` / `{{ACCENT}}` / `{{RATIO}}` 是**显式变量**，渲染前替换成真值。
> DNA 关键词（pixel art / hard-edged / no anti-aliasing / dithering / limited palette / HUD）**写死在模板里，不可删**。

### 变量占位

| 变量 | 默认 | 说明 |
|---|---|---|
| `{{SUBJECT}}` | — | 本张主体（主角 sprite / 怪物 / 物件 / 关卡场景）|
| `{{COMPOSITION}}` | — | 构图（side-scroller 横版过关 / level-map 关卡地图 / before-after 关卡对比 / HUD-dashboard）|
| `{{PRIMARY}}` | 任天堂红 `#E60012` / 蓝 `#0066CC` | 主角与关键物件主色 |
| `{{ACCENT}}` | 金币黄 `#FFD000` | HUD 与通关时刻高亮，只点一处语义 |
| `{{LABELS}}` | — | ≤6 个像素字体短标注（中文/英文皆可）|
| `{{RATIO}}` | `4:3` | 渠道比例 |

### 模板骨架

```
Retro 8-bit pixel art illustration, classic NES / arcade video-game style,
hard-edged blocky pixels with NO anti-aliasing, NO smoothing, every pixel a clean visible square,
limited retro game color palette, gradients faked only with dithering (checkerboard/diagonal dot patterns).

Subject: {{SUBJECT}} — single clear idea, rendered as crisp pixel sprites, not crowded.
Composition: {{COMPOSITION}}, like a frame from a retro platformer / level screen, optional parallax layers
(far silhouette background + mid platform + foreground subject).

Background: flat single-color or pixel-tiled scene (dark sky / level ground / castle silhouette),
all built from blocks — absolutely no smooth gradient or vector curve.

Color: {{PRIMARY}} for the main sprite and key objects; muted retro secondary colors for ground/platform/sky;
ONE bright accent {{ACCENT}} used only for the HUD and the "clear / win" moment (full progress bar, coin, score pop, finish flag).
Hard color boundaries everywhere, no blur.

Game UI elements present: pixel-font text, HUD parts — health/progress bar, coin or score counter, LEVEL tag, arrow or finish flag.
Pixel-font (Press Start 2P / VT323 look) short labels, rendered as part of the art: {{LABELS}}

Aspect ratio {{RATIO}}. Nostalgic, gamified, retro arcade feel, high recognizability.

Avoid: anti-aliasing, smooth edges, vector curves, photorealism, smooth gradients, neon glow, glassmorphism,
soft shadows, modern flat vector, material icons, 3D render, isometric realism, Minecraft voxel 3D, hand-drawn sketch,
photo collage, too many colors, inconsistent pixel grid.
```

> 拼词提醒：主体一句话讲不清 = 锚点不单一，回 shot list 重切。一张图只用 1 个 `{{ACCENT}}` 点「通关时刻」。

---

## 示例提示词

**主题**：跨境选品「打怪升级」游戏化叙事 / 销售冲业绩「通关」趣味头图。

> 锚点类型：状态转换 + 游戏化隐喻（销售像横版过关：踩着一张张订单平台往上跳，连打几只"难谈客户"小怪，最后插旗通关冲到业绩目标）。
> 构图：side-scroller 横版过关，左起跳 → 中段打怪/吃金币 → 右终点旗。
> ACCENT 抽**金币黄 `#FFD000`** 点 HUD 进度条满格 + 终点通关旗 + 得分跳字。
> 比例 `4:3` 致敬街机/CRT 屏。

```
Retro 8-bit pixel art illustration, classic NES / arcade video-game style,
hard-edged blocky pixels with NO anti-aliasing, NO smoothing, every pixel a clean visible square,
limited retro game color palette, gradients faked only with dithering (checkerboard/diagonal dot patterns).

Subject: a tiny pixel-sprite salesperson hero in a red cap mid-jump across a side-scrolling platformer level;
the platforms are blocky pixel blocks each shaped like a stacked "order/parcel box"; the hero is collecting
yellow pixel coins in mid-air; a small grumpy pixel monster ("tough client") with X-eyes blocks the path on a
mid platform; on the far right a tall checkered finish flag marks the goal on top of the highest platform.
Single clear idea — a sales "level run", not crowded.
Composition: left-to-right side-scroller platformer frame with parallax layers — far dark-blue night-sky
silhouette of a pixel city + pixel stars, mid green/brown blocky platforms, foreground hero sprite.

Background: flat dark-blue pixel night sky #1A1A40 with blocky pixel stars and a far city silhouette,
green level ground tiles at the bottom — all built from blocks, no smooth gradient, no vector curve.

Color: Nintendo red #E60012 for the hero sprite and key objects; muted retro greens/browns
(#3DA34D ground, #8B5A2B box-platforms) for the level; ONE bright accent coin-gold #FFD000 used only for the
collected coins, the full HUD progress bar, the floating score pop, and the finish flag highlight.
Hard color boundaries everywhere, no blur, light dithering for any shading.

Game UI elements present: top-left a pixel HUD with a near-full green progress bar, a coin counter, a heart life icon,
and a "LEVEL 3" tag. Pixel-font (Press Start 2P / VT323 look) short labels, rendered as part of the art:
"跨境选品", "打怪升级", "难谈客户", "金币 ×99", "冲业绩", "GOAL".

Aspect ratio 4:3. Nostalgic, gamified, retro arcade feel, high recognizability.

Avoid: anti-aliasing, smooth edges, vector curves, photorealism, smooth gradients, neon glow, glassmorphism,
soft shadows, modern flat vector, material icons, 3D render, isometric realism, Minecraft voxel 3D, hand-drawn sketch,
photo collage, too many colors, inconsistent pixel grid.
```

（标注 6 个正好踩上限；单一 accent 金币黄只点 HUD + 金币 + 终点旗这一组「通关」语义；主色任天堂红立人物、绿棕做关卡、深蓝夜空压底；硬边方块 + dithering 阴影 + 像素字体三件套齐全；比例 4:3。有字 → 默认走 `gpt-image-2`，可直接喂 render.js：
`node "$HOME/shared-skills/_illustration-engine/render.js" --backend gpt --aspect 4:3 --prompt "<上面整段>"`。
换 CGA 复古盘只需把红/蓝/绿棕整盘替换成黑/青/品红/白。）
