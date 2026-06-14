---
name: illustration-studio
description: 读懂内容→挑风格→出可粘贴提示词/直接出图，33 套插画风格 + 双后端
---

# Illustration Studio · 内容配图工作室

> 一个**目标式配图 Agent**：给它一篇文章/一个主题，它先**读懂**，挑出最该配图的「认知锚点」，
> 从 **33 套插画风格**里选最合适的一套，产出 shot list + 每张**可直接粘贴的生图提示词**，
> 有出图 key 时直接渲染 PNG。

> **核心理念**：好配图不是给文章配气氛图，也不是把文章画成流程图，而是
> **把最关键的那个「认知动作 / 用户处境」挑出来，用一个画面让人 1 秒看懂**。
> 通用方法论（提炼→构图→原创隐喻→质检）见 `references/engine.md`；33 套风格的「长相」见 `references/styles/`。

---

## 🎯 目标

用户给「内容 + 渠道/风格偏好」后，达到的**终态**：

- 针对正文/链接/主题，产出 **N 张配图的 shot list**，每张锁定**单一认知锚点**。
- 从 33 套风格里**选定 1 套**最契合内容与渠道的风格（或用户指定）。
- 每张配**一条可直接粘贴的单图生图提示词**（英文画面主体 + 中文标注），含该风格 DNA 全部必含项。
- **有 key**：用 `render.js` 直接渲染 PNG 并过图像级质检；**无 key**：交付提示词（状态 `DONE_WITHOUT_RENDER`）。

## ✅ 验收清单（不全过不返回）

- [ ] 已从内容提炼出认知锚点，每张图锁定**单一**锚点（无"元素清单化"）。
- [ ] 已选定具体风格（`references/styles/<slug>.md`），并说明为何选它。
- [ ] 每张提示词含该风格 `style-dna` 的**全部必含项** + 比例符合渠道。
- [ ] 中文标注 ≤ 该风格上限，短、来自真实语境（非"提质增效"概念词）。
- [ ] 后端选择遵循规则：**有文字标注→gpt-image-2；纯画面无字→Gemini**（`render.js --has-text`）。
- [ ] 事实锚定：无用户未授权的真人/品牌/数字；无硬编码 key。
- [ ] 渲染时：图像 3 秒读懂、风格特征鲜明、无截图感/PPT 味（过 `references/engine.md` 第 7 节双闸）。
- [ ] 若 3 轮自检仍不过 → 失败回执 + 标 `[TODO]` 返回。

## 📥 输入

- `content`（**必填**）：正文 / 链接 / Markdown / 主题。缺它 → `BLOCKED`。
- `style`（可选，默认 `auto`）：从下方 33 套里指定 slug，或 `auto` 让 Agent 按内容+渠道选。
- `count`（可选，默认 4-8；短文 1-3，长文 ≤9）。
- `ratio` / `backend`（可选）：覆盖该风格默认值。

## 🔁 工作流（含自循环）

1. **复述目标**：要配几张、什么风格、有 key 则直接出图。
2. **读引擎 + 选风格**：读 `references/engine.md`（提炼/构图/隐喻/质检），按内容+渠道从 `references/styles/` 选 1 套（auto 时给出理由）。
3. **提炼认知锚点**：按引擎第 1 节挑锚点；明确哪些段落不需要图。
4. **出 shot list**：每张写清放在哪段后/主题/一句话画面/锚点/构图/标注/为什么值得画。
5. **写单图提示词**：套所选风格 `styles/<slug>.md` 的提示词模板，一次一张。
6. **自检**（引擎 Gate 1 + 该风格禁忌）→ 未过则定位修复回第 5 步。
7. **渲染**：`node render.js --has-text <true|false> --aspect <r> --out <dir> --prompt-file <p>`（有 key 才出图；无 key → `DONE_WITHOUT_RENDER` + 给提示词）。
8. **图像质检**（引擎 Gate 2）→ 不过重渲。**≥3 轮不过 Gate 1 → 失败回执**。
9. **交付**：说清几张、每张用途与放置位置、保存路径、哪张最稳。

## ⚙️ 副作用

- **写入**：shot list/提示词在对话返回；图落 `examples/` 或 `/tmp` 或用户工作区 `assets/<slug>/`，递增命名不覆盖。
- **调用 API**：仅当检测到 key 时，经自包含的 `render.js` 调 `gpt-image-2`（OpenAI 兼容）/ Gemini Nano Banana。`render.js` 只依赖公开 npm 包 `openai` + `@google/genai`。
- **凭证**：一律从环境变量读，**绝不写进任何文件 / 提示词**（`OPENAI_API_KEY` /（可选 `OPENAI_BASE_URL`）/ `GEMINI_API_KEY`）。
- **破坏性**：否。

## 🚨 失败回执

≥3 轮自检不过，或缺 `content`：
1. 写日志 `~/.claude/logs/illustration-studio-<YYYYMMDD-HHMM>.md`（输入摘要 / 卡在哪 / 已试 / 建议）。
2. 用 `lark-im` skill 给「小诗」发 DM（**不硬编码 chat-id**）。推送失败不阻塞但要说明。
3. 返回当前最佳 shot list/提示词 + 卡点，标 `[TODO]`，不静默退出。

---

## 🎨 风格库（33 套 · 详见 `references/styles/<slug>.md`）

> 后端默认：**有字→gpt-image-2 / 无字→Gemini**（可覆盖）。示例样张见 `examples/`。

### 🖌️ 手绘 / 编辑插画

| slug | 风格 | 渠道 | 有字 | 比例 |
|---|---|---|---|---|
| `keke-sketch` | 白底手绘 | 公众号/方法论 | ✅ | 4:3 |
| `editorial-line` | 极简单线条 | 深度长文 | ⬜ | 4:3 |
| `painterly-watercolor-gouache` | 新传统水彩 | 情绪叙事/长文 | ⬜ | 4:3 |
| `ghibli-healing-anime` | 吉卜力治愈 | 情感营销/品牌故事 | ⬜ | 4:3 |
| `oriental-ink-guofeng` | 东方水墨国风 | 出海文化身份 | ⬜ | 4:3 |
| `airy-lifestyle-linedraw` | 留白生活速写 | 生活方式/charm 插画 | ✅ | 4:3 |
| `loose-red-accent-sketch` | 单红点速写 | 极简趣味海报/框画 | ✅ | 4:3 |

### 📐 扁平 / 矢量 / 几何 / 3D

| slug | 风格 | 渠道 | 有字 | 比例 |
|---|---|---|---|---|
| `saas-tech` | SaaS 科技 | B2B/产品/deck | ✅ | 4:3 |
| `bauhaus-geometric` | 包豪斯几何 | 知识框架/信息图 | ⬜ | 4:3 |
| `friendly-brand-cards` | 友好品牌卡片流 | 能力清单/功能营销图 | ✅ | 4:3 |
| `flat-brand-mascot` | 扁平品牌吉祥物 | 品牌主视觉/IP/封面 | ✅ | 4:3 |
| `hybrid-3d-flat-isometric` | 3D 融合等距 | B2B 系统架构 | ✅ | 4:3 |
| `claymorphism-soft-3d` | 黏土软 3D | 吉祥物/引导页 | ⬜ | 4:3 |

### 🖨️ 复古 / 印刷 / 潮流

| slug | 风格 | 渠道 | 有字 | 比例 |
|---|---|---|---|---|
| `risograph-retro-print` | Riso 孔版印刷 | 态度海报/文创 | ✅ | 4:3 |
| `pixel-8bit-retro` | 像素 8-bit | 游戏化叙事 | ✅ | 4:3 |
| `cosmic-retro-futurism` | 复古太空图录 | 未来宣言页 | ⬜ | 4:3 |
| `y2k-cyber-chrome` | Y2K 千禧赛博 | 潮牌/Gen Z 封面 | ✅ | 4:3 |
| `bold-line-retro-flat` | 粗线条复古平涂 | 潮流趣味插画/封面 | ⬜ | 4:3 |

### 🧩 质感 / 拼贴 / 实物

| slug | 风格 | 渠道 | 有字 | 比例 |
|---|---|---|---|---|
| `xhs-warm` | 小红书暖系 | 小红书共鸣 | ✅ | 4:3 |
| `mixed-media-collage` | 混合媒介拼贴 | campaign 主视觉 | ✅ | 4:3 |
| `papercut-papercraft` | 剪纸纸艺 | 品牌故事/温暖叙事 | ⬜ | 4:3 |
| `moodboard-scrapbook` | 数字剪贴簿 | 选品灵感板/生活方式 | ⬜ | 4:3 |
| `minimal-lookbook-grid` | 极简 lookbook 网格 | 选品合集/电商目录 | ✅ | 4:3 |
| `grainy-gradient-noise` | 颗粒噪点渐变 | 情绪头图 | ⬜ | 4:3 |

### 📣 广告 / 营销版式

| slug | 风格 | 渠道 | 有字 | 比例 |
|---|---|---|---|---|
| `bold-type-over-photo` | 大字压图广告 | campaign KV/海报 | ✅ | 4:3 |
| `mascot-quote-ad` | 萌宠金句广告 | DTC 趣味广告/萌宠代言 | ✅ | 4:3 |

### 🛍️ 高级产品图 / 电商

| slug | 风格 | 渠道 | 有字 | 比例 |
|---|---|---|---|---|
| `premium-product-hero` | 高端产品 hero | 产品发布/DTC 广告 | ✅ | 4:3 |
| `studio-still-life` | 极简影棚静物 | 3C/美妆/家居主图 | ⬜ | 4:3 |
| `lifestyle-scene-product` | 生活场景植入 | 种草/生活方式电商 | ⬜ | 4:3 |
| `color-pop-product` | 撞色糖果背景 | 美妆/潮牌/饮料 | ⬜ | 4:3 |
| `dark-luxe-product` | 暗调奢质 | 奢品/香水/高端护肤 | ⬜ | 4:3 |
| `splash-dynamic-product` | 动感泼溅 | 饮料/美妆/食品 | ⬜ | 4:3 |
| `flat-lay-knolling` | 平铺俯拍 | 配件/多SKU/开箱 | ⬜ | 4:3 |

## 快速开始

```bash
# 1. 读懂内容、挑风格、出提示词（Agent 完成）
# 2. 渲染（先 npm install openai @google/genai + 配出图 key）：
node render.js --has-text true  --aspect 4:3 --out /tmp/out --prompt-file <提示词文件>   # 有字 → gpt-image-2
node render.js --has-text false --aspect 4:3 --out /tmp/out --prompt-file <提示词文件>   # 无字 → Gemini
```
