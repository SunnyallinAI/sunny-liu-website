# Vercel 部署指南

## 🚀 快速部署（推荐方法）

### 方法 1：一键部署（最简单）

1. **访问 Vercel**：
   - 打开 [vercel.com](https://vercel.com)
   - 点击 "Continue with GitHub"

2. **登录 GitHub**：
   - 使用你的 GitHub 账户登录
   - 授权 Vercel 访问你的仓库

3. **导入项目**：
   - 点击 "Add New..." → "Project"
   - 选择 `SunnyallinAI/sunny-liu-website` 仓库
   - 点击 "Import"

4. **配置项目**：
   - **Project Name**: `sunny-liu-website` (自动填充)
   - **Framework Preset**: Next.js (自动检测)
   - **Build Command**: `npm run build` (默认)
   - **Output Directory**: `.next` (默认)
   - **Install Command**: `npm install` (默认)

5. **部署**：
   - 点击 "Deploy"
   - 等待 1-2 分钟

6. **完成**：
   - 部署成功后，你会看到一个 `.vercel.app` 域名
   - 例如：`https://sunny-liu-website.vercel.app`

### 方法 2：使用 Vercel CLI

1. **安装 Vercel CLI**：
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**：
   ```bash
   vercel login
   ```

3. **部署项目**：
   ```bash
   cd C:\Users\Sunny\.newmax\workspace
   vercel
   ```

4. **按提示操作**：
   - 设置项目名称：`sunny-liu-website`
   - 选择部署位置：`US East (N. Virginia)`
   - 确认配置

## 🔧 高级配置

### 环境变量配置

在 Vercel 项目设置中添加以下环境变量：

| 变量名 | 说明 | 示例值 |
|--------|------|--------|
| `NEXT_PUBLIC_SITE_URL` | 网站 URL | `https://sunnyliu.com` |
| `NEXT_PUBLIC_SITE_NAME` | 网站名称 | `SUNNY LIU` |
| `CONTACT_EMAIL` | 联系邮箱 | `your-email@example.com` |

### 自定义域名配置

1. **购买域名**（推荐）：
   - Namecheap: https://namecheap.com
   - GoDaddy: https://godaddy.com
   - 阿里云: https://wanwang.aliyun.com

2. **在 Vercel 添加域名**：
   - 进入项目设置 → Domains
   - 输入你的域名（如：sunnyliu.com）
   - 按照提示配置 DNS

3. **配置 DNS 记录**：
   - A 记录：指向 Vercel IP
   - CNAME 记录：指向 cname.vercel-dns.com

### HTTPS 配置

Vercel 自动提供 HTTPS 证书，无需额外配置。

## 📋 部署前检查清单

- [x] 代码已推送到 GitHub
- [x] 项目构建成功
- [ ] 个人照片已上传 (`public/profile.jpg`)
- [ ] Open Graph 图片已上传 (`public/og-image.jpg`)
- [ ] 环境变量已配置（可选）
- [ ] 自定义域名已购买（可选）

## 🎯 部署成功后的验证

### 1. 基本功能测试

访问部署后的 URL，检查：

- [ ] 网站能正常加载
- [ ] 导航栏正常工作
- [ ] 英雄区域显示正确
- [ ] 关于我部分显示正确
- [ ] 工作经历显示正确
- [ ] 项目展示正常
- [ ] 博客文章能访问
- [ ] 联系表单正常
- [ ] 页脚信息正确

### 2. 响应式测试

- [ ] 桌面端显示正常
- [ ] 平板端显示正常
- [ ] 手机端显示正常

### 3. SEO 测试

- [ ] 查看页面源代码，检查 meta 标签
- [ ] 测试 Open Graph 分享
- [ ] 检查站点地图：`/sitemap.xml`
- [ ] 检查 robots.txt：`/robots.txt`

### 4. 性能测试

- [ ] 使用 Lighthouse 测试性能
- [ ] 检查加载速度
- [ ] 验证动画流畅性

## 🔍 故障排除

### 问题 1：构建失败

**可能原因**：
- 依赖安装失败
- TypeScript 错误
- ESLint 错误

**解决方案**：
1. 检查 Vercel 构建日志
2. 本地运行 `npm run build` 测试
3. 修复所有错误后重新推送

### 问题 2：网站无法访问

**可能原因**：
- 部署仍在进行中
- 域名配置错误
- DNS 未生效

**解决方案**：
1. 等待几分钟让部署完成
2. 检查 Vercel 项目状态
3. 验证域名配置

### 问题 3：样式显示异常

**可能原因**：
- CSS 文件未正确加载
- Tailwind 配置问题

**解决方案**：
1. 清除浏览器缓存
2. 检查浏览器控制台错误
3. 重新部署项目

## 📊 部署状态监控

### Vercel 仪表板功能

1. **部署历史**：
   - 查看所有部署记录
   - 回滚到之前的版本

2. **性能分析**：
   - 查看加载时间
   - 分析资源使用

3. **错误监控**：
   - 查看运行时错误
   - 分析错误日志

4. **流量分析**：
   - 查看访问量
   - 分析用户行为

## 🚀 部署成功后的优化

### 1. 性能优化

- [ ] 启用图片优化
- [ ] 配置缓存策略
- [ ] 启用 CDN

### 2. SEO 优化

- [ ] 提交到 Google Search Console
- [ ] 提交到 Bing Webmaster Tools
- [ ] 配置结构化数据

### 3. 安全优化

- [ ] 启用 HTTPS 强制跳转
- [ ] 配置安全头部
- [ ] 设置访问限制

## 🆘 获取帮助

### Vercel 文档
- [Vercel Next.js 部署指南](https://vercel.com/docs/next.js)
- [Vercel 环境变量](https://vercel.com/docs/environment-variables)
- [Vercel 自定义域名](https://vercel.com/docs/custom-domains)

### GitHub 仓库
- 访问：https://github.com/SunnyallinAI/sunny-liu-website
- 开启 Issue 获取帮助

---

**祝部署成功！** 🎉

部署完成后，你的个人网站将正式上线，可以通过互联网访问！