---
slug: studio-still-life
name_cn: 极简影棚静物
name_en: Minimal Studio Still Life
channel: 3C / 美妆 / 家居 高端产品主图 / 品牌官网首图 / Amazon A+ 主视觉
has_text: false
default_backend: nano           # 默认无文字叠加 → nano（Gemini Nano Banana Pro，质感/布光更精细）；仅当需要加产品名小字时才切 gpt
default_ratio: "4:3"
one_liner: photoreal 影棚静物商业摄影：单个英雄产品居中或偏置于干净无缝背景，柔光定向 + 自然柔影接地，大片负空间，Apple / Aesop / MUJI 级极简高级感。
---

> 通用提炼 / 构图 / 渲染路径见 `references/engine.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像 Apple / Aesop / MUJI 官网那张让你「想伸手摸一下」的产品照——**一个真实存在的物件，被一束干净的柔光供在无缝背景前，脚下落着一道自然的软影，四周全是安静的留白**。没有版式、没有文字、没有道具堆，只有产品本身的质感和呼吸感。**真、静、贵、空。**
> 与库里其他风格的分界：这套是**纯产品摄影 / CGI 静物，画面里没有任何排版文字、没有 slogan、没有 CTA、没有浮动情境屏**——这正是它和隔壁 `premium-product-hero`（那套是带浮动面板 + wordmark + slogan + CTA 的 DTC 广告版式）的根本区别。也不是 `saas-tech` 的扁平矢量插画、不是 claymorphism 的黏土玩具感、不是手绘草图（keke）。它的灵魂是「**这就是一张能直接放进官网的真实产品照**」——photoreal 商业摄影质感，不是插画、不是渲染 demo。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **🌬️ 留白（灵魂第一条 · 不可妥协）** | **产品只占画面 ≤ 55%，≥ 40% 是干净的空背景**——产品居中或刻意偏置一侧，把大片负空间留给上方 / 一侧，安静到能听见呼吸，宁空勿满。这片留白是品牌「敢空」的底气，也是给标题 / copy 预留的位置 | `generous negative space, product occupies at most 55% of frame, at least 40% clean empty background, lots of breathing room, uncluttered, airy, calm, confident emptiness` |
| 2 | **英雄主体（photoreal 商业摄影）** | **正中央或偏置 1 个产品**，真实商业摄影 / 高保真 CGI 渲染质感，材质完全可信（玻璃的透光、金属的反光、磨砂的颗粒、塑料的高光都对），是绝对且唯一的焦点 | `ONE single hero product, photoreal commercial product photography / high-fidelity CGI, utterly believable materials (glass refraction, metal reflection, matte grain, soft-touch plastic), the absolute and only focal point` |
| 3 | **无缝背景（柔和渐变）** | **干净无缝背景纸 / 影棚 cyclorama**，白 / 米 / 浅灰之间的**极柔渐变**（从产品后方一束微亮过渡到边缘略暗），没有真实房间、没有地平线硬线、没有道具堆、没有杂物 | `seamless studio backdrop / cyclorama, very soft gradient between warm white, cream and light grey, a faint glow behind the product fading to slightly darker edges, no real room, no hard horizon line, no clutter` |
| 4 | **柔和定向光（影棚布光）** | **一盏主柔光箱**从侧上方打来，产品上有干净的边缘高光与平滑过渡；可加一道极弱补光收暗部，绝不平光、绝不死黑、绝不廉价闪光直打 | `a single large soft-box key light from the upper side, clean rim highlight and smooth tonal falloff on the product, a very subtle fill to lift shadows, never flat, never crushed black, never harsh on-camera flash` |
| 5 | **自然柔影接地（灵魂第二条）** | 产品脚下落一道**柔和的真实软影 + 极淡的接触反射**，把产品稳稳「放」在台面上；阴影边缘虚化自然，**绝不硬黑投影、绝不悬空** | `a soft natural drop shadow and a faint contact reflection grounding the product on an invisible surface, the shadow edge soft and realistic, no hard black shadow, never floating` |
| 6 | **克制小道具或纯净无道具** | **要么完全无道具**（更高级），**要么仅 1 个克制的自然小道具**（一块粗糙石头 / 一片绿叶 / 一截枯枝 / 一抹水痕），尺寸远小于主体、低饱和、只为衬托质感，绝不抢戏、绝不成堆 | `either completely prop-free (most premium), or at most ONE restrained natural prop (a rough stone, a single leaf, a dry twig, a trace of water), far smaller than the hero, low-saturation, supporting only, never a cluster` |
| 7 | **质感 / 成片感** | 全图**真实、利落、商业成片级**：细腻的材质细节、自然的景深（产品锐 / 背景微虚）、无噪点、无塑料假光、无 3D 默认渲染味；像顶级品牌官网首图，不是渲染 demo | `real, crisp, commercial campaign-grade finish, fine material detail, natural shallow depth of field (product sharp, backdrop slightly soft), no noise, no plastic fake light, no default-render look` |
| 8 | **配色克制** | **中性奶米灰白主导** + **产品自身真实颜色**；背景与道具饱和度压到极低，让产品本色成为画面里唯一鲜活的色彩来源；**画面内绝无任何排版文字** | `neutral cream / beige / grey-white dominant, only the product's own true color is alive, backdrop and prop desaturated, ZERO typography or text anywhere in the image` |
| 9 | **比例** | 默认 `4:3` 横版（官网首图 / Amazon 主图 / banner 留白足）；竖版用 `3:4`，方版社媒用 `1:1` | `4:3 horizontal (or 3:4 / 1:1)` |

> 一眼自检：把图缩成拇指大，**仍像一张「能直接放进 Apple / Aesop / MUJI 官网的真实产品照」**——一个干净真实的产品、柔光、脚下软影、大片安静留白，没有一个字。看起来像插画 / 黏土玩具 / 扁平矢量 / 截图 / 有 slogan 文字 / 多产品 / 高饱和 / 道具堆 = 错。

---

## 配色

**极简中性奶米灰白体系**，颜色只服务于「让产品本色成为唯一焦点」。除产品自身真实颜色外，全图无第二个鲜活色，更无任何文字色块。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **背景 · 暖白主调** | 奶米白 / Warm Off-White | `#F2EDE6` | 无缝背景纸主色、产品后方那束柔光的暖底 |
| **背景 · 中性灰** | 浅中性灰 / Light Neutral Grey | `#ECECEC` | 渐变向边缘过渡的略暗区、冷调产品时的背景主色 |
| **背景 · 亮心** | 近白 / Near White | `#FAF9F6` | 渐变中心（产品正后方那束最亮处）、上方留白区 |
| **台面 / 接地** | 浅银灰 / Pale Silver Grey | `#E4E2DD` | 产品脚下软影边缘、极淡接触反射的过渡 |
| **软影** | 暖灰影 / Warm Grey Shadow | `#D8D3CB` | 自然柔影主体（暖灰、不是死黑），向边缘虚化 |
| **克制道具（可选）** | 低饱和自然色 | 石灰 `#B8B2A7` / 哑绿叶 `#8C9A7B`（二选一，面积极小） | 唯一小道具（石 / 叶），饱和度压低，只衬托不抢戏 |
| **产品本色** | 随产品而定 | —— | 产品自身真实颜色，是全图唯一允许「鲜活」的色彩来源 |

铁律：
- **背景永远是奶米 / 浅灰 / 白之间的柔渐变**，绝不深色、绝不彩色、绝不真实场景、绝不霓虹发光。
- **全图零文字**：没有 wordmark、没有 slogan、没有副标、没有 CTA、没有水印——一个字都不要（这是它区别于 `premium-product-hero` 的红线）。
- **不堆高饱和**：除产品本色外全图饱和度压到很低；道具若有也要去饱和；产品因此自然「跳」出来。
- **软影是暖灰不是死黑**：用 `#D8D3CB` 这类暖灰做柔影，硬黑会破坏高级静物感。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **任何排版文字**：wordmark / slogan / 副标 / CTA / 标签 / 价格 / 水印——画面内出现任何文字即不合格（要文字请走 `premium-product-hero`；本套是纯产品摄影图）
- ❌ **浮动情境屏 / 版式面板**：身后排开示意屏、卡片、UI 面板——那是 `premium-product-hero` 的 DTC 广告语言，本套不要（别撞）
- ❌ **背景**：杂乱真实房间 / 道具堆 / 深色科技底 / 高饱和彩色背景 / 霓虹发光 / 户外实景 / 有硬地平线的桌面布景
- ❌ **多产品堆叠**：画面里 2 个及以上同等地位的产品（英雄产品只能有 1 个；同款不同色排排站也算违规）
- ❌ **抢戏 / 成堆道具**：道具和产品一样大 / 一样实 / 一样亮，或多个道具堆成静物画——最多 1 个克制小道具，宁可纯净无道具
- ❌ **高饱和 / 花哨**：除产品本色外出现第二个鲜艳大色块；马卡龙糖果色；彩虹渐变；高饱和背景
- ❌ **风格串味**：扁平矢量插画（saas-tech）/ 黏土玩具感（claymorphism）/ 手绘草图（keke）/ 孔版油印（riso）/ 半色调网点 / 拼贴 / 卡通 / 廉价剪贴画——本套必须是 **photoreal 真实摄影质感**，任何插画味即垮
- ❌ **廉价渲染感**：塑料假光、噪点、生硬黑投影、产品悬空无接地、像 3D 软件默认渲染的 demo、过曝高光糊成一片
- ❌ **留白不足 / 构图太满**：产品超过画面 55%、背景被填满、四周顶到边——违反🌬️留白铁律，直接驳回

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。全英文写画面主体 + 写死 DNA 关键词；**画面内不写任何文字**（这套 has_text=false）。
> 纯产品无字 → 走 `nano`（Gemini Nano Banana Pro，材质 / 布光最细腻）；仅当确实要加一个产品名小字 → 才切 `gpt`。

```
Minimal studio still life, photoreal commercial product photography, {{RATIO}}
aspect ratio. A clean seamless studio backdrop / cyclorama with a very soft
gradient between warm white, cream and light grey — a faint glow behind the
product fading to slightly darker edges. NEVER a real cluttered room, never dark,
never a saturated or neon background, and absolutely NO text, NO typography, NO
logo, NO labels anywhere in the image.

HERO SUBJECT (the soul): ONE single product, {{SUBJECT}}, placed {{PLACEMENT}},
rendered as photoreal commercial product photography / high-fidelity CGI with
utterly believable materials and fine detail, the absolute and only focal point.
It visualizes "{{COGNITIVE_ANCHOR}}". The product's own real color is the only
alive color in the whole image.

LIGHT + GROUNDING: a single large soft-box key light from the upper side gives a
clean rim highlight and smooth tonal falloff across the product, with a very
subtle fill lifting the shadows — never flat, never crushed black, never harsh
flash. A soft natural drop shadow in warm grey (#D8D3CB) and a faint contact
reflection ground the product on an invisible surface; the shadow edge is soft
and realistic — no hard black shadow, no floating.

PROP: {{PROP_CLAUSE}}.

COMPOSITION (breathe): generous negative space, the product occupies at most 55%
of the frame with at least 40% clean empty background, lots of breathing room
above and to the side, uncluttered, calm, airy, confident premium emptiness —
plenty of clean room left for an eventual headline.

PALETTE: neutral cream / beige / grey-white dominant (#F2EDE6, #ECECEC, #FAF9F6),
only the product's true color is alive, backdrop and prop desaturated, ZERO
typography.

FINISH: real, crisp, commercial campaign-grade quality, fine material detail,
natural shallow depth of field (product sharp, backdrop slightly soft), no noise,
no plastic fake light, no default-render CGI look — like a top brand's website
hero shot (Apple / Aesop / MUJI calibre).

Avoid: any text / slogan / wordmark / CTA / label / watermark, floating context
panels or UI cards, cluttered or dark background, two or more equal products,
oversized or clustered props, high saturation beyond the product's own color,
flat vector / clay / hand-drawn / risograph / halftone / collage / cartoon
styles, plastic fake lighting, harsh black shadows, floating un-grounded product,
overfilled cramped composition.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `4:3`（默认横版官网/主图，留白足）/ `3:4`（竖版）/ `1:1`（社媒方版）|
| `{{SUBJECT}}` | **一个**英雄产品的具体 photoreal 描述（材质 + 形态 + 颜色），如「a frosted-glass skincare serum bottle with a matte-gold dropper cap and clear amber liquid」|
| `{{PLACEMENT}}` | `dead-center`（居中，最稳）或 `slightly off-center to the right, leaving the left third open`（刻意偏置，把更大留白留给一侧——更高级）|
| `{{COGNITIVE_ANCHOR}}` | 这张图要让人 1 秒感受到的核心质感 / 向往感（如「quiet luxury, pure and reliable, nothing extra」）|
| `{{PROP_CLAUSE}}` | 道具说明，二选一：纯净无道具填 `completely prop-free, nothing but the product and clean space`；或带一个小道具填 `one restrained natural prop — a single smooth river stone, far smaller and desaturated, supporting only, never stealing focus` |

> **全程零文字**：本套 has_text=false，提示词里**不要**出现任何要画上去的文字内容。若用户硬要加产品名小字，再单独把 `has_text` 改 true、`default_backend` 切 `gpt`，并只加一处极小的居中 wordmark。

---

## 示例提示词（主题：跨境美妆 · 极简护肤精华瓶官网首图 · 纯产品无文字）

> 认知锚点：**安静的高级感——一支精华瓶被柔光供着，玻璃透着琥珀色液体，脚下一道自然软影，大片留白，纯粹、可靠、不多一分。** 像 Aesop / The Ordinary 高端线的官网首图。
> 隐喻 / 构图：磨砂玻璃精华瓶刻意偏置右侧（左三分之一留空给未来标题），无缝奶米背景 + 侧上柔光 + 暖灰软影接地，配一颗去饱和小石头衬质感。4:3 横版，**画面零文字**。可直接喂 `render.js`（`--backend nano --aspect 4:3 --has-text false`）。

```
Minimal studio still life, photoreal commercial product photography, 4:3 aspect
ratio. A clean seamless studio backdrop / cyclorama with a very soft gradient
between warm white, cream and light grey — a faint glow behind the product fading
to slightly darker edges. NEVER a real cluttered room, never dark, never a
saturated or neon background, and absolutely NO text, NO typography, NO logo, NO
labels anywhere in the image.

HERO SUBJECT (the soul): ONE single product — a frosted-glass skincare serum
bottle, slim cylindrical form, with a matte champagne-gold dropper cap and clear
warm-amber liquid visible through the frosted glass, soft light catching the
glass edge — placed slightly off-center to the right, leaving the left third
open. Rendered as photoreal commercial product photography with utterly
believable glass refraction, fine frosted texture and metal sheen on the cap, the
absolute and only focal point. It visualizes "quiet luxury — pure, reliable,
nothing extra". The amber liquid and warm-gold cap are the only alive colors in
the whole image.

LIGHT + GROUNDING: a single large soft-box key light from the upper left gives a
clean rim highlight down the glass and smooth tonal falloff, with a very subtle
fill lifting the shadows — never flat, never crushed black, never harsh flash. A
soft natural drop shadow in warm grey (#D8D3CB) stretching gently to the right
and a faint contact reflection ground the bottle on an invisible surface; the
shadow edge soft and realistic — no hard black shadow, no floating.

PROP: one restrained natural prop — a single smooth pale river stone resting near
the base, far smaller and desaturated, supporting only, never stealing focus.

COMPOSITION (breathe): generous negative space, the serum bottle occupies about
45% of the frame with the entire left third and the upper area kept as clean
empty cream background, lots of breathing room, uncluttered, calm, airy,
confident premium emptiness — plenty of clean room left for an eventual headline.

PALETTE: neutral cream / beige / grey-white dominant (#F2EDE6, #FAF9F6, #ECECEC),
only the amber liquid and champagne-gold cap are alive, backdrop and stone
desaturated, ZERO typography.

FINISH: real, crisp, commercial campaign-grade quality, fine frosted-glass and
metal detail, natural shallow depth of field (bottle sharp, backdrop slightly
soft), no noise, no plastic fake light, no default-render CGI look — like a top
skincare brand's website hero shot (Aesop / The Ordinary calibre).

Avoid: any text / slogan / wordmark / CTA / label / watermark, floating context
panels or UI cards, cluttered or dark background, two or more equal products,
oversized or clustered props, high saturation beyond the product's own color,
flat vector / clay / hand-drawn / risograph / halftone / collage / cartoon
styles, plastic fake lighting, harsh black shadows, floating un-grounded product,
overfilled cramped composition.
```
