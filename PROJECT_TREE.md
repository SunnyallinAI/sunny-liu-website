# 📁 项目文件结构

```
sunny-liu-website/
│
├── 📄 配置文件
│   ├── package.json              # 项目依赖和脚本
│   ├── next.config.mjs           # Next.js 配置
│   ├── tailwind.config.ts        # Tailwind CSS 配置
│   ├── tsconfig.json             # TypeScript 配置
│   ├── postcss.config.js         # PostCSS 配置
│   ├── .eslintrc.json            # ESLint 配置
│   ├── .gitignore                # Git 忽略文件
│   ├── vercel.json               # Vercel 部署配置
│   └── robots.txt (生成)         # 搜索引擎爬虫规则
│
├── 📱 App 路由 (Next.js 15)
│   ├── layout.tsx                # 根布局 + SEO
│   ├── page.tsx                  # 首页
│   ├── sitemap.ts                # 站点地图生成
│   ├── robots.ts                 # Robots.txt 生成
│   │
│   ├── blog/
│   │   ├── page.tsx              # 博客列表页
│   │   └── [slug]/
│   │       └── page.tsx          # 单篇博客页
│   │
│   └── api/
│       └── contact/
│           └── route.ts          # 联系表单 API
│
├── 🎨 组件 (components/)
│   ├── navbar.tsx                # 导航栏
│   ├── hero.tsx                  # 英雄区域
│   ├── about.tsx                 # 关于我
│   ├── experience.tsx            # 工作经历
│   ├── projects.tsx              # 项目展示
│   ├── blog.tsx                  # 博客预览
│   ├── contact.tsx               # 联系表单
│   ├── recruiter-cta.tsx         # 招聘转化区域
│   ├── footer.tsx                # 页脚
│   ├── section-title.tsx         # 标题组件
│   └── floating-card.tsx         # 卡片组件
│
├── 📚 内容 (content/)
│   └── blog/
│       ├── ai-growth.mdx         # 博客文章1
│       └── affiliate-marketing.mdx # 博客文章2
│
├── 🛠️ 工具库 (lib/)
│   ├── blog.ts                   # 博客工具函数
│   ├── mdx.ts                    # MDX 配置
│   └── seo.ts                    # SEO 工具
│
├── 🎯 公共资源 (public/)
│   ├── profile.jpg               # 个人照片 (待添加)
│   ├── og-image.jpg              # Open Graph 图片 (待添加)
│   └── README.md                 # 公共资源说明
│
├── 📜 脚本 (scripts/)
│   ├── test-local.sh             # Linux/Mac 测试脚本
│   ├── test-local.bat            # Windows 测试脚本
│   └── deploy.sh                 # 部署脚本
│
├── 📦 GitHub 配置 (.github/)
│   ├── workflows/
│   │   └── deploy.yml            # 自动部署工作流
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md         # Bug 报告模板
│   │   └── feature_request.md    # 功能请求模板
│   └── PULL_REQUEST_TEMPLATE.md  # PR 模板
│
├── 📚 文档
│   ├── README.md                 # 项目说明
│   ├── DEPLOYMENT.md             # 部署指南
│   ├── DEPLOYMENT_GUIDE.md       # 详细部署步骤
│   ├── DEPLOYMENT_CHECKLIST.md   # 部署检查清单
│   ├── DEPLOYMENT_STATUS.md      # 部署状态
│   ├── QUICK_DEPLOY.md           # 快速部署
│   ├── PROJECT_SUMMARY.md        # 项目总结
│   └── PROJECT_TREE.md           # 本文件
│
└── 🎨 样式
    └── app/
        └── globals.css           # 全局样式
```

## 📊 文件统计

- **组件**: 11 个 React 组件
- **页面**: 4 个页面 (首页、博客列表、博客详情)
- **API**: 1 个 API 路由
- **博客文章**: 2 篇 MDX 文章
- **配置文件**: 8 个配置文件
- **文档**: 7 个文档文件
- **脚本**: 3 个部署脚本

## 🎯 关键文件说明

### 核心配置
- `package.json` - 项目依赖和构建脚本
- `next.config.mjs` - Next.js 15 配置 + MDX 支持
- `tailwind.config.ts` - 自定义主题和插件

### 核心组件
- `app/layout.tsx` - 根布局，包含全局 SEO
- `app/page.tsx` - 首页，组合所有组件
- `components/navbar.tsx` - 响应式导航栏

### 内容系统
- `content/blog/` - MDX 博客文章
- `lib/blog.ts` - 博客数据处理
- `app/blog/` - 博客页面路由

### 部署相关
- `vercel.json` - Vercel 部署配置
- `.github/workflows/deploy.yml` - GitHub Actions
- `scripts/deploy.sh` - 部署脚本

## 🔧 如何使用

### 本地开发
```bash
npm install
npm run dev
```

### 生产构建
```bash
npm run build
npm start
```

### 部署
```bash
# 推送到 GitHub
git add .
git commit -m "Deploy"
git push origin main

# Vercel 会自动部署
```

## 📝 添加内容

### 添加博客文章
1. 在 `content/blog/` 创建新 `.mdx` 文件
2. 添加 frontmatter (标题、日期、标签等)
3. 写入文章内容
4. 推送到 GitHub

### 更新个人信息
1. 编辑 `components/hero.tsx`
2. 编辑 `components/about.tsx`
3. 编辑 `components/experience.tsx`
4. 更新 `lib/seo.ts` 中的配置

### 添加项目
1. 编辑 `components/projects.tsx`
2. 添加新项目到 `projects` 数组
3. 更新项目图片 (public/projects/)

---

**项目状态**: ✅ 完成
**文件总数**: 50+ 文件
**代码行数**: ~3000 行
**部署就绪**: 是