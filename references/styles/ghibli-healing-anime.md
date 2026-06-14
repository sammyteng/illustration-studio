---
slug: ghibli-healing-anime
name_cn: 吉卜力治愈动漫
name_en: Ghibli / Healing Anime
channel: 小红书 / TikTok / 品牌 campaign / 产品故事 / 节日海报 / 公众号头图
has_text: false
default_backend: nano        # 无文字 → Gemini Nano Banana Pro（线条/质感更精细）；若需嵌中文标注则改 gpt-image-2
default_ratio: "16:9"
---

# 吉卜力治愈动漫 · Ghibli / Healing Anime

> 通用方法论（认知锚点 / 处境五问 / 构图 / 隐喻 / 质检双闸 / 渲染路径）见
> [`../../../_illustration-engine/ENGINE.md`](../../../_illustration-engine/ENGINE.md)。
> 本文件只写「这套风格长什么样、用什么色、什么绝对不能出现、提示词怎么拼」。

**一句话**：宫崎骏式水彩天空、绿意田园和温柔光线，治愈又怀旧，情绪浓度极高——
情感营销的核武器，撬动分享与收藏。

---

## 视觉 DNA

「长相」必须同时具备下面四项硬性必含，缺一条按 Gate 1 不过。要具体到能复现。

| 维度 | 必含项 | 具体到能复现 |
|---|---|---|
| **背景** | 通透水彩天空 + 流云 + 绿意田园 | 大面积**手绘水彩天空**（柔和渐变，不是 flat 色块），白云有水彩晕染的蓬松边、云底带一点暖灰；地面是**绿意场景**——草甸 / 稻田 / 林荫小路 / 山坡 / 海岸线之一，草有风吹过的方向感。天空占画面约 1/2–2/3，给足"透气感"。 |
| **线条 / 质感** | 手绘动漫线收形 + 赛璐珞平涂 + 水彩叠染 | 角色与近景物件用**柔和手绘动漫描线**（cel-shading 收边，非硬矢量、非黑粗描边）；上色是**赛璐珞平涂 + 水彩质感叠染**的混合——大色块干净，边缘和阴影有水彩的湿润过渡。整体看像一帧定格的动画背景画（background art），不是照片、不是 3D。 |
| **形状** | 圆润、自然、有机 | 云朵、树冠、山形、人物轮廓都偏**圆润饱满**，没有锐角和工业硬边。植物、衣褶、发丝有"被风轻轻吹动"的弧度。 |
| **光影** | 细腻环境光 + 逆光 + 暖调丁达尔 | **逆光是灵魂**：光源多来自远处低角度（黄昏 / 清晨 / 午后斜阳），人物和草尖有**暖金色描边光（rim light）**；空气里有**柔和的光晕 / 丁达尔光束 / 漂浮的微尘或花絮**；阴影是**暖调透明**的（带蓝紫或暖灰，绝不是死黑）。整体光线"温柔不刺眼"。 |

**叙事感（强烈加分项）**：角色（如出现）要有**情绪与处境**——独自站在风里眺望远方、慢下来抬头看天、坐在田埂边发呆、背着包走向地平线。一个有故事的背影/侧脸，比正脸摆拍更吉卜力。**无固定 IP、不绑特定动画角色**，用通用无名小人承担处境。

---

## 配色

水彩柔光、自然饱和、通透不刺眼；逆光暖调。

| 角色 | 颜色 | HEX | 用途 |
|---|---|---|---|
| **主色** | 通透天空蓝 | `#8FC5E8` | 天空主调（必）/ 大面积透气 |
| 主色 | 草甸绿 | `#7FB069` | 田园 / 草坡 / 树冠主调（必）|
| **辅助** | 云朵白 | `#FBF7EE` | 流云 / 高光 / 留白（暖白，非死白 `#FFFFFF`）|
| 辅助 | 淡青远山 | `#A9CBD3` | 远景山峦 / 空气透视退色 |
| 辅助 | 浅赭土路 | `#D9C2A3` | 小路 / 田埂 / 木质暖物件 |
| **强调** | 暖阳金 | `#F4C76B` | 逆光 / rim light / 丁达尔光束（语义=温柔/希望，只点不铺）|
| 强调 | 落日橘粉 | `#F0A47A` | 黄昏天际线 / 情绪高点 / 暖意收尾 |

> 强调色（暖阳金 / 落日橘粉）只做**语义**——标出光的方向、情绪高点。一张图主导是天空蓝 + 草甸绿，暖色只在逆光处点睛，**不要满图撒暖光**变成 Instagram 滤镜。

---

## 禁忌

这套风格绝不要出现的东西（出现任一即 Gate 1 不过）：

- ❌ 冷色科技 / 霓虹 / 赛博 / 蓝紫科技渐变
- ❌ 硬黑粗描边、锐利矢量 flat icon、扁平 corporate 插画
- ❌ 真实照片质感 / 3D 渲染 / CG 写实皮肤光泽
- ❌ 死黑阴影（必须暖调透明阴影）
- ❌ 高饱和荧光色 / Instagram 重滤镜 / HDR 过曝
- ❌ 死白纯白天空 `#FFFFFF`（云与天必须有水彩晕染层次）
- ❌ 复杂信息图 / 多框多箭头 / PPT 味 / 商业广告海报排版
- ❌ 阴郁、暗黑、惊悚、压抑情绪（这套只做治愈/温柔/怀旧/向往）
- ❌ 复刻特定吉卜力电影角色或场景（要"吉卜力气质"，不要"吉卜力同人"）
- ❌ 画面被塞满——天空必须留出大面积透气

---

## 提示词模板

> 一次只拼一张。主体写英文（生图引擎更稳）；若 `has_text:true` 才把中文短标注用引号原样保留。
> 模板里**写死了本风格 DNA 关键词**，填变量即可。变量：`{{SUBJECT}}` `{{LABELS}}` `{{RATIO}}`。

**通用风格底（写死 DNA，每张必塞）**：

```
Studio-Ghibli-style hand-painted healing anime illustration, watercolor background-art look,
luminous translucent watercolor sky filling the upper 1/2–2/3 of the frame with soft fluffy
cumulus clouds (wet watercolor bleeding edges, warm-grey cloud undersides), lush green
pastoral landscape below — meadow / rice field / tree-lined path / rolling hills,
gentle wind sweeping through the grass.
Soft hand-drawn anime line work with cel-shading, mixed flat cel color + watercolor washes
(clean color blocks, moist watercolor edges), rounded organic shapes, no hard black outlines.
Tender backlight is the soul: low-angle golden-hour / early-morning sun behind the subject,
warm golden rim light on figure and grass tips, soft light bloom and gentle Tyndall light rays,
floating dust motes / drifting petals, transparent warm-toned shadows (never dead black).
Palette: translucent sky blue #8FC5E8, meadow green #7FB069, warm cloud white #FBF7EE,
hazy distant-mountain teal #A9CBD3, ochre earth path #D9C2A3, warm sun-gold #F4C76B,
sunset peach #F0A47A. Naturally saturated, soft and never harsh, nostalgic and emotional.
Subject {{SUBJECT}}. {{LABELS}}
Generous breathing room, sky-heavy composition, subject under ~55% of frame, {{RATIO}}.
NEGATIVE: no cool tech gradients, no neon, no cyberpunk, no hard black outlines, no flat
vector icons, no corporate flat illustration, no photo / 3D / CG-realistic render, no dead
black shadows, no fluorescent / HDR over-saturation, no heavy Instagram filter, no pure-white
#FFFFFF sky, no busy diagram / PPT layout, no gloomy or dark mood.
```

**变量填法**：
- `{{SUBJECT}}` — 一句英文画面主体：谁（通用无名小人 / 背影 / 物件），在做一个**慢下来 / 眺望 / 出发**的有叙事感的动作。
- `{{LABELS}}` — 若 `has_text:false`（默认）→ 留空字符串，不写任何文字。若需嵌字（改 gpt-image-2 后端）→ 写 `Up to 4 small hand-written Chinese labels: "<词1>" "<词2>" ...`，词来自真实语境、短（2-6 字）。
- `{{RATIO}}` — `16:9 cinematic widescreen`（默认横图 / 公众号头图 / TikTok 横）或 `3:4 vertical`（小红书封面）或 `1:1 square`。

> 拼好先过引擎第 7 节 Gate 1：单一锚点 / 原创处境（别复刻电影帧）/ DNA 必含齐 / 天空透气 / 比例对 / 3 秒读懂"慢下来·向往"的情绪。

---

## 示例提示词

**主题**：打工人/创作者「慢下来」情绪共鸣 + 跨境出海「追梦远方」品牌故事。
**认知锚点**：一个一直低头赶路的人，终于停下、抬头，看见地平线那头的光——「慢下来」与「向远方」合并成一个画面。`has_text:false`，纯画面，无文字。**可直接喂给 render.js**。

```
Studio-Ghibli-style hand-painted healing anime illustration, watercolor background-art look,
luminous translucent watercolor sky filling the upper two-thirds of the frame with soft fluffy
cumulus clouds (wet watercolor bleeding edges, warm-grey cloud undersides), the far horizon
glowing in warm sun-gold and sunset peach where the land meets the sky.
Lush green pastoral landscape below — a wide rolling meadow with a faint ochre footpath winding
toward the distant horizon, tall grass bending in a gentle wind sweeping across the field.
A single small nameless figure seen from behind, a young creator with a worn shoulder bag,
has just stopped walking mid-path, set down their bag at their feet, and lifted their head to
gaze at the glowing horizon far away — a quiet "finally slowing down" moment, calm and longing.
Soft hand-drawn anime line work with cel-shading, mixed flat cel color and watercolor washes,
clean color blocks with moist watercolor edges, rounded organic shapes, no hard black outlines.
Tender low-angle golden-hour backlight behind the figure: warm golden rim light traces the
figure's silhouette and the grass tips, soft light bloom and gentle Tyndall light rays cut
through the air, a few dandelion seeds and tiny petals drift weightlessly, transparent
warm-toned shadows stretch long across the meadow, never dead black.
Palette: translucent sky blue #8FC5E8, meadow green #7FB069, warm cloud white #FBF7EE,
hazy distant-mountain teal #A9CBD3, ochre earth path #D9C2A3, warm sun-gold #F4C76B,
sunset peach #F0A47A. Naturally saturated, soft and never harsh, deeply nostalgic, healing,
emotionally resonant — the feeling of pausing the rush and looking toward a faraway dream.
Sky-heavy cinematic composition, figure small (under ~40% of frame) and off-center on the path,
generous breathing whitespace, 16:9 cinematic widescreen.
NEGATIVE: no cool tech gradients, no neon, no cyberpunk, no hard black outlines, no flat vector
icons, no corporate flat illustration, no photo / 3D / CG-realistic render, no dead black
shadows, no fluorescent / HDR over-saturation, no heavy Instagram filter, no pure-white #FFFFFF
sky, no busy diagram / PPT layout, no gloomy or dark mood, no text or letters in the image.
```

> 自检：单一锚点（停下·抬头·望远）✅ / 原创处境非复刻电影帧 ✅ / DNA 四项齐（透气水彩天空 + 手绘动漫线 + 圆润有机形 + 逆光丁达尔暖金）✅ / 配色 hex 全在盘内 ✅ / 天空占 2/3 留足透气 ✅ / 16:9 对渠道 ✅ / `has_text:false` 无文字（NEGATIVE 已封 no text）✅ / 3 秒读懂"慢下来·向往远方"✅。
