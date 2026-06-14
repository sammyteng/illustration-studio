---
name_cn: 贴纸模切
name_en: Sticker / Die-cut
channel: 品牌 IP 矩阵 / 社媒表情包 / 活动周边 / 功能图标集 / 年轻向品牌点缀 / 小红书·微信视频号贴纸
has_text: true
default_backend: gpt            # 有字默认走 gpt-image-2（中文标注最准）；纯无字版可切 gemini
default_ratio: "1:1"
---

# 视觉 DNA · 贴纸模切（Sticker / Die-cut）

> 通用提炼 / 构图 / 隐喻 / 质检见 [`../../../_illustration-engine/ENGINE.md`](../../../_illustration-engine/ENGINE.md)。
> 本文件只写这套风格的「长相 + 提示词」，不重复引擎方法论。
>
> **一句话气质**：每个元素都像一张刚从背胶纸上撕下来、能贴到任何地方的小贴纸——
> 一圈厚白边 + 一点点软投影让它「浮」起来，造型圆润鲜亮、俏皮模块化，一套拆开到处贴。

---

## 视觉 DNA（必含项，每张提示词缺一条 = Gate 1 不过）

| # | 维度 | 硬性必含（具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 1 | **背景** | 干净纯色或极浅底（纯白 `#FFFFFF` / 浅灰 `#F2F4F7` / 一块淡奶油），让贴纸「浮」在上面。**也可做透明 PNG 版**（单贴纸切图）。背景**绝不能有渐变天空 / 照片 / 纹理墙** | `clean solid flat background, single soft color, stickers floating on top` |
| 2 | **模切白边（灵魂铁律）** | 每个独立元素外圈一道**均匀厚白色描边**（die-cut sticker border），白边宽度统一、包住整个轮廓，像真贴纸的留白切边。这是与所有其他风格的关键区分项，**缺白边 = 不是这套风格** | `thick uniform white die-cut sticker outline around every element, even kiss-cut border` |
| 3 | **小投影** | 白边外再加一层**很轻、很短的柔和投影**（浅灰、低不透明、偏移小），营造贴纸离纸面 1-2mm 的「浮起可撕」感。**投影要小要软**，不是长投影、不是 3D 立体阴影 | `subtle short soft drop shadow under each sticker, light grey, low offset, peel-up feel` |
| 4 | **造型 + 质感** | 圆润卡通图标化（rounded chunky cartoon icons），形状饱满、圆角、可爱但不幼稚；干净矢量面块填色，**轻微高光/微光泽**让它有贴纸塑料感；线条用深色描边（描边在白边内圈），描边均匀利落 | `rounded chunky cartoon icon, glossy vinyl sticker, clean vector fill, dark even inner outline, slight highlight` |
| 5 | **高饱和鲜色填充** | 大色块平涂，**高饱和鲜亮色**（见配色），同一组贴纸共用一套色板；颜色明快、对比强，年轻向、活泼 | `high-saturation bright flat color fills, vivid cheerful palette` |
| 6 | **错位拼贴排布** | 多个贴纸**错位、轻微旋转、部分叠压**地堆在一起拼成一组（sticker pack / collage），有"撒一桌贴纸"的俏皮感；单图标版则居中放一枚 | `several stickers scattered and overlapping at slight angles, sticker pack collage layout` |
| 7 | **中文短标注** | 短词做成"小标签贴纸"或贴在图标上的小字条，本身也带白边小投影；用粗圆体，活泼 | `short Chinese words as tiny label stickers, rounded bold font, each with its own white border` |
| 8 | **比例** | 默认 `1:1`（贴纸/表情/图标集天然方形）；做成排长图可 `3:4`。写成显式 `{{RATIO}}` | `{{RATIO}}` |

---

## 配色

一套贴纸**共用一组高饱和鲜色**，白边统一、投影统一。每枚贴纸主体取 1 个鲜色，整组之间换色，靠白边和谐统一。

| 角色 | 颜色 | HEX | 用途 |
|---|---|---|---|
| **主色（鲜色池，每枚取 1）** | 草绿 | `#22C55E` | 主体填色之一（成功 / 自然 / 启用） |
| | 亮黄 | `#FACC15` | 主体填色之一（提醒 / 高亮 / 活力） |
| | 天蓝 | `#38BDF8` | 主体填色之一（消息 / 通讯 / 信任） |
| | 珊瑚红 | `#FB6F62` | 主体填色之一（情绪 / 热点 / 紧急） |
| | 紫 | `#A78BFA` | 主体填色之一（智能 / AI / 特别） |
| **统一白边** | 模切白 | `#FFFFFF` | 每枚贴纸外圈厚白描边（全组统一，**必含**） |
| **统一描边** | 深墨描边 | `#1E2230` | 白边内圈的图标深色描边（接近黑但偏暖，不死黑） |
| **统一投影** | 浅灰投影 | `#D7DBE0`（约 25-35% 透明、模糊小、偏移小） | 贴纸浮起的小软投影（全组统一，**必含**） |
| **背景** | 纯白 / 浅灰 / 淡奶油 | `#FFFFFF` / `#F2F4F7` / `#FFFBEF` | 让贴纸浮起；或透明 |

> 用色铁律：**鲜亮但不脏**——同组贴纸饱和度拉满、但靠统一白边把"花"压住成一套。一枚贴纸主体 1 个鲜色为主、最多再带 1 个辅助小色块。**别让单枚贴纸内部七彩堆叠。**

---

## 禁忌（命中任意一条 = Gate 1 不过）

- ❌ **没有白色模切边**——任何缺一圈厚白边的元素，都不是这套风格（最高优先级红线）。
- ❌ **长投影 / 3D 立体阴影 / 强浮雕**——投影只能小而软，不是 drop-shadow 拖很长，不是立体挤出。
- ❌ 背景：渐变天空 / 照片 / 噪点纹理墙 / 做旧纸感 / 复古 / 暗色科技底（贴纸要浮在干净纯色上）。
- ❌ 手绘潦草线 / 马克笔柔边 / 素描排线 / 单根连续线条（那是另外几套风格的活）——这套是**干净矢量描边 + 平涂**。
- ❌ 低饱和 / 莫兰迪 / 灰扑扑暗淡色（这套就要鲜亮活泼，暗淡 = 不合格）。
- ❌ 写实质感 / 真实照片拼贴 / 复杂渐变光影 / 金属反射。
- ❌ 元素清单化：把主题里所有名词都做成贴纸塞满一图（拼贴可以多枚，但要服务**一个**认知锚点，别变成图标大全）。
- ❌ 在图上写「Workflow / 系统架构图 / 图标集」这类类型标题。
- ❌ 七彩内部堆叠：单枚贴纸内部塞 5 种以上颜色（脏、乱、丢贴纸感）。

---

## 提示词模板

> 把 `{{SUBJECT}}`（认知锚点对应的画面主体 / 一组贴纸主题）、`{{LABELS}}`（3-6 个中文短标注，每个 2-6 字）、`{{RATIO}}`（默认 1:1）填进去。
> DNA 关键词已写死在模板里，不要删。

```
A die-cut sticker pack illustration of {{SUBJECT}}.
STYLE — kiss-cut vinyl stickers: each element has a THICK UNIFORM WHITE die-cut
border wrapping its whole silhouette, plus a SUBTLE SHORT SOFT drop shadow (light
grey, low opacity, small offset) so every sticker looks peeled up and floating.
Rounded chunky cartoon icon shapes, clean vector flat fills, slight glossy vinyl
highlight, even dark inner outline (#1E2230, not pure black). High-saturation
cheerful palette — pick from emerald #22C55E, bright yellow #FACC15, sky blue
#38BDF8, coral red #FB6F62, purple #A78BFA — one main bright color per sticker,
unified across the set by the shared white border.
LAYOUT — several stickers scattered and overlapping at slight playful angles,
sticker-pack collage; clean solid flat background (white / light grey #F2F4F7),
stickers clearly floating, lots of breathing room, subject under ~60% of frame.
TEXT — render these short Chinese words as tiny rounded-bold LABEL stickers, each
with its own white die-cut border and small shadow: {{LABELS}}.
Aspect ratio {{RATIO}}. Playful, modular, modern, brand-IP friendly.
NEGATIVE — no gradient sky, no photo background, no texture/grunge, no long or 3D
cast shadows, no hand-drawn wobbly lines, no marker soft edges, no muted/desaturated
colors, no realistic textures, no type-title labels like "workflow/icon set".
```

---

## 示例提示词（主题：Shulex 客服功能贴纸图标集 / 跨境卖点「一句话标签」社媒贴纸）

> 认知锚点：把「Shulex AI 客服 = 一套能贴到任何售后场景的轻量功能模块」做成一桌可撕贴纸，
> 一眼看懂"模块化、即取即贴、多语言售后全覆盖"。一图一概念，靠错位拼贴 + 短标签讲。
> has_text=true → 默认走 gpt-image-2，中文短标注稳定不乱码。可直接喂 render.js。

```
A die-cut sticker pack illustration of a Shulex cross-border AI customer-service
toolkit — a playful scattered set of kiss-cut stickers: a rounded chat-bubble
robot head (sky blue), a multilingual speech bubble showing tiny "你好 / Hi / Hola"
tags (purple), a glossy reply-lightning bolt for instant auto-reply (bright yellow),
a little support ticket card with a green check (emerald), a shopping bag with a
return-arrow for after-sales (coral red), and a small globe node for cross-border
coverage (sky blue).
STYLE — kiss-cut vinyl stickers: every element has a THICK UNIFORM WHITE die-cut
border around its whole silhouette plus a SUBTLE SHORT SOFT light-grey drop shadow,
so each one looks peeled up and floating. Rounded chunky cartoon icon shapes, clean
flat vector fills, slight glossy vinyl highlight, even dark inner outline (#1E2230,
not pure black). High-saturation cheerful palette: emerald #22C55E, bright yellow
#FACC15, sky blue #38BDF8, coral red #FB6F62, purple #A78BFA — one main bright color
per sticker, unified by the shared white border.
LAYOUT — the stickers scattered and overlapping at slight playful angles in a loose
sticker-pack collage on a clean solid very-light-grey background (#F2F4F7); stickers
clearly floating with small soft shadows, generous breathing room, subject under
~60% of the frame.
TEXT — render these as tiny rounded-bold Chinese LABEL stickers, each with its own
white die-cut border and small shadow, placed beside the matching icon:
「秒回复」「多语言」「自动工单」「售后无忧」「全球覆盖」「7×24」.
Aspect ratio 1:1. Playful, modular, modern, brand-IP friendly, young-brand vibe.
NEGATIVE — no gradient sky, no photo background, no texture or grunge, no long or 3D
cast shadows, no hand-drawn wobbly lines, no marker soft edges, no muted desaturated
colors, no realistic metal/glass textures, no type-title heading like "icon set".
```
