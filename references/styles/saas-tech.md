---
slug: saas-tech
name_cn: 扁平 SaaS 科技风
name_en: Flat SaaS / Tech
channel: B2B 产品文 / 销售 deck / 官网 / 技术内容
has_text: true
default_backend: gpt
default_ratio: "4:3"
one_liner: 浅冷灰扁平 + 品牌蓝 + 单一亮 accent，Linear/Stripe/ElevenLabs 那种 sober 工程感。
---

> 通用方法见 `references/engine.md`，本文件只写「长相 + 提示词」。

## 视觉 DNA（必含）

- 背景：纯白 `#FFFFFF` 或极浅冷灰 `#F7F9FC`，可有极淡点阵/网格。
- 风格：现代扁平 or 轻等距(isometric)，圆角几何形，统一细描边或干净面块，柔和投影、轻微深度，无重 3D。
- 一图一概念，主体 <60%，大留白。
- 母题词库（跨境/AI 客服）：对话气泡、AI 路由模块、转化漏斗、工单、地球/跨境、仪表盘抽象、卡片节点流向。

## 配色（变量可替换品牌色）

- **主色** `BRAND_PRIMARY = #2563EB`（深 `#1E40AF`）—— 建议换成 Shulex 官方品牌色
- **中性** `#64748B`
- **单一亮 accent**：从 ElevenLabs 10 色挑 1（默认电子绿 `#00FF95`），只标关键/正向节点
- ≤6 个中英文短标签

## 禁忌

❌ 幼稚卡通 / 手绘潦草 / 复古 / 真实照片拼贴 / 过度拟物 / 满屏图标 icon-soup / 廉价剪贴画 / 彩虹渐变 / 真实 UI 截图。

## 提示词模板

```
Modern flat vector illustration for a SaaS / B2B product article, clean tech aesthetic in the style of Linear / Stripe / ElevenLabs marketing graphics, {{RATIO}}.
Background: pure white #FFFFFF [or very light cool gray #F7F9FC] with an extremely subtle dot grid. Rounded geometric shapes, consistent thin stroke or clean filled blocks, soft subtle shadows, slight depth, no heavy 3D.
Subject: {{SUBJECT}} — one concept, not crowded, generous white space, subject under 60% of frame.
Color: brand blue {{BRAND_PRIMARY=#2563EB}} (deep #1E40AF) for primary structure; neutral gray #64748B for secondary; exactly ONE bright accent {{ACCENT=#00FF95}} only for the key/positive element.
Short tiny legible labels (max 6): {{LABELS}}.
Sober, trustworthy, dashboard-grade engineering feel. Avoid childish cartoon, hand-drawn look, vintage, photo collage, skeuomorphism, icon soup, cheap clipart, rainbow gradients, real product UI / screenshots.
```

## 示例提示词（主题：跨境多语言 AI 客服 → 自动分流 → 转化漏斗）

```
Modern flat vector illustration for a SaaS / B2B product article, clean tech aesthetic in the style of Linear / Stripe / ElevenLabs marketing graphics, 16:9 horizontal.
Subject (single concept, not crowded): a cross-border AI customer-service flow. On the LEFT, several rounded speech bubbles each tagged with a different language (EN / ES / 中文 / AR) flow rightward into a CENTRAL rounded module representing an AI assistant routing engine labelled 「AI 客服」. From the module, clean node lines drop into a conversion FUNNEL on the right that narrows to a single glowing checkout node.
Generous white space, subject under 60% of frame. Background: pure white #FFFFFF with an extremely subtle dot grid. Rounded geometric forms with consistent thin stroke, soft subtle shadows, slight isometric depth on the central module, no heavy 3D.
Color: brand blue #2563EB (deep #1E40AF) for bubbles, module and structural lines; neutral gray #64748B for funnel walls and secondary marks; exactly ONE bright accent electric green #00FF95 used only for the main flow arrow and the final conversion node.
Short tiny legible labels: 多语言, AI 客服, Auto-route, 工单, 转化, Checkout.
Sober, trustworthy, dashboard-grade engineering feel. Avoid: childish cartoon, hand-drawn sketchy look, vintage, photo collage, skeuomorphism, icon soup, cheap clipart, rainbow gradients, real product UI / screenshots.
```
