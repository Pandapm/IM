### Xiyoumobile desktop

1. 安装依赖包

> 使用`npm i` 或者 `yarn install`
>> 因为国内安装 `electron` 较慢，容易出现超时问题，建议添加国内镜像源，以淘宝源为例，

```
npm config edit
// 然后添加electron国内镜像源
electron_mirror = "http://npm.taobao.org/mirrors/electron/"
```
>> 或者在淘宝源上面下载文件包，并解压到`npm`全局目录下，安装`electron-prebuild`,可以直接运行。
2. 开发环境

> 启动主线程开发 `npm run dev`

> 启动渲染线程开发 `npm run start`

**每个组件都必须通过测试, 且保证覆盖率>=90%**

3. 启动 `jest` 单元测试

> 使用 `npm run test`

4. 生成测试报告

> 使用 `npm run test:coverage`

4. 打包程序

> 待定

### 文件目录树

`tree -I 'node_modules|coverage|build'`

```
.
├── README.md
├── config
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   ├── fileTransform.js
│   │   └── typescriptTransform.js
│   ├── paths.js
│   ├── polyfills.js
│   ├── setupTests.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── doc.md
├── nginx.conf
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── fonts
│   │   ├── icon.svg
│   │   ├── icon.ttf
│   │   └── icon.woff
│   ├── icon.min.css
│   ├── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── App.tsx
│   ├── common
│   │   └── style.less
│   ├── components
│   │   ├── Home
│   │   │   ├── index.tsx
│   │   │   ├── modules
│   │   │   │   ├── topLeft
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── style.less
│   │   │   │   └── topRight
│   │   │   │       ├── index.tsx
│   │   │   │       └── style.less
│   │   │   └── style.less
│   │   ├── login
│   │   │   ├── eee.png
│   │   │   ├── index.tsx
│   │   │   ├── rrr.png
│   │   │   └── style.less
│   │   ├── menuList
│   │   │   ├── data.ts
│   │   │   ├── favicon.png
│   │   │   ├── index.tsx
│   │   │   ├── menu.tsx
│   │   │   └── style.less
│   │   └── wiki
│   │       └── index.tsx
│   ├── index.tsx
│   ├── main.js
│   └── registerServiceWorker.ts
├── test
│   └── __test__
│       ├── App.test.tsx
│       ├── __snapshots__
│       │   └── Login.test.tsx.snap
│       └── login.test.tsx
├── tsconfig.json
├── tsconfig.test.json
├── tslint.json
└── yarn.lock
```
