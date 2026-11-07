# v0.9.0 合并与推广弹窗调整记录

记录日期：2026-11-07（UTC）。

## 合并依据

- 当前仓库：`qiuqiutokenai/gpt_image_playground`，分支 `main`。
- 合并前提交：`462bc0392f98cbfc9f70dcf73936ef9bb25b619d`。
- 上游仓库：`CookSleep/gpt_image_playground`。
- 合并来源：`v0.9.0` 标签对应的发布提交 `5e1f5e79b23e3d6bec0b96381c15629c316d4fd5`，不包含该标签之后的 main 提交。
- 合并提交：`491186370394d22984cf63dad4cb3caf82d34966`。
- 合入上游 10 个提交，无文本冲突；上游差异涉及 60 个文件，增加 2553 行、删除 471 行。
- 保留球球Token 品牌、默认 API 与独立 OpenAI 官方配置、定制部署说明，以及已移除操作指南按钮、关于入口和 README 赞助推广段落的状态。

## 合入功能

- Google、xAI 图像接口及 Gemini、Grok 模型参数与搜索来源展示。
- 多模型异步任务查询与刷新恢复、自定义供应商按模型配置接口。
- 附加图像生成提示词设置与任务详情展示。
- 相同 URL 配置复用、导入确认及配置切换提示优化。
- 参考图标注和任务详情布局修复。
- 同步上游 0.9.0 版本信息与 Service Worker 缓存版本。

## 合并兼容处理

全量测试发现，通过链接导入与当前完全相同的初始配置时，默认配置替换逻辑会移除另一个“OpenAI官方入口”。在 `src/lib/apiProfiles.ts` 中，当导入项与已有配置 ID 和内容完全一致时使用合并路径，保留其他配置。上游新增的 URL 导入测试覆盖了此场景，最终验证通过。

## 推广弹窗调整

- 在 `src/App.tsx` 中移除公告弹窗 `AnnouncementModal` 的导入和挂载入口，启动时不再请求及展示推广公告。
- 清空 `public/announcements.json`，移除“推荐使用全新的客户端”公告。
- 在 `src/App.tsx` 中移除 `SupportPromptModal` 的导入和挂载入口，生成超过 50 张图片后的赞助提示不再展示。
- 保留已有组件文件和旧持久化字段，应用入口不挂载这些组件；已有用户保存的弹窗状态不会使其重新显示。
- 保留主动点击的版本更新、PWA 安装入口，以及数据删除确认、配置导入确认、存储错误、任务进度等操作相关提示。

## 验证结果

- `npm run build`：通过 TypeScript 编译和 Vite 生产构建。
- `npm test`：70 个测试文件通过，1042 项测试通过，1 项跳过。
- `git diff --check` 与合并提交前的暂存差异检查通过。
- 构建仍有非阻断提示：非 module 的 `color-mode.js`、Browserslist 数据过期、部分产物超过 500 kB。
- npm 和 Rust 依赖版本未变化，未重新生成第三方许可清单。
- 未执行客户端安装验证或浏览器交互实测。

## 变更记录

上游合并与推广弹窗调整分别提交，旧的 `docs/merge-record-2026-11-06.md` 也一并保留入库。本文记录本地变更和验证结果；远端推送结果以执行推送后的 Git 状态为准。

```text
5e1f5e7 chore: release v0.9.0
4d789d9 feat: 完善图像提示词与任务详情展示
2c80f80 feat: 完善多模型图像参数与搜索来源界面
7f0caea fix: 完善配置导入确认与切换提示
b863137 feat: 支持 Google 和 xAI 图像接口及多模型异步任务
76b0869 chore: release v0.8.9
45fcdf1 feat: 复用相同 URL 配置并支持关闭导入确认
9c00799 fix: 显示参考图标注并优化任务详情布局
9e3d4e6 docs: 移除本机说明文件约定
f3d38c7 docs: 补充界面约定并忽略本机说明
```

## 追溯命令

```bash
# 查看合并提交与第一父提交的差异。
git diff 491186370394d22984cf63dad4cb3caf82d34966^1 491186370394d22984cf63dad4cb3caf82d34966

# 查看合并时保留的定制及兼容修复。
git diff v0.9.0 491186370394d22984cf63dad4cb3caf82d34966

# 查看推广弹窗调整的提交。
git log --oneline -- src/App.tsx public/announcements.json
```
