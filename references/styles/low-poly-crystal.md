---
name_cn: 低多边形水晶
name_en: Low Poly / Crystalline
slug: low-poly-crystal
channel: 区块链 / 数据可视化 / 3D / 硬科技 SaaS 技术发布封面 / 主视觉 / 背景纹理
has_text: false
default_backend: nano   # 无文字 → Gemini Nano Banana Pro（线条/质感更精细）；若加了中文标注则切 gpt-image-2
default_ratio: "16:9"
one_liner: 用三角面切割出的几何块面物体，棱角分明带渐变光，自带未来科技和数字结构气质。
---

# 低多边形水晶 · Low Poly / Crystalline

> 通用提炼 / 构图 / 渲染兜底 / 质检双闸见 `_illustration-engine/ENGINE.md`。
> 本文件只写这套风格的「长相 + 提示词」，不重复引擎方法论。
> 角色设定：**无主角**。靠三角面切割的几何主体本身说话，不放卡通吉祥物 / 真人。

---

## 视觉 DNA

每张图、每条提示词都必须同时满足以下硬性必含项，缺任一 = Gate 1 不过。

1. **背景**：深色为底——深空蓝黑 `#0A0E1A` / 深靛 `#0D1B2A` / 近黑 `#07090F`。可叠**极淡**的低多边形暗纹、稀疏顶点星点或微弱体积光，但必须压暗、不抢主体。**禁纯白底**（纯白会杀掉宝石冷光，这套风格的灵魂是暗底里发光的晶体）。

2. **质感 = 灵魂铁律**：主体表面由**大量清晰的三角面（triangulated facets / low-poly mesh）**切割构成，面与面之间**硬转折、棱角分明**，能看到清楚的三角形边界。**每个三角面带独立的线性渐变受光**（同一面从亮到暗的平涂渐变，不是写实柔光），相邻面亮度有跳变 → 形成切割宝石 / 水晶 / 低面数 3D 模型的块面感。比写实 3D 轻、比扁平有体积。

3. **形状语言**：主体是被多边形化的几何体——晶簇、棱柱、多面体、被三角网格包裹的球 / 立方 / 物件。轮廓是**折线硬边**，不要圆润曲面。允许半透明晶体内部透出折射面。

4. **光影**：
   - **顶点高光（vertex highlights）**：在关键三角面的交点 / 棱上点几处亮点 / 短亮线，像宝石的反光眼。
   - **冷光氛围**：主体边缘有微弱青绿 / 蓝紫辉光（rim light / glow），暗底里"会发光"。
   - **渐变受光**：每面是线性渐变平涂，整体呈现"被一束冷光从一侧照亮"的统一光向。
   - 投影克制或不要——靠暗底和辉光托起体积，不靠地面阴影。

5. **比例**：默认 `16:9`（技术封面 / 主视觉 / 横版背景）；竖版海报可 `3:4`。提示词里写成显式 `{{RATIO}}` 变量。

---

## 配色

| 角色 | 默认 HEX | 语义用途 |
|---|---|---|
| **主色 · 科技蓝紫渐变面** | 蓝 `#3B82F6` → 紫 `#8B5CF6` 线性渐变 | 主体三角面的基底受光，铺满大部分晶体面 |
| **辅助 · 深底 / 中间调面** | 底 `#0A0E1A` · 暗面 `#1E293B` / `#312E81` | 背景 + 主体背光面，压住对比、托出发光面 |
| **强调 · 青绿冷高光** | 青 `#22D3EE` · 莹绿 `#34D399`（顶点亮点 `#A7F3D0`） | **只做**顶点高光 / 棱线反光 / 边缘辉光，是宝石的"亮眼"，绝不铺满 |

**配色铁律**：主体走蓝→紫冷色渐变，强调色只点在顶点 / 棱 / 边缘辉光（占比极小）。整体是**单一冷色家族 + 一个更亮的冷高光**，不出现暖色（红 / 橙 / 黄）大面积入侵，否则破坏宝石冷光气质。

> 变量化：`{{PRIMARY_GRADIENT}}`（默认 `#3B82F6→#8B5CF6`）与 `{{ACCENT_GLOW}}`（默认 `#22D3EE`）做成显式占位，方便按品牌色替换（如换成 Shulex 品牌冷色）。

---

## 禁忌（命中即 Gate 1 不过）

- ❌ **纯白 / 浅色背景**——杀掉宝石冷光，这套必须暗底发光。
- ❌ **圆润柔和曲面 / 写实柔光渲染**——丢掉三角面硬转折就不是低多边形了。
- ❌ 三角面太小太碎成"噪点 / 马赛克"——面要够大、边界看得清，能数得出三角形。
- ❌ 扁平无受光的纯色多边形（缺每面渐变 = 变成纸片，没有晶体体积）。
- ❌ 暖色大面积入侵（红橙黄铺面）、彩虹渐变堆叠、多个强调色抢戏。
- ❌ 卡通 / 手绘 / 复古做旧 / 真实照片拼贴 / 满屏图标（icon soup）。
- ❌ 真实产品 UI 截图 / 仪表盘界面——画**抽象晶体结构**，不画真界面。
- ❌ 画面填满、主体超 ~65% —— 暗底要留呼吸空间衬托发光。

---

## 提示词模板

> 英文写画面主体（生图模型对英文术语最敏感），中文短标注按需放进 `{{LABELS}}`。
> `{{PRIMARY_GRADIENT}}` / `{{ACCENT_GLOW}}` / `{{RATIO}}` / `{{SUBJECT}}` / `{{COMPOSITION}}` / `{{LABELS}}` 为显式变量，渲染前替换成真值。
> **本风格默认 has_text=false → 走 Gemini Nano（`{{LABELS}}` 留空）**；若主题确实需要中文标注，再填 `{{LABELS}}` 并把后端切 gpt-image-2。

```
Low-poly crystalline 3D illustration, faceted geometric object built from large clear
triangular polygons (low-poly mesh), sharp angular edges with hard transitions between
faces — like a cut gemstone / crystal / low-poly 3D model. Digital-structure, hard-tech
futuristic feel.

Subject: {{SUBJECT}} — single concept, one clear structure, not crowded.
Composition: {{COMPOSITION}}, generous dark negative space, main subject under ~65% of frame.

Faceting: each triangular face carries its OWN linear gradient shading (bright-to-dark
flat gradient per face), adjacent faces jump in brightness so the form reads as a cut
crystal lit from one side. Edges are crisp folded contours, no smooth curved surfaces.

Background: deep space blue-black #0A0E1A (or deep indigo #0D1B2A), with an extremely
subtle low-poly dark pattern and sparse glowing vertex specks. No white background.

Color: object faces in a cool {{PRIMARY_GRADIENT}} (blue #3B82F6 → violet #8B5CF6)
gradient; back/shadow faces in dark #1E293B / #312E81. Accent {{ACCENT_GLOW}} (cyan
#22D3EE / emerald #34D399) ONLY as vertex highlights, sharp specular glints on key edges,
and a faint rim glow around the silhouette — the crystal's bright "eyes". Cold gem light,
single cool color family, no warm colors.

[Labels (optional, only if needed, tiny, Chinese terms): {{LABELS}}]

Aspect ratio {{RATIO}}. Premium hard-tech / blockchain / data aesthetic, structured
abstract, crystal-grade depth, clean and not noisy.

Avoid: white/light background, smooth rounded surfaces, realistic soft rendering,
tiny mosaic-noise facets, flat unshaded polygons, warm-color flooding, rainbow gradients,
cartoon, hand-drawn, vintage, photo collage, icon soup, real product UI / screenshots,
overcrowded frame.
```

> 拼词提醒：主体一句话讲不清 = 锚点不单一，回 shot list 重切。一张图只切**一个**几何主体被晶体化，别把多个晶体堆满画面。

---

## 示例提示词

> 主题：**跨境数据 / 选品算法可视化 —— SaaS 技术发布的硬科技封面**
> 锚点类型：概念隐喻（海量跨境商品数据 → 选品算法把它们结晶化、聚合成一个被照亮的核心结构）
> 构图：concept-metaphor（一个大的晶体核心 + 周围向其汇聚的低多边形数据节点 / 数据流）
> 强调色：抽**青 `#22D3EE`** 做顶点高光与汇聚流向辉光。
> has_text=false（封面纯画面）→ 走 Gemini Nano Banana Pro，`--has-text false`。

```
Low-poly crystalline 3D illustration for a SaaS hard-tech product launch cover, faceted
geometric forms built from large clear triangular polygons (low-poly mesh), sharp angular
edges, cut-gemstone / crystal look. Digital-structure, blockchain / data aesthetic.

Subject: a large luminous central crystal core — a multi-faceted polyhedron representing
a cross-border product-selection algorithm — with dozens of smaller low-poly data nodes
(tiny faceted shards and points) streaming inward from the surrounding dark space and
crystallizing onto the core. One clear idea: scattered cross-border data converging and
"crystallizing" into a selected core.

Composition: concept-metaphor, central crystal at ~60% frame, faint converging streams of
glowing vertex specks flowing in from the edges, generous dark negative space around it.

Faceting: each triangular face has its own linear gradient (bright top-left to dark
bottom-right), adjacent faces jump in brightness, crisp folded edges, no smooth curves —
clearly a cut crystal lit from the upper-left.

Background: deep space blue-black #0A0E1A, extremely subtle low-poly dark pattern, sparse
distant glowing vertex specks like data stars. No white background.

Color: crystal faces in a cool blue #3B82F6 → violet #8B5CF6 gradient; back/shadow faces
in dark #1E293B and #312E81; accent cyan #22D3EE used ONLY as bright vertex highlights,
sharp specular glints on the key edges of the core, the converging data streams, and a
faint cyan rim glow around the crystal silhouette. Cold gem light, single cool color
family, no warm colors, not noisy.

No text. Aspect ratio 16:9. Premium, structured, crystal-grade depth.

Avoid: white/light background, smooth rounded surfaces, realistic soft photo rendering,
tiny mosaic-noise facets, flat unshaded polygons, warm-color flooding, rainbow gradients,
cartoon, hand-drawn, vintage, real product UI / dashboard screenshots, overcrowded frame.
```

> 直接渲染（无文字 → Gemini Nano）：
> ```bash
> node "$HOME/shared-skills/_illustration-engine/render.js" \
>   --backend nano --has-text false --aspect 16:9 --out /tmp/illus \
>   --prompt-file <把上面这条 prompt 存成的文件>
> ```
