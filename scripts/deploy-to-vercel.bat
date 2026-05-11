@echo off
echo ============================================
echo Vercel 部署脚本
echo ============================================
echo.

echo 步骤 1: 检查项目状态
git status
echo.

echo 步骤 2: 构建项目验证
npm run build
echo.

echo 步骤 3: 部署到 Vercel
echo.
echo 请按以下步骤操作：
echo 1. 访问 https://vercel.com
echo 2. 点击 "Continue with GitHub" 登录
echo 3. 选择仓库: SunnyallinAI/sunny-liu-website
echo 4. 点击 "Deploy" 开始部署
echo.
echo 或者使用 Vercel CLI:
echo   npm i -g vercel
echo   vercel login
echo   vercel
echo.

echo ============================================
echo 部署指南已创建
echo ============================================
echo.
echo 详细指南: VERCEL_DEPLOYMENT_GUIDE.md
echo.
pause