# Illustration Studio 🎨 · 内容配图工作室

> **一个 Agent Skill：把文章变成配图。** 先读懂内容 → 挑出最该配图的「认知锚点」→ 从 **19 套插画风格**里选一套 → 产出可直接粘贴的生图提示词，有出图 key 时直接渲染 PNG。
>
> 适配 Claude Code / Codex / 任何能读 `SKILL.md` 的 Agent 运行时。

中文 article illustration generator. Understands your article first, finds the key cognitive anchor, picks one of **19 illustration styles**, and emits ready-to-paste image-generation prompts (auto-renders PNG when an image key is available).

---

## 核心理念

好配图不是给文章配气氛图，也不是把文章画成流程图，而是 **把最关键的那个「认知动作 / 用户处境」挑出来，用一个画面让人 1 秒看懂**。

这套引擎（`references/engine.md`）做的是：

```
读懂内容 → 提炼认知锚点 → 出 shot list → 选风格 + 构图 → 原创隐喻
        → 写单图提示词 → 渲染（双后端）→ 双闸质检 → 交付
```

风格只是「皮肤」，引擎是「大脑」——19 套风格共用同一套认知配图方法论。

---

## 19 套风格

| 类别 | 风格 |
|---|---|
| 手绘 / 编辑 | 白底手绘认知图 · 极简单线条编辑风 · 新传统水彩水粉 · 吉卜力治愈动漫 · 东方水墨国风 |
| 几何 / 矢量 | 扁平 SaaS 科技风 · 包豪斯几何构成 · 贴纸模切 |
| 3D / 立体 | 3D 融合扁平等距 · 黏土软 3D · 低多边形水晶 |
| 复古印刷 | Riso 孔版印刷 · 像素 8-bit 复古 · 复古未来太空图录 · Y2K 千禧赛博 |
| 质感 / 拼贴 | 小红书暖系马克笔 · 混合媒介拼贴 · 剪纸纸艺 · 颗粒噪点渐变 |

每套风格的视觉 DNA / 配色 / 禁忌 / 提示词模板 / 完整示例，见 [`references/styles/`](references/styles)。

## 样张 Gallery

> 19 套风格各一张样张（由 `gpt-image-2` / Gemini Nano Banana Pro 生成，主题取自跨境电商 / AI 客服 / 内容创作场景，仅作风格演示）。

|  |  |  |  |
|:--:|:--:|:--:|:--:|
| <img src="examples/keke-sketch.png" width="200"><br>**白底手绘**<br><sub>`keke-sketch`</sub> | <img src="examples/saas-tech.png" width="200"><br>**SaaS 科技**<br><sub>`saas-tech`</sub> | <img src="examples/xhs-warm.png" width="200"><br>**小红书暖系**<br><sub>`xhs-warm`</sub> | <img src="examples/editorial-line.png" width="200"><br>**极简单线条**<br><sub>`editorial-line`</sub> |
| <img src="examples/hybrid-3d-flat-isometric.png" width="200"><br>**3D 融合等距**<br><sub>`hybrid-3d-flat-isometric`</sub> | <img src="examples/claymorphism-soft-3d.png" width="200"><br>**黏土软 3D**<br><sub>`claymorphism-soft-3d`</sub> | <img src="examples/grainy-gradient-noise.png" width="200"><br>**颗粒噪点渐变**<br><sub>`grainy-gradient-noise`</sub> | <img src="examples/painterly-watercolor-gouache.png" width="200"><br>**新传统水彩**<br><sub>`painterly-watercolor-gouache`</sub> |
| <img src="examples/mixed-media-collage.png" width="200"><br>**混合媒介拼贴**<br><sub>`mixed-media-collage`</sub> | <img src="examples/risograph-retro-print.png" width="200"><br>**Riso 孔版印刷**<br><sub>`risograph-retro-print`</sub> | <img src="examples/papercut-papercraft.png" width="200"><br>**剪纸纸艺**<br><sub>`papercut-papercraft`</sub> | <img src="examples/low-poly-crystal.png" width="200"><br>**低多边形水晶**<br><sub>`low-poly-crystal`</sub> |
| <img src="examples/pixel-8bit-retro.png" width="200"><br>**像素 8-bit**<br><sub>`pixel-8bit-retro`</sub> | <img src="examples/cosmic-retro-futurism.png" width="200"><br>**复古太空图录**<br><sub>`cosmic-retro-futurism`</sub> | <img src="examples/y2k-cyber-chrome.png" width="200"><br>**Y2K 千禧赛博**<br><sub>`y2k-cyber-chrome`</sub> | <img src="examples/ghibli-healing-anime.png" width="200"><br>**吉卜力治愈**<br><sub>`ghibli-healing-anime`</sub> |
| <img src="examples/sticker-diecut.png" width="200"><br>**贴纸模切**<br><sub>`sticker-diecut`</sub> | <img src="examples/bauhaus-geometric.png" width="200"><br>**包豪斯几何**<br><sub>`bauhaus-geometric`</sub> | <img src="examples/oriental-ink-guofeng.png" width="200"><br>**东方水墨国风**<br><sub>`oriental-ink-guofeng`</sub> |  |

---

## 双后端 + 选择规则

| 后端 | 模型 | 何时用 |
|---|---|---|
| **A** flatkey | `gpt-image-2` | **图上有文字标注** → 文字渲染最准、几乎不乱码 |
| **B** Gemini | Nano Banana Pro | **纯画面、无文字** → 线条/质感更精细、成品感更强 |

`render.js` 用 `--has-text true|false` 自动按此规则选后端；显式 `--backend gpt|nano|both` 优先。

---

## 安装 & 用法

**依赖**：[image-master](https://github.com/) CLI（封装 OpenAI / Google 图像 API）+ 至少一个出图 key。

```bash
# 凭证（从环境变量 / Keychain 读，绝不写进仓库）
export FLATKEY_API_KEY=...        # flatkey gpt-image-2（OpenAI 兼容路由）
export GEMINI_API_KEY=...         # Gemini Nano Banana
export IMAGE_MASTER_SRC=/path/to/image-master/src   # 非默认安装路径时指定

# 渲染一张
node render.js --has-text true --aspect 16:9 --out /tmp/out --prompt-file ./prompt.txt
```

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
│   └── styles/<slug>.md      # 19 套风格预设（DNA + 提示词模板 + 示例）
└── examples/<slug>.png       # 每套风格样张
```

## License

MIT · 详见 `LICENSE`。
