# lotso-scrum

## 作品說明

透過熊抱可愛人物說明Scrum流程，將圖文說明搭配遊戲實際操作，採用玻璃擬態、新擬物化設計結合區塊拖移， 讓介面突破扁平設計更有層次！新手也能快速上手Scrum！

## 系統說明 Project Setup

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

### deploy github pages

```sh
sh ./deploy.sh
```

Node.js 版本 16.11.68

## 資料夾說明

- assets - 靜態資源
- assets/css - all.css - 引入路徑
- assets/css - base.css - 全站的基本設定--全站reset、自定義變數
- assets/css - layout.css - 版面佈局
- assets/css - modules.css - 重覆性的元件樣式
- assets/images - image圖片
- assets/icon - icon圖示

- components - vue組件
- components/theme - vue共用組件popup

- constant/const.ts - 常數定義
- constant/error.ts - alert訊息常數

- router/index.ts - 路由設定

## 使用技術

-animate.css: 4.1.1, 
-vue: 3.2.41, 
-vue-router: 4.1.5, 
-vuedraggable: 4.1.0, 
-@vitejs/plugin-vue: 3.1.2, 
-@vue/tsconfig:0.1.3, 
-npm-run-all: 4.1.5, 
-typescript: 4.7.4, 
-vite: 3.1.8, 
-vue-tsc: 1.0.8

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and
disable Vetur)
+ [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for
type checking. In editors, we
need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented
a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more
performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

