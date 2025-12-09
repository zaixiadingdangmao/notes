# 项目概览：Code Builder Lite

## 项目简介

这是一个基于 Monorepo 架构的前端项目，使用 `pnpm` 管理多个应用和共享包。项目包含若干业务应用（如表单编辑器、AI 文件助手、数据中心、会议摘要等）以及多个复用的包（如 `ai-service`、`editor-core`、`shared`、`work-flow`、`shadcn-ui` 组件库）。

## 核心技术栈

- **前端框架**: Vue 3（Composition API）
- **路由**: `vue-router`
- **状态管理**: `pinia`
- **构建工具**: Vite
- **包管理 / Monorepo**: `pnpm` workspace
- **UI 与样式**: Tailwind CSS、Sass、自研组件库 `shadcn-ui`、`lucide-vue-next` 图标集
- **表单与验证**: `vee-validate`、`zod`
- **工具库**: `axios`、`lodash`、`dayjs`、`nanoid`、`clsx`、`tailwind-merge`
- **可视化与交互**: `echarts`、`roughjs`、`vue-draggable-plus`
- **PDF 处理**: `pdfjs-dist`
- **Vue 实用库**: `@vueuse/core`
- **AI 集成**: 使用 OpenAI SDK（实际对接为火山引擎/自定义端点）
- **开发体验**: Prettier、@trivago/prettier-plugin-sort-imports、vite-plugin-vue-devtools

## 项目亮点（适合写入简历的点）

- **Monorepo 架构与模块复用**: 使用 `pnpm workspace` 管理多个应用与共享包，便于团队协作与代码复用。
- **可视化表单编辑器**: 开发了可视化表单编辑/构建器，支持主题定制、模板管理与拖拽编辑能力。
- **AI 功能集成**: 集成大模型（通过 OpenAI SDK / 火山引擎接入），实现 AI 文件助手、会议摘要等功能。
- **企业级认证与权限控制**: 路由守卫、JWT/token 管理、角色权限校验（管理员权限检查等）。
- **设计系统与组件库**: 自建 `shadcn-ui` 组件库、统一的 Tailwind 配置，提升 UI 一致性与复用性。
- **数据可视化**: 使用 ECharts 和 roughjs 等库构建数据中心与可视化面板。
- **表单验证与类型安全**: 采用 `vee-validate` 与 `zod` 进行表单校验与数据验证。
- **现代开发链路**: Vite、Prettier、Vue DevTools、按需插件，提升开发效率与代码质量。

## 简历中推荐的描述示例

示例：

> 主导开发前端 Monorepo 项目架构，使用 Vue 3 + Vite + pnpm workspace 管理 6 个业务应用和 4 个共享包，实现高复用性的组件库与基础库。设计并实现了可视化表单编辑器、主题系统与模板管理；集成大模型（OpenAI/火山引擎）用于文件辅助与会议摘要功能；构建企业级认证和路由权限控制；并用 ECharts 实现数据可视化展示，提升产品的可扩展性和开发效率。

## 技能关键词（用于简历标签）

- Vue 3 / Vite / Pinia / Vue Router
- Monorepo / pnpm workspace
- Tailwind CSS / Sass / 组件库设计
- AI 集成（OpenAI / LLM）
- 表单编辑器 / 拖拽 / 表单验证（vee-validate / zod）
- 数据可视化（ECharts）

---

如果需要我可以：

- 将文件放在指定子目录（例如 `docs/`）或修改文件名；
- 生成英文版简历描述；
- 将关键代码片段或文件路径加入到该文档中以便 HR 或面试官查看。

文件位置：`PROJECT_OVERVIEW.md`
