---
slug: keke-sketch
name_cn: 白底手绘认知图
name_en: White Hand-drawn Cognitive Sketch
channel: 公众号 / 方法论 / 知识库 正文配图
has_text: true
default_backend: gpt            # 有红橙蓝手写批注 → gpt-image-2 文字最稳
default_ratio: "4:3"
one_liner: 纯白底 + 黑色手绘抖动线 + 少量红橙蓝手写批注，把观点/流程/结构变成一张白纸草图。
---

> 通用提炼 / 构图 / 渲染路径见 `references/engine.md`，本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像一个长期做 AI/产品/设计的人，在白纸上随手画出来的一张解释草图——先觉得「有点怪」，再 1 秒看懂。

## 视觉 DNA（必含）

| # | 维度 | 必含 |
|---|---|---|
| 1 | 背景 | 纯白 `#FFFFFF`，禁米色/纸纹/渐变/阴影/噪点 |
| 2 | 线条 | 黑色手绘线稿，细线、轻微抖动，不机械、不矢量、不厚描边 |
| 3 | 留白 | 大量留白，主体占 40-60%，≥35% 空白 |
| 4 | 主角 | **无固定吉祥物**，隐喻靠真实/低科技物件 + 通用无名小人承担核心动作 |
| 5 | 标注 | 5-8 处中文手写短词（2-8 字），来自真实语境 |
| 6 | 一图一义 | 只讲一个核心动作/结构/状态/隐喻，不写类型标题 |

## 配色（语义化，克制）

- **黑**：主体线稿 / 结构 / 主文字
- **红 `#E0392B`**：问题 / 情绪 / 结果 / 重点提醒
- **橙 `#EF7C1B`**：主流程 / 路径 / 箭头 / A→B
- **蓝 `#2F6FD0`**：补充说明 / 脑内状态 / 系统状态 / AI 提示（不必每张用）

## 禁忌

❌ 商业插画 / PPT 信息图 / 正式流程图 / 课件 / 可爱卡通 / 儿童插画 / 精致扁平 / 科技 UI / 真实截图 / 复杂背景渐变阴影纹理 / 左上角写「Workflow·系统架构图·常见坑」类型标题 / 固定吉祥物。

## 提示词模板

```
Generate one standalone {{RATIO}} Chinese article illustration in a hand-drawn explanatory style.
Visual DNA: pure white background #FFFFFF, minimalist BLACK hand-drawn line art with slightly wobbly pen lines, LOTS of empty white space, only sparse handwritten Chinese annotations in red / orange / blue. Clean absurd product-sketch feeling. No gradients, no shadows, no paper texture, no PPT infographic, no cute mascot, no children's illustration, no realistic UI, no title in the top-left corner.
Theme (one idea only): {{COGNITIVE_ANCHOR}}.
Composition: {{SUBJECT}} — a generic simple hand-drawn figure / low-tech objects performing the core physical action; an ORANGE arrow shows the main flow.
Chinese handwritten labels (sparse, 2-6 chars each): {{LABELS}}.
Color use: black for line art; orange for the main path/arrow; red for the key reminder; blue for the secondary note.
Keep the main subject 40-60% of the canvas, at least 35% blank white space, hand-drawn not vector, strange but clean, readable in one second.
```

## 示例提示词（主题：信任不是喊出来的，是一块块证据铺过去的）

> 认知锚点：信任要一块块证据铺过去。隐喻：小人在断崖边用「案例/数据/口碑/复购」当砖，铺出一座通往「信任」门的上升桥。可直接喂 `render.js`（`--has-text true --aspect 4:3`）。

```
Generate one standalone 16:9 horizontal Chinese article illustration in a hand-drawn explanatory style.
Visual DNA: pure white background #FFFFFF, minimalist BLACK hand-drawn line art with slightly wobbly pen lines, LOTS of empty white space, only sparse handwritten Chinese annotations in red / orange / blue. Clean absurd product-sketch feeling. No gradients, no shadows, no paper texture, no PPT infographic, no cute mascot, no children's illustration, no realistic UI, and NO title in the top-left corner.
Theme: 信任不是喊出来的，是一块块证据铺过去的 — trust is not shouted, it is paved one piece of evidence at a time.
Composition: a small simple hand-drawn figure stands on the left edge of a gap/cliff and lays brick-like tiles one by one across the gap, building a rising bridge toward a small doorway on the right. Each brick is a piece of evidence. An ORANGE arrow follows the rising path of bricks as the main flow.
Chinese handwritten labels: on the bricks 「案例」「数据」「口碑」「复购」; above the door 「信任」; a RED note near the bridge 「一块块铺过去」; a small BLUE thought near the figure 「喊"信我"没用」.
Color use: black for line art and the figure; orange for the main path/arrow; red for the key reminder; blue for the secondary thought.
Keep the main subject ~40-60% of the canvas, at least 35% blank white space, hand-drawn not vector, strange but clean.
```
