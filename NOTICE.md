# NOTICE · 致谢与来源

**Illustration Studio** 的「认知配图」方法论 —— 即「先读懂文章、提炼认知锚点、再配图，而非给文章配气氛图或画流程图」—— 受以下开源 Skill 启发：

- [helloianneo/ian-xiaohei-illustrations](https://github.com/helloianneo/ian-xiaohei-illustrations)
- [helloianneo/ian-xiaohei-scenes](https://github.com/helloianneo/ian-xiaohei-scenes)

本项目在其方法论基础上做了**原创性改造与扩展**：

- 去掉固定吉祥物，改为「风格无关的认知引擎 + 可插拔风格库」；
- 从单一手绘风扩展为 **19 套独立插画风格**；
- 加入**双图像后端**（flatkey `gpt-image-2` + Gemini Nano Banana Pro）与「有字用 gpt / 无字用 gemini」的后端选择规则；
- 提供可复用渲染器 `render.js` 与机器可自检的验收/质检闸门。

本仓库不包含上述项目的任何源代码或素材，仅在理念层面致敬。各风格的视觉 DNA、提示词模板与示例均为本项目原创。

示例样张由 `gpt-image-2` / Gemini Nano Banana Pro 生成，仅作风格演示。
