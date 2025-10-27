# Ui2v 官方网站

> Ui2v - 本地 AI 动画设计工具的官方网站

## 🌐 关于

这是 [Ui2v](https://new.ui2v.com) 的官方网站源代码。Ui2v 是一款免费、本地运行的 AI 动画设计工具。

## ✨ 特性

- 🎨 现代化的设计系统（基于 Once UI）
- 🌍 双语支持（中文/English）
- ⚡ 快速响应的用户界面
- 🌙 支持深色/浅色主题
- 📱 完全响应式设计
- 🚀 使用 Next.js 15 构建
- 💎 TypeScript 支持

## 🛠️ 技术栈

- **框架**: Next.js 15.3.2
- **UI 系统**: Once UI Core
- **语言**: TypeScript
- **样式**: Sass
- **部署**: Vercel

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

网站将在 `http://localhost:8080` 上运行。

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 📁 项目结构

```
ui2v_web/
├── src/
│   ├── app/
│   │   └── (main)/
│   │       ├── layout.tsx    # 主布局
│   │       └── page.tsx      # 首页
│   ├── components/
│   │   ├── Providers.tsx     # 全局提供者
│   │   └── LanguageSwitcher.tsx  # 语言切换器
│   ├── contexts/
│   │   └── LanguageContext.tsx   # 语言上下文
│   └── resources/
│       ├── custom.css        # 自定义样式
│       ├── icons.ts          # 图标配置
│       └── once-ui.config.js # UI 配置
├── public/
│   └── trademarks/           # 商标和图标
├── package.json
└── next.config.mjs
```

## 🎨 自定义配置

主要配置文件位于 `src/resources/once-ui.config.js`，你可以在这里自定义：

- 网站元数据（标题、描述等）
- 主题颜色和样式
- 字体设置
- 背景效果
- 社交链接

## 🌍 语言支持

网站支持中文和英文双语切换。语言配置在 `src/contexts/LanguageContext.tsx` 中。

添加新的翻译：
1. 在 `LanguageContext.tsx` 的 `translations` 对象中添加新的键值对
2. 在页面组件中使用 `t('key')` 函数调用翻译

## 📝 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 🔗 相关链接

- [Ui2v 官网](https://new.ui2v.com)
- [下载 Ui2v](https://new.ui2v.com/download)

## 📧 联系我们

- Email: contact@ui2v.com

---

**让 AI 赋能您的创意，从 Ui2v 开始！** 🚀
