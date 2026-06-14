---
slug: splash-dynamic-product
name_cn: 动感泼溅产品图
name_en: Dynamic Splash Product
channel: 饮料 / 美妆 / 食品 电商主图 / 广告 KV / 详情页首图
has_text: false                # 纯产品摄影、画面无文字叠加 → nano（Gemini Nano Banana Pro，质感/液体/冻结瞬间更精细）；仅当必须加产品名小字时才切 gpt
default_backend: nano
default_ratio: "4:3"
one_liner: 真实感商业产品摄影：一个产品被凝固的飞溅瞬间环绕——液体飞溅、水珠四溅、粉末/原料飞扬，高速摄影冻结的能量感，干净渐变背景，产品清晰留白足，鲜活而不乱。
---

> 通用提炼 / 构图 / 渲染路径见 `references/engine.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像高端饮料 / 美妆 / 食品广告的旗舰产品大片——**一个产品稳稳立在中央，周围是被高速快门冻结的那一瞬间**：液体炸开成弧形水帘、水珠悬在半空、果肉/粉末/原料飞扬起来，能量感扑面，但产品本身**纹丝不动、锐利清晰**，背景是一道干净的清爽渐变。**鲜活、有冲击力、却又干净到能直接当主图**。
> 与库里其他风格的分界：
> - 这套是**真实感商业产品摄影 / CGI 渲染**（photoreal 高速摄影质感），**不是插画**。
> - 与 `premium-product-hero` 的分界（防撞最关键）：那套是「DTC 广告版式」——身后有浮动情境面板、顶部 wordmark + slogan + CTA、是**带排版文字的成片**；**本套是纯产品摄影图，画面里没有任何 slogan / wordmark / CTA / 情境屏**，靠飞溅动感本身撑场，留白区是干净空气不是放文字的版面。
> - 与 `saas-tech`（扁平科技矢量插画）、`claymorphism`（黏土软萌 3D）的分界：本套是**真实物理质感的液体/颗粒摄影**，不是扁平、不是黏土软塑。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **🌬️ 留白 / 呼吸感（铁律·第一条·不可退让）** | 产品 + 飞溅团**合计 ≤ 55% 画面**，**≥ 30% 是干净空气**；飞溅向一侧/上方甩出而不铺满四角；上方或一侧留出大片干净渐变空间（供后期压标题/文案）；宁空勿满，动感强但绝不糊成一团 | `generous negative space, lots of breathing room, uncluttered, airy, product plus splash together under 55% of frame, at least 30% clean empty gradient space, splash flung toward one side leaving the rest calm, never filling all four corners` |
| 2 | **英雄主体（锐利清晰）** | **正中央或黄金分割点 1 个产品**，photoreal 商业摄影 / 高端 CGI 渲染，材质可信（玻璃/铝罐/磨砂膏体/包装质感真实），**绝对锐利对焦、纹丝不动**，是飞溅风暴里唯一静止清晰的核心 | `ONE single hero product, photorealistic commercial product photography / high-end CGI, believable materials, razor-sharp in focus and perfectly still, the one calm clear anchor in the middle of the motion` |
| 3 | **冻结的飞溅瞬间（灵魂第一条）** | 产品周围是**高速快门冻结的一瞬**：液体炸开成弧形水帘 / 皇冠状水花、独立水珠悬在半空、果肉/粉末/原料/泡沫飞扬；每一滴都**边缘清晰、有体积感、被打光**，像 1/8000s 抓拍，不是模糊拖影 | `frozen high-speed splash moment around the product: liquid bursting into arcs and crowns, individual droplets suspended midair crisp and dimensional, pulp / powder / ingredients / foam flying, each drop sharp-edged and lit like a 1/8000s capture, no motion blur smear` |
| 4 | **方向性能量（灵魂第二条）** | 飞溅有**清晰的运动方向与节奏**——多是从产品一侧斜向甩出 / 自下而上炸开 / 绕产品环成半弧，形成动感张力线，但**收口干净**、不向四面八方乱炸糊掉 | `directional kinetic energy: the splash sweeps in a clear arc or bursts upward from one side around the product, forming dynamic tension lines, but stays clean and resolved, not chaotic spray in every direction` |
| 5 | **棚拍光 + 接地** | **柔光箱大面光 + 一道勾边逆光**让飞溅的水珠/颗粒亮起来通透；产品有干净边缘高光；底部一道柔和倒影 / 接地软阴影把产品「放」在画面里，无硬黑投影、不悬空 | `large soft-box lighting plus a rim backlight making droplets and particles glow translucent, clean edge highlights on the product, a soft reflection / contact shadow grounding it, no hard black shadow, not floating` |
| 6 | **干净渐变背景** | **单一清爽渐变**（按品类定调，如饮料蓝绿、美妆水透粉白、食品暖橙米白），干净到没有杂物、没有真实房间、没有道具堆；背景衬托动感而不抢戏 | `single clean smooth gradient backdrop tuned to the category, no clutter, no real room, no prop pile, the background sets off the motion without competing` |
| 7 | **质感 / 渲染** | 全图 **photoreal 商业级成片**：真实的液体折射 / 水珠高光 / 颗粒体积、干净的渐变、无噪点、无廉价 3D demo 感；像顶级饮料 / 美妆品牌投放的广告大片 | `polished photoreal commercial-grade finish, realistic liquid refraction, droplet specular highlights, volumetric particles, clean gradients, no noise, no cheap 3D-render-demo look, premium brand campaign quality` |
| 8 | **配色克制** | **背景渐变（1 个色系）+ 产品本色 + 飞溅物本色**三层即止；不堆第二个抢眼撞色；整体鲜活清爽，靠飞溅的通透感出彩而不是靠高饱和糊脸 | `restrained palette: one gradient hue family + the product's real color + the splash material's real color, no clashing extra color, fresh and crisp rather than over-saturated` |
| 9 | **比例 / 无文字** | 默认 `4:3`；**画面内无任何文字叠加**（无 slogan / wordmark / CTA / 情境屏），纯产品摄影；留白区是空气不是版面 | `4:3 aspect ratio, absolutely no text overlay, no slogan / wordmark / CTA / context panels — pure product photography, the empty space is clean air not a layout area` |

> 一眼自检：把图缩成拇指大，**仍像一张「能直接当电商主图的高速摄影产品大片」**——一个锐利产品 + 一团被冻结、有方向的飞溅 + 干净渐变背景 + 大片留白，**画面里一个字都没有**。看起来糊成一团 / 飞溅铺满四角 / 产品也跟着模糊 / 出现版式文字 / 像扁平插画或黏土 = 错。

---

## 配色

**「干净渐变背景 + 产品本色 + 飞溅物本色」三层制**，颜色服务于「让产品在动感里依然是清晰焦点」。按品类换背景色系，但永远只有这三层，不加第四个抢眼色。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **背景渐变 · 饮料清爽（默认示例）** | 清爽蓝绿 / Fresh Aqua | `#E8FBF6` → `#5BC9D6` | 气泡水 / 茶饮 / 运动饮料背景，由亮到中蓝绿的柔渐变 |
| **背景渐变 · 美妆水透（备选）** | 水透粉白 / Dewy Rose-White | `#FFF4F0` → `#FBD9D0` | 护肤 / 精华 / 喷雾类背景，清透粉白渐变 |
| **背景渐变 · 食品暖调（备选）** | 暖橙米白 / Warm Cream | `#FFF7EC` → `#F4C97A` | 果汁 / 烘焙 / 零食背景，暖米到暖橙渐变 |
| **飞溅高光** | 近白通透高光 / Translucent White | `#FFFFFF` | 水珠 / 泡沫顶光，逆光打亮处，给飞溅通透感 |
| **接地反射** | 浅冷灰 / Pale Cool Grey | `#E5ECEC` | 产品底部柔和倒影 / 接地区 |
| **产品本色** | 随产品而定 | —— | 产品包装/膏体/罐体自身真实颜色，是动感里的视觉锚 |
| **飞溅物本色** | 随内容物而定 | —— | 液体 / 果肉 / 粉末 / 原料自身真实颜色（如橙汁的橙、抹茶的绿、牛奶的白）|

铁律：
- **背景永远是单色系干净渐变**，绝不深黑、绝不彩色乱底、绝不真实场景道具堆。
- **三层颜色即止**：背景渐变 + 产品本色 + 飞溅本色，**不加第四个抢眼撞色**。
- **靠通透出彩不靠高饱和**：水珠/泡沫的逆光高光让画面鲜活，而不是把所有颜色推到最饱和糊脸。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **撞 premium-product-hero**：出现 slogan / wordmark / CTA / 身后浮动情境屏 / 任何广告版式文字——**本套画面里一个字都不能有**，它是纯产品摄影不是带版式的广告成片
- ❌ **撞 saas-tech**：扁平矢量 / 描边图标 / 几何插画风（本套是真实物理质感摄影，不是扁平插画）
- ❌ **撞 claymorphism**：黏土软塑 / 软萌圆胖 3D / 哑光捏感材质（本套是真实液体折射与水珠高光，不是黏土）
- ❌ **飞溅模糊拖影**：飞溅做成 motion blur 糊掉的拖尾，而不是高速快门冻结的清晰水珠——**冻结感是命**，糊了就废
- ❌ **产品也糊 / 失焦**：产品跟着飞溅一起模糊（产品必须锐利对焦、纹丝不动）
- ❌ **飞溅铺满四角 / 糊成一团**：飞溅向四面八方乱炸塞满全画面，没了留白和方向，变成混乱水雾
- ❌ **留白不够**：产品+飞溅合计超过约 55% 画面、留白区不足 30%（违反 🌬️ 铁律，直接驳回）
- ❌ **背景脏**：杂乱真实房间 / 道具堆 / 深色背景 / 彩虹渐变 / 霓虹发光底 / 户外实景
- ❌ **多产品堆叠**：画面里 2 个及以上同等地位的产品（英雄产品只能有 1 个）
- ❌ **高饱和 / 花哨**：三层之外冒出第二个鲜艳撞色块；马卡龙糖果色全糊；彩虹飞溅
- ❌ **风格串味**：手绘 / 草图 / 孔版油印 / 半色调网点 / 扁平矢量 / 拼贴 / 廉价剪贴画 / 单线社论风
- ❌ **廉价渲染感**：塑料假光、噪点、生硬黑投影、像 3D 软件默认渲染的 demo、产品悬空无接地、假水（像果冻不像真水）

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。**全英文写画面主体**，DNA 关键词写死；**画面内不写任何文字**（has_text:false）。
> 纯产品无字 → 走 `nano`（Gemini Nano Banana Pro，液体/颗粒/冻结瞬间质感最强）；仅当用户坚持要在角落加一行产品名小字 → 才切 `gpt`。
> **强调 photoreal 商业摄影质感**：reads as a real high-speed studio photograph / premium CGI, NOT an illustration。

```
Photorealistic commercial product photography, {{RATIO}} aspect ratio, high-end
studio campaign shot (or premium CGI render that reads as a real photograph) —
NOT an illustration, NOT flat vector, NOT clay.

HERO SUBJECT (the calm anchor): ONE single product, {{PRODUCT}}, standing in the
{{POSITION}}, rendered with believable real materials ({{MATERIAL}}), razor-sharp
in focus and perfectly still — the one crisp, motionless anchor in the middle of
the motion. It is the absolute focal point and must read as a real product.

FROZEN SPLASH (the soul): around the product, a high-speed-shutter frozen burst of
{{SPLASH_CONTENT}} — {{SPLASH_FORM}} — with individual droplets / particles
suspended midair, each one sharp-edged, dimensional and lit, captured like a
1/8000s shot. NO motion-blur smear, NO blurry product; only crisp frozen energy.

DIRECTIONAL ENERGY: the splash sweeps {{DIRECTION}} around the product, forming
clean dynamic tension lines, energetic but resolved — never chaotic spray filling
every corner.

LIGHT + GROUNDING: large soft-box lighting plus a rim backlight that makes the
droplets and particles glow translucent; clean edge highlights on the product; a
soft reflection / contact shadow grounds it — no hard black shadow, not floating.

BACKGROUND: a single clean smooth {{BG_GRADIENT}} gradient backdrop, no clutter,
no real room, no prop pile — it sets off the motion without competing.

COMPOSITION (🌬️ breathing room is mandatory): generous negative space; product
plus splash together stay under ~55% of the frame; at least 30% clean empty
gradient space, with a large calm area on {{EMPTY_SIDE}}; airy, uncluttered, the
splash flung toward one side leaving the rest calm.

PALETTE: restrained — the {{BG_GRADIENT}} background, the product's real color,
and the real color of {{SPLASH_CONTENT}}; fresh and crisp, no clashing extra
color, glowing translucent droplets rather than over-saturation.

FINISH: polished photoreal commercial-grade campaign quality, realistic liquid
refraction and droplet specular highlights, volumetric particles, clean gradient,
no noise, no cheap 3D-demo look.

ABSOLUTELY NO TEXT: no slogan, no wordmark, no CTA, no floating context panels,
no labels — pure product photography, the empty space is clean air not a layout.

Avoid: text overlay or ad layout, slogan/wordmark/CTA, floating context screens,
motion-blur smear, blurry or out-of-focus product, splash filling all four corners
or turning into chaotic mist, cluttered / dark / neon / rainbow background, two or
more equal products, extra clashing saturated color, hand-drawn / sketch /
risograph / halftone / flat vector / collage / clay / single-line editorial
styles, plastic fake lighting, noise, harsh black shadows, floating un-grounded
product, fake jelly-like water.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `4:3`（默认）/ `3:4`（竖版详情页）/ `1:1`（社媒方版）|
| `{{PRODUCT}}` | **一个**英雄产品的具体写实描述（形态 + 包装 + 颜色），如「a frosted aluminum can of sparkling water with condensation」|
| `{{POSITION}}` | 产品位置，如 `dead-center` 或 `slightly off-center on the right golden-ratio point`（偏一侧时留白更自然）|
| `{{MATERIAL}}` | 产品材质，如 `brushed aluminum with water condensation` / `frosted glass bottle` / `glossy lacquered cosmetic jar` |
| `{{SPLASH_CONTENT}}` | 飞溅物，如 `clear sparkling water with bubbles` / `fresh orange pulp and juice` / `matcha powder` / `silky cream` |
| `{{SPLASH_FORM}}` | 飞溅形态，如 `arcs and crown-shaped splashes with bubbles` / `a flying ribbon of juice and droplets` / `a puff of fine powder` |
| `{{DIRECTION}}` | 飞溅方向，如 `upward and to the right in a half-arc` / `sweeping diagonally from the lower-left` / `wrapping the product in a half ring` |
| `{{BG_GRADIENT}}` | 背景渐变色系，如 `fresh aqua #E8FBF6 to #5BC9D6` / `dewy rose-white #FFF4F0 to #FBD9D0` / `warm cream #FFF7EC to #F4C97A` |
| `{{EMPTY_SIDE}}` | 留白侧，如 `the upper-left` / `the top third`（后期可压标题处）|

> 全图**文字处数 = 0**（这是纯产品摄影图）。留白区保持干净空气，供 477 后期自己叠标题/文案。

---

## 示例提示词（主题：跨境电商饮料品类 · 一罐气泡饮料 + 凝固飞溅水花气泡 · 清爽蓝绿渐变 · 4:3 · 纯摄影无文字）

> 认知锚点：**清爽到「打开就炸开」——冰镇气泡水的那一口爽利、通透、有劲，被高速快门定格在最鲜活的瞬间。**
> 隐喻 / 构图：磨砂铝罐气泡水偏右黄金分割点稳稳立着、表面带冷凝水珠、绝对锐利；左下斜向甩出、绕罐半弧环成的弧形水帘 + 皇冠状水花 + 悬空气泡水珠，全部冻结清晰；逆光让水珠通透发亮；清爽蓝绿渐变背景；左上方留大片干净空气；底部柔和倒影接地。4:3，**画面内零文字**。可直接喂 `render.js`（`--backend nano --aspect 4:3`）。

```
Photorealistic commercial product photography, 4:3 aspect ratio, high-end studio
campaign shot (premium CGI render that reads as a real high-speed photograph) —
NOT an illustration, NOT flat vector, NOT clay.

HERO SUBJECT (the calm anchor): ONE single product — a slim frosted aluminum can
of sparkling water, brushed metallic body with a fine film of cold condensation
droplets beading on its surface — standing slightly off-center on the right
golden-ratio point, rendered with believable real materials, razor-sharp in focus
and perfectly still, the one crisp motionless anchor in the middle of the motion.
It is the absolute focal point and reads as a real chilled can.

FROZEN SPLASH (the soul): around the can, a high-speed-shutter frozen burst of
clear sparkling water with bubbles — arcs and crown-shaped splashes plus a thin
ribbon of water wrapping the can, with countless individual droplets and tiny
bubbles suspended midair, each one sharp-edged, dimensional and lit, captured like
a 1/8000s shot. NO motion-blur smear, NO blurry product; only crisp frozen energy.

DIRECTIONAL ENERGY: the splash sweeps diagonally up from the lower-left and curls
in a half-arc around the can, forming clean dynamic tension lines, energetic but
resolved — never chaotic spray filling every corner.

LIGHT + GROUNDING: large soft-box lighting plus a rim backlight that makes the
water droplets and bubbles glow translucent and bright; clean edge highlights run
down the metallic can; a soft reflection and contact shadow ground it on an
invisible glossy surface — no hard black shadow, not floating.

BACKGROUND: a single clean smooth fresh-aqua gradient backdrop going from light
#E8FBF6 to mid aqua-teal #5BC9D6, no clutter, no real room, no prop pile — it sets
off the cool fresh motion without competing.

COMPOSITION (breathing room is mandatory): generous negative space; the can plus
splash together stay under about 55% of the frame; at least 30% clean empty
gradient space, with a large calm area in the upper-left; airy and uncluttered,
the splash flung toward the lower-left and right edge leaving the rest calm.

PALETTE: restrained — the fresh-aqua gradient background, the can's metallic
silver-blue, and the clear translucent water; fresh and crisp, no clashing extra
color, glowing translucent droplets rather than over-saturation.

FINISH: polished photoreal commercial-grade campaign quality, realistic water
refraction and droplet specular highlights, volumetric bubbles, clean gradient,
no noise, no cheap 3D-demo look.

ABSOLUTELY NO TEXT: no slogan, no wordmark, no CTA, no floating context panels, no
labels — pure product photography, the empty space is clean air not a layout.

Avoid: text overlay or ad layout, slogan/wordmark/CTA, floating context screens,
motion-blur smear, blurry or out-of-focus product, splash filling all four corners
or turning into chaotic mist, cluttered / dark / neon / rainbow background, two or
more equal products, extra clashing saturated color, hand-drawn / sketch /
risograph / halftone / flat vector / collage / clay / single-line editorial
styles, plastic fake lighting, noise, harsh black shadows, floating un-grounded
product, fake jelly-like water.
```
