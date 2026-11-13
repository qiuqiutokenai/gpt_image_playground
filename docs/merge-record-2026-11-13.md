# 上游 v0.9.3 合并记录

记录日期：2026-11-13（UTC）。

## 合并范围

- 当前分支：`main`，合并前工作区干净。
- 合并前提交：`0a8b78c`。
- 上游仓库：`https://github.com/CookSleep/gpt_image_playground`。
- 合并来源：上游 `main` 最新提交 `b7f168b512dc6b2854f8a68f457ca5ecf9b646f4`，版本为 `0.9.3`。
- 合入上游 19 个提交，使用普通合并保留双方历史。

## 主要内容

- 支持模型搜索、跨 API 配置切换和多模型列表展开编辑。
- 支持 Seedream 5.5，以及 fal.ai 的 Gemini、Grok 和 Seedream 图像接口。
- 完善 SVG 参考图编辑、编写模型和推理强度配置。
- 统一各模型和供应商的参考图数量校验，完善遮罩、标注和画板编辑。
- 配置链接支持 SVG 配置、请求超时及 Base64 返回选项，完善配置去重与导入。
- 修复设置输入框失焦保存、客户端 Skill 路径显示和 Node 25+ 测试环境兼容性问题。
- 同步上游版本信息、发布说明和 Service Worker 缓存版本。

## 定制与冲突处理

- 保留球球Token 标题、图标、顶部链接、默认 API 与独立的 OpenAI 官方配置。
- 保留当前仓库的部署配置与说明，以及已移除 README 赞助推广段落、操作指南按钮和关于入口的状态。
- 保留公告与赞助弹窗不挂载的状态。
- 唯一文本冲突为 `public/announcements.json`，保留当前项目的空列表。
- 复查自动合并后的 API 配置、URL 导入、设置和 store 定制差异，无需额外兼容修改。

## 验证

- `npm run build`：TypeScript 编译与 Vite 生产构建通过。
- `npm test`：77 个测试文件、1234 项测试全部通过。
- `git diff --check HEAD`：通过。
- npm 和 Rust 依赖版本未变化，无需重新生成第三方许可清单。
- 构建保留已有的 `color-mode.js` 非 module、Browserslist 数据过期及部分产物超过 500 kB 提示。
- 未执行客户端打包安装或浏览器交互实测。
- 本次仅完成本地合并，未推送远端、创建发布 tag 或执行部署。
