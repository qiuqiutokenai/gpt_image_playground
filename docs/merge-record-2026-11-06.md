# 上游 main 合并变更记录

记录整理日期：2026-11-07（UTC）。合并提交日期：2026-11-06（UTC）。

## 合并范围与提交依据

| 项目 | 内容 |
|------|------|
| 当前仓库 | https://github.com/qiuqiutokenai/gpt_image_playground |
| 当前分支 | `main` |
| 上游仓库 | https://github.com/CookSleep/gpt_image_playground |
| 合并来源 | 上游 `main`，本次获取的版本为 v0.8.8 |
| 合并前提交（第一父提交） | `cac4323a8dce29c3390e9e86d312da9c94b22ae5` |
| 上游提交（第二父提交） | `7ae7deceb00f0c5f95a0968b4de16ad1c75d9fb3` |
| 合并提交 | `462bc0392f98cbfc9f70dcf73936ef9bb25b619d` |
| 合并提交说明 | `merge: 合并 CookSleep/main v0.8.8 并保留球球Token定制` |
| 合并方式 | 普通双父合并提交，保留双方历史，未压缩或改写已有提交 |

[查看合并提交](https://github.com/qiuqiutokenai/gpt_image_playground/commit/462bc0392f98cbfc9f70dcf73936ef9bb25b619d)。

合并开始时工作区干净。相对合并前状态，共合入上游 22 个提交，最终涉及 78 个文件，增加 2245 行、删除 785 行。版本由 0.8.3 随上游更新为 0.8.8。

## 主要合入内容

- 支持 GPT Image 2.6 的复杂度参数、SVG 和 GIF 输出，并支持 Codex CLI 对应参数。
- 默认图像模型更新为 `gpt-image-2.6-sunburst`，不可用的参数及格式置灰并说明原因。
- 参考图标注使用独立的 markup 图层。
- 在收藏夹页面新建或重试任务时自动加入当前收藏夹，可在习惯配置中关闭。
- 客户端启动时自动更新已安装的 Skill，空闲时预加载 Markdown 渲染库。
- 调整下拉菜单、字体候选列表和迁移清单的滚动条，以及移动端 GIF 参数布局。
- 同步上游文档、示例配置、版本信息和 Service Worker 缓存版本，移除 Rummage 公告。

## 保留的当前项目定制

- 保留球球Token 标题、图标、顶部链接，以及相关环境变量和 Docker 部署配置。
- 保留默认选中的“球球token”API 配置（`https://api.qiuqiutoken.net/v1`）及独立的“OpenAI官方入口”配置。
- 保留 README 中当前仓库的部署说明，以及移除赞助商推广段落的处理。
- 保留已移除的操作指南按钮和设置中的“关于”入口这一界面状态。
- 保留定制 API 配置相关的测试及兼容处理。

合并前的三个定制提交：

```text
cac4323 移除操作指南按钮和设置中的关于入口
ea4d625 docs: 移除README赞助商推广内容
ee221d6 feat: 配置球球Token品牌与默认API并完善部署文档
```

## 冲突及人工处理

唯一的 Git 内容冲突位于 `README.md`：上游修改了赞助商段落，而当前项目已删除该段落。解决时继续保持该段落删除，同时接收 README 其他上游更新。

`src/components/SettingsModal.tsx`、`src/lib/apiProfiles.ts`、`src/lib/apiProfiles.test.ts`、`src/store.ts`、`src/store.test.ts` 自动合并成功，并检查了相对上游的定制差异。额外清理了 `SettingsModal.tsx` 中一处新增空行的行尾空格，使差异检查通过。

## 验证记录

以下结果来自 2026-11-06 合并后的验证；本次整理文档未重新执行构建和测试。

| 检查 | 结果 |
|------|------|
| `npm run build` | 通过 TypeScript 编译及 Vite 生产构建。 |
| `npm test` | 66 个测试文件通过；898 项测试通过，1 项跳过，共 899 项。 |
| `git diff --cached --check` | 提交前通过。 |
| 未解决冲突及未暂存差异检查 | 提交前无未解决冲突、无未暂存差异。 |
| 版本一致性 | package.json、package-lock.json 根包、Cargo.toml、Cargo.lock 主包、public/sw.js 和 RELEASE.md 均为 0.8.8。 |

构建中的非阻断提示包括 `color-mode.js` 非 module 脚本提示、Browserslist 数据过期提示，以及部分产物超过 500 kB 的体积提示。

npm 和 Rust 依赖版本未改变，因此未重新生成第三方许可清单。未执行 Tauri 客户端构建和安装验证；本记录不代表客户端实机验证通过。本次操作未创建或推送发布 tag，也未触发手动部署。

## 推送与当前状态

- 2026-11-06 创建合并提交后，助手尝试推送失败，错误为 `fatal: could not read Username for 'https://github.com': No such device or address`；当时缺少可用的 GitHub HTTPS 凭据。
- 2026-11-07 整理本文档时，写入文档前工作区干净，`main` 与本地跟踪引用 `origin/main` 一致。
- 本次通过 `git ls-remote origin refs/heads/main` 实时确认远端 main 为 `462bc0392f98cbfc9f70dcf73936ef9bb25b619d`，即远端已包含此次合并。后续推送的执行者和具体时间未在本次会话中确认。
- 本记录文件是在该合并提交之后新增的文档，不属于 `462bc03` 的内容。

## 上游提交清单

以下按 Git 日志顺序列出本次合入的 22 个提交：

```text
7ae7dec chore: release v0.8.8
049c20b docs: 拆分 README 中画板标注、GPT Image 2.6 参数和透明背景的说明
13c3f85 feat: 不可用的参数和格式置灰显示并说明原因
9c5f286 feat: Codex CLI 也可使用复杂度、SVG 和 GIF
a58fd73 chore: release v0.8.7
5baea7f feat: 客户端启动时自动更新已安装的 Skill
7bc9176 perf: 空闲时预加载 Markdown 渲染库，打开即显示渲染效果
c7e88b7 fix: 关闭参数弹层后清除提示，SVG 和 GIF 下不显示透明背景提示
5a2a4b6 fix: GIF 帧数和每帧时长默认填写具体值
d6b9679 chore: release v0.8.6
4e395a7 fix: 移动端选择 GIF 后参数胶囊超出输入框
4dfd6e2 chore: 默认图像模型改为 gpt-image-2.6-sunburst
ae0c70e docs: 简介改为 GPT Image
d7b1137 chore: release v0.8.5
3965672 feat: 适配 GPT Image 2.6 的复杂度、GIF 和 SVG 输出，参考图标注改为独立的 markup 图层
abf52cc chore: 移除 Rummage 公告
4b46b29 chore: release v0.8.4
01f0f01 style: 文档和界面提示中的设置路径统一写成加粗的「」
6a2928b docs: RELEASE.md 写入 v0.8.4 说明，README 补充收藏夹页新建任务自动归入当前收藏夹
20922aa feat: 在收藏夹页新建或重试出的任务自动加入当前收藏夹，可在习惯配置中关闭
7fe2ced fix: 下拉菜单、字体候选列表和迁移清单的滚动条裁在圆角内，不再伸出边角
526a425 Update README.md
```

## 完整文件变更统计

比较范围为合并前提交到合并提交，不包含本记录文件：

```text
.github/ISSUE_TEMPLATE/bug_report.yml              |   4 +-
 AGENTS.md                                          |   2 +-
 README.md                                          |  64 ++-
 RELEASE.md                                         |   9 +-
 docs/custom-provider-llm-prompt.md                 |  11 +-
 gpt-image-config.agent.example.json                |   2 +-
 gpt-image-config.example.json                      |   2 +-
 package-lock.json                                  |   4 +-
 package.json                                       |   2 +-
 public/announcements.json                          |   9 -
 public/announcements/rummage.jpg                   | Bin 40928 -> 0 bytes
 public/sw.js                                       |   2 +-
 scripts/build-notices.mjs                          |   2 +-
 skills/gpt-image-playground/references/cli.md      |  11 +-
 .../references/custom-provider.md                  |   9 +-
 skills/gpt-image-playground/references/settings.md |   8 +-
 sponsor-presets.json                               |  18 +-
 src-tauri/Cargo.lock                               |   2 +-
 src-tauri/Cargo.toml                               |   2 +-
 src-tauri/src/cli/command.rs                       |  11 +-
 src-tauri/src/cli/command/tests.rs                 |  11 +
 src-tauri/src/cli/skill.rs                         | 111 +++-
 src-tauri/src/cli/skill/tests.rs                   |  59 +++
 src-tauri/src/files.rs                             |   2 +-
 src/App.tsx                                        |  44 +-
 src/components/DetailModal.tsx                     |  31 +-
 src/components/HelpModal.tsx                       |   2 +-
 src/components/InputBar.tsx                        |  56 ++-
 src/components/Lightbox.tsx                        |   2 +-
 src/components/MarkdownRenderer.tsx                |  26 +-
 src/components/Select.tsx                          | 560 ++++++++++-----------
 src/components/SettingsModal.tsx                   | 276 +++++-----
 src/components/SizePickerModal.tsx                 |  67 +--
 src/components/SketchBoardModal.tsx                |  90 +++-
 src/components/TaskCard.tsx                        |  16 +
 src/components/TaskGrid.tsx                        |   2 +-
 src/components/input/inputParamsPanel.tsx          | 130 ++++-
 src/components/input/markupOverlay.tsx             |  21 +
 src/components/input/paramPopoverChip.tsx          |   9 +-
 src/components/settings/FontSettingField.tsx       |  52 +-
 src/components/settings/GeneralSettingsTab.tsx     |  18 +
 src/components/settings/SkillSettingsSection.tsx   |  17 +-
 src/components/settings/saveDirMigration.tsx       |   4 +-
 src/hooks/useHintTooltip.ts                        |   4 +
 src/hooks/useSaveLocationPrompt.tsx                |   2 +-
 src/index.css                                      |   2 +
 src/lib/agentApi.ts                                |   4 +-
 src/lib/api.test.ts                                |   2 +-
 src/lib/api.ts                                     |  16 +-
 src/lib/apiProfiles.test.ts                        |  15 +
 src/lib/apiProfiles.ts                             |   4 +
 src/lib/canvasImage.ts                             |  37 +-
 src/lib/cliBridge.ts                               |  38 +-
 src/lib/dataUrl.ts                                 |   1 +
 src/lib/db.test.ts                                 |  16 +-
 src/lib/db.ts                                      |  16 +-
 src/lib/dbTauri.test.ts                            |   6 +-
 src/lib/downloadImages.ts                          |   1 +
 src/lib/dropdown.test.ts                           |  51 ++
 src/lib/dropdown.ts                                |  22 +-
 src/lib/falAiImageApi.test.ts                      |  57 +++
 src/lib/falAiImageApi.ts                           |  32 +-
 src/lib/favoriteState.test.ts                      |  27 +
 src/lib/favoriteState.ts                           |  19 +
 src/lib/gptImage26.test.ts                         | 306 +++++++++++
 src/lib/imageApiShared.ts                          |  45 +-
 src/lib/imageModels.ts                             |  48 +-
 src/lib/importLink.ts                              |   5 +-
 src/lib/inputDraftState.ts                         |   8 +-
 src/lib/inputImages.ts                             |  35 ++
 src/lib/openaiCompatibleImageApi.ts                |  39 +-
 src/lib/paramCompatibility.ts                      |  59 ++-
 src/lib/persistedState.ts                          |  19 +-
 src/lib/settingsCustomProvider.ts                  |  11 +-
 src/lib/transparentImage.ts                        |   2 +-
 src/store.test.ts                                  |  84 +++-
 src/store.ts                                       | 170 +++++--
 src/types.ts                                       |  47 +-
 78 files changed, 2245 insertions(+), 785 deletions(-)
```

## 追溯命令

以下命令使用固定提交号，不受后续分支移动影响：

```bash
# 查看合并提交及其两个父提交。
git show --no-patch --format=fuller 462bc03
git rev-list --parents -n 1 462bc03

# 查看相对合并前项目的全部实际变更。
git diff 462bc03^1 462bc03

# 查看合并后仍保留的、相对上游的定制差异。
git diff 462bc03^2 462bc03

# 查看本次合入的上游提交。
git log --oneline 462bc03^1..462bc03^2

# 导出本次合并的完整补丁，包含二进制内容。
git diff --binary 462bc03^1 462bc03 > /tmp/gpt-image-merge-462bc03.patch
```
