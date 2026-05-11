@echo off
echo 🧪 开始本地测试...

REM 检查 Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 错误: Node.js 未安装
    echo 请从 https://nodejs.org/ 下载并安装 LTS 版本
    pause
    exit /b 1
)

REM 检查 npm
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 错误: npm 未安装
    echo 请重新安装 Node.js
    pause
    exit /b 1
)

echo ✅ Node.js 版本:
node --version
echo ✅ npm 版本:
npm --version

REM 安装依赖
echo 📦 安装依赖...
call npm install

if %errorlevel% neq 0 (
    echo ❌ 依赖安装失败
    pause
    exit /b 1
)

echo ✅ 依赖安装成功

REM 运行 lint
echo 🔍 运行代码检查...
call npm run lint

if %errorlevel% neq 0 (
    echo ⚠️  代码检查发现一些问题
    echo 请修复后再继续
    pause
    exit /b 1
)

echo ✅ 代码检查通过

REM 构建项目
echo 🏗️  构建项目...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ 构建失败
    echo 请检查错误信息并修复
    pause
    exit /b 1
)

echo ✅ 项目构建成功

echo.
echo 🎉 所有测试通过！
echo.
echo 要启动本地开发服务器，运行:
echo   npm run dev
echo.
echo 然后访问: http://localhost:3000
echo.
pause