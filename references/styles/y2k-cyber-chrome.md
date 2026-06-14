---
slug: y2k-cyber-chrome
name_cn: Y2K千禧赛博
name_en: Cyber-Y2K
channel: 小红书封面 / 潮牌·美妆 campaign / Gen Z 内容创作者封面 / 抖音封面 / IG Story
has_text: true
default_backend: gpt          # 有字 → gpt-image-2（文字渲染最准）；纯画面才退 gemini nano banana
default_ratio: "3:4"
---

# Y2K千禧赛博 · Cyber-Y2K

> 通用方法论（认知锚点 / 处境五问 / 构图 / 隐喻 / 质检双闸）见 [`../../../_illustration-engine/ENGINE.md`](../../../_illustration-engine/ENGINE.md)。
> 本文件只写「这套风格长什么样、用什么色、什么绝对不能出现、提示词怎么拼」。

**一句话气质**：2000 年初的金属铬感 + 气泡膨胀字 + 液态全息渐变 + 星芒闪，土到极致即潮，吸睛拉满。
高饱和、高光泽、信息密度大——天生为短视频/小红书封面而生的「未来怀旧反差」。

---

## 视觉 DNA（每张提示词缺一条都算 Gate 1 不过）

| # | 硬性必含项 | 具体到能复现 |
|---|---|---|
| 1 | **铬质液态金属主体** | 主物件/主标题用 **liquid chrome / molten metal** 渲染：镜面高反射、流动的金属熔滴感、边缘有彩虹色环境反射（不是平涂银灰，是会「反射环境光」的活金属）。 |
| 2 | **全息/液态渐变背景** | 背景是 **holographic iridescent gradient**——荧光粉→电子蓝→青紫的油膜/肥皂泡流动渐变，可叠极细网格或扫描线，但**不能盖过主体**。 |
| 3 | **气泡膨胀立体字** | 文字一律 **inflated 3D bubble / puffy chrome lettering**，圆鼓鼓打了气、带厚高光，绝不用细体无衬线。中文标注也走这种胖圆鼓造型。 |
| 4 | **撞色高饱和** | 荧光粉 `#FF2D9B` × 电子蓝 `#1E5BFF` 强对撞，高饱和不收敛——这套就是要「亮到刺眼」。 |
| 5 | **贴纸拼贴点缀** | 至少 1-3 个 Y2K 符号贴纸：**4 角星芒 sparkle / 爱心 / 蝴蝶 / 火焰 / lens flare 镜头光斑 / 像素心**，做镜面或全息材质，散落但不堆满。 |
| 6 | **镜面高光 + 星芒闪** | 全图统一强镜面高光（specular highlight）+ 散点 **starburst sparkle**，制造「闪到糊脸」的廉价华丽感——这是 Y2K 的灵魂，缺了就成普通赛博。 |
| 7 | **渠道比例** | 封面 **3:4 竖版**，顶部或中部留气泡大标题区。 |

> 信息密度可以高（Y2K 本来就满），但**主隐喻只有一个**——别把主题里所有名词都做成贴纸堆上去（违反引擎单锚点铁律）。

---

## 配色

| 角色 | 颜色 | HEX | 用途 |
|---|---|---|---|
| 主色 A | 荧光粉 | `#FF2D9B` | 主撞色 / 标题 / 情绪点（必）|
| 主色 B | 电子蓝 | `#1E5BFF` | 对撞色 / 次主体 / 背景渐变锚点（必）|
| 质感主体 | 铬质银 | `#C0C6CC` → `#EAF0F5` 镜面 | 液态金属主物件 / 标题字（必）|
| 辅助 1 | 全息青紫 | `#7B5CFF` / `#00E0FF` | 背景油膜渐变过渡色 |
| 辅助 2 | 荧光绿 | `#A3FF12` | 极少量提亮点缀（贴纸/扫描线）|
| 强调高光 | 镜面白 | `#FFFFFF` | 星芒 / specular 高光 / lens flare |
| 暗部锚点 | 深空蓝黑 | `#0A0E2A` | 背景压暗角 / 增强对比（非纯黑）|

> 撞色是这套的语义核心：粉×蓝必同框对撞。铬银做主体反光，全息渐变做底，白做闪。荧光绿只点一滴。

---

## 禁忌（出现任一即 Gate 1 不过）

- ❌ **哑光 / 低饱和 / 莫兰迪 / 暖纸感**——这套是高光泽镜面，反着来。
- ❌ **手绘马克笔 / 彩铅 / 蜡笔柔边**（那是暖系风的地盘，绝不撞）。
- ❌ **极简单线 / 大留白 editorial**（那是另一套皮肤）。
- ❌ **企业蓝科技 flat / SaaS deck 味 / PPT 信息图味**。
- ❌ **细体无衬线标题**——必须气泡膨胀胖圆字，细体直接出戏。
- ❌ **平涂假银灰**冒充铬——必须真镜面反射 + 彩虹环境反光。
- ❌ 贴纸/星芒**堆满全图**到看不清主体（满≠乱，单锚点仍要立得住）。
- ❌ 写实人像照片 / 严肃纪实摄影质感。
- ❌ 在图上写「Workflow / 趋势分析 / 选品清单」这类类型标题（引擎通则）。

---

## 提示词模板

> 一次只拼一张。画面主体写英文（生图引擎更稳），中文气泡标注用引号原样保留。
> has_text=true → 默认走 **gpt-image-2**（中文胖字渲染最准、几乎不乱码）。

### 通用风格底（写死本风格 DNA，每张都塞）

```
Y2K Cyber-Y2K aesthetic, early-2000s millennium futurism. LIQUID CHROME molten-metal main
subject with mirror-finish reflections and rainbow iridescent environment reflections on its
edges. Background: holographic iridescent oil-slick gradient flowing from hot magenta #FF2D9B
to electric blue #1E5BFF through cyan-violet #7B5CFF / #00E0FF, with very faint scan-lines / fine
grid. INFLATED 3D bubble / puffy chrome lettering for all text — rounded, blown-up, glossy, thick
specular highlights (never thin fonts). High-saturation clashing magenta×blue, glossy mirror
finish everywhere. Y2K sticker-collage accents: chrome 4-point sparkle stars, hearts, butterflies,
lens flares scattered (not cluttered). Strong specular highlights + starburst sparkles all over —
cheap-glamour bling shine. One single focal metaphor only.
NEGATIVE: no matte / muted / Morandi / warm-paper look, no hand-drawn marker / pencil / crayon soft
edges, no minimalist single-line editorial, no corporate-blue flat SaaS / PPT infographic, no thin
sans-serif title, no fake flat grey pretending to be chrome, no realistic serious documentary photo,
no clutter burying the subject.
```

### 封面 prompt 模板（3:4 · 留气泡大标题区）

```
[通用风格底]
Vertical {{RATIO}} cover. Reserve the top (or center) zone for a BIG inflated chrome bubble headline:
"{{HEADLINE}}".
Main scene: {{SUBJECT}} — ONE liquid-chrome focal object/character doing one clear action, rendered as
molten mirror chrome with rainbow edge reflections, floating over the holographic gradient.
Scatter 1-3 chrome sparkle / heart / butterfly stickers around it.
Tiny inflated bubble Chinese labels near the action: {{LABELS}}.
Blinding glossy Y2K shine, eye-catching, social-cover energy.
```

变量：`{{RATIO}}`=3:4 · `{{HEADLINE}}`=气泡大标题钩子句 · `{{SUBJECT}}`=英文单主体场景 · `{{LABELS}}`=3-6 个中文气泡短标注（引号包住，逗号隔开）。

---

## 示例提示词（主题：跨境潮牌/美妆选品趋势 · 面向 Gen Z 内容创作者封面）

一条完整可直接喂 render.js 的 prompt（含 DNA + 具体画面 + 6 个中文气泡短标注）：

```
Y2K Cyber-Y2K aesthetic, early-2000s millennium futurism. Vertical 3:4 social cover.
Reserve the top zone for a BIG inflated 3D chrome bubble headline in molten mirror metal with thick
glossy highlights: "2026爆款雷达".
Main scene below: ONE giant liquid-chrome makeup compact / cosmetic palette as the single focal object,
its open lid a mirror-finish molten metal disc that REFLECTS a tiny rainbow trend chart, sitting / floating
over a holographic oil-slick gradient flowing from hot magenta #FF2D9B to electric blue #1E5BFF through
cyan-violet #7B5CFF and #00E0FF, with very faint scan-lines. The compact's lipstick bullets pop up like
chrome rockets aiming upward, each tipped with a glowing magenta heart — the one focal metaphor: hot picks
launching. Rainbow iridescent reflections crawl along every chrome edge. Scatter a few Y2K stickers around:
two chrome 4-point sparkle stars, one chrome heart, one tiny butterfly, a white lens flare — placed loosely,
not cluttered. INFLATED puffy bubble Chinese mini-labels near the bullets, rendered as small glossy chrome
puff lettering: "上新" "热卖" "Gen Z爱" "出单" "回购" "趋势". High-saturation clashing magenta×blue, blinding
glossy mirror finish, starburst sparkles all over, cheap-glamour Y2K bling, eye-catching short-video cover energy.
One single focal metaphor (hot picks launching) — keep the subject clearly readable.
NEGATIVE: no matte / muted / Morandi / warm-paper look, no hand-drawn marker / pencil / crayon soft edges,
no minimalist single-line editorial, no corporate-blue flat SaaS / PPT infographic, no thin sans-serif title,
no fake flat grey pretending to be chrome, no realistic serious documentary photo, no clutter burying the subject.
```

> 自检：3:4 ✅ / 气泡大标题区 ✅ / 单焦点隐喻（爆款选品如火箭升空）✅ / 液态铬主体+全息渐变背景+气泡字+撞色+贴纸+星芒 六项 DNA 全含 ✅ / 中文气泡标注 6 处（封面标题另算）✅ / 高光泽撞色无哑光 ✅ / 无手绘/无 editorial/无 SaaS flat 不撞脸 ✅。

---

## 与其他皮肤的区分线（防撞脸）

| 皮肤 | 它的脸 | 本风格反着来 |
|---|---|---|
| 暖系 marker | 暖纸 + 柔边马克笔 + 低饱和 | 高光泽镜面 + 高饱和撞色 |
| 白底手绘 sketch | 死白底 + 红橙蓝批注线 | 全息渐变底 + 铬质反光 |
| SaaS 科技蓝 | 企业蓝 flat + clean | Y2K 廉价华丽 + 满屏闪 |
| editorial 单线 | 极简单线 + 大留白 | 信息密度高 + 贴纸拼贴 |

本风格独占的「液态铬 + 气泡膨胀字 + 星芒闪 + 粉蓝撞色」组合是它的唯一指纹。
