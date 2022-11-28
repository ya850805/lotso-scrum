# lotso-scrum

## 作品說明

透過動畫與互動說明Scrum流程，採用玻璃擬態、新擬物化設計結合區塊拖移，
讓介面突破扁平設計更有層次！透過新手使用者情境，提供新增待辦任務、給予對應點數、結合開啟對應Jira功能，讓使用者能更深入了解，也規劃說明點數、正面描述，會議時程搭配日曆動畫說明時程，讓新手也能快速上手Scrum！

## 系統說明 Project Setup

**Node.js 版本 16.11.68**

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### deploy github pages(https://ya850805.github.io/lotso-scrum/#/)

```sh
sh ./deploy.sh
```

## Directory/File說明

- assets - 靜態資源
- assets/css - all.css - 引入路徑
- assets/css - base.css - 全站的基本設定--全站reset、自定義變數
- assets/css - layout.css - 版面佈局
- assets/css - modules.css - 重覆性的元件樣式
- assets/images - image圖片
- assets/icon - icon圖示

- components - vue組件
- components/theme - vue共用組件
- components/theme/AlertTheme - Alert popup template
- components/theme/ChatTheme - Chat Bubble template

- constant/const.ts - 常數定義
- constant/error.ts - alert訊息常數

- router/index.ts - 路由設定

## 使用技術

- animate.css: 4.1.1,
- vue: 3.2.41,
- vue-router: 4.1.5,
- vuedraggable: 4.1.0,
- @vitejs/plugin-vue: 3.1.2,
- @vue/tsconfig:0.1.3,
- npm-run-all: 4.1.5,
- typescript: 4.7.4,
- vite: 3.1.8,
- vue-tsc: 1.0.8,
- vue-confetti-explosion:1.0.1

