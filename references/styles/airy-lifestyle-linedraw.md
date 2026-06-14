---
slug: airy-lifestyle-linedraw
name_cn: 留白生活速写
name_en: Airy Lifestyle Line Illustration
channel: 公众号生活方式封面 / 小红书 / 品牌 charm 插画 / 内容头图
has_text: true
default_backend: gpt            # 有手写体标题 → gpt-image-2（中英文字最稳）；纯画面无字时可切 gemini
default_ratio: "3:4"
one_liner: 干净肯定有魅力的手绘墨线勾生活小场景 + 柔和淡彩平铺，顶部大片柔和水彩天空留白 + 手写体显示标题，温暖松弛的 slice-of-life。
---

> 通用提炼 / 构图 / 渲染路径见 `_illustration-engine/ENGINE.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像一张「NO COFFEE NO LIFE」气质的生活方式小卡——一个人（或一只猫）在长椅上喝杯咖啡歇着，干净顺滑的墨线勾出来，柔和淡彩平铺，**上方一大片柔和水彩天空空着**，手写体标题随性落在留白里。温暖、松弛、有魅力，不潦草、不焦虑。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **🌬️ 大片留白（灵魂第一条 · 不可省）** | 浅色奶油底，生活场景只占**画面下方 / 中下部约 50%**；**上方一大片柔和水彩天空留白**给手写标题；**主体 ≤ 60% 画面、≥ 30% 干净留白区**，整体 airy、宁空勿满 | `generous negative space, lots of breathing room, uncluttered, airy; the scene sits only in the lower half, the entire upper area is open soft sky for the title, subject under 60% of the frame` |
| 2 | **线条（灵魂第二条）** | 干净、顺滑、**肯定有魅力的手绘墨线**勾形（人物 / 宠物 / 街景 / 器物），笔触流畅不抖、收放自如、略有粗细变化；**不是诊断式批注线、不是抖颤潦草线** | `clean confident smooth hand-drawn ink linework, charming fluid strokes with slight weight variation, NOT sketchy scribbles, NOT diagnostic annotation lines` |
| 3 | **上色（灵魂第三条）** | **柔和淡彩 / 水彩平铺**，低饱和、浅淡通透，大色块松松铺在墨线里（可略出线）；**留白处不填满**，水彩自然留出纸白透气 | `soft pale watercolor wash, low saturation flat-ish fills inside the linework, light and translucent, paper showing through, washes never fully covering the page` |
| 4 | **柔和水彩天空** | 顶部那片留白是**极淡的水彩天空**（淡蓝 / 奶油 / 微微晕染），不是纯白硬底，给画面温度又保持空 | `top area is a very soft pale watercolor sky wash (light denim-blue / cream, gentle bleed), warm but mostly empty` |
| 5 | **手写体标题（显示文字）** | **手绘 display lettering / 手写体**（英文或中文皆可），随性、有手感，落在上方留白里，是画面一部分而非生硬叠图层；可有**极小**一行 "illustration by ___" 署名 | `hand-lettered display title (casual handwritten script) placed in the open top space as part of the artwork; optional tiny "illustration by ___" credit line` |
| 6 | **场景 / 主体** | 一个温暖的**生活小场景**（slice-of-life）：人 / 宠物 / 街角 / 咖啡 / 长椅等日常瞬间，松弛、有故事感、不摆拍；只画一个核心小场景，不堆元素 | `a single warm slice-of-life vignette (a person, a pet, a café corner, a bench moment), relaxed and unposed, one focal scene only` |
| 7 | **光影 / 质感** | **无写实投影、无厚涂、无 3D、无照片质感**；平面化插画感，体积靠淡彩深浅与墨线，纸面温润 | `flat illustrated look, no realistic shadows, no heavy oil impasto, no 3D, no photographic texture, warm paper feel` |
| 8 | **中文 / 英文标注上限** | 标题 1 处 + 署名 1 处为主；若加场景内小标注 **≤ 3 处**短词（2-8 字），同为手写感，**总文字克制**，不写概念词 | `at most: 1 hand-lettered title + 1 tiny credit + up to 3 short scene labels, all hand-written feel, no jargon` |
| 9 | **比例** | 默认 `3:4` 竖版（封面 / 小红书） | `3:4 vertical` |

> 一眼自检：把图缩成拇指大，**上半张应该基本是空的**（天空 + 手写标题），下半张才是那个温暖小场景——空得下、读得懂、有魅力 = 对。画面塞满、上下都堆东西、线条抖成批注、颜色浓得发闷 = 错。

---

## 配色

低饱和、奶油底为主，墨线压形，**淡彩只点到为止**，留白靠纸白和淡水彩天空透气。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **奶油纸底** | Cream | `#F7F1E6` | 全图底色 + 留白区，温润不发光、不纯白 |
| **墨线** | 近黑墨 | `#1F1B1A` | 勾人物 / 宠物 / 街景 / 器物的主线，肯定流畅 |
| **牛仔蓝** | Denim Blue | `#5B7DB1` | 衣物 / 天空淡彩 / 器物，主色调温度 |
| **砖红** | Brick Red | `#C8553D` | 一处暖强调：咖啡 / 围巾 / 招牌 / 一抹点睛，面积最小 |
| **柔绿** | Soft Green | `#8DAE7A` | 植物 / 桌面 / 远景，自然过渡，不抢 |

铁律：
- **色数克制**：墨线 + 奶油底 + 牛仔蓝 + 砖红 + 柔绿为主，淡彩一律**低饱和、浅淡**，别浓、别荧光、别马卡龙糖系。
- **砖红只做一处暖点睛**，面积最小，用来勾住视线（咖啡杯 / 一抹围巾），不大面积刷。
- **天空那片留白**用最淡的牛仔蓝 / 奶油晕染，**保持空**，不许在天上又堆云朵又堆字塞满。

---

## 禁忌（命中任意一条 = 不合格 · 含与库内其他风格防撞脸）

- ❌ **塞满画面 / 没留白**：上下都堆满、场景占满全幅、天空被填满——直接杀死本风格的灵魂（留白是这套的命）。
- ❌ **白底 + 红橙蓝批注线**：诊断式批注、抖颤潦草草图线 →（撞 `keke-sketch` 白底手绘批注风，别撞）。
- ❌ **单一 contour 单线条、单点缀色的极简社论风** →（撞 `editorial-line` 单线风，本套是「墨线 + 成片淡彩」不是纯单线，别撞）。
- ❌ **厚涂水彩 / 浓墨重彩 / 高饱和湿水彩晕染主导** →（撞 `painterly` 水彩 / `ghibli` 厚渲染氛围，本套淡彩是平铺点到为止，不是大面积湿画法，别撞）。
- ❌ **拼贴 / 剪报 / 撕纸 / 胶带 / 多材质堆叠** →（撞 `mixed-media-collage` / `moodboard-scrapbook`，本套是单层手绘，别撞）。
- ❌ **厚涂油画 / 3D 渲染 / 照片 / 写实投影 / 高光金属玻璃拟态**。
- ❌ **线条潦草发抖、像没画完的草稿**：本套墨线要顺滑肯定有魅力，不是 sketchy。
- ❌ **配色**：高饱和、荧光、糖系马卡龙、企业商务蓝、暗色科技底。
- ❌ **标题做成清晰锐利的数码字幕浮在上层**：标题必须是手写感、融进画面；不写概念词（「赋能 / 闭环 / 提质增效」）。

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。英文写画面主体 + 写死 DNA 关键词；中文 / 英文只用于手写标题 + 极少标注。
> 有手写标题 → 走 `gpt`（gpt-image-2，文字最稳）；纯画面无字 → 可切 `gemini`。

```
Airy slice-of-life line illustration, {{RATIO}} aspect ratio, on a warm cream
paper background #F7F1E6 — soft, never pure white, never glowing, never a harsh
gradient.

🌬️ COMPOSITION — NEGATIVE SPACE IS THE WHOLE POINT: generous negative space,
lots of breathing room, uncluttered, airy. The little life scene sits ONLY in
the lower / lower-middle half of the frame (roughly 50%); the entire upper area
is open, kept as a very soft pale watercolor SKY wash with nothing crowding it,
reserved for the hand-lettered title. The subject takes up UNDER 60% of the
frame; at least 30% stays clean empty space. Never fill the page.

Subject: {{SUBJECT}} — a single warm, relaxed, unposed slice-of-life vignette
that visualizes "{{COGNITIVE_ANCHOR}}". One focal scene only, no clutter.

LINEWORK: clean, confident, smooth hand-drawn ink linework with charming fluid
strokes and slight weight variation — bold and assured, NOT sketchy scribbles,
NOT shaky, NOT red/orange/blue diagnostic annotation lines.

COLOR: soft pale low-saturation watercolor washes filled loosely inside the
linework, light and translucent with paper showing through — denim blue #5B7DB1
as the main tone, soft green #8DAE7A for plants / surfaces, and ONE small touch
of brick red #C8553D as the warm focal accent (e.g. the coffee, a scarf). Washes
never fully cover the page; the cream paper breathes through everywhere.

SKY: the open top area is a very soft pale watercolor sky wash (light denim-blue
and cream, gentle bleed), warm but mostly empty.

TYPOGRAPHY: {{TITLE}} — a casual hand-lettered display title sitting inside the
open top space as part of the artwork, hand-written feel (not a clean digital
overlay){{CREDIT_CLAUSE}}.{{LABELS_CLAUSE}}

LIGHTING: flat illustrated look, no realistic drop shadow, no heavy impasto, no
3D, no photographic texture, warm gentle paper feel.

Mood: warm, relaxed, charming slice-of-life; the kind of "NO COFFEE NO LIFE"
lifestyle card you'd pin up — cozy, airy, unhurried.
Avoid: a crowded / full page, no breathing room, white background, red/orange/blue
sketchy annotation lines, single thin contour-only minimalism, thick wet
heavy-pigment watercolor, oil impasto, collage / cut-paper / tape, 3D, photoreal,
realistic shadows, neon or candy pastel or corporate-blue palette, a clean
digital subtitle floating on top, jargon words.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `3:4`（默认竖版封面）/ `4:5`（小红书）/ `1:1`（头像位） |
| `{{SUBJECT}}` | 当前内容原创发明的**一个**温暖生活小场景（一个人 / 宠物 + 一个日常动作 + 少量器物），落在画面下半 |
| `{{COGNITIVE_ANCHOR}}` | 这张图要让人 1 秒读懂 / 共鸣的那句核心意思（处境类用「这不就是我吗」口径） |
| `{{TITLE}}` | 手写标题原文，写进引号，如 `the hand-lettered words "歇一会儿"` 或 `"NO COFFEE NO LIFE"` |
| `{{CREDIT_CLAUSE}}` | 要署名时填 ` plus one tiny "illustration by ___" credit line in small hand-lettering`；不要署名留空 |
| `{{LABELS_CLAUSE}}` | 要场景内小标注时填 ` Up to 3 short hand-written scene labels: "..." "..."`；不要留空 |

---

## 示例提示词（主题：跨境打工人日常小场景「大促间隙长椅上喝杯咖啡歇一会儿」）

> 认知锚点（处境类）：**大促忙到飞起，也得给自己留十分钟——坐下来喝口咖啡、放空一下，这一小口松弛才撑得住下一波。** 看图的人应该说「这不就是我吗」。
> 隐喻 / 场景：一个跨境打工人下班 / 大促间隙，独自坐在街边长椅上，手里捧一杯热咖啡，肩膀松下来，旁边或脚边一只猫 / 一个放下的工牌包；下半张是这个温暖小场景，**上半张一大片淡蓝水彩天空留白**，手写标题落在天上。一处砖红点睛在咖啡杯。
> 手写标题 + 极小署名。可直接喂 `render.js`（`--backend gpt --aspect 3:4`）。

```
Airy slice-of-life line illustration, 3:4 aspect ratio, on a warm cream paper
background #F7F1E6 — soft, never pure white, never glowing, never a harsh
gradient.

🌬️ COMPOSITION — NEGATIVE SPACE IS THE WHOLE POINT: generous negative space,
lots of breathing room, uncluttered, airy. The little life scene sits ONLY in
the lower / lower-middle half of the frame (roughly 50%); the entire upper area
is open, kept as a very soft pale watercolor SKY wash with nothing crowding it,
reserved for the hand-lettered title. The subject takes up UNDER 60% of the
frame; at least 30% stays clean empty space. Never fill the page.

Subject: a young cross-border e-commerce worker sitting alone on a simple street
bench during a break, shoulders relaxed, both hands warmly cupping a takeaway
coffee, eyes half-closed and at ease; a lazy cat curled at the foot of the bench
and a work lanyard bag set down beside them — a single warm, relaxed, unposed
slice-of-life vignette that visualizes "in the middle of the big-sale rush, just
sitting down for one coffee and ten quiet minutes is what carries you to the next
wave — this is so me". One focal scene only, no clutter.

LINEWORK: clean, confident, smooth hand-drawn ink linework with charming fluid
strokes and slight weight variation — bold and assured, NOT sketchy scribbles,
NOT shaky, NOT red/orange/blue diagnostic annotation lines.

COLOR: soft pale low-saturation watercolor washes filled loosely inside the
linework, light and translucent with paper showing through — denim blue #5B7DB1
on the worker's clothes and the sky, soft green #8DAE7A on a small plant by the
bench, and ONE small touch of brick red #C8553D as the warm focal accent on the
coffee cup. Washes never fully cover the page; the cream paper breathes through
everywhere.

SKY: the open top area is a very soft pale watercolor sky wash (light denim-blue
and cream, gentle bleed), warm but mostly empty.

TYPOGRAPHY: the casual hand-lettered title "歇一会儿" sitting inside the open top
sky space as part of the artwork, hand-written feel (not a clean digital overlay)
plus one tiny "illustration by 小克" credit line in small hand-lettering.

LIGHTING: flat illustrated look, no realistic drop shadow, no heavy impasto, no
3D, no photographic texture, warm gentle paper feel.

Mood: warm, relaxed, charming slice-of-life; the kind of "NO COFFEE NO LIFE"
lifestyle card you'd pin up — cozy, airy, unhurried.
Avoid: a crowded / full page, no breathing room, white background, red/orange/blue
sketchy annotation lines, single thin contour-only minimalism, thick wet
heavy-pigment watercolor, oil impasto, collage / cut-paper / tape, 3D, photoreal,
realistic shadows, neon or candy pastel or corporate-blue palette, a clean
digital subtitle floating on top, jargon words.
```
