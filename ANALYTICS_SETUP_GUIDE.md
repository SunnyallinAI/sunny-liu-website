# 分析工具配置指南

## 📊 可用的分析工具

### 1. Google Analytics (推荐)

#### 优势
- ✅ 免费使用
- ✅ 功能强大
- ✅ 行业标准
- ✅ 详细报告

#### 配置步骤

**步骤 1: 创建 Google Analytics 账户**

1. 访问 https://analytics.google.com
2. 点击 "开始测量"
3. 创建账户和媒体资源
4. 获取追踪 ID (格式: GA-XXXXXX-X)

**步骤 2: 配置环境变量**

在 Vercel 项目设置中添加：

```
NEXT_PUBLIC_GA_ID=GA-XXXXXX-X
```

**步骤 3: 验证配置**

1. 部署网站到 Vercel
2. 访问网站
3. 检查浏览器开发者工具
4. 查看是否加载了 Google Analytics 脚本

**步骤 4: 查看报告**

1. 访问 https://analytics.google.com
2. 选择你的媒体资源
3. 查看实时报告和历史数据

---

### 2. Vercel Analytics

#### 优势
- ✅ 集成简单
- ✅ 实时数据
- ✅ 与 Vercel 深度集成
- ✅ Core Web Vitals 监控

#### 配置步骤

**步骤 1: 启用 Analytics**

1. 登录 Vercel
2. 进入项目设置
3. 点击 "Analytics" 标签
4. 点击 "Enable Analytics"

**步骤 2: 安装依赖** (如果需要)

```bash
npm install @vercel/analytics
```

**步骤 3: 添加到应用**

```tsx
// app/providers.tsx 或 app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**步骤 4: 查看数据**

1. 在 Vercel 项目页面
2. 点击 "Analytics" 标签
3. 查看访问量、性能等数据

---

### 3. 错误监控

#### Vercel 内置错误监控

**优势**:
- ✅ 自动启用
- ✅ 实时报警
- ✅ 详细错误信息

**查看方式**:
1. Vercel 项目 → Analytics → Errors
2. 查看错误详情和堆栈跟踪

#### Sentry (高级错误监控)

**优势**:
- ✅ 更详细的错误追踪
- ✅ 性能监控
- ✅ 用户行为分析

**配置步骤**:

1. **创建 Sentry 账户**
   - 访问 https://sentry.io
   - 创建项目，获取 DSN

2. **安装依赖**
   ```bash
   npm install @sentry/nextjs
   ```

3. **配置 Sentry**
   ```bash
   npx @sentry/wizard -i nextjs
   ```

4. **添加环境变量**
   ```
   NEXT_PUBLIC_SENTRY_DSN=your-dsn-here
   ```

---

## 🎯 推荐配置方案

### 方案 A: 基础配置 (推荐新手)

**工具**:
- ✅ Google Analytics
- ✅ Vercel 内置错误监控

**优点**:
- 简单易用
- 功能足够
- 免费

### 方案 B: 进阶配置

**工具**:
- ✅ Google Analytics
- ✅ Vercel Analytics
- ✅ Vercel 错误监控

**优点**:
- 数据更全面
- 实时监控
- 性能分析

### 方案 C: 专业配置

**工具**:
- ✅ Google Analytics
- ✅ Vercel Analytics
- ✅ Sentry 错误监控
- ✅ Google Search Console

**优点**:
- 最全面的数据
- 专业级监控
- SEO 优化支持

---

## 📋 立即行动清单

### 阶段 1: 基础分析 (5分钟)

- [ ] 创建 Google Analytics 账户
- [ ] 获取追踪 ID
- [ ] 在 Vercel 添加环境变量
- [ ] 重新部署网站

### 阶段 2: 验证配置 (10分钟)

- [ ] 访问网站检查 GA 是否加载
- [ ] 查看 Google Analytics 实时报告
- [ ] 确认数据正在收集

### 阶段 3: 高级配置 (可选)

- [ ] 启用 Vercel Analytics
- [ ] 配置错误监控
- [ ] 提交到搜索引擎

---

## 🔍 验证分析工具

### Google Analytics 验证

1. **检查脚本加载**
   - 打开浏览器开发者工具 (F12)
   - 切换到 Network 标签
   - 筛选 "analytics"
   - 查看是否加载了 Google Analytics 脚本

2. **查看实时报告**
   - 访问 https://analytics.google.com
   - 选择 "实时" 报告
   - 访问你的网站
   - 查看是否显示实时访问

### Vercel Analytics 验证

1. **检查是否启用**
   - Vercel 项目 → Analytics 标签
   - 查看是否显示数据图表

2. **查看 Core Web Vitals**
   - 在 Analytics 页面
   - 查看性能指标

---

## 📊 数据解读指南

### Google Analytics 关键指标

**用户获取**:
- 用户来源 (直接、搜索、社交等)
- 流量渠道表现

**用户行为**:
- 页面浏览量
- 平均停留时间
- 跳出率

**转化目标**:
- 表单提交
- 页面访问目标

### Vercel Analytics 关键指标

**性能**:
- 页面加载时间
- Core Web Vitals
- 资源加载时间

**访问**:
- 访问量
- 独立访客
- 页面浏览

---

## 🚀 下一步行动

### 立即执行

1. **创建 Google Analytics 账户**
   - 访问 https://analytics.google.com
   - 完成注册和配置

2. **获取追踪 ID**
   - 在 GA 后台找到追踪 ID
   - 格式: GA-XXXXXX-X

3. **配置环境变量**
   - 在 Vercel 项目设置中添加
   - 重新部署网站

### 验证配置

1. **等待 30 分钟**
   - Google Analytics 需要时间初始化

2. **检查数据**
   - 访问 Google Analytics 后台
   - 查看实时报告

3. **优化配置**
   - 设置目标转化
   - 配置自定义报告

---

**分析工具配置完成时间**: 2026/05/11
**状态**: ✅ 配置指南已创建
**下一步**: 按照指南配置 Google Analytics