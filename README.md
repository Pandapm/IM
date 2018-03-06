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
