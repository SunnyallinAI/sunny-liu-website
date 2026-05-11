# Vercel 部署检查清单

## 📋 部署前检查

### 代码状态
- [x] 代码已推送到 GitHub
- [x] 项目构建成功
- [x] 所有文件已提交
- [x] 没有敏感信息泄露

### 图片资源
- [ ] 个人照片已上传 (`public/profile.jpg`)
- [ ] Open Graph 图片已上传 (`public/og-image.jpg`)
- [ ] 项目图片已上传 (`public/projects/*.jpg`)

### 内容完整性
- [ ] 个人信息已更新
- [ ] 工作经历已更新
- [ ] 项目展示已更新
- [ ] 博客文章已完善
- [ ] 联系信息已更新

## 🚀 部署步骤

### 方法 1：一键部署（推荐）

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 点击 "Continue with GitHub"

2. **登录 GitHub**
   - 使用 SunnyallinAI 账户登录
   - 授权 Vercel 访问仓库

3. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择 `SunnyallinAI/sunny-liu-website`
   - 点击 "Import"

4. **配置项目**
   - Project Name: `sunny-liu-website`
   - Framework: Next.js (自动检测)
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. **部署**
   - 点击 "Deploy"
   - 等待 1-2 分钟

6. **完成**
   - 记录部署域名：`https://sunny-liu-website.vercel.app`

### 方法 2：Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
cd C:\Users\Sunny\.newmax\workspace
vercel
```

## 🔧 高级配置

### 环境变量（可选）

在 Vercel 项目设置 → Environment Variables：

| 变量名 | 值 | 说明 |
|--------|----|------|
| `NEXT_PUBLIC_SITE_URL` | `https://sunnyliu.com` | 网站 URL |
| `NEXT_PUBLIC_SITE_NAME` | `SUNNY LIU` | 网站名称 |
| `CONTACT_EMAIL` | `your-email@example.com` | 联系邮箱 |

### 自定义域名（可选）

1. **购买域名**
   - 推荐：Namecheap、GoDaddy、阿里云
   - 域名建议：sunnyliu.com

2. **在 Vercel 添加域名**
   - 项目设置 → Domains
   - 输入域名：sunnyliu.com
   - 按照提示配置 DNS

3. **配置 DNS 记录**
   - A 记录：指向 Vercel IP
   - CNAME 记录：cname.vercel-dns.com

## ✅ 部署后验证

### 基本功能测试
- [ ] 网站能正常加载
- [ ] 导航栏正常工作
- [ ] 英雄区域显示正确
- [ ] 关于我部分显示正确
- [ ] 工作经历显示正确
- [ ] 项目展示正常
- [ ] 博客文章能访问
- [ ] 联系表单正常
- [ ] 页脚信息正确

### 响应式测试
- [ ] 桌面端显示正常 (1920px+)
- [ ] 平板端显示正常 (768px-1024px)
- [ ] 手机端显示正常 (<768px)

### SEO 测试
- [ ] 查看页面源代码，检查 meta 标签
- [ ] 测试 Open Graph 分享
- [ ] 检查站点地图：`/sitemap.xml`
- [ ] 检查 robots.txt：`/robots.txt`

### 性能测试
- [ ] 使用 Lighthouse 测试性能
- [ ] 检查加载速度 (<3秒)
- [ ] 验证动画流畅性

## 🎯 部署成功后的下一步

### 1. 提交到搜索引擎
- [ ] Google Search Console
- [ ] Bing Webmaster Tools
- [ ] 百度搜索资源平台

### 2. 社交媒体集成
- [ ] LinkedIn 个人资料更新
- [ ] Twitter/X 个人资料更新
- [ ] 其他社交媒体链接

### 3. 监控设置
- [ ] Google Analytics
- [ ] Vercel Analytics
- [ ] 错误监控

## 🔍 故障排除

### 构建失败
1. 检查 Vercel 构建日志
2. 本地运行 `npm run build` 测试
3. 修复所有错误后重新推送

### 网站无法访问
1. 等待几分钟让部署完成
2. 检查 Vercel 项目状态
3. 验证域名配置

### 样式显示异常
1. 清除浏览器缓存
2. 检查浏览器控制台错误
3. 重新部署项目

## 📞 获取帮助

### 文档资源
- [Vercel Next.js 部署指南](https://vercel.com/docs/next.js)
- [Vercel 环境变量](https://vercel.com/docs/environment-variables)
- [Vercel 自定义域名](https://vercel.com/docs/custom-domains)

### 项目资源
- GitHub 仓库：https://github.com/SunnyallinAI/sunny-liu-website
- 部署指南：`VERCEL_DEPLOYMENT_GUIDE.md`

---

**祝部署成功！** 🎉

部署完成后，你的个人网站将正式上线，可以通过互联网访问！