# 🚀 快速部署清单

## 5 分钟完成部署

### 第一步：安装 Node.js（如果未安装）
1. 访问 [nodejs.org](https://nodejs.org/)
2. 下载 **LTS 版本**
3. 安装并重启电脑

### 第二步：测试项目
双击运行：`scripts\test-local.bat`

### 第三步：创建 GitHub 仓库
1. 访问 [github.com/new](https://github.com/new)
2. 创建仓库：`sunny-liu-website`
3. 复制仓库 URL

### 第四步：推送到 GitHub
在项目目录打开命令提示符：
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### 第五步：部署到 Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 用 GitHub 登录
3. 导入你的仓库
4. 点击 "Deploy"

### 第六步：完成！
你的网站将在 1-2 分钟内上线！

## 📋 部署后检查

- [ ] 网站可以访问
- [ ] 所有页面正常
- [ ] 联系表单工作
- [ ] 博客文章显示
- [ ] 移动端正常

## 🎯 下一步

1. **添加个人照片** → 替换 `public/profile.jpg`
2. **更新个人信息** → 编辑各个组件文件
3. **添加博客文章** → 在 `content/blog/` 创建新文件
4. **绑定域名** → 在 Vercel 设置中添加

## 🆘 遇到问题？

1. **部署失败** → 查看 Vercel 构建日志
2. **样式问题** → 清除浏览器缓存 (Ctrl+Shift+R)
3. **功能问题** → 检查浏览器控制台 (F12)

## 📞 获取帮助

- Next.js 文档: https://nextjs.org/docs
- Vercel 文档: https://vercel.com/docs
- 项目文档: 查看 README.md

---

**预计总时间**: 10-15 分钟
**难度**: 简单
**成功率**: 99%

祝你部署成功！🎉