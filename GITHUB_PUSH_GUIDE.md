# GitHub 推送指南

## 🚀 快速推送（推荐）

### 方法 1：运行批处理文件

双击运行 `scripts/push-to-github.bat`

### 方法 2：手动执行命令

在项目目录打开命令提示符（CMD）或 PowerShell，然后运行：

```bash
git push -u origin main
```

## 🔐 认证问题解决

如果遇到认证问题，请按以下步骤操作：

### 1. 使用 GitHub Personal Access Token

1. 访问 GitHub Settings → Developer settings → Personal access tokens
2. 点击 "Generate new token"
3. 选择权限：
   - ✅ repo (Full control of private repositories)
   - ✅ workflow (Update GitHub Action workflows)
4. 复制生成的 Token

### 2. 配置 Git 使用 Token

```bash
# 当 Git 提示输入密码时，输入你的 Personal Access Token
git config --global credential.helper store
```

### 3. 推送代码

```bash
git push -u origin main
```

当提示输入用户名时：输入你的 GitHub 用户名 `SunnyallinAI`
当提示输入密码时：输入你的 Personal Access Token

## 📋 推送前检查清单

- [ ] 确认网络连接正常
- [ ] 确认 GitHub 仓库已创建
- [ ] 确认远程仓库 URL 正确
- [ ] 确认所有文件已提交
- [ ] 确认没有敏感信息（如 .env 文件）

## 🎯 推送成功后的验证

1. 访问 https://github.com/SunnyallinAI/sunny-liu-website
2. 确认所有文件都已上传
3. 检查提交历史是否正确

## 🚨 常见问题解决

### 问题 1：Connection reset / Could not connect to server

**原因**：网络连接问题或防火墙限制

**解决方案**：
1. 检查网络连接
2. 尝试使用手机热点
3. 联系网络管理员确认是否限制了 GitHub 访问

### 问题 2：Authentication failed

**原因**：用户名或密码错误

**解决方案**：
1. 使用 Personal Access Token 代替密码
2. 确认用户名是 `SunnyallinAI`（不是邮箱）

### 问题 3：Permission denied

**原因**：没有推送权限

**解决方案**：
1. 确认仓库是你的（SunnyallinAI/sunny-liu-website）
2. 如果是别人的仓库，需要先 Fork

## 📝 推送成功后的下一步

1. **部署到 Vercel**：
   - 访问 vercel.com
   - 导入 GitHub 仓库
   - 一键部署

2. **绑定域名**（可选）：
   - 在 Vercel 设置中添加自定义域名
   - 配置 DNS 记录

3. **测试网站**：
   - 访问部署后的 URL
   - 测试所有功能

## 🆘 获取帮助

如果遇到问题：
1. 查看 [GitHub 文档](https://docs.github.com/)
2. 在仓库中开启 Issue
3. 联系技术支持

---

**祝推送成功！** 🎉