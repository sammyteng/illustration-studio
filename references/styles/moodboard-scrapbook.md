---
slug: moodboard-scrapbook
name_cn: 数字剪贴簿 moodboard
name_en: Digital Scrapbook / Moodboard Collage
channel: 小红书种草拼贴 / 跨境选品灵感板 / 出海生活方式 moodboard / 品牌情绪板
has_text: false            # 默认无叠加标题 → gemini（nano banana pro，照片抠图质感/投影更真）；物件自带的小字（机票 BOARDING PASS 等）是照片本身一部分，不算叠加文字
default_backend: nano
default_ratio: "3:4"
one_liner: 暖牛皮纸方格底上一组真实照片抠图叠贴，每张带柔投影、微倾斜、自然重叠，像手贴的向往感生活方式剪贴簿。
---

> 通用提炼 / 构图 / 渲染路径见 `_illustration-engine/ENGINE.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像有人把旅行/选品中最喜欢的几样东西——一张宝丽来生活照、一副墨镜、一张机票、一杯鸡尾酒——一件件抠出来、贴在牛皮纸笔记本上，每张都微微翘起投出软影、彼此压着一点角、歪一点点。**不是设计稿，是「贴出来的」**——向往感来自真实照片的颗粒与软影，不是矢量插画的干净。
> 在小红书种草 / 出海选品语境里，这种「真东西堆在一起」的拼贴比一张干净产品图更有「想拥有」的氛围。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **背景 / 纸底** | 暖米色 / 牛皮纸底 `#E8DCC4`，叠**极淡的方格纹 grid paper**（细线、低对比、像笔记本内页），可见**轻微纸纤维肌理**；**绝不纯白、绝不发光、绝不渐变** | `warm kraft / beige paper background #E8DCC4 with a faint subtle grid-paper pattern (thin low-contrast graph lines), light paper fiber texture, NEVER pure white or glowing` |
| 2 | **主体（灵魂第一条 · 真实照片抠图）** | **3-6 个真实摄影抠图 photo-cutout**，每个都是**实拍照片的质感**（自然光、真实材质反光、照片颗粒），不是插画、不是 3D 渲染。**必含至少一张宝丽来 Polaroid 白边生活方式照**（人物 / 场景 / 旅途瞬间），其余为抠出来的单品（墨镜 / 机票 / 鸡尾酒杯 / 果碗 / 马克杯 / 贝壳 / 防晒霜 等随主题） | `3 to 6 real PHOTOGRAPHIC cut-outs (photo-cutout collage), each looking like an actual photograph with natural light and grain — NOT illustration, NOT 3D render; must include at least one Polaroid-framed lifestyle photo (person / scene / travel moment) plus several cut-out real objects` |
| 3 | **柔投影（灵魂第二条 · drop shadow）** | **每一个抠图都带一层柔和的 drop shadow**，软边、低不透明度、略微偏移，像贴纸 / 照片**翘起一点离开纸面**的自然投影；不是硬边黑影、不是无影平贴 | `EVERY cut-out element casts a soft realistic drop shadow (soft-edged, low opacity, slight offset) as if it is physically lifted off the paper — never a hard black shadow, never shadow-less flat paste` |
| 4 | **重叠 + 微倾斜（灵魂第三条）** | 各物件**彼此轻微重叠压角**（一张压住另一张的一角）+ 每个**随机微倾斜 -8°~+8°**，松散不对齐，像手一件件贴上去的 | `elements gently OVERLAP (one tucked under the corner of another) and each is randomly slightly TILTED between -8 and +8 degrees, loose and hand-arranged, not grid-aligned` |
| 5 | **排版** | **松弛、有呼吸、不对齐网格**：物件错落分布、留白自然、像手贴的剪贴簿页，不是均匀网格、不是居中对称、不是 PPT 排版 | `relaxed breathing layout, scattered and off-grid like a hand-made scrapbook page, generous negative paper showing between pieces, NOT an even grid, NOT centered symmetry` |
| 6 | **点缀（克制）** | 可有**极少**胶带 washi tape / 小贴纸 / 手写小标记点缀固定某个角，**总量很少**，只为强化「贴上去」的手作感，不堆满 | `optional very sparse washi-tape strips / tiny stickers fixing a corner or two, used minimally just to sell the hand-pasted feel — do NOT clutter` |
| 7 | **光影 / 质感** | 整体是**实拍照片拼贴**的真实感：自然光、真实材质（玻璃反光、纸张哑光、金属高光各依本物），照片级颗粒；**不是**扁平矢量、**不是** 3D 卡通渲染 | `overall real-photo collage realism — natural lighting, true materials (glass reflections, matte paper, metal highlights per object), photographic grain; NOT flat vector, NOT 3D cartoon render` |
| 8 | **物件自带小字** | 物件上**本身就有的**小字（机票 `BOARDING PASS`、马克杯 logo 等）是**照片的一部分**，自然存在即可，**不额外叠加任何标题文字** | `any small text on objects (e.g. "BOARDING PASS" on a ticket) is part of the photographed object itself; do NOT add any separate overlaid title text` |
| 9 | **比例** | 默认 `3:4` 竖版（小红书 / moodboard 页） | `3:4 vertical scrapbook page` |

> 一眼自检：把图缩成拇指大，**仍能看出「这是一堆真东西贴在牛皮纸上」**——真实照片质感 + 每张软投影 + 重叠微倾 + 暖方格纸底，四件套齐全 = 对。看起来像干净矢量插画 / 3D 渲染 / 纯白产品图 / 排得整整齐齐 = 错。

---

## 配色

底色是**暖牛皮纸**，主体颜色**交给真实照片本身的自然色**（不强行统一色调），只在「那一点蓝」上做语义点缀。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **纸底 · 主** | 牛皮 / 暖米色 | `#E8DCC4` | 全图底色，方格纹画在它上面，留白即纸本身 |
| **纸底方格线** | 淡褐灰 | `#C9BBA0` | 极淡的 grid paper 细线，低对比，不抢主体 |
| **照片自然色** | —（不限定） | 实拍本色 | 墨镜的黑、果碗的橙红、鸡尾酒的金黄、人像的肤色——**保持照片真实色，不滤镜统一** |
| **那一点蓝（语义点缀）** | 机票 / 票据蓝 | `#3E6FB0` | 只一处：机票 / 登机牌 / 某张票据的蓝，做出「旅行 / 出海」的呼吸点 |
| **投影色** | 暖灰 | `#A99B82`（半透明） | 所有抠图的柔投影统一偏暖灰，不是纯黑，融进牛皮纸 |
| **胶带 / 贴纸（可选）** | 半透明米白 / 浅木色 | `#EFE7D6` | washi tape 点缀，哑光半透 |

铁律：
- **不做统一滤镜 / 不强行调成一个色调**——这套靠真实照片的「各是各的真色」堆出生活感；统一成一个莫兰迪色就死了。
- **暖底是底线**：背景永远暖牛皮纸 + 淡方格，**不许出现纯白底**。
- **蓝只点一处**（机票/票据），是「旅行/出海」语义锚，不是主色，别铺开。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **背景**：纯白 / 发光白 / 渐变 / 暗色科技底 / 无纹理干净底 / 没有方格纹的素底
- ❌ **主体形态**：扁平矢量插画 / flat vector / 商业扁平插画 / 3D 渲染 / 3D 卡通 / icon 风 / 手绘草图——本风格主体**必须是真实摄影抠图**
- ❌ **投影**：硬边纯黑投影 / 完全无投影的平贴 / 发光描边——必须是软边低透的「翘起」软影
- ❌ **排版**：均匀网格 / 居中对称 / 对齐到网格 / 排得整整齐齐像产品目录或 PPT——必须松散错落微倾
- ❌ **滤镜**：把所有照片调成同一个莫兰迪 / 复古统一色调，抹掉各物件真色
- ❌ **叠加文字**：额外加任何标题 / 标语 / 大字浮在拼贴上（物件自带小字除外）——这套 `has_text=false`
- ❌ **堆满**：物件 / 胶带 / 贴纸塞满整页没有呼吸留白；或单物件占画面过大
- ❌ **风格串味**：Riso 孔版网点错位 / 白底红橙蓝批注手绘 / SaaS 蓝科技风 / 极简单线社论 / 暖系马克笔插画（这几套是隔壁皮肤，别撞）

---

## 提示词模板

> 一次一张，**不要把多张拼一张**（这里「一张」=一整页拼贴，内含多个抠图元素，但只渲一页）。英文写画面主体 + 写死 DNA 关键词。
> **纯画面、无叠加文字 → 默认走 `nano`**（Gemini Nano Banana Pro，照片抠图质感 / 软投影更真）。物件自带小字不影响后端选择。

```
A digital scrapbook / moodboard collage page, {{RATIO}} aspect ratio, on a warm
kraft / beige paper background #E8DCC4 with a faint subtle grid-paper pattern
(thin low-contrast graph lines in #C9BBA0) and light paper fiber texture —
NEVER pure white, never glowing, never a gradient background.

Subject: {{SUBJECT}} — arranged as a hand-pasted moodboard that captures
"{{COGNITIVE_ANCHOR}}". The page is built from {{N}} REAL PHOTOGRAPHIC cut-outs
(photo-cutout collage), each looking like an actual photograph with natural
light, true materials and photographic grain — NOT illustration, NOT flat
vector, NOT 3D render.

COLLAGE HARD CONSTRAINT 1 — REAL PHOTO CUT-OUTS: include {{ELEMENTS}}. At least
one is a Polaroid-framed lifestyle photo (white instant-film border) showing
{{POLAROID_SCENE}}; the rest are cleanly cut-out real objects. Keep each object's
own natural color — do NOT unify them under one filter.

COLLAGE HARD CONSTRAINT 2 — SOFT DROP SHADOW: EVERY cut-out element casts its own
soft, warm-grey (#A99B82), low-opacity, slightly offset drop shadow, as if each
piece is physically lifted a little off the paper. Never hard black shadows,
never shadow-less flat paste.

COLLAGE HARD CONSTRAINT 3 — OVERLAP + TILT: the elements gently OVERLAP (one
tucked under the corner of another) and each is randomly slightly TILTED between
-8 and +8 degrees, loose and hand-arranged across the page, off-grid, with
generous breathing paper showing between pieces — NOT an even grid, NOT centered,
NOT a tidy product catalog.

ACCENT: keep a single touch of travel blue #3E6FB0 on one ticket / boarding pass.
Any small text on objects (e.g. "BOARDING PASS" on the ticket) is part of the
photographed object itself — do NOT add any separate overlaid title text.

DETAILS: optionally one or two sparse strips of semi-transparent washi tape
(#EFE7D6) fixing a corner — used minimally. Overall real-photo collage realism.

Mood: aspirational lifestyle / travel / curated picks moodboard, like the best
things from a trip laid out on a kraft notebook page — warm, tactile, "I want
this" energy.
Avoid: pure white or glowing background, flat vector or 3D illustration, hard
black or missing shadows, even grid / centered / PPT-tidy layout, a unifying
Morandi filter over all photos, any overlaid title text, clutter without breathing
room, riso halftone, white-paper sketch, SaaS blue UI, single-line editorial.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `3:4`（默认竖版 moodboard）/ `1:1`（方版情绪板）/ `4:5` |
| `{{SUBJECT}}` | 当前内容的一个**生活方式 / 选品场景主题**（如"夏季出海爆款 vibe""周末露营选品""沿海度假穿搭"）|
| `{{COGNITIVE_ANCHOR}}` | 这张图要传达的那个**向往感 / 处境**（如"把今夏要卖爆的几样东西摊在一起，一眼就想下单"）|
| `{{N}}` | 抠图元素总数 `3` 到 `6`（含那张宝丽来）|
| `{{ELEMENTS}}` | 逐个列出真实抠图单品，如 `a Polaroid lifestyle photo, black cat-eye sunglasses, a blue paper boarding pass, a frosted cocktail glass with a citrus slice, a bowl of fresh oranges, a ceramic mug` |
| `{{POLAROID_SCENE}}` | 宝丽来里拍的是什么（如 `a woman in a straw hat on a sunlit beach`）|

---

## 示例提示词（主题：跨境卖家的「夏季出海爆款 vibe」选品 / 出海生活方式灵感板）

> 认知锚点：**把这个夏天要卖爆的几样东西，连同它们撑起的那种度假生活方式，一起摊在牛皮纸上——不是产品图，是「这就是我想过的夏天」，一眼就想下单。**
> 隐喻：一页手贴剪贴簿——一张海边宝丽来定调氛围，墨镜 / 机票 / 鸡尾酒 / 果碗 / 防晒霜几样真实抠图错落叠贴，每件软投影翘起、微倾、压着角，机票那一抹蓝点出「出海」。
> 纯画面无叠加文字，机票自带 `BOARDING PASS` 是照片本身。可直接喂 `render.js`（`--backend nano --aspect 3:4`）。

```
A digital scrapbook / moodboard collage page, 3:4 aspect ratio, on a warm kraft /
beige paper background #E8DCC4 with a faint subtle grid-paper pattern (thin
low-contrast graph lines in #C9BBA0) and light paper fiber texture — NEVER pure
white, never glowing, never a gradient background.

Subject: a "summer beach-season bestsellers" mood page for a cross-border seller —
arranged as a hand-pasted moodboard that captures "lay this summer's about-to-go-
viral picks together with the vacation lifestyle they belong to, so it reads as a
life you want, not a product shot — and you want to buy it at a glance". The page
is built from FIVE REAL PHOTOGRAPHIC cut-outs (photo-cutout collage), each looking
like an actual photograph with natural light, true materials and photographic
grain — NOT illustration, NOT flat vector, NOT 3D render.

COLLAGE HARD CONSTRAINT 1 — REAL PHOTO CUT-OUTS: include a Polaroid lifestyle photo,
black cat-eye sunglasses, a blue paper boarding pass, a frosted cocktail glass with
a citrus slice, and a bowl of fresh oranges. At least one is a Polaroid-framed
lifestyle photo (white instant-film border) showing a woman in a straw hat relaxing
on a sunlit beach with turquoise water behind her; the rest are cleanly cut-out real
objects. Keep each object's own natural color — the deep black of the sunglasses,
the golden cocktail, the warm orange fruit — do NOT unify them under one filter.

COLLAGE HARD CONSTRAINT 2 — SOFT DROP SHADOW: EVERY cut-out element casts its own
soft, warm-grey (#A99B82), low-opacity, slightly offset drop shadow, as if each
piece is physically lifted a little off the paper. Never hard black shadows, never
shadow-less flat paste.

COLLAGE HARD CONSTRAINT 3 — OVERLAP + TILT: the elements gently OVERLAP (the
sunglasses resting on the corner of the Polaroid, the boarding pass tucked under the
fruit bowl) and each is randomly slightly TILTED between -8 and +8 degrees, loose and
hand-arranged across the page, off-grid, with generous breathing kraft paper showing
between pieces — NOT an even grid, NOT centered, NOT a tidy product catalog.

ACCENT: keep a single touch of travel blue #3E6FB0 on the boarding pass. Any small
text on objects (the printed "BOARDING PASS" on the ticket) is part of the
photographed object itself — do NOT add any separate overlaid title text.

DETAILS: one or two sparse strips of semi-transparent washi tape (#EFE7D6) fixing a
corner of the Polaroid — used minimally. Overall real-photo collage realism.

Mood: aspirational summer travel / curated bestsellers moodboard, like the best
finds from a beach trip laid out on a kraft notebook page — warm, tactile, sun-lit,
"I want this whole summer" energy.
Avoid: pure white or glowing background, flat vector or 3D illustration, hard black
or missing shadows, even grid / centered / PPT-tidy layout, a unifying Morandi filter
over all photos, any overlaid title text, clutter without breathing room, riso
halftone, white-paper sketch, SaaS blue UI, single-line editorial.
```
