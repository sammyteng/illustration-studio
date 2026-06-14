---
slug: xhs-warm
name_cn: 小红书暖系马克笔
name_en: Xiaohongshu Warm Marker
channel: 小红书封面 + 正文配图 / 情绪共鸣内容
has_text: true
default_backend: gpt            # 封面大字标题 → gpt-image-2 文字最稳
default_ratio: "4:3"
one_liner: 暖奶油纸 + 马克笔/彩铅暖色盘，画打工人/创作者真实处境，「这不就是我」钩子。
---

> 通用方法见 `references/engine.md`，本文件只写「长相 + 提示词」。
> 走引擎第 1 节「处境五问」，让读者一眼说「这不就是我吗」。

## 视觉 DNA（必含）

- 背景：暖白/奶油/浅米 `#FFF8F0` / `#FDF6EC`，柔和纸感轻纹理（**区别于白底手绘的死白**）。
- 材质：马克笔/彩铅/蜡笔，柔边，手绘手写感。
- 处境驱动：画打工人/创作者/一人公司/AI 时代职场人的真实共鸣瞬间。
- 封面强标题区：留出大字手写标题（钩子句）。
- deadpan but warm，可爱但不幼稚。

## 配色（暖色盘）

陶土橙 `#E07856` · 芥末黄 `#E3A857` · 柔珊瑚 `#F2A2A2` · 鼠尾草绿 `#A9B89E` · 暖棕勾线 `#6B4F3A`。避免高饱和荧光、冷色科技。

## 禁忌

❌ 冷色科技 / 锐利矢量 / PPT / 商业广告感 / 高饱和荧光 / 真实照片 / 复杂信息图。

## 提示词模板

```
Warm cozy hand-illustrated Xiaohongshu (RED app) {{COVER_OR_INLINE}}, {{RATIO}}, marker / colored-pencil / crayon texture on a warm cream paper background #FFF6EA. Relatable Chinese office-worker / creator resonance, the "this is literally me" hook.
Theme: {{SITUATION}}.
Composition: {{SUBJECT}} — a generic tired little figure in a relatable physical predicament; warm-colored sticky notes / props with short handwritten Chinese.
[COVER ONLY] Big hand-written cover title at the top: 「{{TITLE}}」 with a smaller subtitle and a terracotta marker underline.
Short handwritten Chinese labels (<=4): {{LABELS}}.
Warm palette: terracotta #E07856, mustard #E3A857, soft coral #F2A2A2, sage #A9B89E, warm brown line #6B4F3A. Cute but deadpan, soft friendly hand-drawn. Avoid cold tech colors, sharp vectors, PPT, ad polish, neon, real photos.
```

## 示例提示词（主题：下班了，消息还在涌出来 · 3:4 封面）

```
Warm cozy hand-illustrated Xiaohongshu (RED app) cover, 3:4 vertical portrait, marker / colored-pencil / crayon texture on a warm cream paper background #FFF6EA. Relatable Chinese office-worker resonance, the "this is literally me" hook.
Theme: 下班了，消息还在涌出来 — off work, but the messages keep pouring out.
Composition: at the bottom an open box / laptop overflows with little message notes erupting upward like a fountain; a tired little figure on the right pushes a board down trying to hold them in, exhausted, with a sweat drop. The flying notes are warm-colored sticky squares with short handwritten Chinese: 「马上回」「在的在的」「急!」「收到」.
A BIG hand-written cover title at the top: 「下班 ≠ 下线」, with a smaller subtitle 「走出公司，手却还在回消息」 and a terracotta marker underline under the title.
Warm palette: terracotta #E07856, mustard #E3A857, soft coral #F2A2A2, sage green #A9B89E, warm brown line #6B4F3A. Cute but deadpan, emotionally resonant, soft friendly hand-drawn. Avoid: cold tech colors, sharp vectors, PPT, ad-like polish, neon, real photos.
```
