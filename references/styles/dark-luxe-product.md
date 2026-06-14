---
slug: dark-luxe-product
name_cn: 暗调奢质产品图
name_en: Dark Luxe Product
channel: 奢品 / 香水 / 腕表 / 高端护肤 电商主图 / 品牌主视觉 / 产品详情首图
has_text: false
default_backend: nano           # 纯产品摄影、无文字叠加 → Gemini Nano Banana Pro（材质/反光/暗调层次更细腻）；若要加产品名小字才切 gpt
default_ratio: "4:3"
one_liner: 暗调氛围里的高端产品摄影：单束戏剧性聚光勾边、深邃阴影、奢华材质衬托、金/银点睛反光，大片暗部留白，香水/腕表/高端护肤的真实感高级。
---

> 通用提炼 / 构图 / 渲染路径见 `../engine.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像 Dior / Chanel / Rolex / La Mer 的产品官图——**一件真实奢侈品被供在暗调氛围里，一束戏剧性聚光把它从黑暗中勾出来**，身下是大理石 / 丝绒 / 水面 / 石材这类高级材质，金属或金色处一抹精准反光点睛，画面大半沉在深邃阴影里、安静、克制、贵气逼人。**真实商业产品摄影 / 高保真 CGI 渲染，不是插画。**
> 与库里其他风格的分界：这套是 **暗调棚拍写实摄影质感**，灵魂在「暗 + 聚光 + 真材质 + 留白」。**它与 premium-product-hero 的硬性区别：那套是浅灰亮调、带广告版式（wordmark+slogan+CTA）和身后浮动情境屏的 DTC 广告；本套是纯产品摄影图、暗背景、无任何版式文字、无浮动面板**——两者绝不可混。它也不是扁平科技插画（saas-tech）、不是黏土软萌（claymorphism）、不是手绘草图、不是孔版油印。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **🌬️ 留白 / 呼吸（铁律·第一条）** | **产品 ≤ 55% 画面，≥ 35% 是干净的深色暗部留白**——大片纯净阴影空气环绕产品，上方/一侧留出大块空旷暗场给标题或 copy；宁空勿满，靠暗部透气，绝不堆道具 | `generous negative space, at least 35% clean dark empty shadow around the product, lots of breathing room, uncluttered, airy, product occupies under 55% of frame, vast quiet negative space for a headline` |
| 2 | **暗调氛围背景（灵魂第一条）** | **墨黑 `#0E0E12` / 深褐到近黑的深邃渐隐背景**，从产品周围的微亮处往四周沉入纯黑，像一间关了灯只留一束光的影棚，**绝不浅灰、绝不亮、绝不彩色杂场景** | `deep moody dark background, near-black charcoal #0E0E12 to dark brown gradient sinking into pure black at the edges, a darkened studio lit by a single beam, NEVER light grey, never bright, never a colorful cluttered scene` |
| 3 | **英雄主体（灵魂第二条）** | **正中或黄金分割点 1 件高端产品**，写实精致照级 / 高保真 CGI，材质极度可信（玻璃/金属/瓷/皮革质感真实），占画面 **40–55%**，从暗背景里被光「请」出来，是绝对焦点 | `ONE single luxury hero product placed center or on a golden-ratio point, photorealistic commercial photography / high-fidelity CGI, deeply believable materials (glass, metal, ceramic, leather), occupying 40 to 55% of the frame, emerging from the darkness as the absolute focal point` |
| 4 | **单束戏剧性聚光 + 轮廓光（灵魂第三条）** | **一束方向性硬聚光 / 侧光从一侧打来**，在产品边缘拉出一道清亮 **rim light 轮廓光**，亮面与暗面对比强烈；光只照亮产品与近旁台面，**其余沉入黑暗**，明暗交界讲究、有电影感 | `a single dramatic directional spotlight / hard side light from one side, carving a crisp rim light along the product edge, strong chiaroscuro contrast between lit and shadow sides, the beam lighting only the product and the surface near it while everything else falls into darkness, cinematic` |
| 5 | **深邃阴影 + 接地** | **底部一道柔和而深的接地阴影 / 暗面镜像倒影**把产品稳稳「放」在材质表面上；阴影深沉但不死黑，有层次，无生硬漂浮 | `a soft yet deep contact shadow and a dim mirror reflection grounding the product firmly on the surface, shadows deep but layered, not flat dead black, no floating` |
| 6 | **奢华材质衬托（灵魂第四条）** | 产品立于 / 倚于一种**高级材质表面或背景**：**深色大理石纹理 / 黑丝绒褶皱 / 平静水面微涟漪 / 天然石材 / 拉丝金属**——只选 1 种，质感真实、低调、衬托而不抢戏 | `the product rests on / against ONE luxurious material — dark veined marble, folded black velvet, a calm water surface with faint ripples, natural stone, or brushed metal — realistic, understated, supporting not stealing focus` |
| 7 | **金 / 银点睛反光** | 产品的**金属件 / 喷头 / 表冠 / logo / 瓶盖**处有**一抹精准的金色或银色高光反射**，是全图最亮、最「贵」的一点，画龙点睛、面积极小 | `a single precise warm gold or cool silver specular highlight on the product's metal part — pump, crown, cap, or logo — the brightest and most precious glint in the frame, tiny in area` |
| 8 | **质感 / 渲染** | 全图**精致、电影级、商业成品**：真实材质反射与折射、细腻暗部层次、轻微胶片颗粒可有可无、无廉价塑料光、无 3D demo 味；像顶级奢品牌官方产品大片 | `polished, cinematic, commercial-grade finish, realistic material reflection and refraction, rich shadow gradation, no cheap plastic light, no default-render demo look, like a top luxury brand's official product still` |
| 9 | **配色克制（低调奢华）** | **暗背景墨黑/深褐主导** + **单束暖光的暖调** + **金/银点睛** + **产品本色**；整体低饱和、深沉、克制，产品本色与那一抹金/银是仅有的「亮点」 | `dark charcoal / deep brown dominant, a warm tone from the single beam, gold/silver glint, the product's own real color; overall low saturation, deep, restrained luxury` |

> 一眼自检：把图缩成拇指大，**仍像一张「奢侈品牌官方产品摄影」**——黑暗里一件真实产品被一束光勾出来、立在高级材质上、一抹金/银反光、大片暗部留白、没有任何叠加文字/广告版式/浮动面板。看起来浅亮 / 杂乱 / 高饱和 / 像插画或截图 / 带 slogan 排版 = 错。

---

## 配色

**暗调低饱和奢华体系**，颜色只服务于「让一束光下的产品成为黑暗中唯一的焦点」。除产品本色与一抹金/银点睛外，全图沉在深色里。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **暗场底 · 墨黑** | 墨黑 / Ink Charcoal | `#0E0E12` | 背景主色、四周沉入的纯黑暗部、留白区 |
| **暗场底 · 深褐（可选替换）** | 深褐 / Deep Brown | `#1A1410` | 暖调主题时替换墨黑，背景渐隐底色 |
| **暖光晕** | 暖琥珀光 / Warm Amber Glow | `#3A2C1C` | 产品后方/侧方那束聚光在暗背景上漫出的微暖晕（极淡、面积小） |
| **金点睛** | 香槟金 / Champagne Gold | `#C9A24B` | 金属件 / 喷头 / 表冠 / logo 处那一抹最亮反光（暖系产品用） |
| **银点睛** | 冷银 / Cool Silver | `#C7CCD1` | 金属件高光（冷系 / 腕表 / 护肤产品用，与金二选一为主） |
| **材质暗面** | 石墨灰 / Graphite | `#23252B` | 大理石/石材/丝绒的暗部、台面接地阴影区 |
| **产品本色** | 随产品而定 | —— | 产品自身真实颜色（如琥珀香水液、白瓷面霜、黑陶表盘），是全图除点睛外仅有的活色 |

铁律：
- **背景永远是墨黑→纯黑（或深褐→纯黑）的深邃渐隐**，绝不浅灰、绝不亮调、绝不彩色杂场景。
- **点睛色 ≤ 1 个体系**（金 *或* 银为主），面积极小，只落在金属反光处；不要金银满身乱铺。
- **不堆高饱和**：除产品本色与那束暖光外，全图饱和度压到极低；暗与那一束光的反差，本身就是「贵」。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **背景**：浅灰/近白亮调影棚（那是 premium-product-hero 的地盘）/ 高饱和彩色背景 / 霓虹渐变 / 杂乱真实房间 / 户外实景 / 道具堆满
- ❌ **撞 premium-product-hero**：出现**广告版式文字**（wordmark / slogan / CTA / 副标）、**身后弧形浮动情境屏 / 浮动面板**、亮调浅灰渐变背景——本套是**纯产品摄影、暗背景、零叠加文字、零浮动屏**，撞到任意一项即驳回
- ❌ **多产品堆叠**：画面里 2 件及以上同等地位的产品（英雄产品只能有 1 件；同系列小配件可极弱地虚在暗部，但不得抢焦）
- ❌ **平光 / 无聚光**：均匀大平光、无明显光束方向、无 rim 轮廓光、明暗无对比——暗调奢质的命就是「单束戏剧光」，没有就垮
- ❌ **风格串味**：扁平矢量插画（saas-tech）/ 黏土软萌（claymorphism）/ 手绘草图 / 孔版油印 / 半色调网点 / 拼贴 / 廉价剪贴画 / 单线社论风
- ❌ **廉价渲染感**：塑料假光、噪点脏、生硬死黑投影、产品悬空无接地、像 3D 软件默认渲染 demo
- ❌ **点睛失控**：金/银高光铺满产品、彩虹反光、过曝光斑糊脸；点睛只能是极小一抹最亮处
- ❌ **任何叠加文字**（除非用户明确要产品名小字，此时才切 `gpt`）：本套默认 `has_text:false`，画面里不写字

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。英文写画面主体 + 写死 DNA 关键词。默认**无任何文字叠加**（`has_text:false` → `nano`）；仅当用户要在产品旁加一行极小产品名时，才把那行字写进提示词并切 `gpt`。

```
Photorealistic luxury product photography, {{RATIO}} aspect ratio, shot in a
darkened studio: a deep moody dark background, near-black charcoal #0E0E12
(or deep brown #1A1410 for a warmer mood) softly glowing only around the
product and sinking into pure black at every edge — NEVER light grey, never a
bright studio, never a colorful or cluttered scene.

HERO SUBJECT (the soul): ONE single luxury product, {{PRODUCT}}, placed center
(or on a golden-ratio point), rendered as real commercial product photography /
high-fidelity CGI with deeply believable materials and crisp edges, occupying
roughly 40 to 55% of the frame, emerging from the darkness as the absolute
focal point. It embodies "{{COGNITIVE_ANCHOR}}". The product's own real color is
the only living color in the whole frame.

DRAMATIC LIGHT: a single directional spotlight / hard side light from
{{LIGHT_DIR}}, carving a crisp rim light along the product's edge, strong
chiaroscuro contrast between the lit side and the shadow side; the beam lights
only the product and the surface right beside it while everything else falls
into deep darkness — cinematic, restrained.

LUXURY MATERIAL + GROUNDING: the product rests on {{MATERIAL}}; a soft yet deep
contact shadow and a dim mirror reflection ground it firmly on the surface,
shadows deep but layered, never flat dead black, never floating.

PRECIOUS GLINT: a single precise {{GLINT}} specular highlight on the product's
metal part ({{GLINT_SPOT}}) — the brightest, most precious point in the image,
tiny in area; nothing else over-lit.

COMPOSITION: generous negative space, at least 35% clean dark empty shadow
around the product, lots of breathing room, uncluttered and airy, with a vast
quiet dark area {{EMPTY_SIDE}} left open for a headline. Product under 55% of
the frame.

PALETTE: dark charcoal / deep brown dominant, a warm tone from the single beam,
the product's true color, one tiny {{GLINT}} glint; overall very low
saturation, deep, restrained luxury — the contrast of darkness against the one
beam is what reads as expensive.

FINISH: polished, cinematic, commercial-grade luxury-brand product still,
realistic material reflection and refraction, rich shadow gradation, no cheap
plastic light, no noise, no default-render demo look. {{TEXT_CLAUSE}}

Avoid: bright or light-grey studio background, two or more equal products, flat
even lighting with no beam or rim light, high saturation, advertising layout
text (wordmark / slogan / CTA), floating context panels or screens, flat vector
illustration, clay 3D, hand-drawn sketch, risograph, halftone, collage, plastic
fake lighting, harsh dead-black shadows, floating un-grounded product,
over-blown rainbow reflections.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `4:3`（默认，横版主图/品牌主视觉，暗场留白足）/ `3:4`（竖版详情首图）/ `1:1`（社媒方版）|
| `{{PRODUCT}}` | **一件**奢侈品的具体写实描述（材质 + 形态 + 颜色），如「an amber-liquid perfume bottle, heavy faceted glass with a polished gold spray pump」|
| `{{COGNITIVE_ANCHOR}}` | 这张图要让人 1 秒感受到的高级感 / 向往（如「沉静、克制、稀有，一束光下的低调奢华」）|
| `{{LIGHT_DIR}}` | 聚光方向，如 `the upper left`、`a low warm side angle`、`behind for a strong backlit rim` |
| `{{MATERIAL}}` | **一种**奢华材质表面，如 `dark veined marble`、`folded black velvet`、`a calm water surface with faint ripples`、`brushed dark metal` |
| `{{GLINT}}` | `warm gold`（暖系/香水）或 `cool silver`（冷系/腕表/护肤），二选一为主 |
| `{{GLINT_SPOT}}` | 点睛落点，如 `the gold spray pump`、`the watch crown`、`the embossed cap logo` |
| `{{EMPTY_SIDE}}` | 留白大块在哪侧，如 `to the upper right`、`above the product`、`on the left half` |
| `{{TEXT_CLAUSE}}` | 默认留空（无文字）。仅当用户要加产品名小字时填：`One small thin product name "<名字>" set in tiny refined serif near the base, nothing else written.`（并切 `gpt`）|

> 默认文字处数 **0**（纯产品摄影）；如需产品名最多 **1** 处极小细衬线字，且必须切 `gpt`。

---

## 示例提示词（主题：跨境美妆 · 高端香水官方产品图 · 无文字 · nano）

> 认知锚点：**沉静、稀有、低调奢华——一瓶琥珀香水在黑暗里被一束暖光勾出，立在深色大理石上，金喷头一抹精准反光，全图安静得只剩那束光的贵气。**
> 隐喻 / 构图：厚重切面玻璃的琥珀色香水瓶置于深色大理石台面，暖侧光从左上勾边、其余沉入纯黑，瓶身右上方留大块空旷暗场，金喷头一抹香槟金高光点睛，底部柔和深倒影。4:3 横版，无任何叠加文字。可直接喂 `render.js`（`--backend nano --aspect 4:3`）。

```
Photorealistic luxury product photography, 4:3 aspect ratio, shot in a darkened
studio: a deep moody dark background, near-black charcoal #0E0E12 softly glowing
only around the bottle and sinking into pure black at every edge — NEVER light
grey, never a bright studio, never a colorful or cluttered scene.

HERO SUBJECT (the soul): ONE single luxury product — a heavy faceted glass
perfume bottle filled with warm amber liquid, thick beveled crystal edges
catching the light, topped with a polished gold spray pump and a slim gold collar
— placed slightly off-center on a golden-ratio point, rendered as real commercial
product photography with deeply believable glass and metal, crisp refractive
edges, occupying roughly 50% of the frame, emerging from the darkness as the
absolute focal point. It embodies "stillness, rarity, understated luxury — a
single beam of light is all it needs". The warm amber of the liquid is the only
living color in the whole frame.

DRAMATIC LIGHT: a single warm directional spotlight from the upper left, carving
a crisp rim light down the faceted glass edge and glowing through the amber
liquid, strong chiaroscuro contrast between the lit left side and the shadowed
right; the beam lights only the bottle and the marble right beside it while
everything else falls into deep darkness — cinematic, restrained.

LUXURY MATERIAL + GROUNDING: the bottle rests on a slab of dark veined marble
with subtle natural grey-gold veining; a soft yet deep contact shadow and a dim
mirror reflection on the polished marble ground it firmly, shadows deep but
layered, never flat dead black, never floating.

PRECIOUS GLINT: a single precise warm gold specular highlight on the polished
gold spray pump — the brightest, most precious point in the image, tiny in area;
nothing else over-lit.

COMPOSITION: generous negative space, at least 35% clean dark empty shadow around
the bottle, lots of breathing room, uncluttered and airy, with a vast quiet dark
area to the upper right left open for a headline. The bottle stays under 55% of
the frame.

PALETTE: dark charcoal dominant, a warm amber tone from the single beam, the
liquid's true amber color, one tiny warm gold glint; overall very low saturation,
deep, restrained luxury — the contrast of darkness against the one beam is what
reads as expensive.

FINISH: polished, cinematic, commercial-grade luxury-brand product still,
realistic glass refraction and gold reflection, rich shadow gradation, no cheap
plastic light, no noise, no default-render demo look. No text anywhere in the
image.

Avoid: bright or light-grey studio background, two or more equal products, flat
even lighting with no beam or rim light, high saturation, advertising layout
text (wordmark / slogan / CTA), floating context panels or screens, flat vector
illustration, clay 3D, hand-drawn sketch, risograph, halftone, collage, plastic
fake lighting, harsh dead-black shadows, floating un-grounded product, over-blown
rainbow reflections.
```
