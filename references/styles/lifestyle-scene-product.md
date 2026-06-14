---
slug: lifestyle-scene-product
name_cn: 生活场景产品图
name_en: Lifestyle Scene Product
channel: 种草 / 小红书 / 生活方式电商 / 品牌情绪图
has_text: false                 # 纯产品摄影图，无文字叠加 → nano（Gemini Nano Banana Pro，质感/光线最细腻）；若需在角落加产品名小字再切 gpt
default_backend: nano
default_ratio: "4:3"
one_liner: 真实感商业生活方式摄影：产品自然置于向往感生活场景（晨光木桌 / 浴室台面 / 厨房 / 户外），柔和自然窗光 + 浅景深虚化，温暖有呼吸，产品是主角但融入场景，大片留白给文案。
---

> 通用提炼 / 构图 / 渲染路径见 `references/engine.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像 Kinfolk / Cereal 杂志、Muji 生活提案、高端 DTC 品牌官网情绪图——**产品被放进一个让人「想过这种生活」的真实角落**：晨光斜照的木桌一角、刚整理过的浴室台面、有绿植的窗边。**这是真实的商业生活方式摄影，不是插画、不是 3D demo**。光是柔和的自然窗光，背景用浅景深化掉，画面温暖、安静、有呼吸感，产品是主角但**自然融入场景、不像被摆拍**。大片干净空间留给标题和种草文案。
> 与库里其他风格的分界：这套是**真实感商业生活方式摄影**（photoreal lifestyle photography）——
> - 不撞 `premium-product-hero`：那套是**棚拍纯净背景 + 身后弧形浮动情境屏 + wordmark/slogan/CTA 广告版式**；本套**没有任何文字版式、没有浮动面板、没有无缝影棚背景**，而是产品落在**真实生活场景**里靠自然窗光说话。
> - 不撞 `saas-tech`：那套是扁平矢量科技插画；本套是真实照片质感、有真实景深和材质。
> - 不撞 claymorphism / 黏土风：那套是软糯 3D 捏塑玩具感；本套是**真实摄影**，材质真实、光影自然，绝无黏土塑料感。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **🌬️ 留白 / 呼吸感（铁律第一条）** | 产品 **≤ 55% 画面**，**≥ 35% 干净留白区**（柔和虚化的台面、墙面、空气）专门留给标题/种草文案；构图疏朗、宁空勿满，画面要「透气」，绝不堆满道具 | `generous negative space, lots of breathing room, uncluttered, airy, product occupies under 55% of frame, large clean soft area reserved for copy` |
| 2 | **真实感商业摄影质感（灵魂第一条）** | **photoreal commercial product photography**，不是插画 / 不是 3D 渲染 demo / 不是黏土；真实相机拍摄观感，真实材质、真实景深、自然胶片级色彩 | `photoreal commercial lifestyle product photography, shot on a full-frame camera with a fast prime lens, realistic materials and textures, NOT an illustration, NOT a 3D render, NOT clay` |
| 3 | **向往感真实生活场景（灵魂第二条）** | 产品自然置于一个**令人向往的真实生活角落**：晨光木桌一角 / 整洁浴室台面 / 厨房中岛 / 窗边绿植旁 / 户外野餐布；场景真实可信、有生活气，但**克制不杂乱**（点到为止的陪衬物，不堆料） | `the product naturally placed in an aspirational real-life setting — a sunlit wooden desk corner / a tidy bathroom counter / a kitchen island / by a window with plants / an outdoor picnic — believable and lived-in but restrained, only a few tasteful supporting props, never cluttered` |
| 4 | **柔和自然窗光（灵魂第三条）** | **soft natural window light**，侧逆光或斜射晨光，方向感明确，过渡柔和；产品边缘有干净的自然高光，地面/台面有**柔和的自然投影**（不是硬黑影、不是棚拍硬光） | `soft directional natural window light, gentle morning sunlight raking across the scene, clean natural highlights on the product, soft realistic shadows on the surface — no hard studio flash, no harsh black shadow` |
| 5 | **浅景深虚化背景** | **shallow depth of field**，产品清晰锐利，背景与前景陪衬物**奶油般柔焦虚化（bokeh）**，把视线锁在产品上，营造高级镜头感 | `shallow depth of field, the product tack-sharp in focus while the background and foreground props melt into creamy soft bokeh, drawing the eye to the product` |
| 6 | **温暖有呼吸的生活气氛（灵魂第四条）** | 整体**温暖、安静、惬意、有人味**——像某人刚离开这个角落、生活正在发生；不是冷峻的产品目录图，而是有情绪温度的「向往的一天」 | `warm, calm, cozy, intimate everyday-life mood, as if someone just stepped away, quiet and inviting, emotional warmth — not a cold sterile catalog shot` |
| 7 | **产品是主角但融入场景** | 产品是**绝对视觉焦点**（构图、对焦、光线都指向它），但它**自然地属于这个场景**，像被真实使用着，而不是被生硬摆拍、悬空、或贴上去的 | `the product is the clear hero — composition, focus and light all lead to it — yet it belongs naturally in the scene, looking genuinely used and at home, never stiffly staged or pasted in` |
| 8 | **配色 · 自然暖调** | **木色 / 米色 / 奶油白 / 浅绿植物**等自然暖中性主导 + **产品本色**；整体柔和、低饱和、不艳；像清晨自然光下的真实色温（约 4800–5500K，略暖） | `natural warm neutral palette — wood tones, beige, cream, soft greenery — plus the product's own real color, gentle and low-saturation, never garish, a slightly warm morning color temperature` |
| 9 | **比例** | 默认 `4:3`（横版生活方式 / 小红书横图）；竖版种草用 `3:4`，方版社媒用 `1:1` | `4:3 (or 3:4 / 1:1)` |

> 一眼自检：把图缩成拇指大，**仍像一张「真实拍摄的、让人想过这种生活」的生活方式产品照**——一个产品落在阳光照进来的真实角落、背景柔焦虚化、暖调、有大片透气的空间。看起来像插画 / 3D 渲染 / 黏土 / 棚拍纯背景 / 堆满道具 / 有广告文字版式 = 错。

---

## 配色

**自然暖调中性体系**，颜色服务于「真实清晨自然光 + 温暖生活气」。除产品本色外，全图低饱和、柔和不艳。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **暖木色** | 暖橡木 / Warm Oak | `#C8A77B` | 木桌 / 木质台面 / 木地板等主要承载面 |
| **米色 / 奶油** | 燕麦奶油 / Oat Cream | `#F2E9DC` | 墙面 / 桌布 / 留白区主底，给文案留的呼吸空间 |
| **奶白 · 高光** | 暖白 / Warm White | `#FBF8F2` | 窗光打亮处、最亮的留白、柔和高光 |
| **柔绿 · 植物** | 鼠尾草绿 / Sage Green | `#9CAE8E` | 绿植 / 一丝自然点缀，低饱和不抢戏 |
| **暖灰 · 阴影** | 暖灰褐 / Warm Taupe | `#A89684` | 柔和自然投影、虚化背景的中间调 |
| **晨光 · 暖** | 蜜橘晨光 / Honey Glow | `#E8C9A0` | 斜射阳光的光斑 / 边缘暖高光（面积小） |
| **产品本色** | 随产品而定 | —— | 产品自身真实颜色，是全图最清晰、最被对焦强调的色彩焦点 |

铁律：
- **整体偏暖、低饱和**，模拟清晨自然窗光的真实色温，绝不冷峻、绝不高饱和糖果色。
- **背景永远是真实虚化的生活场景**（木桌 / 台面 / 窗边），绝不无缝棚拍纯色背景、绝不深色科技底、绝不扁平插画底。
- **绿植/暖光等点缀面积小**，只为加生活气，不抢产品的对焦焦点。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **画成插画 / 矢量 / 扁平**：本套是**真实摄影**，任何手绘、矢量、扁平、线稿、半色调网点观感都不合格（别撞 saas-tech 扁平科技插画）。
- ❌ **3D 渲染 demo 感 / 黏土感**：塑料假光、软糯捏塑玩具质感、CGI 默认渲染味——本套要**真实相机拍摄质感**（别撞 claymorphism 黏土）。
- ❌ **棚拍纯净背景 + 浮动面板 + 广告文字版式**：无缝灰白影棚底、身后弧形情境屏、wordmark/slogan/CTA 居中大字——那是 `premium-product-hero` 的皮肤，本套**纯生活场景、无任何文字版式、无浮动面板**，别撞。
- ❌ **场景杂乱堆料**：道具堆满、桌面塞爆、信息过载——必须克制留白，只放点到为止的陪衬物。
- ❌ **硬棚拍光 / 硬黑投影**：生硬闪光灯、硬边黑影、无方向的平光——本套只用**柔和自然窗光 + 柔和自然投影**。
- ❌ **冷峻目录图 / 无情绪**：冷白光、纯背景、产品孤零零居中像电商详情页主图——本套要有**温暖生活气和向往感**。
- ❌ **产品悬空 / 摆拍生硬 / 贴图感**：产品没接地、像被抠图贴上去、姿态僵硬不属于场景。
- ❌ **高饱和 / 艳俗滤镜**：浓艳 HDR、糖果色、强烈彩色滤镜——本套是柔和低饱和的自然暖调。
- ❌ **文字叠加**：默认**整图无文字**（has_text:false）；只有用户明确要求在角落加极小产品名时才切 gpt，且仅一处小字，绝不做广告版式。

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。整段英文写画面主体，**写死 DNA 关键词**（photoreal / natural window light / shallow depth of field / aspirational setting / negative space）。
> 默认**无文字** → 走 `nano`（Gemini Nano Banana Pro，自然光线与材质质感最细腻）。仅当用户要在角落加极小产品名时 → 切 `gpt`，且只加一处小字、绝不做版式。

```
Photoreal commercial lifestyle product photography, {{RATIO}} aspect ratio, shot
on a full-frame camera with a fast prime lens — this is a REAL photograph, NOT an
illustration, NOT a 3D render, NOT clay.

HERO (the soul): {{PRODUCT}}, the clear hero of the frame — composition, focus and
light all lead to it — placed naturally in {{SETTING}}, an aspirational real-life
setting that feels lived-in and inviting. It looks genuinely used and at home in
the scene, never stiffly staged, never floating, never pasted in. It visualizes
"{{COGNITIVE_ANCHOR}}".

LIGHT: soft directional natural window light, gentle morning sunlight raking
across the scene from one side, clean natural highlights on the product and soft
realistic shadows on the surface — no hard studio flash, no harsh black shadow.

DEPTH: shallow depth of field — the product is tack-sharp and in focus while the
background and a few foreground props melt into creamy soft bokeh, keeping the eye
locked on the product.

SCENE & PROPS: {{SUPPORTING_PROPS}}, only a few tasteful supporting elements,
restrained and uncluttered — believable everyday life, not a styled prop pile.

MOOD: warm, calm, cozy and intimate, as if someone just stepped away and life is
quietly happening here.

COMPOSITION & SPACE: generous negative space and lots of breathing room — the
product occupies under 55% of the frame, with a large clean softly-blurred area
({{NEGATIVE_SPACE}}) reserved as quiet space for a headline or caption. Airy,
uncluttered, never crowded.

PALETTE: natural warm neutral tones — wood, beige, cream, a touch of soft greenery
(#C8A77B / #F2E9DC / #FBF8F2 / #9CAE8E) — plus the product's own real color; gentle,
low-saturation, a slightly warm morning color temperature, never garish.

FINISH: crisp realistic photography, true materials and textures, natural film-like
color, fine grain, premium and authentic — like an editorial lifestyle shot for a
high-end DTC brand.

Avoid: illustration / flat vector / line art / halftone, 3D-render-demo or clay
look, plastic fake lighting, seamless studio backdrop with floating panels and
slogan/CTA advertising layout, cluttered prop pile, hard flash or harsh black
shadows, cold sterile catalog look, floating un-grounded product, high-saturation
candy colors, any text overlay.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `4:3`（默认横版生活方式）/ `3:4`（竖版种草）/ `1:1`（社媒方版）|
| `{{PRODUCT}}` | 产品的具体写实描述（形态 + 材质 + 颜色），如「a small fabric-wrapped portable Bluetooth speaker in warm sand color」|
| `{{SETTING}}` | 向往感真实场景，如「the corner of a sunlit wooden desk by a window」/「a tidy marble bathroom counter」/「a wooden kitchen island」/「an outdoor linen picnic blanket」|
| `{{COGNITIVE_ANCHOR}}` | 这张图要让人 1 秒感受到的向往感 / 卖点情绪（如「慢下来的清晨，音乐刚好陪着咖啡」）|
| `{{SUPPORTING_PROPS}}` | 1–3 个克制的生活陪衬物（虚化在景深外），如「a steaming cup of coffee softly out of focus, a small potted plant, a folded linen napkin」|
| `{{NEGATIVE_SPACE}}` | 留白区域在哪、长啥样，如「the softly-lit empty wall and desk surface in the upper-left」|

> 整图默认**无任何文字**。如确需角落小字（产品名），切 `gpt` 并只加一处极小字样，绝不做 slogan/CTA 版式。

---

## 示例提示词（主题：跨境家居/3C 跨界·便携蓝牙音箱·晨光木桌生活方式图 · 无文字）

> 认知锚点：**慢下来的清晨——一台小巧的便携蓝牙音箱放在洒满晨光的木桌一角，旁边一杯咖啡虚化着冒热气，音乐刚好陪着这惬意的一天开始。**
> 隐喻 / 构图：暖砂色织物便携音箱落在窗边木桌一角，柔和斜射晨光，旁边一杯热咖啡柔焦虚化、一小盆绿植；浅景深锁焦音箱，左上大片柔光留白给标题。4:3 横版，整图无文字。可直接喂 `render.js`（`--backend nano --aspect 4:3`）。

```
Photoreal commercial lifestyle product photography, 4:3 aspect ratio, shot on a
full-frame camera with a fast 50mm prime lens — this is a REAL photograph, NOT an
illustration, NOT a 3D render, NOT clay.

HERO (the soul): a small portable Bluetooth speaker wrapped in warm sand-colored
woven fabric, a soft rounded cylinder with a subtle metallic accent ring, the
clear hero of the frame — composition, focus and light all lead to it — sitting
naturally on the corner of a sunlit wooden desk by a window, an aspirational,
lived-in everyday setting. It looks genuinely placed there during a slow morning,
never stiffly staged, never floating, never pasted in. It visualizes "a slow,
unhurried morning where music quietly keeps the coffee company".

LIGHT: soft directional natural window light, gentle morning sunlight raking
across the desk from the right, a warm rim highlight on the speaker's fabric and
soft realistic shadows on the wood grain — no hard studio flash, no harsh black
shadow.

DEPTH: shallow depth of field — the speaker is tack-sharp and in focus while the
background and a steaming cup of coffee in the foreground melt into creamy soft
bokeh, keeping the eye locked on the speaker.

SCENE & PROPS: a steaming cup of coffee softly out of focus beside it, a tiny
potted green plant blurred in the background, the warm wood grain of the desk —
only a few tasteful elements, restrained and uncluttered, believable everyday
life rather than a styled prop pile.

MOOD: warm, calm, cozy and intimate, as if someone just sat down with their coffee
and life is quietly happening in this sunny corner.

COMPOSITION & SPACE: generous negative space and lots of breathing room — the
speaker occupies under 55% of the frame, with a large clean softly-blurred area
(the sunlit empty wall and desk surface in the upper-left) reserved as quiet space
for a headline. Airy, uncluttered, never crowded.

PALETTE: natural warm neutral tones — warm oak wood #C8A77B, oat cream #F2E9DC,
warm white #FBF8F2 highlights and a touch of sage green #9CAE8E from the plant —
plus the speaker's sand fabric color; gentle, low-saturation, a slightly warm
morning color temperature, never garish.

FINISH: crisp realistic photography, true fabric and wood textures, natural
film-like color, fine grain, premium and authentic — like an editorial lifestyle
shot for a high-end DTC home-audio brand.

Avoid: illustration / flat vector / line art / halftone, 3D-render-demo or clay
look, plastic fake lighting, seamless studio backdrop with floating panels and
slogan/CTA advertising layout, cluttered prop pile, hard flash or harsh black
shadows, cold sterile catalog look, floating un-grounded product, high-saturation
candy colors, any text overlay.
```
