---
slug: flat-lay-knolling
name_cn: 平铺俯拍组合图
name_en: Flat-lay / Knolling
channel: 配件 / 多SKU / 开箱 / 美妆套装 电商 / 产品目录 / 套装详情页
has_text: false
default_backend: nano           # 纯产品摄影、无文字叠加 → Gemini Nano Banana Pro（材质 / 倒影 / 质感最精细）；仅当要加产品名小字才切 gpt
default_ratio: "4:3"
one_liner: 正俯拍 90° 平铺组合图：产品 + 配件整齐归置（knolling）于干净浅色表面，均匀柔光、规整网格感、editorial 开箱感，大片留白透气。
---

> 通用提炼 / 构图 / 渲染路径见 `references/engine.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像 Kinfolk / MUJI / Apple 配件页 / 高端开箱视频的**正上方俯拍平铺图**——相机**垂直 90° 怼下来**，一组相关产品与配件被**像工具墙一样整齐归置（knolling）**在一块干净的浅色表面上，物件之间对齐、留白、呼吸，柔光均匀没有戏剧阴影，整体安静、克制、有 editorial 杂志感。**真实商业产品摄影，不是插画、不是 3D demo、不是广告版式。**
> 与库里其他风格的分界：这套是**真俯拍商业摄影质感的 knolling 平铺**。
> - 不撞 **premium-product-hero**（那套是「DTC 广告版式」——单个英雄产品正视图居中 + 顶部 wordmark + slogan + CTA 浮动情境屏；**本套是正上方 90° 俯拍、多件物归置、绝不加版式文字/slogan/按钮**）。
> - 不撞 **saas-tech**（扁平矢量科技插画）、不撞 **claymorphism**（软糯 3D 黏土）：本套是**照片级真实材质 + 真实柔光 + 真实接触阴影**，金属是真金属、布是真布，绝不卡通、绝不黏土、绝不扁平。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **🌬️ 留白（铁律 · 第一条）** | **物件群整体 ≤ 55% 画面、≥ 35% 干净空表面留白**；物件之间也留缝、不挤边、不顶满；表面大片空着透气，给标题 / copy 留地方。宁空勿满 | `generous negative space, lots of clean empty surface, lots of breathing room, objects occupy at most 55% of frame, airy and uncluttered, never edge-to-edge` |
| 2 | **正俯拍 90°（灵魂第一条）** | 相机**严格垂直从正上方拍下**，纯顶视图、零透视、零倾斜，物件全部平躺在表面上（flat-lay / top-down / overhead），不是 45° 斜俯、不是正面立拍 | `strict 90-degree top-down overhead flat-lay shot, perfectly perpendicular camera straight above, zero perspective tilt, everything lying flat on the surface` |
| 3 | **knolling 整齐归置（灵魂第二条）** | 产品 + 相关配件**像工具墙一样对齐归置**：边缘平行、间距均匀、角度规整成网格感，**或**精心错落散落但仍有秩序；线缆理顺成圈或并行，绝不乱缠 | `knolling arrangement, objects neatly organized and aligned in a tidy grid-like layout with even spacing and parallel edges (or an artfully arranged but still orderly scatter), cables coiled or laid straight, never tangled` |
| 4 | **干净浅色表面（灵魂第三条）** | 背景是**单一干净的浅色平面**——米白纸 / 浅灰大理石（细纹）/ 浅木 / 哑光浅色布，质感真实有微妙纹理，**绝不杂乱、绝不深色、绝不彩色花底** | `a single clean light-toned surface — off-white paper, light grey marble with subtle veining, pale wood, or matte light fabric — real subtle texture, never cluttered, never dark, never busy patterned` |
| 5 | **均匀柔光 + 真实接触阴影** | **大面柔光均匀铺满**，无戏剧性硬阴影、无聚光斑；每个物件下方一道**柔和真实的接触阴影 / 软投影**，把它「贴」在表面上，证明是真实摄影不是抠图拼贴 | `soft even diffused lighting filling the whole frame, no harsh dramatic shadows or spotlights, each object casting a soft realistic contact shadow grounding it on the surface, proving real photography not a cut-out collage` |
| 6 | **editorial 开箱感 / 成组叙事** | 物件是**一套相关的东西**（主产品 + 它的配件 / 一个套装 / 多 SKU），摆在一起讲「这套里有什么」的开箱故事；有杂志静物的策展感，而非随手堆 | `editorial unboxing feel, a curated set of related items (a product with its accessories / a kit / multiple SKUs) telling a "what's in the set" story, magazine-still-life curation` |
| 7 | **photoreal 商业摄影质感（核心）** | 全图**照片级真实**：真实材质反射（金属拉丝、塑料哑光、织物纹理、玻璃透光）、自然景深极浅或全清、商业静物摄影成片级，**无插画感、无 3D demo 默认渲染感、无噪点、无塑料假光** | `photorealistic commercial product photography, realistic material reflections (brushed metal, matte plastic, fabric weave, glass), studio still-life quality, NOT an illustration, not a default 3D render, no noise, no fake plastic lighting` |
| 8 | **配色克制协调** | **浅色表面（米白 / 大理石 / 浅木）+ 各产品本色**，整体色调协调统一、低饱和打底，让产品本色成为唯一活跃的颜色，不撞色、不花哨 | `restrained harmonious palette: light neutral surface plus each product's own real color, low-saturation base, coordinated and calm, the products' colors the only lively accent` |
| 9 | **无版式文字 / 无叠加** | 画面**纯产品摄影，零文字、零 logo 水印、零 slogan、零按钮、零浮动 UI 面板**；干净到能直接当详情页底图、上面再叠标题 | `pure product photo, absolutely no overlaid text, no slogan, no button, no logo watermark, no floating UI panels — clean enough to drop a headline on top later` |
| 10 | **比例** | 默认 `4:3`（目录 / 详情页通用）；竖版套装详情用 `3:4`，方版社媒用 `1:1` | `4:3 (or 3:4 / 1:1)` |

> 一眼自检：把图缩成拇指大，**仍像一张「能直接进产品目录 / 开箱页的高级俯拍静物照」**——正上方拍下、一组配件整齐归置在浅色干净表面、柔光、大片留白、真实材质。看起来斜俯 / 立拍 / 物件乱堆 / 深色花底 / 像插画或 3D demo / 有 slogan 按钮 = 错。

---

## 配色

**浅色干净表面打底 + 产品本色点活**，整体协调克制。表面是低饱和中性浅色，唯一活跃的颜色来自产品自身，不另加抢眼装饰色。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **表面 · 米白纸** | 暖米白 / Warm Off-White | `#F4F1EA` | 最常用的平铺背景表面 |
| **表面 · 浅灰大理石** | 浅大理石灰 / Pale Marble | `#ECECEE` | 大理石细纹表面（带极淡灰纹理） |
| **表面 · 浅木** | 浅木原色 / Pale Oak | `#E4D5BE` | 浅木纹表面（暖、自然） |
| **接触阴影** | 柔灰影 / Soft Shadow Grey | `#D8D4CC` | 物件下方的柔和接触阴影 / 软投影 |
| **冷调高光** | 近白 / Near White | `#FBFAF7` | 表面受光区 / 留白最亮处 |
| **理性点缀（极克制·可选）** | 浅雾蓝 / 灰绿 | 浅雾蓝 `#AEC2C9` / 灰绿 `#A7B5A0` | 仅当套装本身需要一个统一辅料色（如收纳袋）时，单一低饱和色，面积小 |
| **产品本色** | 随产品而定 | —— | 各产品自身真实颜色，是全图唯一允许「鲜活」的色彩来源 |

铁律：
- **表面永远是单一浅色**（米白 / 大理石 / 浅木 / 哑光浅布），绝不深色、绝不高饱和、绝不花纹乱底。
- **整组色调要协调**：产品本色之间不打架；如有辅料（收纳袋 / 衬布）用单一低饱和色统一，不喧宾夺主。
- **低饱和打底**：除产品本色外全图饱和度压低，产品因此自然「跳」出来。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **视角错**：45° 斜俯 / 正面立拍 / 任何透视倾斜 / 物件没平躺——本套必须是**严格 90° 正俯拍 flat-lay**
- ❌ **乱堆无序**：物件随手堆叠、线缆乱缠、边缘不对齐、顶满画面没缝隙、没有 knolling 秩序感
- ❌ **背景错**：深色底 / 高饱和彩色底 / 花纹乱底 / 杂乱真实桌面（带咖啡渍、纸团、无关杂物）/ 户外实景
- ❌ **留白不足**：物件群超过画面约 55%、四周顶满、没有干净空表面留白（违反🌬️留白铁律 = 直接驳回）
- ❌ **串味（重点防撞）**：
  - 别撞 **premium-product-hero**：不要做成「单个产品正视图居中 + 顶部 wordmark + slogan + CTA + 身后浮动情境屏」的 DTC 广告版式；本套是 90° 俯拍多件 knolling、**零版式文字**
  - 别撞 **saas-tech**：不要扁平矢量插画 / 卡通描边 / 几何色块
  - 别撞 **claymorphism**：不要软糯黏土 3D / Q 弹假材质 / 玩具感
  - 别撞手绘草图 / 孔版油印 / 半色调网点 / 拼贴
- ❌ **加了文字版式**：slogan / 按钮 / CTA / 浮动 UI 面板 / logo 水印 / 任何叠加文字（本套 `has_text:false`，纯摄影）
- ❌ **假质感**：插画感 / 3D 软件默认渲染 demo 感 / 塑料假光 / 噪点 / 物件悬空无接触阴影 / 抠图拼贴边界
- ❌ **多产品却不成套**：摆一堆毫不相关的东西凑数——本套要的是「**一套相关物**」的开箱叙事，不是杂货摊

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。全英文写画面主体 + 写死 DNA 关键词；本套**默认无任何画面内文字** → 走 `nano`（Gemini Nano Banana Pro，材质 / 倒影 / 真实质感最精细）。仅当确实要在某个物件上印产品名小字时才切 `gpt`。

```
Photorealistic commercial product photography, {{RATIO}} aspect ratio, a strict
90-degree top-down overhead flat-lay shot — camera perfectly perpendicular
straight above, zero perspective tilt, everything lying flat on the surface.

THE SET (knolling): a curated set of related items — {{PRODUCT}} together with
{{ACCESSORIES}} — neatly organized and aligned in a tidy knolling layout with
even spacing and parallel edges (or an artfully arranged but still orderly
scatter); any cables coiled neatly or laid straight, never tangled. The grouping
tells an editorial "what's in the set" unboxing story. It visualizes
"{{COGNITIVE_ANCHOR}}".

SURFACE: a single clean light-toned surface — {{SURFACE}} — with real subtle
texture, never cluttered, never dark, never a busy pattern.

LIGHT + GROUNDING: soft even diffused lighting filling the whole frame, no harsh
dramatic shadows or spotlights; each object casts a soft realistic contact
shadow grounding it on the surface — real photography, not a cut-out collage.

COMPOSITION (breathing room is mandatory): generous negative space, lots of
clean empty surface around and between the objects, the whole group occupying at
most 55% of the frame and leaving 35%+ airy empty surface, never edge-to-edge,
calm and uncluttered.

MATERIALS + FINISH: photoreal commercial still-life quality — realistic material
reflections ({{MATERIALS}}), accurate textures, studio catalog finish; NOT an
illustration, not a default 3D render, no noise, no fake plastic lighting, no
cut-out edges.

PALETTE: the light neutral surface plus each product's own real color, low
saturation base, coordinated and calm, the products' colors the only lively
accent{{ACCENT_CLAUSE}}.

PURE PHOTO: absolutely no overlaid text, no slogan, no button, no logo
watermark, no floating UI panel — clean enough to drop a headline on top later.

Avoid: 45-degree angle or any perspective tilt or upright front shot, messy
piling, tangled cables, edge-to-edge cramming with no breathing room, dark /
saturated / busy patterned background, cluttered real desk with unrelated junk,
DTC ad layout with wordmark / slogan / CTA / floating context panels, flat
vector or cartoon illustration, soft clay 3D, hand-drawn / risograph / halftone
/ collage styles, fake plastic lighting, floating objects with no contact
shadow, any overlaid text.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `4:3`（默认目录 / 详情页）/ `3:4`（竖版套装详情）/ `1:1`（社媒方版）|
| `{{PRODUCT}}` | 主产品的具体写实描述（材质 + 形态 + 颜色），如「a slim aluminium 65W GaN fast charger」|
| `{{ACCESSORIES}}` | 配套的相关配件（3–6 件即可，别堆太多），如「a braided USB-C cable, a pair of compact earbuds in a case, a small zip pouch」|
| `{{COGNITIVE_ANCHOR}}` | 这张图要让人 1 秒感受到的核心叙事（如「一套出门就能全搞定的随身充电方案，整齐到一眼看清里面有什么」）|
| `{{SURFACE}}` | 表面材质，如 `warm off-white paper #F4F1EA` / `light grey marble with subtle veining #ECECEE` / `pale oak wood #E4D5BE` |
| `{{MATERIALS}}` | 这组物件的真实材质关键词，如 `brushed aluminium, matte plastic, braided nylon, soft fabric pouch`，帮模型打出真实反射 |
| `{{ACCENT_CLAUSE}}` | 若有统一辅料色，如 `; a single misty-blue #AEC2C9 pouch ties the set together`；不需要就填空字符串 `` |

> 物件总数控制在 **4–7 件**（主产品 + 3–6 配件），够讲清「这套有什么」即可，宁少勿多——多了就破留白、破秩序。

---

## 示例提示词（主题：跨境 3C · 一套出行数码配件平铺俯拍 · 浅米色背景 · 留白足）

> 认知锚点：**一套「出门就能全搞定」的随身数码配件——充电器、数据线、耳机、收纳袋整齐归置，一眼看清里面有什么，井井有条到让人安心。**
> 隐喻 / 构图：严格 90° 正俯拍，GaN 充电器 + 编织数据线（理成圈）+ 耳机收纳盒 + 拉链收纳袋，knolling 对齐归置在浅米色纸面上，每件下方柔和接触阴影，大片干净留白透气。4:3，纯产品摄影零文字。可直接喂 `render.js`（`--backend nano --aspect 4:3`）。

```
Photorealistic commercial product photography, 4:3 aspect ratio, a strict
90-degree top-down overhead flat-lay shot — camera perfectly perpendicular
straight above, zero perspective tilt, everything lying flat on the surface.

THE SET (knolling): a curated set of travel tech accessories — a slim matte-white
65W GaN fast charger, a neatly coiled braided light-grey USB-C cable, a pair of
compact wireless earbuds in a small pebble case, and a slim zip pouch — neatly
organized and aligned in a tidy knolling layout with even spacing and parallel
edges; the cable coiled into a clean loop, nothing tangled. The grouping tells an
editorial "everything you need to head out" unboxing story. It visualizes "a
go-anywhere charging kit so tidy you can see what's inside at a glance".

SURFACE: a single clean warm off-white paper surface #F4F1EA with real subtle
paper texture, never cluttered, never dark, never a busy pattern.

LIGHT + GROUNDING: soft even diffused lighting filling the whole frame, no harsh
dramatic shadows or spotlights; each object casts a soft realistic contact shadow
grounding it on the paper — real photography, not a cut-out collage.

COMPOSITION (breathing room is mandatory): generous negative space, lots of clean
empty paper around and between the objects, the whole group occupying at most 55%
of the frame and leaving plenty of airy empty surface at top and sides, never
edge-to-edge, calm and uncluttered.

MATERIALS + FINISH: photoreal commercial still-life quality — realistic material
reflections (matte plastic charger body, braided nylon cable weave, soft-touch
earbud case, fabric pouch texture), accurate textures, studio catalog finish;
NOT an illustration, not a default 3D render, no noise, no fake plastic lighting,
no cut-out edges.

PALETTE: the warm off-white surface plus the products' own muted whites and
greys, low saturation base, coordinated and calm; a single misty-blue #AEC2C9 zip
pouch ties the set together as the only lively accent.

PURE PHOTO: absolutely no overlaid text, no slogan, no button, no logo watermark,
no floating UI panel — clean enough to drop a headline on top later.

Avoid: 45-degree angle or any perspective tilt or upright front shot, messy
piling, tangled cables, edge-to-edge cramming with no breathing room, dark /
saturated / busy patterned background, cluttered real desk with unrelated junk,
DTC ad layout with wordmark / slogan / CTA / floating context panels, flat vector
or cartoon illustration, soft clay 3D, hand-drawn / risograph / halftone /
collage styles, fake plastic lighting, floating objects with no contact shadow,
any overlaid text.
```
