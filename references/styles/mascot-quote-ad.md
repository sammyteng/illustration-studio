---
slug: mascot-quote-ad
name_cn: 萌宠金句广告
name_en: Mascot Speech-bubble Ad
channel: 跨境 DTC 趣味广告 / 社媒投放 / 品牌萌宠代言 / 客户证言 meme 广告
has_text: true
default_backend: gpt            # 有字（品牌头 + 气泡金句 + 页脚）→ gpt-image-2，文字最稳；纯画面才切 gemini
default_ratio: "3:4"
one_liner: 纯色柔和底 + 一只真实萌宠干净抠放 + 大对话气泡装一句第一人称俏皮证言，顶 logo 底页脚，playful 但干净的 DTC 广告。
---

> 通用提炼 / 构图 / 渲染路径见 `_illustration-engine/engine.md`（**含全局留白铁律，先读**），本文件只写这套风格的「长相 + 提示词」。
> 一句话气质：像 Visory health 那张「戴墨镜橘猫」广告——一只可爱到犯规的真实萌宠站在一整片柔和纯色里，旁边一个大白气泡替它说了句俏皮的人话，顶上是品牌 logo，底下一行小字法律页脚。**meme 的好笑感 + DTC 广告的干净克制，两者刚好卡在一起。**
> 萌宠是「嘴替」：它替用户/品牌说出那句既好笑又戳心的证言，看的人会心一笑顺手转发。

---

## 视觉 DNA

每张图、每条提示词都必须**同时**满足以下硬性必含项，缺一项即不算这套风格：

| # | 维度 | 必含内容（要具体到能复现） | 英文提示词钩子 |
|---|---|---|---|
| 0 | 🌬️ **大片留白（灵魂第一条 · 不可妥协）** | 萌宠**居中偏下**、占画面约 45-55%，**绝不超过 60%**；纯色底**至少 30% 是干净空场**；只有「萌宠 + 一个气泡 + 顶 logo + 底页脚」四个元素，**整体 airy、宁空勿满**，元素之间留足呼吸 | `generous negative space, lots of breathing room, uncluttered, airy, the mascot occupies under 60% of the frame, large clean empty areas of solid color around it` |
| 1 | **背景 / 底色** | **单一柔和纯色**满铺（天蓝 / 奶黄 / 薄荷其一），**绝无任何杂物 / 纹理照片 / 渐变叠物 / 场景道具**，就是一整面干净色墙；可有极淡均匀色调，不抢主体 | `single soft solid pastel color background (e.g. soft sky blue), completely clean and empty, no props, no scenery, no clutter, no textured photo backdrop` |
| 2 | **主角萌宠（灵魂第二条）** | **一只**真实可爱萌宠（猫 / 狗 / 兔等，**只一只，绝不堆叠多宠**），照片级真实质感、毛发清晰，**干净抠放**在纯色底上；可戴**一件**俏皮小道具（墨镜 / 小领结 / 迷你帽），坐姿或半身正对镜头，表情萌或一脸淡定 | `one single adorable real photographic pet (a cat / dog), realistic fur detail, cleanly cut out and placed on the solid background, sitting and facing camera, optionally wearing ONE playful prop like tiny sunglasses, cute or deadpan expression` |
| 3 | **大对话气泡（灵魂第三条）** | **一个**大号圆角对话气泡（白底 / 浅色底 + 细描边 + 指向萌宠的小尾巴），气泡足够大装下金句但**不塞满画面**；里面是**一句**第一人称俏皮证言（萌宠口吻，可带 1 个 emoji），字体圆润友好、清晰可读 | `one large rounded speech bubble with a thin outline and a tail pointing at the pet, containing a single first-person playful testimonial line in friendly rounded readable type, optionally one emoji` |
| 4 | **品牌头（顶部）** | 画面**顶部**：品牌 logo（简洁字标/图标）+ 一行 tagline 小字，居中或靠左，克制不喧宾 | `at the top: a clean simple brand logo wordmark plus a one-line tagline in small type` |
| 5 | **法律页脚（底部）** | 画面**最底**一行**极小**灰字法律/免责页脚（如 `*结果因人而异` 风格的小字），DTC 广告标配，存在感弱 | `at the very bottom: one line of very small light-gray legal/disclaimer footer text, low emphasis` |
| 6 | **光影 / 质感** | 干净柔和**平光**，萌宠下方可有一抹极淡柔影坐定，**无硬投影 / 无强高光 / 无 3D 拟态 / 无廉价拼贴边**；整体像一张精修过的干净广告图，不是抠图贴歪 | `clean soft flat studio lighting, optional very subtle soft shadow under the pet, no harsh drop shadow, no glossy 3D, no cheap collage edges` |
| 7 | **整体调性** | playful、有 meme 的会心一笑感，但**克制干净**——是精致 DTC 品牌广告，不是表情包大杂烩；高级、可爱、可信 | `playful meme-y but clean and premium DTC ad vibe, cute, trustworthy, well-designed` |
| 8 | **比例** | 默认 `3:4` 竖版社媒/投放图 | `3:4 vertical social ad` |

> 一眼自检：缩成拇指大，**仍能看出「一只萌宠站在一片空旷柔色里，旁边一个气泡替它说话」**——纯色底 + 单宠 + 大气泡 + 四周空，四件套齐全且**透气不挤** = 对。背景有杂物 / 多只宠 / 元素塞满 / 拼贴感 = 错。

---

## 配色

柔和纯色底 + 萌宠本色 + 深色气泡字 + 品牌 accent，**底色只用一个**，整体明亮干净。

| 角色 | 颜色 | HEX | 用在哪 |
|---|---|---|---|
| **底色 A · 天蓝（默认）** | 柔和天蓝 / Soft Sky | `#BFE3F2` | 满铺背景（默认选这个，干净亲和）|
| **底色 B · 奶黄（备选）** | 奶油黄 / Cream Butter | `#FBEFC4` | 换情绪时整面替换天蓝，暖一点 |
| **底色 C · 薄荷（备选）** | 薄荷绿 / Mint | `#CFEFDD` | 换情绪时整面替换，清爽一点 |
| **气泡底** | 近白 / Off-white | `#FBFCFD` | 对话气泡填充，细描边 `#D8DEE3` |
| **气泡字 / 主文字** | 墨黑灰 / Ink | `#1E2630` | 气泡内金句、顶部 tagline，清晰可读 |
| **品牌 accent（一抹）** | 暖橙 / Brand Orange | `#F97316` | 只点品牌 logo / tagline 关键字 / 气泡尾巴等**一处**，做品牌识别色 |
| **页脚灰** | 浅灰 / Footer Gray | `#9AA3AD` | 底部极小法律页脚字 |

铁律：
- **底色只用一个**（A/B/C 三选一满铺），绝不一张图里拼两块底色。
- 萌宠保持**真实本色**（橘猫就是橘、柴犬就是黄），不做风格化染色。
- accent 暖橙只做**品牌识别一处**，不铺大面积、不抢萌宠和气泡。
- 全图保持**明亮干净**，不压暗、不加滤镜做旧、不上渐变。

---

## 禁忌（命中任意一条 = 不合格）

- ❌ **背景**：杂乱场景 / 实景照片底 / 多物件道具 / 纹理拼贴 / 渐变堆叠 / 暗色科技底 / 两块以上底色
- ❌ **多宠堆叠**：超过一只萌宠、宠群合影、宠物 + 一堆产品摆拍
- ❌ **塞满**：元素铺满四角、气泡占满画面、萌宠顶天立地超过 60%、没有干净空场（直接违反留白铁律）
- ❌ **廉价拼贴**：抠图边缘发硬发毛、贴歪、白边、表情包大杂烩感、低分辨率贴图
- ❌ **插画化萌宠**：把萌宠画成扁平矢量 / 卡通描线 / 3D 卡通 / 木刻图章——本套要**真实照片级萌宠**（插画萌宠请走 `bold-line-retro-flat` 那边，别撞）
- ❌ **光影**：硬投影 / 强高光 / 金属玻璃拟态 / 过度精修发光感
- ❌ **配色**：暗沉做旧滤镜 / 大面积品牌色压过萌宠 / 全色域杂色
- ❌ **风格串味（防撞脸隔壁皮肤）**：
  - 不是 `keke-sketch` 那种白底手绘草图批注（本套是真实照片 + 纯色底，不是手绘）
  - 不是 `editorial-line` 那种极简单线条社论风（本套有真实萌宠主体 + 满铺底色）
  - 不是 `painterly` 水彩晕染 / 不是 `ghibli` 吉卜力赛璐璐手绘场景（本套无绘制笔触、无场景）
  - 不是 `mixed-media-collage` / `moodboard-scrapbook` 那种多素材剪贴拼贴板（本套就一只宠 + 一个气泡，极简干净，绝不拼贴）
  - 不是 `risograph` 孔版网点错位印刷感（本套干净平光，无网点无错位）
- ❌ **标注 / 文案**：气泡里写概念词官腔（「赋能 / 提质增效 / 闭环」）；萌宠不说人话第一人称；金句超过一句堆成段落；顶 logo 底页脚缺失

---

## 提示词模板

> 一次一张，**不要把多张拼一张**。英文写画面主体 + 写死 DNA 关键词；中文/英文只用于「品牌名 + tagline + 气泡一句金句 + 页脚小字」这几处**画面内文字**。
> 有文字（必然有）→ 走 `gpt`（gpt-image-2，中英文字最稳，几乎不乱码）。

```
A clean playful DTC social ad, {{RATIO}} aspect ratio, on a single soft solid
{{BG_COLOR}} background — completely clean and empty, no props, no scenery, no
textured backdrop, no gradient clutter.

NEGATIVE SPACE (most important): generous negative space, lots of breathing
room, uncluttered, airy — the whole layout is just FOUR elements (one pet, one
speech bubble, a top brand header, a bottom footer) floating with large clean
empty areas of solid color around them. The mascot occupies UNDER 60% of the
frame, centered and sitting low.

SUBJECT: one single adorable real photographic {{PET}}, realistic fur detail,
cleanly cut out and placed on the solid color, sitting and facing the camera
with a {{EXPRESSION}} expression{{PROP_CLAUSE}}. Just ONE pet, never multiple.

SPEECH BUBBLE: one large rounded white speech bubble #FBFCFD with a thin outline
#D8DEE3 and a small tail pointing at the pet, sized to comfortably hold the line
without filling the frame. Inside it, a single first-person playful testimonial
in friendly rounded readable type, ink color #1E2630: {{QUOTE}}{{EMOJI_CLAUSE}}.

BRAND HEADER (top): a clean simple brand logo wordmark "{{BRAND}}" plus a
one-line tagline "{{TAGLINE}}" in small type, with a single touch of warm orange
#F97316 as the brand accent.

FOOTER (bottom): one line of very small light-gray #9AA3AD legal/disclaimer
footer text "{{FOOTER}}", low emphasis.

LIGHTING: clean soft flat studio lighting, optional very subtle soft shadow
under the pet, no harsh drop shadow, no glossy 3D, no cheap collage edges, no
hard cut-out white halo.

Mood: playful and meme-y but clean, premium, trustworthy DTC brand ad — cute,
well-designed, the pet is the brand's spokes-mascot speaking in first person.
Avoid: cluttered or scenery background, more than one pet, elements filling the
frame, cheap collage / hard cut-out edges, illustrated / cartoon / 3D / vector
pet (must be a REAL photo pet), harsh shadows or glossy 3D, dark or filtered
look, watercolor / ghibli / collage / riso / sketch / single-line editorial
styles, concept jargon in the quote.
```

### 占位变量说明

| 占位 | 填什么 |
|---|---|
| `{{RATIO}}` | `3:4`（默认竖版投放）/ `1:1`（信息流方图）/ `4:5` |
| `{{BG_COLOR}}` | `sky blue #BFE3F2`（默认）/ `cream butter #FBEFC4` / `mint #CFEFDD` —— 三选一满铺，不混 |
| `{{PET}}` | `orange tabby cat` / `corgi` / `shiba inu` / `white rabbit` 等**一只**，按品牌调性选 |
| `{{EXPRESSION}}` | `cute and content` / `deadpan / unbothered` / `smug satisfied` —— 配合金句口吻 |
| `{{PROP_CLAUSE}}` | 戴道具时填 `, wearing one playful prop: tiny sunglasses`（或 `a tiny bow tie` / `a mini cap`）；不戴留空 |
| `{{QUOTE}}` | **一句**第一人称俏皮证言（萌宠嘴替），来自真实卖点，别写概念官腔 |
| `{{EMOJI_CLAUSE}}` | 想带 emoji 时填 ` with one small emoji at the end`；不带留空 |
| `{{BRAND}}` | 品牌名（用户提供的真实品牌，不杜撰）|
| `{{TAGLINE}}` | 一行品牌 tagline 小字 |
| `{{FOOTER}}` | 底部法律/免责小字（如 `*结果因人而异` 风格）|

---

## 示例提示词（主题：Shulex 跨境 AI 客服 · 萌宠代言金句广告）

> 认知锚点（处境法）：铲屎官以前被客服消息追着跑、半夜还在回工单，心情差→连带猫的伙食都不稳；上了 AI 客服后铲屎官轻松了、心情好了，**猫的罐头管够**——猫用第一人称替用户说出「我过得好不好，全看我铲屎官累不累」这个戳心又好笑的因果。
> 隐喻主体：一只戴小墨镜、一脸淡定满足的橘猫，坐在一整片柔和天蓝里，旁边大气泡替它说话；顶 Shulex logo + tagline，底法律小字。**四周大片留白透气**。
> 文字：品牌头 + 一句猫嘴替金句 + 页脚。走 `render.js`（`--backend gpt --aspect 3:4`）。

```
A clean playful DTC social ad, 3:4 aspect ratio, on a single soft solid sky blue
#BFE3F2 background — completely clean and empty, no props, no scenery, no
textured backdrop, no gradient clutter.

NEGATIVE SPACE (most important): generous negative space, lots of breathing
room, uncluttered, airy — the whole layout is just FOUR elements (one cat, one
speech bubble, a top brand header, a bottom footer) floating with large clean
empty areas of sky blue around them. The cat occupies UNDER 60% of the frame,
centered and sitting low.

SUBJECT: one single adorable real photographic orange tabby cat, realistic fur
detail, cleanly cut out and placed on the solid sky blue, sitting upright and
facing the camera with a deadpan, smugly content expression, wearing one playful
prop: tiny black sunglasses. Just ONE cat, never multiple.

SPEECH BUBBLE: one large rounded white speech bubble #FBFCFD with a thin outline
#D8DEE3 and a small tail pointing at the cat, sized to comfortably hold the line
without filling the frame. Inside it, a single first-person playful testimonial
in friendly rounded readable type, ink color #1E2630: "自从铲屎官用了 AI 客服，
他不熬夜回消息了，心情好，我罐头管够 🐟".

BRAND HEADER (top): a clean simple brand logo wordmark "Shulex" plus a one-line
tagline "AI 客服，让人和猫都松一口气" in small type, with a single touch of warm
orange #F97316 as the brand accent.

FOOTER (bottom): one line of very small light-gray #9AA3AD legal/disclaimer
footer text "*效果因店铺与品类而异，仅供参考", low emphasis.

LIGHTING: clean soft flat studio lighting, a very subtle soft shadow under the
cat, no harsh drop shadow, no glossy 3D, no cheap collage edges, no hard cut-out
white halo.

Mood: playful and meme-y but clean, premium, trustworthy DTC brand ad — cute,
well-designed, the cat is the brand's spokes-mascot speaking in first person.
Avoid: cluttered or scenery background, more than one cat, elements filling the
frame, cheap collage / hard cut-out edges, illustrated / cartoon / 3D / vector
pet (must be a REAL photo cat), harsh shadows or glossy 3D, dark or filtered
look, watercolor / ghibli / collage / riso / sketch / single-line editorial
styles, concept jargon in the quote.
```
