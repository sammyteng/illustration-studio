---
slug: loose-red-accent-sketch
name_cn: 单红点手绘速写
name_en: Loose Sketch + One Red Accent
channel: 极简趣味海报 / 品牌 IP 小图 / 公众号点缀 / 框画 / 留白系封面
has_text: true
default_backend: gpt            # 有手写词 → gpt-image-2（手写体最稳）；若做纯画面无字版可切 gemini
default_ratio: "3:4"
one_liner: 设计师速写本里的随手一画——松散未完成的石墨/墨线涂鸦，只画一个简单主体，全图唯一一抹红，配一个手写小词，近白底极致留白。
---

> 通用提炼 / 构图 / 渲染路径见 `_illustration-engine/ENGINE.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像设计师在速写本随手画下的一笔，或画廊墙上挂的一张极简小品——铅笔石墨涂抹或快墨线涂鸦，只一个简单主体，**全画面只有唯一一抹红**点一下睛，再题一个手写小词。其余全是干净的白和大片留白，克制、轻、未完成感本身就是高级。
> 灵感锚（仅校准气质，绝不复刻物件）：Mies 椅子草图的松散线、Howdy 牛仔帽猫的随手涂鸦 + 单字题词。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | 🌬️ **极致留白（灵魂第一条 · 全局铁律）** | 主体 **≤ 40%** 画面、**≥ 50%** 是干净的近白空白；主体偏置一侧或居中孤立，四周大片空气，构图极简极空，宁空勿满，画廊小品 / 速写本单页的呼吸感 | `generous negative space, lots of breathing room, uncluttered, airy, subject occupies under 40% of the frame, vast clean empty margins around it, gallery-print minimalism` |
| 2 | **松散未完成线（灵魂第二条）** | 线条 gestural、随手、刻意**不精细不工整**——要么是**铅笔/石墨的涂抹笔触**（侧锋蹭出的灰、可见手腕摆动），要么是**快墨线涂鸦**（一两笔成形、收笔不闭合、有抖动和回头线）；保留草稿感，不描边、不誊清 | `loose gestural hand-drawn sketch, unfinished and intentionally imperfect, either soft graphite pencil smudges and scribbles OR quick wobbly ink-pen doodle lines, lines left open and sketchy, NOT clean or precise` |
| 3 | **唯一一抹红（灵魂第三条）** | 全图**只有一处红色**——一笔红马克笔涂鸦 / 一个红色小物件 / 一处红涂抹，面积小、孤立、抢眼；**其余一律黑灰石墨**，绝不出现第二种彩色 | `exactly ONE single red accent in the whole image (one red marker stroke / one small red object / one red scribble), small and isolated, everything else strictly graphite black and grey, no second color anywhere` |
| 4 | **单一简单主体** | **只画一个**简单主体（一个物件 / 一张动物脸 / 一把椅子 / 一个包裹），简到能一笔勾出；绝不堆第二个主体、绝不画场景背景 | `a single simple subject only (one object / one animal face / one chair), reduced to its simplest gesture, no second subject, no background scene` |
| 5 | **手写小词** | 一个**随性手写的小词或名字**（如 howdy / mies / 一个中文小词），笔迹松、像顺手题在角落，**小而不喧宾夺主**，是画面一部分不是字幕 | `one small casual handwritten word in the corner, loose handwriting like a quick caption, small and unobtrusive, part of the sketch not an overlay` |
| 6 | **背景 / 纸底** | **近白速写本纸底**（微暖象牙白 `#FAF8F3`），可有极淡纸纹 / 一点点铅笔屑感，**绝不纯荧白、绝不上底色、绝不渐变、绝不暗底** | `near-white sketchbook paper #FAF8F3, very faint paper grain, never pure glowing white, never a filled background, no gradient` |
| 7 | **光影 / 体积** | **无写实投影、无渲染体积、无高光**；若需一点暗只用石墨网线/涂抹的疏密表达，整体平面速写感 | `flat sketch, no realistic shadow, no rendered volume, no glossy highlight, any darkness only from pencil hatching density` |
| 8 | **比例** | 默认 `3:4` 竖版（留白系封面 / 框画）；可切 `1:1` 做 IP 小图 | `3:4 vertical` |

> 一眼自检：缩成拇指大，**仍是「大片白 + 角落一个随手小画 + 一个红点」**——空、松、只一抹红 = 对。画满了、线工整了、出现第二种颜色、主体占满画面 = 错。

---

## 配色

**极致克制：全图只有「石墨黑灰 + 唯一红 + 近白底」三件，红只一处。**

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **主体线 / 涂抹** | 石墨黑灰 / Graphite | `#2B2B2B`（深）→ `#8A8A8A`（淡灰涂抹） | 主体的全部线条与铅笔灰，唯一的「画」色 |
| **唯一红（一抹）** | 信号红 / Signal Red | `#E33A2E` | **全图仅此一处**：一笔红涂鸦 / 一个红小物件 / 一处红点；面积最小、最孤立 |
| **手写词** | 同石墨黑灰 | `#2B2B2B` | 手写小词用铅笔黑，不另上色（除非该词本身就是那「唯一一抹红」时才用红） |
| **纸底** | 速写本象牙白 | `#FAF8F3` | 全图底色，留白处即纸本身 |

铁律：
- **彩色只有红，且只一处**。红出现第二次、或出现任何蓝/绿/黄等其它彩色 = 直接驳回。
- 黑只是石墨黑灰，不要纯黑死黑、不要描成矢量边。
- 红可以是「那一抹涂鸦」也可以是「手写词」二选一承担——但**全图加起来只有一处红**。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **留白不够**：主体占满 / 铺满构图 / 画了背景场景 / 元素清单化堆物件（违留白铁律，本套头号红线）
- ❌ **第二种颜色**：除唯一一抹红外出现任何彩色；或红出现 ≥2 处
- ❌ **线条工整精细**：描清的均匀单线、矢量般干净闭合的轮廓 →（这是隔壁 **editorial-line 单线社论风** 的活，别撞）
- ❌ **上彩平涂 / 水彩晕染**：色块平涂、水彩湿染、水墨渲染 →（撞 **painterly-watercolor 水彩** / **oriental-ink 国风水墨**，别撞）
- ❌ **白底干净小图但有彩色批注**：红橙蓝多色批注、整洁示意 →（撞 **keke-sketch 白底手绘红橙蓝批注**，本套只许单红、且要松散未完成）
- ❌ **拼贴 / 剪贴 / 杂志撕纸**：多素材拼合、胶带便利贴 →（撞 **mixed-media-collage** / **moodboard-scrapbook**，别撞）
- ❌ **可爱萌系 / 治愈插画**：圆润卡通、吉卜力暖光、商业扁平 →（撞 **ghibli** / **friendly-brand-cards**，本套是克制冷淡的速写不是萌图）
- ❌ **写实 / 3D / 渲染光影**：写实素描、立体渲染、投影高光、金属玻璃质感
- ❌ **暗底 / 渐变底 / 荧白发光底 / 满色块底**
- ❌ **手写词太大太抢**：题字大到变主标题、做成清晰数码字幕浮在上层（要小、要手写、要顺手）

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。英文写画面主体 + 写死 DNA 关键词；中文/英文只用于那一个**手写小词**。
> 有手写词 → 走 `gpt`（gpt-image-2，手写体最稳、几乎不乱码）；想做纯画面无字版 → 可切 `gemini`。

```
A loose, casual designer-sketchbook drawing, {{RATIO}} aspect ratio, on
near-white sketchbook paper #FAF8F3 with a very faint paper grain — never pure
glowing white, never a filled or gradient background.

NEGATIVE SPACE (most important): generous negative space, lots of breathing
room, uncluttered, airy — the subject occupies UNDER 40% of the frame, placed
off-center / isolated, with vast clean empty margins of bare paper all around
it. Gallery-print minimalism, sketchbook single-page calm. Empty and breathing,
never busy.

Subject: {{SUBJECT}} — ONE single simple subject only, reduced to its simplest
gesture, no second subject and no background scene. It visualizes
"{{COGNITIVE_ANCHOR}}".

LINE (soul 1): drawn as a loose gestural unfinished hand sketch, intentionally
imperfect — {{LINE_MEDIUM}}; lines left open, slightly wobbly, with visible
sketchy hesitation marks, NOT clean, NOT precise, NOT vector-traced. Pure
graphite black-and-grey #2B2B2B to #8A8A8A.

THE ONE RED (soul 2): exactly ONE single red accent in the entire image —
{{RED_ELEMENT}} in signal red #E33A2E — small, isolated, eye-catching.
EVERYTHING else is strictly graphite black and grey. Absolutely no second color,
no blue/green/yellow, and red must appear in only this one place.

TYPOGRAPHY: one small casual handwritten word {{LABEL}} tucked in a corner, loose
quick handwriting like a caption, small and unobtrusive, part of the sketch — not
a clean digital overlay, not a big title.

LIGHTING: flat sketch, no realistic shadow, no rendered 3D volume, no glossy
highlight; any darkness only from light pencil hatching.

Mood: restrained, witty, unfinished designer-sketchbook / minimalist gallery
print; the calm emptiness and the single red touch are the whole point.
Avoid: a full / busy composition, any background scene, more than 40% coverage,
any second color or a second red mark, clean precise vector lines (that's the
single-line editorial style), flat color fill or watercolor wash, multi-color
annotations, collage / scrapbook, cute cartoon or healing anime, realistic
shading / 3D / gloss, dark or gradient or glowing background, an oversized title.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `3:4`（默认留白系封面 / 框画）/ `1:1`（IP 小图）|
| `{{SUBJECT}}` | 当前内容原创发明的**一个**极简单主体（一个物件 / 一张动物脸 / 一把椅子 / 一个包裹），简到一两笔能勾出 |
| `{{COGNITIVE_ANCHOR}}` | 这张图要让人 1 秒读懂的那句核心意思 |
| `{{LINE_MEDIUM}}` | 二选一：`soft graphite pencil smudges and scribbles, side-of-the-pencil grey shading`（铅笔石墨派）或 `quick wobbly ink-pen doodle, one or two confident strokes that don't fully close`（快墨线派）|
| `{{RED_ELEMENT}}` | 那唯一一处红是什么：如 `one quick red marker scribble across it` / `a single small red object (a red hat / a red tag)` / `one red dot` |
| `{{LABEL}}` | 一个手写小词，引号包住，如 `the word "howdy"` / `the word "mies"` / `the word "慢"` |

---

## 示例提示词（主题：一个跨境元素随手速写 + 一抹红 + 手写词，极空）

> 认知锚点：**跨境这件事，剥到最简单，就是「一个包裹，被寄出去」——别想复杂了，先把这一个动作做好。**
> 隐喻：速写本上随手画的**一个快递纸箱**，箱口微开、胶带是那唯一一笔红涂鸦；箱子偏居画面右下，左上大片留白，角落题一个手写小词。
> 唯一红落在「胶带」上 + 1 个手写小词。可直接喂 `render.js`（`--backend gpt --aspect 3:4`）。

```
A loose, casual designer-sketchbook drawing, 3:4 aspect ratio, on near-white
sketchbook paper #FAF8F3 with a very faint paper grain — never pure glowing
white, never a filled or gradient background.

NEGATIVE SPACE (most important): generous negative space, lots of breathing
room, uncluttered, airy — the cardboard parcel occupies UNDER 40% of the frame,
sitting low and to the right, with the entire upper-left as vast clean empty bare
paper. Gallery-print minimalism, sketchbook single-page calm. Empty and
breathing, never busy.

Subject: ONE single simple cardboard shipping parcel, lid slightly open, drawn
as the simplest possible box — no second subject, no background scene, no labels
or icons crowding it. It visualizes "cross-border, stripped to its simplest, is
just one parcel being sent out — don't overthink it, nail this one move first".

LINE (soul 1): drawn as a loose gestural unfinished hand sketch, intentionally
imperfect — soft graphite pencil smudges and scribbles with side-of-the-pencil
grey shading; lines left open, slightly wobbly, with visible sketchy hesitation
marks, NOT clean, NOT precise, NOT vector-traced. Pure graphite black-and-grey
#2B2B2B to #8A8A8A.

THE ONE RED (soul 2): exactly ONE single red accent in the entire image — one
quick red marker scribble of packing tape across the lid of the box, in signal
red #E33A2E — small, isolated, eye-catching. EVERYTHING else is strictly
graphite black and grey. Absolutely no second color, no blue/green/yellow, and
red appears in only this one place.

TYPOGRAPHY: one small casual handwritten word "寄出去" tucked in the upper-left
empty space, loose quick handwriting like a caption, small and unobtrusive, part
of the sketch — not a clean digital overlay, not a big title.

LIGHTING: flat sketch, no realistic shadow, no rendered 3D volume, no glossy
highlight; any darkness only from light pencil hatching.

Mood: restrained, witty, unfinished designer-sketchbook / minimalist gallery
print; the calm emptiness and the single red touch are the whole point.
Avoid: a full / busy composition, any background scene, more than 40% coverage,
any second color or a second red mark, clean precise vector lines (that's the
single-line editorial style), flat color fill or watercolor wash, multi-color
annotations, collage / scrapbook, cute cartoon or healing anime, realistic
shading / 3D / gloss, dark or gradient or glowing background, an oversized title.
```
