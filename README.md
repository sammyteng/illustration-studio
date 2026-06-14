# Illustration Studio 🎨 · 内容配图工作室

> **一个 Agent Skill：把文章变成配图。** 先读懂内容 → 挑出最该配图的「认知锚点」→ 从 **33 套插画风格**里选一套 → 产出可直接粘贴的生图提示词，有出图 key 时直接渲染 PNG。
>
> 适配 Claude Code / Codex / 任何能读 `SKILL.md` 的 Agent 运行时。

中文 article illustration generator. Understands your article first, finds the key cognitive anchor, picks one of **33 illustration styles**, and emits ready-to-paste image-generation prompts (auto-renders PNG when an image key is available).

---

## 核心理念

好配图不是给文章配气氛图，也不是把文章画成流程图，而是 **把最关键的那个「认知动作 / 用户处境」挑出来，用一个画面让人 1 秒看懂**。

这套引擎（`references/engine.md`）做的是：

```
读懂内容 → 提炼认知锚点 → 出 shot list → 选风格 + 构图 → 原创隐喻
        → 写单图提示词 → 渲染（双后端）→ 双闸质检 → 交付
```

风格只是「皮肤」，引擎是「大脑」——33 套风格共用同一套认知配图方法论。

---

## 33 套风格（按类型分 6 组）

**🖌️ 手绘 / 编辑插画**（7）：白底手绘 · 极简单线条 · 新传统水彩 · 吉卜力治愈 · 东方水墨国风 · 留白生活速写 · 单红点速写

**📐 扁平 / 矢量 / 几何 / 3D**（6）：SaaS 科技 · 包豪斯几何 · 友好品牌卡片流 · 扁平品牌吉祥物 · 3D 融合等距 · 黏土软 3D

**🖨️ 复古 / 印刷 / 潮流**（5）：Riso 孔版印刷 · 像素 8-bit · 复古太空图录 · Y2K 千禧赛博 · 粗线条复古平涂

**🧩 质感 / 拼贴 / 实物**（6）：小红书暖系 · 混合媒介拼贴 · 剪纸纸艺 · 数字剪贴簿 · 极简 lookbook 网格 · 颗粒噪点渐变

**📣 广告 / 营销版式**（2）：大字压图广告 · 萌宠金句广告

**🛍️ 高级产品图 / 电商**（7）：高端产品 hero · 极简影棚静物 · 生活场景植入 · 撞色糖果背景 · 暗调奢质 · 动感泼溅 · 平铺俯拍

每套风格的视觉 DNA / 配色 / 禁忌 / 提示词模板 / 完整示例，见 [`references/styles/`](references/styles)。

## 样张 Gallery

> 33 套风格各一张样张（`gpt-image-2` / Gemini Nano Banana Pro 生成，主题取自跨境电商 / AI 客服 / 内容场景，仅作演示）。统一 **4:3 + 自动圆角阴影**，遵守**留白铁律**。

### 🖌️ 手绘 / 编辑插画

|  |  |  |  |
|:--:|:--:|:--:|:--:|
| <img src="examples/keke-sketch.png" width="200"><br>**白底手绘**<br><sub>`keke-sketch`</sub> | <img src="examples/editorial-line.png" width="200"><br>**极简单线条**<br><sub>`editorial-line`</sub> | <img src="examples/painterly-watercolor-gouache.png" width="200"><br>**新传统水彩**<br><sub>`painterly-watercolor-gouache`</sub> | <img src="examples/ghibli-healing-anime.png" width="200"><br>**吉卜力治愈**<br><sub>`ghibli-healing-anime`</sub> |
| <img src="examples/oriental-ink-guofeng.png" width="200"><br>**东方水墨国风**<br><sub>`oriental-ink-guofeng`</sub> | <img src="examples/airy-lifestyle-linedraw.png" width="200"><br>**留白生活速写**<br><sub>`airy-lifestyle-linedraw`</sub> | <img src="examples/loose-red-accent-sketch.png" width="200"><br>**单红点速写**<br><sub>`loose-red-accent-sketch`</sub> |  |

### 📐 扁平 / 矢量 / 几何 / 3D

|  |  |  |  |
|:--:|:--:|:--:|:--:|
| <img src="examples/saas-tech.png" width="200"><br>**SaaS 科技**<br><sub>`saas-tech`</sub> | <img src="examples/bauhaus-geometric.png" width="200"><br>**包豪斯几何**<br><sub>`bauhaus-geometric`</sub> | <img src="examples/friendly-brand-cards.png" width="200"><br>**友好品牌卡片流**<br><sub>`friendly-brand-cards`</sub> | <img src="examples/flat-brand-mascot.png" width="200"><br>**扁平品牌吉祥物**<br><sub>`flat-brand-mascot`</sub> |
| <img src="examples/hybrid-3d-flat-isometric.png" width="200"><br>**3D 融合等距**<br><sub>`hybrid-3d-flat-isometric`</sub> | <img src="examples/claymorphism-soft-3d.png" width="200"><br>**黏土软 3D**<br><sub>`claymorphism-soft-3d`</sub> |  |  |

### 🖨️ 复古 / 印刷 / 潮流

|  |  |  |  |
|:--:|:--:|:--:|:--:|
| <img src="examples/risograph-retro-print.png" width="200"><br>**Riso 孔版印刷**<br><sub>`risograph-retro-print`</sub> | <img src="examples/pixel-8bit-retro.png" width="200"><br>**像素 8-bit**<br><sub>`pixel-8bit-retro`</sub> | <img src="examples/cosmic-retro-futurism.png" width="200"><br>**复古太空图录**<br><sub>`cosmic-retro-futurism`</sub> | <img src="examples/y2k-cyber-chrome.png" width="200"><br>**Y2K 千禧赛博**<br><sub>`y2k-cyber-chrome`</sub> |
| <img src="examples/bold-line-retro-flat.png" width="200"><br>**粗线条复古平涂**<br><sub>`bold-line-retro-flat`</sub> |  |  |  |

### 🧩 质感 / 拼贴 / 实物

|  |  |  |  |
|:--:|:--:|:--:|:--:|
| <img src="examples/xhs-warm.png" width="200"><br>**小红书暖系**<br><sub>`xhs-warm`</sub> | <img src="examples/mixed-media-collage.png" width="200"><br>**混合媒介拼贴**<br><sub>`mixed-media-collage`</sub> | <img src="examples/papercut-papercraft.png" width="200"><br>**剪纸纸艺**<br><sub>`papercut-papercraft`</sub> | <img src="examples/moodboard-scrapbook.png" width="200"><br>**数字剪贴簿**<br><sub>`moodboard-scrapbook`</sub> |
| <img src="examples/minimal-lookbook-grid.png" width="200"><br>**极简 lookbook 网格**<br><sub>`minimal-lookbook-grid`</sub> | <img src="examples/grainy-gradient-noise.png" width="200"><br>**颗粒噪点渐变**<br><sub>`grainy-gradient-noise`</sub> |  |  |

### 📣 广告 / 营销版式

|  |  |  |  |
|:--:|:--:|:--:|:--:|
| <img src="examples/bold-type-over-photo.png" width="200"><br>**大字压图广告**<br><sub>`bold-type-over-photo`</sub> | <img src="examples/mascot-quote-ad.png" width="200"><br>**萌宠金句广告**<br><sub>`mascot-quote-ad`</sub> |  |  |

### 🛍️ 高级产品图 / 电商

|  |  |  |  |
|:--:|:--:|:--:|:--:|
| <img src="examples/premium-product-hero.png" width="200"><br>**高端产品 hero**<br><sub>`premium-product-hero`</sub> | <img src="examples/studio-still-life.png" width="200"><br>**极简影棚静物**<br><sub>`studio-still-life`</sub> | <img src="examples/lifestyle-scene-product.png" width="200"><br>**生活场景植入**<br><sub>`lifestyle-scene-product`</sub> | <img src="examples/color-pop-product.png" width="200"><br>**撞色糖果背景**<br><sub>`color-pop-product`</sub> |
| <img src="examples/dark-luxe-product.png" width="200"><br>**暗调奢质**<br><sub>`dark-luxe-product`</sub> | <img src="examples/splash-dynamic-product.png" width="200"><br>**动感泼溅**<br><sub>`splash-dynamic-product`</sub> | <img src="examples/flat-lay-knolling.png" width="200"><br>**平铺俯拍**<br><sub>`flat-lay-knolling`</sub> |  |

---

## 双后端 + 选择规则

| 后端 | 模型 | 何时用 |
|---|---|---|
| **A** OpenAI | `gpt-image-2` | **图上有文字标注** → 文字渲染最准、几乎不乱码 |
| **B** Gemini | Nano Banana Pro | **纯画面、无文字** → 线条/质感更精细、成品感更强 |

`render.js` 用 `--has-text true|false` 自动按此规则选后端；显式 `--backend gpt|nano|both` 优先。

---

## 安装 & 用法

**`render.js` 是自包含的**，只依赖两个公开 npm 包，外加至少一个出图 key：

```bash
# 1. 装依赖（在本仓库目录执行一次）
npm install openai @google/genai

# 2. 凭证（从环境变量读，绝不写进仓库）—— 任选一个或都配
export OPENAI_API_KEY=...     # gpt-image-2（用官方 OpenAI；若用自有兼容路由，再设 OPENAI_BASE_URL）
export GEMINI_API_KEY=...     # Gemini Nano Banana

# 3. 渲染一张
node render.js --has-text true  --aspect 4:3 --out /tmp/out --prompt-file ./prompt.txt   # 有字 → gpt-image-2
node render.js --has-text false --aspect 4:3 --out /tmp/out --prompt-file ./prompt.txt   # 无字 → Gemini
```

> 注：`gpt-image-2` 是 OpenAI 兼容接口；自带 OpenAI 兼容路由的用户设 `OPENAI_BASE_URL` 即可。无 key 时本 skill 仍可只产出**可粘贴提示词**（贴到 ChatGPT / Gemini / 即梦 出图）。

**在 Agent 里用**：把 `SKILL.md` 装进你的运行时，然后：

```
用 illustration-studio 给这篇文章配 5 张图：<贴文章/链接>
```

Agent 会读懂文章 → 选风格 → 出 shot list + 提示词 →（有 key 时）出图。

**没有 key 也能用**：跳过渲染，直接拿「可粘贴提示词」贴到 ChatGPT / Gemini / 即梦 / Nano Banana 出图。

---

## 结构

```
illustration-studio/
├── SKILL.md                  # 编排器（7 章节目标式 Agent）
├── render.js                 # 双后端可复用渲染器
├── references/
│   ├── engine.md             # 认知配图引擎（通用方法论）
│   └── styles/<slug>.md      # 33 套风格预设（DNA + 提示词模板 + 示例）
└── examples/<slug>.png       # 每套风格样张
```

## License

MIT · 详见 `LICENSE`。
