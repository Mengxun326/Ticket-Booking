# Ticket Booking System

## 项目概述

Ticket Booking 是一个基于 Ant Design Pro 的票务预订系统，提供了用户登录、规则管理等功能。项目集成了国际化支持、Mock 数据服务等，方便开发和测试。

## 技术栈

**前端框架**：Ant Design Pro、UmiJS

**编程语言**：TypeScript、JavaScript

**样式**：Less

**国际化**：多语言支持（如英语、印尼语、波斯语等）

**Mock 数据**：MockJS

## 项目结构



```
Ticket-Booking/

├── .idea/               # IntelliJ IDEA 配置文件

├── myticketbooking/     # 项目核心代码

│   ├── config/          # 配置文件

│   │   └── oneapi.json  # API 配置

│   ├── mock/            # Mock 数据

│   │   └── listTableList.ts

│   ├── src/             # 源代码

│   │   ├── components/  # 组件

│   │   ├── locales/     # 国际化文件

│   │   ├── pages/       # 页面

│   │   ├── services/    # 服务

│   │   └── app.tsx      # 应用入口

│   ├── .vscode/         # VSCode 配置文件

│   ├── package.json     # 项目依赖和脚本

│   └── README.md        # 项目说明

└── .gitignore           # Git 忽略文件
```

## 安装与启动

### 安装依赖



```
npm install
```

### 启动开发服务器



```
npm start
```

启动后，项目将在 `http://localhost:8000` 运行。

## 脚本说明

在 `package.json` 中提供了一些有用的脚本：

**开发**

`npm start`: 启动开发服务器，使用开发环境配置。

`npm start:dev`: 启动开发服务器，不使用 Mock 数据。

`npm start:no-mock`: 启动开发服务器，禁用 Mock 数据。

`npm start:no-ui`: 启动开发服务器，禁用 Umi UI。

`npm start:pre`: 启动开发服务器，使用预发布环境配置。

**构建**

`npm run build`: 构建生产环境代码。

`npm run analyze`: 构建代码并分析打包大小。

**部署**

`npm run deploy`: 构建并部署到 GitHub Pages。

**代码检查**

`npm run lint`: 检查代码风格和类型。

`npm run lint:fix`: 自动修复代码风格问题。

**国际化**

`npm run i18n-remove`: 移除指定语言的国际化文件。

**其他**

`npm run openapi`: 生成 OpenAPI 文档。

`npm run playwright`: 运行 Playwright 测试。

## 功能模块

### 用户登录

在 `myticketbooking/src/pages/user/Login/index.tsx` 中实现了用户登录功能，支持账户密码登录和手机号登录。

### 规则管理

**获取规则列表**：在 `myticketbooking/src/services/ant-design-pro/api.ts` 中提供了获取规则列表的 API。

**规则表单**：在 `myticketbooking/src/pages/TableList/components/UpdateForm.tsx` 中实现了规则配置表单。

### 国际化

项目支持多语言，在 `myticketbooking/src/locales` 目录下提供了多种语言的翻译文件。

## 贡献

如果你想为该项目做出贡献，请遵循以下步骤：

Fork 该项目。

创建一个新的分支：`git checkout -b feature/your-feature`。

提交你的更改：`git commit -m 'Add some feature'`。

推送至分支：`git push origin feature/your-feature`。

提交 Pull Request。

## 许可证

本项目采用 [MIT 许可证](https://opensource.org/licenses/MIT)。