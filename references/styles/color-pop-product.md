---
slug: color-pop-product
name_cn: 撞色糖果背景产品图
name_en: Color-pop Product
channel: 美妆 / 潮牌 / 饮料 电商主图 / 社媒广告 / DTC 产品摄影
has_text: false                 # 纯产品摄影、无文字叠加 → nano（Gemini Nano Banana Pro，材质质感最强）；仅当要加产品名小字时才切 gpt
default_backend: nano
default_ratio: "4:3"
one_liner: 真实感商业产品摄影：单个产品置于大胆糖果撞色 / 平滑彩色渐变背景，清脆硬朗投影，现代 playful DTC（Glossier / Away / 饮料广告气质），干净、留白足。
---

> 通用提炼 / 构图 / 渲染路径见 `../engine.md`（顶部🌬️留白铁律强制），本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像 Glossier / Away / Olipop / Liquid Death 这类潮牌的产品主图——**一个真实产品被供在大片纯色或柔渐变彩色背景上，灯光干净、投影清脆硬朗，颜色大胆但高级（糖果色 / 马卡龙 / 活力撞色）**，整张图明亮、playful、有现代 DTC 的呼吸感。**真、亮、脆、有留白**。
> 与库里其他风格的分界：这套是**真实感商业产品摄影 / CGI 渲染**（photoreal，不是插画）。它和 `premium-product-hero` 的关键区别——那套是「**DTC 广告版式**：中性灰白影棚 + 身后弧形浮动情境屏 + 顶部 wordmark + slogan + CTA 文字」；**本套是纯产品摄影图，背景是大胆彩色而非灰白，画面里没有任何浮动面板、没有 slogan、没有 CTA、不叠任何版式文字**。它也不是 `saas-tech` 的扁平矢量插画，不是 claymorphism 的黏土质感——它的灵魂是「**真实拍摄级产品 + 鲜活彩色背景 + 硬朗投影**」。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **🌬️ 留白 / 呼吸感（铁律第一条）** | 产品**只占画面 ≤55%**，四周留出**大片干净彩色空间**（≥30% 纯净背景区），构图疏朗、宁空勿满，留足顶部 / 一侧的干净区给（后续可叠的）标题或 copy；整张图安静、透气，绝不塞满 | `generous negative space, lots of breathing room, product occupies under 55% of frame, large clean areas of pure color, uncluttered, airy, minimal, room left for a headline` |
| 2 | **英雄主体（真实产品）** | 正中或遵循三分法的**1 个产品**，**photoreal 商业摄影 / 高保真 CGI 渲染**，材质极其可信（玻璃 / 金属 / 哑光塑料 / 铝罐凝水珠 / 膏体光泽真实），是绝对视觉焦点 | `ONE single hero product, photorealistic commercial product photography / high-end CGI render, hyper-believable materials, the absolute focal point` |
| 3 | **大胆糖果撞色 / 平滑彩色渐变背景（灵魂第一条）** | 背景是**一整片大胆纯色**或**两个糖果色之间的平滑无缝渐变**（糖果色 / 马卡龙 / 活力撞色），干净到没有任何道具、没有真实房间、没有杂物——**颜色就是背景本身** | `bold solid candy-colored background OR a smooth seamless gradient between two candy / macaron / vibrant pop colors, perfectly clean, no props, no real room, no clutter — the color IS the set` |
| 4 | **清脆硬朗投影（灵魂第二条）** | 产品落下**一道清脆、边缘相对硬朗、方向明确的投影**（不是糊成一团的软影、也不是死黑），投影颜色可带背景色调，把产品稳稳「钉」在背景上，给现代感与立体感 | `a crisp, hard-edged, directional drop shadow with a clear angle (not a mushy soft blob, not dead black), tinted toward the background hue, anchoring the product with a modern punchy feel` |
| 5 | **studio 棚拍光** | **干净均匀的柔光箱大面光 + 一点定向硬光**塑造高光，产品边缘清晰、高光利落、无脏反光；明亮通透不压暗 | `clean even soft-box studio lighting with a touch of directional hard light for crisp highlights, bright and luminous, sharp clean edges` |
| 6 | **一抹互补强调色** | 在干净背景里点**一处互补 / 撞色的小色块或小道具**（一片落下的花瓣、一颗果粒、一道色带、一个小投影色）做视觉呼吸点；**只点一处、面积最小**，不抢主体 | `one small complementary pop of color (a single petal, a fruit slice, a color sliver) as a breathing accent, just one, tiny, never competing with the product` |
| 7 | **现代 playful DTC 气质** | 整体明亮、活泼、年轻、干净——像 Glossier / Away / 现代饮料广告的产品图：**有趣但高级，鲜活但克制** | `modern playful DTC aesthetic à la Glossier / Away / contemporary beverage ads, fun yet premium, vibrant yet restrained` |
| 8 | **质感 / 渲染** | 全图**真实拍摄级、利落、商业成品**：真实材质反射、自然凝水 / 高光、无噪点、无廉价 3D demo 感、无插画感 | `polished real-photo commercial finish, realistic material reflections, natural condensation / highlights, no noise, no cheap 3D demo look, NOT an illustration` |
| 9 | **配色（克制·一图一组）** | **一组糖果撞色或一个纯彩底**（≤2 个背景色）+ 产品本色 + 一抹互补强调；**一图只用一组色，别堆**——多了就乱、就掉价 | `one single candy color pairing or one solid pop background (max two background colors) + the product's real color + one complementary accent — never pile on more` |
| 10 | **比例** | 默认 `4:3`；竖版社媒 `3:4`，方版主图 `1:1` | `4:3 default (or 3:4 / 1:1)` |

> 一眼自检：把图缩成拇指大，**仍像一张「能直接当电商主图投放的真实产品摄影」**——一个真产品居中、背景一整片鲜活糖果色、一道脆投影、四周大量干净留白。看起来像插画 / 像黏土 / 背景是灰白影棚 / 有浮动面板或 slogan 文字 / 塞满道具 / 颜色脏乱 = 错。

---

## 配色

**一图一组糖果撞色**：每张图只锁定一组高级糖果色或一个纯彩底，靠它和产品本色形成干净的对比，别堆色。下面是候选配方，每次**只选一组**。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **糖果配方 A · 蜜桃粉** | Peach Pink | `#F7C8C0` | 背景主色 / 渐变一端（暖、甜、美妆向）|
| **糖果配方 A · 薄荷绿** | Mint Green | `#BFE3D0` | 与蜜桃粉撞色或渐变另一端（清爽、平衡）|
| **糖果配方 B · 活力橙** | Vivid Tangerine | `#FF7A45` | 纯彩底（活力、饮料 / 潮牌向，单色满铺）|
| **糖果配方 C · 蜜橘渐变端** | Mandarin | `#FFB347` | 与蜜桃粉做「粉→蜜橘」平滑渐变（暖甜活力）|
| **糖果配方 D · 丁香紫** | Lilac | `#D9C7F0` | 纯彩底或与薄荷做柔撞（高级、潮）|
| **糖果配方 E · 天青蓝** | Sky Blue | `#A8D8F0` | 纯彩底（清透、3C / 个护向）|
| **投影色调** | 背景同色系加深 | 取背景色压暗一档（如粉底用 `#E8A89E`）| 清脆投影本身染一点背景色，更高级、不死黑 |
| **互补强调（一抹）** | 与背景互补的单一鲜色 | 随背景而定（粉底配薄荷 / 柠檬黄；橙底配青蓝）| 只点一处：一片花瓣 / 一颗果粒 / 一道色带 |
| **产品本色** | 随产品而定 | —— | 产品自身真实颜色，与背景形成主对比 |

铁律：
- **背景永远是糖果色 / 马卡龙 / 活力撞色**（纯色或两色平滑渐变），绝不灰白影棚、绝不深色、绝不真实场景、绝不彩虹多色乱堆。
- **一图 ≤2 个背景色** + 产品本色 + ≤1 处互补强调。颜色越克制越高级。
- **投影别死黑**：染一点背景色调，脆但不脏。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **插画 / 非真实感**：扁平矢量插画（撞 saas-tech）/ 手绘 / 草图 / 黏土 claymorphism 质感（撞 claymorphism）/ 卡通 / 半色调网点 / 拼贴——这套必须是 **photoreal 真实拍摄级或高保真 CGI**
- ❌ **背景跑偏**：中性灰白影棚（那是 premium-product-hero 的地盘）/ 深色科技底 / 真实房间或户外实景 / 道具堆 / 彩虹多色乱铺 / 渐变发光霓虹
- ❌ **撞 premium-product-hero 的广告版式**：身后弧形浮动情境屏 / 浮动面板 / 顶部 wordmark / slogan 大字 / CTA 按钮 / 任何叠加的版式文字——**本套是纯产品摄影图，画面里不写字、不放面板**
- ❌ **多产品堆叠**：画面里 2 个及以上同等地位的产品（英雄产品只能有 1 个；同款小道具点缀不算）
- ❌ **颜色堆料**：一图用了 3 种以上背景色 / 高饱和乱撞 / 强调色铺成大色块抢主体 / 配色脏乱
- ❌ **投影翻车**：糊成一团的软影 blob / 死黑生硬投影 / 产品悬空无投影无接地
- ❌ **塞满 / 不留白**：产品占满画面、背景被道具填满、没有干净呼吸区（违反🌬️留白铁律，直接驳回）
- ❌ **廉价渲染感**：塑料假光 / 噪点 / 像 3D 软件默认渲染 demo / 材质假 / 凝水珠 / 高光不真实

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。全英文写画面主体 + 写死 DNA 关键词；`has_text:false`，画面内**不叠任何文字 / 面板 / slogan**（这是它和 premium-product-hero 的核心分界）。
> 纯产品无字 → 默认走 `nano`（Gemini Nano Banana Pro，材质 / 凝水 / 高光质感最强）。**仅当**要在角落加一行产品名小字时才切 `gpt`（gpt-image-2 文字最稳）→ 那时才把 `has_text` 改 true。

```
Photorealistic commercial product photography, {{RATIO}} aspect ratio, studio
shot. NOT an illustration, NOT clay, NOT flat vector — a real high-end product
photo / high-fidelity CGI render with believable materials.

HERO SUBJECT (the soul): ONE single product, {{PRODUCT}}, as the absolute focal
point, rendered photoreal with hyper-believable materials ({{MATERIAL}}), crisp
clean edges and realistic reflections / highlights. It occupies UNDER 55% of the
frame. It visualizes "{{COGNITIVE_ANCHOR}}". The product's own real color reads
clearly against the background.

BACKGROUND (the soul, bold color): {{BG_DESCRIPTION}} — a {{BG_KIND}} in {{BG_COLORS}}
(candy / macaron / vibrant pop colors), perfectly clean and seamless, NO props,
NO real room, NO clutter — the color itself IS the entire set.

CRISP SHADOW: the product casts a crisp, hard-edged, directional drop shadow at a
clear angle, subtly tinted toward {{SHADOW_TINT}} (not a mushy soft blob, not dead
black), anchoring it with a modern punchy feel.

LIGHTING: clean even soft-box studio lighting with a touch of directional hard
light for crisp highlights, bright and luminous, sharp clean edges, no dirty
reflections.

ONE ACCENT POP: a single small complementary pop of color, {{ACCENT}}, as a
breathing accent — just one, tiny, never competing with the product.

COMPOSITION: generous negative space and lots of breathing room, product under
55% of frame, large clean areas of pure {{BG_COLORS}}, uncluttered, airy,
minimal, plenty of empty space left {{EMPTY_SIDE}} (clean room as if for a future
headline — but DO NOT write any text).

MOOD: modern playful DTC aesthetic à la Glossier / Away / contemporary beverage
ads — fun yet premium, vibrant yet restrained.

FINISH: polished real-photo commercial finish, realistic material reflections,
natural highlights / condensation where relevant, no noise, no cheap 3D demo look.

NO TEXT, NO logos typed out, NO floating UI panels, NO slogan, NO CTA button, NO
advertising layout overlay — this is a clean product photo only.

Avoid: illustration / hand-drawn / sketch / clay / claymorphism / flat vector /
halftone / collage styles; neutral grey-white studio backdrop; dark or neon or
real-room or outdoor backgrounds; floating context panels or wordmark/slogan/CTA
text overlays (those belong to a different style); two or more equal products;
more than two background colors or rainbow clutter; mushy soft-blob or dead-black
shadows; floating un-grounded product; cluttered set; plastic fake lighting,
noise, cheap render look.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `4:3`（默认）/ `3:4`（竖版社媒）/ `1:1`（方版主图）|
| `{{PRODUCT}}` | **一个**英雄产品的具体写实描述（形态 + 颜色 + 关键细节），如「a glossy coral-red wireless earbuds charging case, pill-shaped, with a tiny LED」|
| `{{MATERIAL}}` | 产品关键材质，如 `glossy ABS plastic with soft specular highlights` / `brushed aluminium can with condensation droplets` / `frosted glass cosmetic bottle` |
| `{{COGNITIVE_ANCHOR}}` | 这张图要让人 1 秒感受到的卖点 / 气质（如「轻巧、有趣、随手就想拿起来」）|
| `{{BG_DESCRIPTION}}` | 背景一句总述，如「a smooth candy-pink to mandarin-orange gradient」|
| `{{BG_KIND}}` | `bold solid color` 纯彩底 / `smooth seamless two-color gradient` 双色平滑渐变 |
| `{{BG_COLORS}}` | 选定的糖果配方 + hex，如 `candy pink #F7C8C0 flowing into mandarin #FFB347`（一组，≤2 色）|
| `{{SHADOW_TINT}}` | 投影染的背景色调，如 `a deeper rosy pink #E8A89E` |
| `{{ACCENT}}` | 一抹互补强调，如 `a single mint-green leaf` / `one lemon slice` / `a thin sky-blue color sliver` |
| `{{EMPTY_SIDE}}` | 留白集中区，如 `at the top` / `on the right` / `in the upper third` |

> 整张图**零文字、零面板、零版式**——这是它和 premium-product-hero 的硬分界，必须守住。

---

## 示例提示词（主题：跨境美妆 / 3C 边界品类 · 彩色无线耳机充电盒 · 糖果粉→蜜橘渐变 · 纯产品摄影无文字）

> 认知锚点：**轻巧、有趣、playful——一个让人「随手就想拿起来」的彩色小物，鲜活但高级。**
> 隐喻 / 构图：哑光珊瑚色无线耳机充电盒置于「糖果粉 → 蜜橘」平滑渐变背景，落一道清脆硬朗的染粉投影，右上留大片干净彩色空间，左下角点一片薄荷绿小叶做一抹互补。4:3 横版，**画面内无任何文字 / 面板 / slogan**。`has_text:false` → 直接喂 `render.js`（`--backend nano --aspect 4:3`）。

```
Photorealistic commercial product photography, 4:3 aspect ratio, studio shot.
NOT an illustration, NOT clay, NOT flat vector — a real high-end product photo /
high-fidelity CGI render with believable materials.

HERO SUBJECT (the soul): ONE single product — a glossy coral-red wireless
earbuds charging case, a smooth rounded pill-shaped box with a soft sheen and a
single tiny status LED, slightly open to hint at the earbuds inside — as the
absolute focal point, rendered photoreal with hyper-believable glossy ABS plastic
showing soft specular highlights and crisp clean edges. It occupies UNDER 55% of
the frame, sitting in the lower-left third. It visualizes "light, fun, something
you just want to pick up — vibrant yet premium". Its coral-red reads clearly
against the candy background.

BACKGROUND (the soul, bold color): a smooth seamless two-color gradient flowing
from candy pink #F7C8C0 in the lower area into warm mandarin #FFB347 toward the
top — candy / macaron pop colors, perfectly clean and seamless, NO props, NO real
room, NO clutter — the color itself IS the entire set.

CRISP SHADOW: the case casts a crisp, hard-edged, directional drop shadow toward
the lower right at a clear angle, subtly tinted a deeper rosy pink #E8A89E (not a
mushy soft blob, not dead black), anchoring it with a modern punchy feel.

LIGHTING: clean even soft-box studio lighting with a touch of directional hard
light for crisp highlights along the glossy top edge, bright and luminous, sharp
clean edges, no dirty reflections.

ONE ACCENT POP: a single small mint-green leaf resting near the lower-left corner
as a breathing complementary accent — just one, tiny, never competing with the
product.

COMPOSITION: generous negative space and lots of breathing room, product under
55% of frame, large clean areas of pure candy-pink-to-mandarin gradient,
uncluttered, airy, minimal, plenty of empty space left in the upper-right third
(clean room as if for a future headline — but DO NOT write any text).

MOOD: modern playful DTC aesthetic à la Glossier / Away / contemporary beverage
ads — fun yet premium, vibrant yet restrained.

FINISH: polished real-photo commercial finish, realistic glossy reflections,
natural highlights, no noise, no cheap 3D demo look.

NO TEXT, NO logos typed out, NO floating UI panels, NO slogan, NO CTA button, NO
advertising layout overlay — this is a clean product photo only.

Avoid: illustration / hand-drawn / sketch / clay / claymorphism / flat vector /
halftone / collage styles; neutral grey-white studio backdrop; dark or neon or
real-room or outdoor backgrounds; floating context panels or wordmark/slogan/CTA
text overlays; two or more equal products; more than two background colors or
rainbow clutter; mushy soft-blob or dead-black shadows; floating un-grounded
product; cluttered set; plastic fake lighting, noise, cheap render look.
```
