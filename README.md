# React Component Library

> 一個基於 Next.js 的個人 React 元件庫，收集並管理實用的 UI 元件，便於在不同專案中重複使用。

## 📖 專案簡介

這是一個基於 Next.js + TypeScript 的元件庫專案，使用 Storybook 進行元件開發與文檔管理。專案目標是將過往專案中開發的實用元件進行整理、優化並統一管理，提高開發效率並確保元件品質。

## ✨ 特色功能

- 🎨 **Storybook 整合** - 提供互動式元件文檔與測試環境
- 🎯 **TypeScript 支援** - 完整的型別定義
- 🧪 **測試覆蓋** - 使用 Vitest 進行單元測試
- 🎭 **CSS 模組化** - 支援原生 CSS 巢狀語法
- ⚡ **Turbopack 支援** - 更快的開發體驗
- 🚀 **Next.js 15** - 使用最新的 Next.js 框架

## 🚀 快速開始

### 安裝依賴

```bash
npm install
# 或
yarn install
```

### 開發模式

```bash
# 啟動 Next.js 開發服務器
npm run dev

# 啟動 Storybook
npm run storybook
```

在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 查看 Next.js 應用程式。
在瀏覽器中開啟 [http://localhost:6006](http://localhost:6006) 查看 Storybook。

### 建置專案

```bash
# 建置 Next.js 專案
npm run build

# 建置 Storybook
npm run build-storybook
```

### 執行測試

```bash
# 執行測試
npm run test

# 執行測試並監聽變更
npm run test:watch
```

## 📦 目前可用元件

### CTA Button
- **描述**: 具有 hover 動畫效果的行動呼籲按鈕
- **特色**: 滑鼠懸停時箭頭會向右移動
- **使用場景**: 適用於引導使用者進行特定操作
- **技術**: 使用原生 CSS 巢狀語法和 CSS transitions

<!-- 🔄 TODO: 在這裡新增更多元件的說明 -->

## 🛠 技術棧

- **框架**: Next.js 15
- **語言**: TypeScript
- **樣式**: CSS (支援巢狀語法)
- **文檔**: Storybook 8
- **測試**: Vitest
- **建置工具**: Turbopack (可選)
- **程式碼品質**: ESLint

## 📁 專案結構

```
├── .storybook/          # Storybook 配置
├── app/                 # Next.js App Router
│   ├── page.tsx         # 主頁面
│   └── tailwind.css     # Tailwind CSS 配置
├── stories/             # Storybook 故事檔案
│   ├── components/      # 自定義元件
│   │   ├── CTAButton.tsx
│   │   ├── CTAButton.stories.tsx
│   │   └── cta-button.css
│   └── assets/          # 靜態資源
├── public/              # 公開資源
├── next.config.ts       # Next.js 配置 (含 Turbopack)
└── README.md           # 專案說明
```

## 🎯 開發規範

### Commit Message 格式

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 規範：

```
<type>: <description>

# 範例
feat: add new Button component
fix: resolve responsive issue on mobile
docs: update component documentation
style: fix CSS formatting
chore: update dependencies
test: add unit tests for Button
```

### 元件開發流程

1. 在 `stories/components/` 建立元件檔案 (`.tsx`)
2. 撰寫對應的 `.stories.tsx` 檔案
3. 新增 CSS 樣式檔案 (支援巢狀語法)
4. 撰寫單元測試
5. 在 Storybook 中測試元件
6. 更新文檔

## 📝 更新日誌

### v0.1.0 (2024-XX-XX)
- 初始化 Next.js 專案架構
- 新增 CTA Button 元件
- 整合 Storybook 開發環境
- 設定 Vitest 測試環境
- 配置 Turbopack 支援
- 支援原生 CSS 巢狀語法