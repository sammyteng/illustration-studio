---
slug: editorial-line
name_cn: 极简单线条编辑风
name_en: Minimal Single-line Editorial
channel: 深度长文 / 虎嗅·晚点风 / 思想类严肃选题
has_text: false             # 几乎无字 → gemini 更精细；若加少量字可切 gpt
default_backend: nano
default_ratio: "16:9"
one_liner: 单一连续细线 + 最多一个点缀色，纽约客/杂志社论质感，高级克制零主角。
---

> 通用方法见 `references/engine.md`，本文件只写「长相 + 提示词」。

## 视觉 DNA（必含）

- 背景：纯白或极浅暖白，克制，可微纸感但不抢戏。
- 线条：**单一连续细线 / contour line**，优雅、肯定、少抬笔 —— 这是灵魂铁律。
- 配色：黑/深墨线 + **最多一个**低饱和点缀色，大面积负空间；可纯黑白。
- 隐喻：概念隐喻，知识分子式、含蓄、留白。
- 标注：0-2 处，宁可没有；绝不写大标题。

## 配色

墨黑 `#232323` + 一个点缀色（砖红 `#B5503C` / 赭石 `#C8893A` / 靛蓝 `#3A5A8C` / 橄榄 `#6B7A3A` 选一），大量负空间。

## 禁忌

❌ 手绘潦草批注堆叠 / 卡通可爱 / 科技 UI / 多色 / 满构图 / 商业插画 / 表情包 / 大标题 / 信息图模块。

## 提示词模板

```
Minimalist single continuous line illustration, New Yorker / editorial magazine sophistication, {{RATIO}}, near-white background.
Drawn with ONE continuous thin BLACK ink line (single elegant contour, very few pen lifts) plus exactly ONE muted accent color: {{ACCENT=#B5503C}}, used once or twice only.
Concept: {{CONCEPT_METAPHOR}}.
Composition: {{SUBJECT}} — sparse, lots of negative space, restrained, intellectual, timeless, calm. At most one tiny serif caption, optional.
Avoid: messy sketch, multiple colors, cartoon, cute, tech UI, big title, infographic modules, dense composition.
```

## 示例提示词（主题：AI 时代，人与机器的边界）

```
Minimalist single continuous line illustration, New Yorker / editorial magazine sophistication, 16:9 horizontal, near-white background.
Drawn with ONE continuous thin BLACK ink line (a single elegant contour, very few pen lifts) plus exactly ONE muted accent color: brick red #B5503C, used only once or twice.
Concept: the boundary between human and machine in the AI age.
Composition: the single line forms a human head in profile facing right; at the back of the head the same line gradually unravels into a few clean right-angled circuit-like segments, suggesting the human contour dissolving into machine logic. One small brick-red dot as the eye, and one small brick-red node where the circuit ends. Generous negative space, restrained, intellectual, timeless. At most one tiny serif caption.
Avoid: messy sketch, multiple colors, cartoon, cute, tech UI, big title, infographic modules, dense composition.
```
