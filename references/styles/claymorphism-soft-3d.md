---
slug: claymorphism-soft-3d
name_cn: 黏土软3D
name_en: Claymorphism / Soft 3D
channel: 吉祥物 / 功能拟人图标 / CTA 大图 / SaaS App 引导页 / 品牌人性化配图
has_text: false
default_backend: nano   # 无文字 → Gemini Nano Banana Pro（线条/质感更精细）；若加中文标注则切 gpt-image-2
default_ratio: "4:3"
---

# 视觉 DNA · 黏土软3D（Claymorphism / Soft 3D）

> 通用方法论（认知锚点 / 处境五问 / 构图 / 隐喻 / 渲染兜底 / 质检双闸）见
> [`../../../_illustration-engine/ENGINE.md`](../../../_illustration-engine/ENGINE.md)。
> 本文件只写这套风格「长什么样、用什么色、什么绝不能出现、怎么拼提示词」。

**一句话**：像橡皮泥捏出来的圆滚滚软 3D——哑光材质、柔和投影、马卡龙配色，胖嘟嘟很亲和。
给冰冷的 SaaS / 客服产品加温度，是科技品牌最稳的人性化 3D 方向。

---

## 视觉 DNA

> 以下 5 项是硬性必含，每条提示词都要齐；缺任一 = Gate 1 不过。

1. **背景**：单一柔和粉彩纯色背景（奶粉 / 薄荷 / 鹅黄 / 天蓝其一），或同色系**极淡径向柔光渐变**，
   中心微亮、边缘微沉。⚠️ 不要纯白死底、不要场景、不要纹理花纹——干净到主体像浮在一面奶油墙前。

2. **质感（灵魂铁律）**：所有形体是**哑光黏土 / 软橡胶**质感——
   `matte clay / soft rubbery / Play-Doh / plasticine`，表面有极细微的指压感与柔和高光，
   **绝不亮面塑料反光、绝不金属、绝不玻璃透明**。统一的「软」是这套风格的命根子。

3. **形状语言**：所有形体**圆润膨胀**（rounded, puffy, inflated, chubby），像被吹胀的气球或捏圆的橡皮泥——
   blob 圆胖造型，**零锐角、零硬边**，连"方块""箭头"也要把角全磨圆、把面捏鼓。胖即可爱。

4. **光影**：单一柔光（soft studio key light，多从左上或正上方）+ **大面积柔和软投影**
   （soft diffuse drop shadow，边缘虚化、颜色是背景的更深一档同色，不是死黑）。
   体积靠柔渐变堆出来，**不靠硬阴影、不靠描边**。整体通透、奶感、无攻击性。

5. **比例与留白**：默认 `1:1`（吉祥物 / 图标常用）；引导页大图可 `4:3`。
   主体居中或略偏，四周留足软背景透气，主体 ≤ 画面约 70%（软 3D 主体可比线条风稍大，但别顶边）。

**渲染质感词（提示词必带其一组合）**：
`3D render, soft matte clay material, claymorphism, rounded inflated shapes, soft studio lighting, gentle soft shadows, C4D / Octane soft-render look, pastel, cute, friendly, no sharp edges`

---

## 配色（马卡龙粉彩盘 · 哑光低饱和）

| 角色 | 颜色 | HEX | 用途 |
|---|---|---|---|
| 背景 / 主体底 | 奶粉 | `#FAD4D8` | 背景或主体可选底色（甜、暖、亲和）|
| 背景 / 主体底 | 薄荷绿 | `#BCE3D0` | 背景或主体可选底色（清新、放松）|
| 背景 / 主体底 | 鹅黄 | `#FCE5A6` | 高光 / 暖意点缀 / 主体亮色块 |
| 背景 / 主体底 | 天蓝 | `#BBD8F2` | 科技降温色 / 客服蓝的软化版 |
| 背景 / 主体底 | 藕粉 | `#E6C6D8` | 柔紫粉过渡 / 次要体块 |
| 投影 / 暗部 | 柔白 / 柔灰 | `#FFFFFF` / `#F0EBE6` | 高光提亮；软投影用背景深一档同色，不用纯黑 |

**配色铁律**：
- 全盘**低饱和、哑光**——拒绝高饱和荧光、拒绝纯黑纯白当主色。
- 一张图主色控制在 **2–3 个粉彩**，靠不同色块区分体块即可，别七彩堆糖。
- 强调靠**鹅黄高光**或**一个最饱和一档的同色**点睛（如腮红粉、按钮黄），不靠对比冲突色。

---

## 角色策略

可有可无。这套风格**最擅长拟人/吉祥物**——给抽象功能捏一个胖嘟嘟的软 3D 形象（机器人 / 信封 / 对话气泡长出小手小脚）。
但不绑固定 IP：每次按主体现捏一个无名软角色或软物件即可。无角色时，把功能物件本身捏成圆胖软 3D 也成立。

---

## 禁忌（命中任一即 Gate 1 不过）

- ❌ 锐利棱角 / 硬边 / 尖角箭头（一切角都得磨圆捏鼓）
- ❌ 亮面塑料反光 / 金属 / 玻璃透明 / 镜面高光（必须哑光黏土）
- ❌ 高饱和荧光色 / 彩虹渐变 / 霓虹赛博
- ❌ 描边线稿 / 扁平 flat 矢量 / 手绘潦草 / 像素风（这是体积软 3D，不是 2D）
- ❌ 纯白死底 / 真实照片 / 写实人脸 / 复杂场景背景
- ❌ 攻击性表情 / 尖牙利爪 / 冷峻机械感（气质必须亲和无害、圆滚滚）
- ❌ 满屏堆物件（icon soup）/ 把主题里所有名词都捏出来塞一张
- ❌ 在图上写「Workflow / 系统架构 / 功能清单」这类类型标题

---

## 审美方向

C4D / Octane 软渲染的可爱体积感——参照系：Play-Doh 橡皮泥、马卡龙、扭蛋盲盒、
Apple Memoji 的软润、Dribbble 上「pastel 3D icon set」那一挂。
气质关键词：圆胖、奶感、哑光、亲和、无攻击性、去技术冷感、有温度。
成功信号：一眼想捏它一下、觉得「这个 SaaS / 客服好像没那么冰冷了」。

---

## 标注上限：≤ 4（默认 0）

- 本风格 `has_text: false`，**默认无文字**，靠体块 + 表情 + 颜色讲，画面更干净也更好渲。
- 确需标注时 ≤ 4 处短词，**且必须切到 gpt-image-2 后端**（中文渲染更准），
  标签要捏成**软 3D 立体小牌子 / 鼓起的胶囊徽章**嵌进场景，别贴 2D 浮层文字。
- 禁概念长句（「提升服务效率」「全链路智能」一律不要）。

---

## 提示词模板

> 英文写画面主体，中文短标注（如需）原样放进 `{{LABELS}}`。
> `{{PASTEL_BG}}` / `{{RATIO}}` 是显式变量，渲染前替换；DNA 关键词已写死，别删。

### 变量占位

| 变量 | 默认值 | 说明 |
|---|---|---|
| `{{SUBJECT}}` | — | 本张主体（被捏成软 3D 的吉祥物 / 功能物件 / 拟人形象）|
| `{{PASTEL_BG}}` | `soft powder-pink #FAD4D8`（可换薄荷/鹅黄/天蓝/藕粉）| 单色粉彩背景 |
| `{{RATIO}}` | `1:1` | 渠道比例；引导页大图可 `4:3` |
| `{{LABELS}}` | 空（默认无字）| 仅在需要时 ≤4 个短词，且切 gpt-image-2 |

### 模板骨架

```
A cute soft 3D claymorphism render of {{SUBJECT}}.
Everything is sculpted from matte clay / Play-Doh / soft plasticine — rounded, puffy,
inflated, chubby shapes with absolutely NO sharp edges, every corner softly rounded and
plump. Matte rubbery surface with tiny finger-press dents and gentle soft highlights —
never glossy plastic, never metal, never glass.

Lighting: single soft studio key light from the upper-left, large soft diffuse drop shadow
in a darker tone of the background color (not black). Volume comes from gentle gradients,
no outlines, no hard shadows.

Background: a single clean pastel color — {{PASTEL_BG}} — optionally a very subtle radial
soft glow (slightly brighter center). No textures, no scene, no pure-white. The subject
floats in front of a creamy pastel wall, sits centered with generous breathing room,
under ~70% of the frame.

Color palette: macaron pastels (powder pink, mint green, butter yellow, sky blue, mauve),
all low-saturation and matte; 2–3 pastels max; one slightly-more-saturated same-hue accent
(or butter-yellow highlight) as the focal point. Soft white / soft gray for highlights.

Mood: friendly, harmless, warm, chubby and huggable — de-techified cuteness that warms up
a cold SaaS / customer-service product.

[OPTIONAL labels as small puffy 3D clay badges, max 4, only if needed: {{LABELS}}]

Aspect ratio {{RATIO}}. C4D / Octane soft-render look, claymorphism, pastel, high quality.

Avoid: sharp edges, hard corners, glossy reflective plastic, metal, glass, neon / high-
saturation colors, rainbow gradients, flat 2D vector, outlines, sketchy hand-drawn look,
pure-white background, real photo, realistic human face, aggressive expression, icon soup.
```

> 拼词提醒：默认不写文字（`has_text: false` → 走 Gemini Nano Banana Pro）；
> 一旦加 `{{LABELS}}`，把标签捏成立体小牌子并切 gpt-image-2 后端。
> 主体一句话讲不清 = 锚点不单一，回 shot list 重切。

---

## 示例提示词（主题：跨境 AI 客服机器人吉祥物 / SaaS App 功能引导页可爱图标）

> 锚点类型：角色 / 主体状态（把冰冷的"跨境 AI 客服"捏成一个圆滚滚、24h 在线、亲和无害的软 3D 小助手吉祥物）。
> 构图：单主体居中（角色 / 主体状态）；纯天蓝粉彩底，鹅黄做高光点睛。
> `has_text: false` → 默认无文字、走 Gemini Nano Banana Pro。一条可直接喂 render.js：

```
A cute soft 3D claymorphism render of a friendly cross-border AI customer-service robot
mascot. The little robot is sculpted entirely from matte clay / Play-Doh — a chubby
rounded body, a big puffy rounded head with two gentle glowing dot-eyes and a tiny warm
smile, short stubby arms; one stubby hand happily holds up a small rounded speech bubble,
and a tiny pastel globe sits beside its feet to hint at cross-border. Everything is puffy,
inflated and plump with absolutely NO sharp edges — every corner softly rounded.

Matte rubbery surface with tiny finger-press dents and soft highlights, never glossy,
never metal, never glass. Lighting: single soft studio key light from the upper-left,
large soft diffuse drop shadow in a deeper sky-blue tone (not black); volume from gentle
gradients, no outlines, no hard shadows.

Background: a single clean sky-blue pastel color (#BBD8F2) with a very subtle radial soft
glow, slightly brighter in the center, no textures, no scene; the mascot floats centered
in front of a creamy pastel wall with generous breathing room, under ~70% of the frame.

Color palette: macaron pastels — the robot body in soft mint (#BCE3D0) and powder pink
(#FAD4D8), the speech bubble and a cheek-blush accent picked out in butter yellow (#FCE5A6)
as the focal highlight; soft white for tiny highlights. All low-saturation and matte,
3 pastels max.

Mood: friendly, harmless, warm, chubby and huggable — a de-techified, approachable AI
assistant that warms up a cold SaaS / customer-service product.

Aspect ratio 1:1. C4D / Octane soft-render look, claymorphism, pastel, cute, high quality.

Avoid: sharp edges, hard corners, glossy reflective plastic, metal, glass, neon / high-
saturation colors, rainbow gradients, flat 2D vector, outlines, sketchy hand-drawn look,
pure-white background, real photo, realistic human face, aggressive expression, icon soup.
```

（无文字、3 个粉彩、鹅黄点睛、零锐角、哑光黏土、软投影、天蓝软底、主体居中 ≤70%、比例 1:1——
可直接喂 `render.js`，`has_text: false` 自动走 Gemini Nano Banana Pro。换底色把 `#BBD8F2` 全替换即可。）
