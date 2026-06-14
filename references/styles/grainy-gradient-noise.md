---
slug: grainy-gradient-noise
name_cn: 颗粒噪点渐变
name_en: Grainy Gradient / Noise Texture
channel: SaaS 产品发布情绪头图 / 抽象主视觉 / 公众号封面 / 网站 hero 背景 / 报告章节扉页 / 播客封面
has_text: false
default_backend: nano   # 无字 → Gemini Nano Banana Pro（线条/质感更精细，颗粒成品感强）
default_ratio: "4:3"
---

# 颗粒噪点渐变 · Grainy Gradient / Noise Texture

> 通用方法论（认知锚点 / 处境五问 / 构图 / 隐喻 / 质检 / 渲染路径）见
> [`../../../_illustration-engine/ENGINE.md`](../../../_illustration-engine/ENGINE.md)。
> 本文件只写「这套风格长什么样、用什么色、什么绝对不能出现、提示词怎么拼」。

**一句话**：柔焦色块上叠一层胶片噪点，色彩像雾一样弥散过渡，复古又现代的情绪氛围底。

**这套和家族其他 4 套的根本区别**：其他 4 套都靠「线条/手绘/图标」讲一个认知动作；
这套**几乎没有线条、没有清晰主体**——它是纯氛围、纯光、纯颗粒。主角是「光与噪点」本身，
不是某个被画出来的物件。所以它不做流程图/对比图，只做**情绪底 / 头图 / hero 背景 / 留白给标题**。

---

## 视觉 DNA（必含 · 缺一条算 Gate 1 不过）

| # | 必含项 | 具体到能复现的要求 |
|---|---|---|
| 1 | **背景 = 全图主体** | 整张就是 2-3 个大色块以**柔焦（soft-focus / out-of-focus）方式相互弥散过渡**，没有任何硬边界。像隔着毛玻璃看晚霞。色块占满整个画框，不留纯色死区。 |
| 2 | **均匀胶片噪点层** | **全图覆盖一层均匀、细腻的胶片颗粒 / film grain / analog noise**，密度中等偏细（不是粗到像马赛克）。这层颗粒是这套风格的身份证——它是「这不是冰冷光滑 AI 图」的信号，**绝不能省**。 |
| 3 | **形状 = 无 / 弱主体** | 默认**无任何具体物件**；最多极弱地嵌一个**剪影 / 抽象符号 / 简单几何形**（一个圆、一道光带、一个模糊人影），且必须**柔焦融进背景**，不抢戏、不勾边、看不清细节。 |
| 4 | **质感 = 哑光雾面** | 整体**哑光（matte）**、低对比、雾面（hazy / foggy / dreamy），不刺眼、不发光过曝。颜色之间的过渡是「弥散」不是「线性渐变条」——要有云雾的不规则感。 |
| 5 | **光影 = 弥散辉光** | 光是从色块内部「透出来」的柔光（diffused inner glow），没有明确光源方向、没有锐利高光、没有投影。像晚霞或极光的散射光。 |
| 6 | **配色克制** | 一张图只用**一组 2-3 色的低饱和情绪渐变** + 一层暖灰噪点压调，不要五彩斑斓。见下方配色表。 |
| 7 | **留白即色块** | 「留白」不是留白纸，而是**留出一片大面积的平缓色雾区**给标题/文字后期叠加（默认顶部或左侧留一片更干净的低噪点区）。主体若有剪影，占画面 ≤ 30%。 |

---

## 配色（低饱和情绪渐变 · 给 hex）

> 规则：**每张只选一组**渐变对（2-3 色），全图统一压一层暖灰噪点 `#9A8E82` 做哑光底。
> 不要把多组混在一张图里。

**三组预设渐变对（择一）：**

| 渐变组 | 主色 | 辅助色 | 强调 / 第三色 | 情绪 |
|---|---|---|---|---|
| **暮紫→蜜橘**（默认） | 暮紫 `#7B6CA6` | 蜜橘 `#E8A06C` | 雾粉 `#D98BA0` | 黄昏 / 温柔收尾 / 发布会暖场 |
| **雾蓝→珊瑚** | 雾蓝 `#7E9CB8` | 珊瑚 `#E8896B` | 奶白 `#F0E6D8` | 清晨 / 平静理性 / 科技温度 |
| **苔绿→奶油** | 苔绿 `#8FA081` | 奶油 `#EFE4C8` | 浅琥珀 `#D7B27A` | 自然 / 松弛 / 有机生长 |

| 通用压调 | HEX | 用途 |
|---|---|---|
| 暖灰噪点 | `#9A8E82` | 全图叠加的胶片颗粒色调（统一所有渐变组的「哑光暖意」）|

> 所有颜色都**低饱和、哑光**。强调色只在某一角落「透一点」，不做大面积撞色。

---

## 禁忌（这套绝不要出现的东西）

- ❌ **硬边界 / 锐利矢量形状 / 清晰图标 / 描边线条** —— 一旦出现就破了「弥散雾面」的命。
- ❌ **具体可识别的物件**（人脸、产品、设备、文字 logo、UI 截图）—— 这是氛围底，不是插画。
- ❌ **光滑无颗粒的纯渐变** —— 没有 film grain = 不是这套风格（变成普通 CSS 渐变图）。
- ❌ **高饱和 / 霓虹 / 荧光色 / 赛博朋克电光** —— 这套是哑光雾面，不是发光屏幕。
- ❌ **明确光源 / 锐利高光 / 投影 / 镜头光斑(lens flare)** —— 光要弥散，不要打光感。
- ❌ **流程图 / 箭头 / 模块框 / 对比构图** —— 这套不讲「认知动作」，别套家族其他皮肤的构图。
- ❌ **3D 渲染感 / 玻璃拟物 / 写实照片 / 油画笔触** —— 要的是扁平雾面 + 颗粒，不是材质堆料。
- ❌ **五彩斑斓**（一张塞 4+ 色）—— 只许一组 2-3 色渐变对。
- ❌ **默认带文字**（has_text=false）—— 文字后期叠，画面本身不渲染中文标注（除非用户明确要带字，那时改走 gpt-image-2）。

---

## 提示词模板

> 一次只拼一张。主体写英文（生图引擎更稳）。本风格 **DNA 关键词写死在模板里**，调用时只替换变量。
> 变量：`{{SUBJECT}}`（弱主体/剪影，可留 none）· `{{GRADIENT}}`（选一组渐变对，连 hex 一起写进去）·
> `{{MOOD}}`（情绪词，如 dusk / dawn / calm）· `{{LABELS}}`（默认空——本风格不渲染文字）· `{{RATIO}}`（默认 16:9）。

```
Pure atmospheric abstract gradient field, NO clear subject, the entire frame IS the artwork.
Two-to-three large soft-focus color blocks bleeding and diffusing into each other like fog,
with NO hard edges — boundaries blurred as if seen through frosted glass / a misty sunset.
Gradient palette: {{GRADIENT}} (low-saturation, muted, matte — pick ONE harmonious pair).
A uniform fine FILM GRAIN / analog noise texture covers the ENTIRE image (warm-grey grain #9A8E82),
medium-fine density — this grain is mandatory, it makes the image feel hand-made and analog, NOT a slick smooth AI render.
Diffused inner glow, hazy dreamy matte mood, low contrast, no light source, no sharp highlights, no shadows.
{{SUBJECT_LINE}}  // e.g. "Optionally embed ONE very faint silhouette/abstract symbol ({{SUBJECT}}), softly melted into the haze, occupying <30% of frame, no outline, barely visible." — or omit entirely for pure field.
Leave one large calmer, lower-noise zone (top or left) as breathing space for a title to be added later.
Aspect ratio {{RATIO}}. Mood: {{MOOD}}.
NEGATIVE: no hard edges, no sharp vector shapes, no icons, no outlines/linework, no recognizable objects or faces or product or UI,
no logo, no text, no flowchart / arrows / boxes, no neon / fluorescent / cyberpunk glow, no lens flare,
no smooth gradient without grain, no 3D / glass / glossy / photo / realistic render, no oil-paint brushstrokes,
no busy multi-color clutter (keep to ONE 2-3 color pair).
```

**变量填法速查：**
- `{{GRADIENT}}` 三选一（务必带 hex）：
  - `dusk-purple #7B6CA6 to honey-orange #E8A06C with a touch of misty pink #D98BA0`
  - `misty-blue #7E9CB8 to coral #E8896B with cream #F0E6D8`
  - `moss-green #8FA081 to cream #EFE4C8 with pale amber #D7B27A`
- `{{SUBJECT}}` 默认 `none`（纯色雾场最稳）；要弱主体时填 `a faint human silhouette` / `a soft glowing circle` / `a single diffuse light band`。
- `{{SUBJECT_LINE}}`：无主体时整行删掉；有主体时用上面注释里的句式。
- `{{LABELS}}` 默认空。若用户明确要带中文短标注 → has_text 改 true、后端改 gpt-image-2，再把 3-6 个标注塞进画面安静区。

---

## 示例提示词（完整可直接渲染）

**主题**：SaaS 产品发布的情绪头图 / 跨境 AI 客服「让沟通有温度」的抽象主视觉
**选用**：暮紫→蜜橘渐变 + 一个极弱的「两个柔光点靠近彼此」剪影（隐喻"两端沟通在雾里靠近、被温暖光连起来"）· 16:9 · 无文字（has_text=false → Gemini Nano Banana Pro）

```
Pure atmospheric abstract gradient field, NO clear subject, the entire frame IS the artwork.
Two-to-three large soft-focus color blocks bleeding and diffusing into each other like fog, with NO hard edges —
boundaries blurred as if seen through frosted glass at a warm misty sunset.
Gradient palette: dusk-purple #7B6CA6 flowing into honey-orange #E8A06C with a soft touch of misty pink #D98BA0,
all low-saturation, muted and matte, harmonious dusk tones.
A uniform fine FILM GRAIN / analog noise texture covers the ENTIRE image (warm-grey grain #9A8E82), medium-fine density —
this grain is mandatory, it makes the image feel hand-made and analog, never a slick smooth render.
Diffused inner glow radiating gently from where the purple meets the orange, hazy dreamy matte mood, low contrast,
no defined light source, no sharp highlights, no shadows.
Optionally embed TWO very faint soft glowing orbs slowly drifting toward each other near the lower-center,
melted into the haze with no outline, barely visible, together occupying under 25% of frame —
a quiet metaphor of two ends of a conversation gently finding each other and being connected by warm light.
Leave the top one-third as a calmer, lower-noise breathing zone for a headline to be added later.
Aspect ratio 16:9. Mood: tender dusk, warm, human, calm-tech.
NEGATIVE: no hard edges, no sharp vector shapes, no icons, no outlines or linework, no recognizable objects or faces or product or chat-bubble UI,
no logo, no text or letters, no flowchart / arrows / boxes, no neon / fluorescent / cyberpunk glow, no lens flare,
no smooth gradient without grain, no 3D / glass / glossy / photo / realistic render, no oil-paint brushstrokes,
no busy multi-color clutter — keep strictly to the purple-orange-pink trio.
```

**一行渲染命令**（无字 → 走 Gemini）：
```bash
node "$HOME/shared-skills/_illustration-engine/render.js" \
  --backend nano --aspect 4:3 --out /tmp/grainy \
  --prompt-file <把上面 prompt 存成 .txt 的路径>
```

> 自检：纯氛围无清晰主体 ✅ / 2-3 柔焦色块弥散无硬边 ✅ / 全图胶片颗粒（强制项写死）✅ /
> 哑光雾面低对比无光源 ✅ / 单组暮紫蜜橘渐变（≤3 色）✅ / 弱剪影 <25% 融进雾里 ✅ /
> 顶部留安静区给标题 ✅ / 16:9 ✅ / 无文字（has_text=false 走 Gemini）✅ / NEGATIVE 封死硬边·图标·霓虹·3D ✅。
