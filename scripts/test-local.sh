#!/bin/bash

# 本地测试脚本

echo "🧪 开始本地测试..."

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误: Node.js 未安装"
    echo "请从 https://nodejs.org/ 下载并安装 LTS 版本"
    exit 1
fi

# 检查 npm
if ! command -v npm &> /dev/null; then
    echo "❌ 错误: npm 未安装"
    echo "请重新安装 Node.js"
    exit 1
fi

echo "✅ Node.js 版本: $(node --version)"
echo "✅ npm 版本: $(npm --version)"

# 安装依赖
echo "📦 安装依赖..."
npm install

# 检查安装是否成功
if [ $? -ne 0 ]; then
    echo "❌ 依赖安装失败"
    exit 1
fi

echo "✅ 依赖安装成功"

# 运行 lint
echo "🔍 运行代码检查..."
npm run lint

if [ $? -ne 0 ]; then
    echo "⚠️  代码检查发现一些问题"
    echo "请修复后再继续"
    exit 1
fi

echo "✅ 代码检查通过"

# 构建项目
echo "🏗️  构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    echo "请检查错误信息并修复"
    exit 1
fi

echo "✅ 项目构建成功"

# 启动开发服务器（可选）
echo ""
echo "🎉 所有测试通过！"
echo ""
echo "要启动本地开发服务器，运行:"
echo "  npm run dev"
echo ""
echo "然后访问: http://localhost:3000"