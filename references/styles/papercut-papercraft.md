---
name_cn: 剪纸纸艺
name_en: Paper Cut / Papercraft
channel: 品牌故事页 / 年报封面 / 节日营销 / 金融保险健康教育这类需要"放心"的题材
has_text: false
default_backend: nano   # 无文字 → Gemini Nano Banana Pro；若加中文标注则切 gpt-image-2
default_ratio: 4:3
---

# 剪纸纸艺 · Paper Cut / Papercraft

> 一句话：层层叠纸的剪影质感，带纸边阴影和景深，温暖安全像立体绘本。
> 手工质感天然传递"用心、可信、岁月静好"——适合让人放心的题材和品牌叙事。

---

## 视觉 DNA

复现这套风格，下面每一项都必须出现，缺一项就不是剪纸：

- **背景**：纯色或极轻同色系渐变纸面（米白 / 奶油打底），自身也是"最底一层纸"。不要白底悬浮，不要场景照片，不要写实天空。
- **核心质感（最关键）**：**分层纸张剪影堆叠**（layered cut-paper / stacked paper collage）。画面由 4-6 层独立的纸片自后向前叠出来——远景一层、中景一层、主体一层、前景点缀一层。每层是**一整块干净的几何剪影**，内部没有线条、没有渐变、没有细节描边，只靠颜色块和形状说话。
- **纸边与投影（立体感来源）**：层与层之间留**柔和的落影**（soft drop shadow，浅灰偏暖、低不透明度、短距离），让上面那层"浮"在下面那层之上。投影是这套风格的灵魂，没投影就塌成扁平插画。纸张边缘是**剪刀 / 激光切的利落弧线**——干净、连续、略圆润，不是手抖锯齿、不是毛边撕纸。
- **景深**：靠"层数 + 投影 + 近大远小 + 越远越浅"做出立体绘本的纵深感。可选极轻微的纸纹理（纸张颗粒）增加真实手工感，但不要做旧、不要划痕、不要污渍。
- **形状语言**：圆润、敦实、可爱中带稳重的几何块面。山丘、房子、人、植物、云都化简成"能用一刀剪下来"的整块剪影，避免尖锐细碎。
- **光影**：整体光线温暖均匀，像绘本台灯打在纸上。唯一的阴影就是层间落影，**不做强逆光、不做戏剧高光、不做霓虹发光**。
- **构图**：主体居中或稳重对称，留白充足（主体 ≤ 画面 60%），底部常有一道"地平线纸层"压住画面，给人脚踏实地的安全感。

---

## 配色

暖色系叠纸，**同色系深浅分层**（一个色相剪出 2-3 个明度做远中近），整体温润不刺眼。

| 角色 | 颜色 | Hex |
|---|---|---|
| 主色 · 陶土橙 | terracotta | `#D97B4F` |
| 主色 · 暖棕 | warm clay brown | `#A65B3A` |
| 辅助 · 奶油 | cream | `#F4E9D8` |
| 辅助 · 米白（底层纸）| ivory | `#FBF6EC` |
| 辅助 · 鼠尾草绿 | sage green | `#9CAE8B` |
| 辅助 · 深鼠尾草（远景）| deep sage | `#6E8268` |
| 强调 · 暖陶橘红（点睛小面积）| warm coral | `#E08A5C` |
| 投影 · 柔暖灰 | warm soft shadow | `#C9B8A3` （低不透明度 18-28%）|

> 用色规则：同一物件用同色相不同明度分前后层；强调色只点睛（一个小剪影、一颗果实、一扇窗），不抢主体；投影永远是暖灰不是纯黑。

---

## 禁忌

这套风格**绝不能出现**：

- ❌ 线条描边 / 手绘勾线 / 漫画黑边——剪纸靠色块和投影，不靠线。
- ❌ 写实照片质感、3D 渲染光泽、塑料反光、玻璃高光、金属质感。
- ❌ 霓虹发光、赛博、强对比戏剧光、冷蓝科技调。
- ❌ 毛边撕纸 / 做旧 / 划痕 / 污渍 / 焦边——剪纸是利落剪切，不是破旧手账。
- ❌ 渐变填充在剪影内部、内部细节描画、纹理贴图当主体——每层必须是干净纯色块。
- ❌ 投影做成硬黑边或长拖影——只能是短距离柔暖灰落影。
- ❌ 层数太少塌成扁平 flat 插画（必须看得出 ≥4 层堆叠）。
- ❌ 纯白背景上悬浮主体（背景本身要是一层纸）。
- ❌ 尖锐细碎、信息堆满、把主题里所有名词都剪进画面。

---

## 提示词模板

英文负责画面，中文负责标注。把下面整段拼好喂给 `render.js`（`--has-text false` 默认走 nano；若填了 `{{LABELS}}` 中文标注则改 `--has-text true` 走 gpt-image-2）。

```
Layered cut-paper papercraft illustration of {{SUBJECT}}, made of 4 to 6 stacked
hand-cut paper layers (far background / mid-ground / main subject / foreground
accent), each layer a single clean flat solid-color paper silhouette with NO
internal lines, NO outlines, NO gradients inside the shapes. Crisp scissor-cut
smooth rounded edges. Soft short warm-grey drop shadows between every layer so
each paper sheet floats above the one behind it, creating gentle depth and a
3D pop-up storybook feeling. Subtle paper grain texture, even warm storybook
lighting (no neon, no glow, no harsh light).
Warm same-hue tonal palette: terracotta #D97B4F, warm clay brown #A65B3A,
cream #F4E9D8, ivory paper background #FBF6EC, sage green #9CAE8B, deep sage
#6E8268, with a small coral #E08A5C accent. Each object uses 2-3 shades of one
hue for near/far layers. Generous negative space, subject under ~60% of frame,
a grounding paper horizon layer near the bottom. Cozy, trustworthy, calm,
handcrafted picture-book mood.
{{LABELS}}
Aspect ratio {{RATIO}}. No photo realism, no 3D plastic shine, no line art,
no torn rough edges, no distressed grunge.
```

变量说明：
- `{{SUBJECT}}` — 画面主体（一个原创隐喻物件 + 动作，别堆名词）。
- `{{LABELS}}` — 可选中文短标注，最多 4-5 处、每处 2-6 字；填了就切 gpt-image-2 后端。格式建议：`Small clean Chinese paper-cut labels (max 4): "出海" "安心" "有人接住" placed beside the relevant layers, simple sans-serif.`
- `{{RATIO}}` — 比例，默认 `4:3`；品牌故事页可 `16:9`，竖封面可 `3:4`。

---

## 示例提示词

**主题**：跨境 AI 客服"让出海更安心"品牌故事 / 销售年报封面温暖叙事
（核心隐喻：一只小货船载着包裹驶向远方海平线，岸边一双纸剪成的大手在水下托住船底——出海有人接住、放心。无文字版，走 nano。）

```
Layered cut-paper papercraft illustration of a small cargo boat carrying a few
neatly stacked parcels, sailing toward a calm horizon, while two large gentle
hands cut from paper rise from beneath the water and cradle the bottom of the
boat, holding it steady. Made of 5 to 6 stacked hand-cut paper layers: deep sage
far sky and distant hills, sage mid-sea waves, cream rolling foreground waves,
the terracotta boat as the main subject, the cradling warm-brown hands as a
supporting layer, and one small coral lighthouse on the left as a foreground
accent. Each layer is a single clean flat solid-color paper silhouette with NO
internal lines, NO outlines, NO gradients inside the shapes, crisp scissor-cut
smooth rounded edges. Soft short warm-grey drop shadows between every layer so
each paper sheet floats above the one behind it, gentle depth, 3D pop-up
storybook feeling. Subtle paper grain, even warm storybook lighting.
Warm same-hue tonal palette: terracotta boat #D97B4F, warm clay brown hands
#A65B3A, cream waves #F4E9D8, ivory paper sky-base #FBF6EC, sage sea #9CAE8B,
deep sage distant hills #6E8268, small coral lighthouse #E08A5C. Two to three
shades of each hue for near/far paper layers. Generous calm negative space,
subject under 60% of frame, a grounding paper sea-horizon layer across the lower
third. Cozy, trustworthy, reassuring, calm, handcrafted picture-book brand-story
mood. Aspect ratio 4:3. No photo realism, no 3D plastic shine, no line art, no
neon, no torn rough edges, no distressed grunge.
```

> 渲染：`node "$HOME/shared-skills/_illustration-engine/render.js" --has-text false --aspect 4:3 --out /tmp/illus --prompt "<上面整段>"`
> （若改成年报封面要带中文 "让出海更安心" 标题，则在主体后追加一行 `Clean Chinese paper-cut title "让出海更安心" cut from cream paper, centered upper area, simple rounded sans-serif`，并把 `--has-text` 改 true 走 gpt-image-2。）
