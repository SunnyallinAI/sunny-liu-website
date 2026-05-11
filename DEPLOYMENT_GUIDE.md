# 🚀 完整部署指南

## 第一步：安装 Node.js

### Windows 用户
1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载 **LTS 版本** (推荐 20.x 或 18.x)
3. 运行安装程序，保持默认设置
4. 安装完成后重启电脑

### 验证安装
打开命令提示符 (CMD) 或 PowerShell，运行：
```bash
node --version
npm --version
```

## 第二步：初始化 Git 仓库

在项目目录中打开命令提示符，运行：

```bash
# 进入项目目录
cd C:\Users\Sunny\.newmax\workspace

# 初始化 git
git init

# 添加所有文件
git add .

# 创建初始提交
git commit -m "Initial commit: Production-ready Next.js 15 personal website"

# 创建主分支
git branch -M main
```

## 第三步：创建 GitHub 仓库

1. 访问 [github.com/new](https://github.com/new)
2. 创建新仓库：
   - **仓库名称**: `sunny-liu-website`
   - **描述**: "Personal website for Sunny Liu - Global Growth Strategist"
   - **公开/私有**: 选择公开（推荐）
   - **初始化 README**: 不勾选（我们已经有了）
3. 复制仓库 URL（类似：`https://github.com/YOUR_USERNAME/sunny-liu-website.git`）

## 第四步：推送到 GitHub

```bash
# 替换下面的 URL 为你的仓库 URL
git remote add origin https://github.com/YOUR_USERNAME/sunny-liu-website.git

# 推送到 GitHub
git push -u origin main
```

## 第五步：部署到 Vercel

### 1. 注册 Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录

### 2. 导入项目
1. 点击 "Add New..." → "Project"
2. 选择 "Import Git Repository"
3. 找到并选择你的 `sunny-liu-website` 仓库
4. 点击 "Import"

### 3. 配置项目
在项目配置页面：

- **Project Name**: `sunny-liu-website` (或你喜欢的名称)
- **Framework Preset**: `Next.js`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 4. 添加环境变量（可选）
点击 "Environment Variables" 添加：

```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=你的GA_ID (可选)
CONTACT_EMAIL=sunny@sunnyliu.com (可选)
```

### 5. 部署
点击 "Deploy" 按钮！

等待 1-2 分钟，你的网站就会部署完成。

## 第六步：绑定自定义域名（可选）

### 1. 购买域名
推荐域名：
- sunnyliu.com
- sunny-liu.com
- sunnyliu.net

购买渠道：
- [Namecheap](https://namecheap.com)
- [GoDaddy](https://godaddy.com)
- [Google Domains](https://domains.google)

### 2. 在 Vercel 中添加域名
1. 进入项目设置 → "Domains"
2. 输入你的域名（如：sunnyliu.com）
3. 按照 Vercel 提供的 DNS 配置说明操作

### 3. 配置 DNS
在你的域名注册商处添加 DNS 记录：

**推荐配置（A 记录）**：
```
@    A    76.76.21.21
```

**或者使用 CNAME**：
```
www    CNAME    cname.vercel-dns.com
```

### 4. 等待生效
DNS 传播通常需要 5 分钟到 24 小时。

## 第七步：测试部署

### 功能测试
1. **访问主页**: `https://your-project.vercel.app`
2. **检查所有页面**:
   - 主页加载正常
   - 导航链接有效
   - 博客页面可访问
   - 联系表单可提交

### 设计测试
1. **移动端**: 用手机访问，检查响应式
2. **桌面端**: 检查布局是否正常
3. **动画效果**: 滚动查看动画是否流畅

### SEO 测试
1. **查看源代码**: 检查 meta 标签
2. **社交分享**: 测试 Open Graph 标签
3. **站点地图**: 访问 `/sitemap.xml`
4. **Robots.txt**: 访问 `/robots.txt`

## 第八步：监控和优化

### 添加分析工具（可选）
1. **Google Analytics**:
   - 访问 [analytics.google.com](https://analytics.google.com)
   - 创建账户并获取跟踪 ID
   - 添加到环境变量：`NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`

2. **Google Search Console**:
   - 验证你的域名
   - 提交站点地图

### 性能监控
1. **Vercel Analytics**: 自动启用
2. **Lighthouse 测试**: 使用 Chrome DevTools
3. **Uptime 监控**: 使用 UptimeRobot

## 故障排除

### 部署失败
1. **检查构建日志**: 在 Vercel 项目中查看
2. **常见问题**:
   - Node.js 版本不兼容 → 确保使用 18+ 版本
   - 依赖缺失 → 运行 `npm install`
   - 语法错误 → 本地运行 `npm run build` 检查

### 域名不工作
1. **检查 DNS 配置**: 使用 [whatsmydns.net](https://whatsmydns.net) 检查
2. **等待传播**: 最多 24 小时
3. **联系域名注册商**: 确认 DNS 设置正确

### 网站样式问题
1. **清除浏览器缓存**: Ctrl+Shift+R (Windows)
2. **检查控制台错误**: F12 → Console
3. **重新部署**: 在 Vercel 中点击 "Redeploy"

## 下一步优化

### 立即优化
1. **添加个人照片**: 替换 `public/profile.jpg`
2. **更新内容**: 修改所有个人信息
3. **添加更多博客**: 创建 2-3 篇文章

### 长期优化
1. **添加分析**: Google Analytics
2. **SEO 优化**: 关键词研究
3. **性能优化**: 图片压缩、代码分割
4. **功能扩展**: 暗黑模式、多语言

## 获取帮助

### 文档资源
- [Next.js 文档](https://nextjs.org/docs)
- [Vercel 文档](https://vercel.com/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

### 社区支持
- Next.js Discord: [discord.gg/nextjs](https://discord.gg/nextjs)
- Vercel Community: [vercel.com/community](https://vercel.com/community)

### 问题反馈
如果遇到问题：
1. 检查控制台错误
2. 查看 Vercel 部署日志
3. 搜索错误信息
4. 在 GitHub 开启 issue

---

**部署状态**: 🟡 准备中
**预计时间**: 15-30 分钟
**难度**: 初级

祝你部署顺利！🎉