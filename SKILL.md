---
name: illustration-studio
description: 读懂内容→挑风格→出可粘贴提示词/直接出图，19 套插画风格 + 双后端
---

# Illustration Studio · 内容配图工作室

> 一个**目标式配图 Agent**：给它一篇文章/一个主题，它先**读懂**，挑出最该配图的「认知锚点」，
> 从 **19 套插画风格**里选最合适的一套，产出 shot list + 每张**可直接粘贴的生图提示词**，
> 有出图 key 时直接渲染 PNG。

> **核心理念**：好配图不是给文章配气氛图，也不是把文章画成流程图，而是
> **把最关键的那个「认知动作 / 用户处境」挑出来，用一个画面让人 1 秒看懂**。
> 通用方法论（提炼→构图→原创隐喻→质检）见 `references/engine.md`；19 套风格的「长相」见 `references/styles/`。

---

## 🎯 目标

用户给「内容 + 渠道/风格偏好」后，达到的**终态**：

- 针对正文/链接/主题，产出 **N 张配图的 shot list**，每张锁定**单一认知锚点**。
- 从 19 套风格里**选定 1 套**最契合内容与渠道的风格（或用户指定）。
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
- `style`（可选，默认 `auto`）：从下方 19 套里指定 slug，或 `auto` 让 Agent 按内容+渠道选。
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
- **调用 API**：仅当检测到 key 时，经 `render.js` → image-master 调 flatkey `gpt-image-2` / Gemini `nano`。
- **凭证**：一律从环境变量 / Keychain 读，**绝不写进任何文件 / 提示词**（`FLATKEY_API_KEY` / `GEMINI_API_KEY` / `IMAGE_MASTER_SRC`）。
- **破坏性**：否。

## 🚨 失败回执

≥3 轮自检不过，或缺 `content`：
1. 写日志 `~/.claude/logs/illustration-studio-<YYYYMMDD-HHMM>.md`（输入摘要 / 卡在哪 / 已试 / 建议）。
2. 用 `lark-im` skill 给「小诗」发 DM（**不硬编码 chat-id**）。推送失败不阻塞但要说明。
3. 返回当前最佳 shot list/提示词 + 卡点，标 `[TODO]`，不静默退出。

---

## 🎨 风格库（19 套 · 详见 `references/styles/<slug>.md`）

> 后端默认：**有字→gpt-image-2 / 无字→Gemini**（可覆盖）。示例样张见 `examples/`。

| slug | 风格 | 渠道 | 有字 | 默认比例 |
|---|---|---|---|---|
| `keke-sketch` | 白底手绘认知图 | 公众号/方法论 | ✅ | 16:9 |
| `saas-tech` | 扁平 SaaS 科技风 | B2B/产品/deck | ✅ | 16:9 |
| `xhs-warm` | 小红书暖系马克笔 | 小红书共鸣 | ✅ | 3:4 |
| `editorial-line` | 极简单线条编辑风 | 深度长文 | ⬜ | 16:9 |
| `hybrid-3d-flat-isometric` | 3D 融合扁平等距 | B2B 系统架构 | ✅ | 16:9 |
| `claymorphism-soft-3d` | 黏土软 3D | 吉祥物/引导页 | ⬜ | 1:1 |
| `grainy-gradient-noise` | 颗粒噪点渐变 | 情绪头图 | ⬜ | 16:9 |
| `painterly-watercolor-gouache` | 新传统水彩水粉 | 情绪叙事/长文 | ⬜ | 3:2 |
| `mixed-media-collage` | 混合媒介拼贴 | campaign 主视觉 | ✅ | 4:5 |
| `risograph-retro-print` | Riso 孔版印刷 | 态度海报/文创 | ✅ | 3:4 |
| `papercut-papercraft` | 剪纸纸艺 | 品牌故事/温暖叙事 | ⬜ | 4:3 |
| `low-poly-crystal` | 低多边形水晶 | 硬科技/数据 | ⬜ | 16:9 |
| `pixel-8bit-retro` | 像素 8-bit 复古 | 游戏化叙事 | ✅ | 4:3 |
| `cosmic-retro-futurism` | 复古未来太空图录 | 未来宣言页 | ⬜ | 16:9 |
| `y2k-cyber-chrome` | Y2K 千禧赛博 | 潮牌/Gen Z 封面 | ✅ | 3:4 |
| `ghibli-healing-anime` | 吉卜力治愈动漫 | 情感营销/品牌故事 | ⬜ | 16:9 |
| `sticker-diecut` | 贴纸模切 | 功能图标/社媒贴纸 | ✅ | 1:1 |
| `bauhaus-geometric` | 包豪斯几何构成 | 知识框架/信息图 | ⬜ | 1:1 |
| `oriental-ink-guofeng` | 东方水墨国风 | 出海文化身份 | ⬜ | 3:4 |

## 快速开始

```bash
# 1. 读懂内容、挑风格、出提示词（Agent 完成）
# 2. 渲染（需 image-master + 出图 key）：
node render.js --has-text true  --aspect 16:9 --out /tmp/out --prompt-file <提示词文件>   # 有字 → gpt-image-2
node render.js --has-text false --aspect 16:9 --out /tmp/out --prompt-file <提示词文件>   # 无字 → Gemini
```
