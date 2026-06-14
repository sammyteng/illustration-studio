# 复古未来太空图录 · Cosmic Retro-Futurism

> 通用方法论（认知锚点 / 构图 / 渲染路径 / 质检双闸）在 `_illustration-engine/ENGINE.md`。
> 本文件只定义这套风格的「长相 + 提示词」，不重复引擎内容。

| 字段 | 值 |
|---|---|
| **name_cn** | 复古未来太空图录 |
| **name_en** | Cosmic Retro-Futurism |
| **channel（适合渠道）** | 科技产品发布页 / 出海主视觉 / 未来宣言页 / 深度科技长文头图 / 偏理性高端的 deck 封面 |
| **has_text** | `false` |
| **default_backend** | `nano`（Gemini Nano Banana Pro — 纯画面无文字，线条/质感更精细） |
| **default_ratio** | `4:3` |

> 一句话：奶油纸白底压黑字加一抹钴蓝，SVG 天体轨道线与行星圆点，古籍天文图录质感。

---

## 视觉 DNA

> 以下 4 项硬性必含，缺一不算这套风格。要具体到看着提示词就能复现。

1. **背景**：**奶油纸白 / 米白做旧底**（`#F0EAD8`，aged cream paper / old star-atlas page），可叠**极轻**的纸纹、微微泛黄边缘或淡淡的星点撒布（faint scattered star dots），但绝不脏、不做成 grunge 海报。底色是这套风格的灵魂——**永远不要用纯白、不要用深色背景**。

2. **线条 / 质感 = 铁律**：画面主体由**细描的天文学线条**构成——`fine engraved astronomical lines`：同心圆环（concentric circles / orbital rings）、椭圆轨道（elliptical orbits）、抛物线 / 双曲线（parabolic & hyperbolic arcs）、放射状刻度线（radial tick marks / graticule）、虚线轨迹（dashed trajectory paths）。线条**均匀细描、克制肯定**，像 SVG `stroke` 或古籍铜版星图的刻线——**不是手绘潦草、不是粗马克笔、不是排线阴影、不是涂黑块**。

3. **形状**：**天体几何**——行星 / 恒星画成**实心或同心圆点**（filled & ringed planetary dots），大小有层级；轨道用细线椭圆串起；偶尔一个**完美正圆的太阳 / 主星**做视觉锚。形状语言全部来自 18-19 世纪天文图录（星座连线、行星运行图、日月食示意），几何精确，**不拟物、不卡通、不加渐变光晕**。

4. **光影**：**几乎无光影**——平面、低饱和、老派印刷感（flat, matte, vintage letterpress / engraving feel）。不要 3D 投影、不要镜面高光、不要发光霓虹辉光（这是与赛博风的根本分界）。深度只靠**线条疏密 + 圆点大小**表达，不靠光。

> 气质参照系：《2001 太空漫游》海报的克制未来感 + 古籍铜版星图（Cellarius《和谐大宇宙》/ 19 世纪天文挂图）的书卷气。**既前卫又有书卷气，刻意避开俗套赛博霓虹**。

---

## 配色

三色克制，永远不超过这三色（外加底色本身）。

| 角色 | HEX | 用途 |
|---|---|---|
| **主色 · 奶油纸白底** | `#F0EAD8` | 整张背景，做旧米白，是基调；可极轻泛黄 |
| **辅助 · 纯黑压字/线** | `#0A0A0A` | 绝大多数轨道线、刻度、行星实心点、主结构——高反差压在米白上 |
| **强调 · 钴蓝 / 孔雀蓝** | `#2B4F91`（孔雀蓝偏冷可选 `#1F6F7A`） | **只点一处关键**：核心主星 / 关键轨道 / 一条焦点抛物线 / 一个焦点圆点。钴蓝是唯一彩色，做语义高亮，不铺面、不抢黑。 |

- **黑做骨架、蓝做焦点、米白做呼吸**。三色各司其职，绝不让钴蓝变成大面积色块。
- 整体低饱和、老派印刷调；不要让任何颜色显得鲜亮塑料。

---

## 禁忌（出现任意一条即 Gate 1 不合格）

- ❌ **赛博霓虹 / 发光辉光 / glow / neon**——这是本风格最大的反面，钴蓝绝不发光。
- ❌ 深色背景 / 纯黑底 / 太空黑（背景永远是奶油米白做旧纸）。
- ❌ 纯白现代背景（丢了古籍图录的书卷气）。
- ❌ 渐变、镜面高光、3D 投影、体积光、镜头光晕。
- ❌ 第三个彩色 / 彩虹色 / 高饱和糖果色（只许米白 + 黑 + 钴蓝三色）。
- ❌ 卡通、Q 版、吉祥物、表情包、可爱拟人星球。
- ❌ 写实摄影星空 / NASA 实拍质感 / 真实星云照片拼贴。
- ❌ 科技 UI 仪表盘 / 界面截图 / 满屏图标。
- ❌ 手绘潦草批注、马克笔涂抹、排线阴影、涂黑大色块。
- ❌ 大标题 / 类型标题 / 信息图模块框（「系统架构 / 流程图」这种框）。

---

## 提示词模板

> 一次一张，不要把多张拼一张。英文写画面主体；本风格 `has_text:false`，默认**无文字标注**走 Gemini。
> 把 DNA 关键词**写死**在模板里（aged cream、engraved astronomical lines、orbital geometry、one cobalt accent、no neon glow）。

```
A retro-futurist celestial diagram in the style of an antique engraved star atlas
crossed with a 2001-A-Space-Odyssey poster, {{RATIO}} aspect ratio.

Subject: {{SUBJECT}} — rendered entirely as a clean astronomical chart that
visualizes "{{COGNITIVE_ANCHOR_ONE_LINE}}".

HARD CONSTRAINT — TEXTURE & LINE: drawn with fine, evenly-weighted engraved
astronomical lines — concentric orbital rings, elliptical planetary orbits,
parabolic and radial graticule arcs, dashed trajectory paths, fine tick marks.
Planets and stars are flat filled or ringed dots with a clear size hierarchy.
Vintage letterpress / copperplate engraving feel, completely flat and matte.
NO hatching scribble, NO thick marker, NO 3D shading.

HARD CONSTRAINT — COLOR (exactly 3, no more):
background = aged cream / off-white old-paper {{BG_HEX}} with faint paper grain
and a light scatter of tiny star dots;
ink = pure near-black {{INK_HEX}} for almost all lines, ticks and filled dots;
accent = a single cobalt / peacock blue {{ACCENT_HEX}} used on ONE key element
only ({{ACCENT_TARGET}}). Absolutely no third color.

Composition: precise, restrained, generous negative space, the diagram occupying
under ~60% of the frame, balanced like a classical astronomical plate.
Mood: sober, intellectual, retro-futurist, bookish yet forward-looking — feels
both vintage and visionary.

Annotations: {{ANNOTATIONS}}.

Avoid AT ALL COSTS: neon, glow, luminous halos, cyberpunk lighting, dark/black
background, pure-white modern background, gradients, lens flare, drop shadows,
3D volume light, candy-bright saturated colors, a third accent color, cartoon /
cute / mascot, photographic realistic starfield, NASA photo collage, tech UI
dashboard, infographic title blocks.
```

### 占位变量说明

| 占位 | 填什么 | 默认 |
|---|---|---|
| `{{RATIO}}` | `16:9`（默认）/ `3:2` / `4:5` | `16:9` |
| `{{SUBJECT}}` | 当前内容原创发明的**一个**天体隐喻主体（一个轨道系统能画出的物件 / 结构 / 动作） | — |
| `{{COGNITIVE_ANCHOR_ONE_LINE}}` | 这张图要让人 1 秒读懂的核心意思 | — |
| `{{BG_HEX}}` | 奶油底 | `#F0EAD8` |
| `{{INK_HEX}}` | 压字黑 | `#0A0A0A` |
| `{{ACCENT_HEX}}` | 钴蓝（或孔雀蓝 `#1F6F7A`） | `#2B4F91` |
| `{{ACCENT_TARGET}}` | 钴蓝**只点的那一处**（如 `the central sun`, `one focus orbit`, `a single highlighted trajectory`） | — |
| `{{ANNOTATIONS}}` | 本风格默认 `no text labels at all`；如确需文字改走 gpt-image-2，写 `one or two tiny serif Chinese captions like classical figure notes` | `no text labels at all` |

---

## 示例提示词（完整 · 可直接喂 render.js）

主题：**AI 产品发布的「未来宣言」页 / 跨境出海「探索新大陆」抽象主视觉**。
认知锚点：一个新产品像一颗刚被点亮的主星，把多条业务/市场轨道纳入自己的引力系统——「我们要成为这个新宇宙的中心」。`has_text:false`，纯画面无标注，走 Gemini Nano Banana Pro。

```
A retro-futurist celestial diagram in the style of an antique engraved star atlas
crossed with a 2001-A-Space-Odyssey poster, 16:9 aspect ratio.

Subject: a single newly-ignited central star with three or four elliptical orbits
of different scales sweeping around it, each orbit carrying one small ringed
planetary dot, and one fine dashed trajectory arcing inward from the edge as if a
new world is being pulled into the system — rendered entirely as a clean
astronomical chart that visualizes "a new product ignites as the center of gravity,
drawing scattered markets into one orbiting system".

HARD CONSTRAINT — TEXTURE & LINE: drawn with fine, evenly-weighted engraved
astronomical lines — concentric orbital rings, elliptical planetary orbits,
parabolic and radial graticule arcs, dashed trajectory paths, fine tick marks
along the rings. Planets and stars are flat filled or ringed dots with a clear
size hierarchy. Vintage letterpress / copperplate engraving feel, completely flat
and matte. NO hatching scribble, NO thick marker, NO 3D shading.

HARD CONSTRAINT — COLOR (exactly 3, no more):
background = aged cream / off-white old-paper #F0EAD8 with faint paper grain and a
light scatter of tiny star dots;
ink = pure near-black #0A0A0A for almost all orbits, ticks and filled planetary
dots;
accent = a single cobalt blue #2B4F91 used on ONE key element only — the central
ignited star and its innermost orbit. Absolutely no third color.

Composition: precise, restrained, generous negative space, the orbital system
occupying under ~60% of the frame, centered and balanced like a classical
astronomical plate.
Mood: sober, intellectual, retro-futurist, bookish yet forward-looking — feels
both vintage and visionary, like a manifesto page.

Annotations: no text labels at all.

Avoid AT ALL COSTS: neon, glow, luminous halos, cyberpunk lighting, dark/black
background, pure-white modern background, gradients, lens flare, drop shadows,
3D volume light, candy-bright saturated colors, a third accent color, cartoon /
cute / mascot, photographic realistic starfield, NASA photo collage, tech UI
dashboard, infographic title blocks.
```

> 渲染：`node "$HOME/shared-skills/_illustration-engine/render.js" --backend nano --aspect 4:3 --has-text false --out /tmp/illus --prompt "<上面整段>"`
