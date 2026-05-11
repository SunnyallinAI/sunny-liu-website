@echo off
echo ============================================
echo 推送代码到 GitHub
echo ============================================
echo.

echo 步骤 1: 检查 Git 状态
git status
echo.

echo 步骤 2: 检查远程仓库配置
git remote -v
echo.

echo 步骤 3: 推送代码到 GitHub
echo 注意: 如果提示输入用户名和密码，请使用 GitHub Personal Access Token 代替密码
echo.
git push -u origin main

echo.
echo ============================================
echo 推送完成！
echo ============================================
echo.
echo 如果推送成功，请访问:
echo https://github.com/SunnyallinAI/sunny-liu-website
echo.
pause