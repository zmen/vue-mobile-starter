# vue-mobile-starter

> 基于vue-cli3生成的项目，参见 [Configuration Reference](https://cli.vuejs.org/config/)

## 快速启动

```
npm install
npm run serve // 编译并启动本地开发项目
npm run build // 编译并打包生产项目
npm run lint // 运行eslint代码检查
npm run test:unit // 运行单元测试
```

## Features enabled

- Vue Router
- Vuex
- Unit Test
- Eslint
- Babel
- Axios as http client
- Storybook
- Mock server

## 基本目录结构

```
scripts/ 配置脚本
src/service ajax请求封装
src/components 公共组件
src/components/base 公共基础组件, 不需要手动引入的全局组件
src/components/layout 布局组件
src/components/base-ui 公共基础组件的样式
src/components/business 公共业务组件
src/views 页面组件
src/views/component.vue 某个页面组件
src/views/component/ 页面包含不止一个组件时，改为目录结构
src/vuex vuex相关文件 目录参考官方推荐配置
src/utils 基础工具
src/styles 样式文件
src/styles/main.scss scss入口文件
src/styles/vendor/ 第三方样式文件
src/styles/modules/ 不实际生成css的代码，例如mixins，variables
src/styles/partials/ 通用样式
```

以下文件将会作为单元测试文件运行：

- `root/tests`目录下文件名为`*.spec.js`的文件
- `*/__test__/*`目录下文件名为`*.test.js`的文件


