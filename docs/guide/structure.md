# 项目结构

最外层主要分为vuepress文档目录`./docs`, 源代码目录`./src`,单元测试目录`./tests`以及各类配置文件。
各类配置文件包括但不限于**eslint**, **babel**, **jest**以及**vue-cli**等，以后如有新增配置，也以单独文件的形式存放，而不放在`package.json`中。

## 源代码目录说明

`/src`目录下，主要分为**组件目录**， **公共样式目录**， **公用方法目录**及**各类入口文件**。

**各类入口文件**包括`App.vue`, `main.js`, `router.js`等。其中`router.js`即路由配置，当项目规模扩大后，可将该文件拓展为文件夹`/router/index.js`的形式。

**公用方法目录**包括各类公用方法

**公共样式目录**用于输出特定公共样式。在这个项目中用于输出`main.scss`与`base.scss`。
`main.scss`即全局样式。而`base.scss`则为基础组件的公共样式。

**组件目录**有两个：`views`与`components`目录。
`views`用于存放路由级组件。当路由足够简单只有一个文件时，直接在`views`目录下放置对应组件即可。
当路由的组件过大，需要拆分时，将其拓展为文件夹`/views/foo/index.js`的形式，以保持api的一致。
`components`组件用于存放公用组件，其中`base`为全局公用组件，做了自动加载，需要新增组件时在改目录下新增文件即可，不需要在其它地方引入即可直接使用。
`business`为在多于一个地方使用的业务组件，通常由`views/`目录下的业务组件迁移得来。
`layout`组件用于处理布局，通常用于路由组件。


## 目录概览

```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
├─ src
│  ├─ assets // 资源文件
│  ├─ components // 公共组件
│  |  ├─ base // 基础组件
│  |  ├─ business // 公用业务组件
│  |  └─ layout // 布局组件
|  |
│  ├─ styles // 公用样式
│  |  ├─ modules // 不生成实际代码的文件，例如variable，mixin等
│  |  ├─ partials // 公用样式
│  |  ├─ vendors // 引入或覆盖第三方类库的样式文件
│  |  ├─ base.scss // base组件样式入口
│  |  └─ main.scss // scss入口文件
|  |
│  ├─ utils // 公用方法
│  ├─ views // 路由级组件
│  |  ├─ About.vue 当页面只有一个文件时，不新建文件夹
│  |  └─ Home
│  |     ├─ component.vue 页面下的子组件
|  |     └─ index.vue 包含多个文件时，使用文件夹下的index文件引入，保持使用时格式等一致
|  |
│  ├─ vuex // vuex模块
│  ├─ App.vue // 根组件
│  ├─ main.js // 入口文件
│  └─ router.js // 路由配置
|
├─ tests // 单元测试目录
├─ .eslintrc.js
├─ babel.config.js
├─ jest.config.js
├─ vue.config.js
└─ package.json

```