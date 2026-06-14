---
slug: flat-brand-mascot
name_cn: 扁平品牌吉祥物
name_en: Flat Brand Mascot Scene
channel: 品牌主视觉 / 小红书封面插画区 / 产品 IP / 公众号头图 / SaaS 友好插画
has_text: true            # 气泡/标签有字 → gpt-image-2（文字最准）；纯场景无字可切 gemini
default_backend: gpt
default_ratio: "4:3"
one_liner: 友好的品牌吉祥物在极简扁平场景里做一个动作，品牌色主导 + 大留白，亲和又专业。
---

> 通用方法见 `references/engine.md`，本文件只写「长相 + 提示词」。
> 一句话气质：像 SaaS 品牌官网/社媒里那只讨喜的 IP——干净扁平、圆润友好、一眼记住，**给冷冰冰的产品加一张亲切的脸**。
> 🌬️ 留白是灵魂：吉祥物偏下方居中，上方/四周大片干净底色留呼吸（海报版用来压标题）。

## 视觉 DNA（必含）

| # | 维度 | 必含（具体到能复现） |
|---|---|---|
| 1 | 🌬️ **大留白** | 吉祥物 + 道具只占下半部约 45-55%，上方/四周大片干净纯色留白，airy。 |
| 2 | **画风** | 干净**扁平矢量**插画：圆润简洁形状、柔和细描边或无描边、纯色填充，无渐变堆叠、无写实、无 3D 立体。 |
| 3 | **主角 = 品牌吉祥物** | 一个友好讨喜的 IP（机器人 / 简笔小人 / 萌物），圆头圆身、表情友善，正在做**一个相关的小动作**（用笔记本、招手、举牌、托着东西）。 |
| 4 | **品牌色主导** | 由一个品牌主色统领全图（默认蓝 `{{BRAND}}=#2563EB`，可换），配浅色调 + 白 + 深色描边点睛，色相克制。 |
| 5 | **极简扁平道具** | 1-3 个扁平小道具点题：对话气泡、简笔城市天际线剪影、月亮星星、笔记本、卡片等。每个都扁平、简洁、不抢主角。 |
| 6 | **底色** | 单一柔和底（奶油 `#F7F1DF` / 浅蓝 / 近白），干净无杂。 |
| 7 | **文字** | 可有少量气泡词/短标签（如多语言问候 Hello/Hola/こんにちは 或中文短词），扁平气泡里，简洁。 |

> 一眼自检：缩成拇指大仍是「一只讨喜 IP 站在干净底色里」——圆润友好 + 品牌色 + 大留白三件套齐 = 对。复杂、写实、3D、暗、满 = 错。

## 配色

| 角色 | 颜色 | HEX |
|---|---|---|
| 品牌主色（统领） | 品牌蓝（可换 `{{BRAND}}`）| `#2563EB` |
| 浅色调 | 浅蓝 | `#BBD2F5` |
| 描边/细节点睛 | 深蓝 | `#1E3A8A` |
| 底色 | 奶油 | `#F7F1DF` |
| 提亮 | 白 | `#FFFFFF` |

> 全图基本是「一个品牌色的深浅 + 奶油底 + 白」。要换品牌就换主色那一支，别堆第二个抢眼色。

## 禁忌（命中即不合格）

- ❌ 写实 / 照片 / 3D 立体 / 黏土质感（撞 claymorphism-soft-3d）/ 粗黑描边 groovy（撞 bold-line-retro-flat）。
- ❌ 抽象无角色的扁平信息图（撞 saas-tech，本套**必须有讨喜 IP 主角**）。
- ❌ 复杂背景 / 多色杂乱 / 暗色科技底 / 满构图不留白。
- ❌ 渐变堆叠、霓虹、金属反光、拼贴做旧。
- ❌ 吉祥物过度可爱到幼稚 / 表情包脸 / 比例失调。

## 提示词模板

```
Clean FLAT vector brand illustration, {{RATIO}}, on a soft single-color background ({{BG=#F7F1DF}}), lots of generous whitespace — the scene sits in the lower ~half, big calm empty space above.
Hero: a friendly brand MASCOT — {{MASCOT}} (e.g. a cute blue-and-white robot) — rounded, simple, approachable, with a warm friendly face, doing one relatable action: {{ACTION}}.
Style: flat vector, rounded simple shapes, soft thin outline or no outline, solid color fills, NO gradients stacking, NO realism, NO 3D, NO clay.
Brand color {{BRAND=#2563EB}} leads the whole image (its light/dark shades), plus white and a deep-blue {{LINE=#1E3A8A}} for details; restrained palette.
Minimal flat props (1-3, do not crowd): {{PROPS}} (e.g. multilingual speech bubbles, a simple city-skyline silhouette, a crescent moon + star, a laptop).
Optional tiny flat text in the bubbles / small labels: {{LABELS}}.
Friendly, approachable, modern SaaS brand-IP feel, clean and airy. Avoid: realistic, 3D, clay, thick groovy outlines, dark tech background, cluttered, multi-color noise, childish meme face.
```

## 示例提示词（主题：Shulex 跨境 AI 客服吉祥物 · 夜班多语言）

> 锚点：跨境客服的夜班，让 AI 先扛——一只蓝白机器人 IP 趴着用笔记本，多语言问候气泡飞出，夜里城市剪影 + 月亮，传达"7x24 多语言不漏单"。可直接喂 `render.js`（`--has-text true --aspect 4:3`，自动 4:3 + 圆角阴影）。

```
Clean FLAT vector brand illustration, 4:3, on a soft cream background #F7F1DF, lots of generous whitespace — the scene sits in the lower half with big calm empty space above.
Hero: a friendly brand mascot — a cute blue-and-white robot with a rounded helmet head, big friendly dot eyes and a small smile — lying on its belly using a laptop, relaxed and cheerful, working the night shift.
Style: flat vector, rounded simple shapes, soft thin outline, solid color fills, NO gradients, NO 3D, NO clay realism.
Brand blue #2563EB leads the whole image (light blue #BBD2F5 shades + white), with deep-blue #1E3A8A outlines for details; restrained palette.
Minimal flat props: four small rounded speech bubbles around the robot each with a short multilingual greeting — "Hello" "Hola" "Olá" "こんにちは"; a simple light-blue city-skyline silhouette along the bottom; a small crescent moon and a star in the upper area to signal night.
Friendly, approachable, modern SaaS brand-IP feel, clean and airy.
Avoid: realistic, photo, 3D, clay, thick groovy black outlines, dark tech background, cluttered composition, multi-color noise, childish meme face.
```
