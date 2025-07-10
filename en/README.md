# Cursor 版本历史追踪

这个项目用于自动追踪和记录 [Cursor](https://cursor.sh/) 编辑器的版本发布历史。

## 功能特性

- 自动抓取最新的 Cursor 编辑器版本信息
- 保存历史版本数据以供查询和比较
- 提供 API 接口获取版本信息
- 通过 GitHub Actions 自动定时更新

## 目录结构

```
.
├── lib/                  # 核心库文件
│   ├── cursor-tracker.ts # Cursor 版本追踪模块
│   ├── version-updater.ts # 版本更新工具
│   ├── cursor_version.js # 版本数据文件
│   └── types.ts          # 类型定义
├── scripts/              # 脚本工具
│   ├── update-cursor-versions.ts # 手动更新版本的脚本
│   └── tsconfig.json     # 脚本专用 TypeScript 配置
├── public/               # 公共资源
│   └── version/          # 版本相关资源
│       └── cursor-version-archive.json # 版本历史存档
├── app/                  # 应用代码
│   └── api/              # API 路由
│       └── admin/        # 管理接口
│           └── update-versions/ # 更新版本接口
│               └── route.ts # 更新版本路由
└── .github/workflows/    # GitHub Actions 工作流配置
    └── update-cursor-versions.yml # 自动更新工作流
```

## 安装和使用

### 安装依赖

```bash
npm install
```

### 手动更新版本

```bash
npm run update-cursor-versions
```

### API 使用

#### 更新版本信息

```
POST /api/admin/update-versions
```

需要在请求头中提供 `Authorization` 字段，值为 `Bearer ${ADMIN_API_KEY}`，其中 `ADMIN_API_KEY` 是系统环境变量。

### 自动更新

项目通过 GitHub Actions 设置了每日自动更新。具体配置见 `.github/workflows/update-cursor-versions.yml`。

可以在 GitHub 仓库的 Actions 标签页手动触发更新。

## 版本数据格式

版本数据保存在 `lib/cursor_version.js` 文件中，格式如下：

```javascript
export const cursorVersions = {
  版本号: {
    platforms: {
      windows: {
        url: "下载链接",
        checksum: "校验和",
      },
      linux: {
        url: "下载链接",
        checksum: "校验和",
      },
      // 其他平台...
    },
  },
  // 其他版本...
};
```

## 贡献

欢迎提交 Issue 和 Pull Request 贡献项目。

## 许可

[MIT License](LICENSE)
