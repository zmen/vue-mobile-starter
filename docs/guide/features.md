# 功能列表

## 路由配置

路由配置文件位于`/src/router/`文件夹中。
借助[webpack:require-context](https://webpack.js.org/guides/dependency-management/#requirecontext)实现自动加载。
新增路由时，在该目录下新建文件/文件夹即可，具体配置方式参见样例文件。

```javascript
export default [{
  path: '/about',
  name: 'about',
  component: () => import(/* webpackChunkName: "about"*/'./views/About.vue'),
}];
```

开发时，可根据需要决定编译的业务模块，以加快构建速度。
例如，开发时如果仅涉及模块A与模块B，为避免构建其它无关业务模块，可在`.env.local`文件中配置:

```
VUE_APP_LOAD_MODULES=A|B
```

## Vuex状态管理库配置

Vuex使用官方推荐的项目结构，位于`/src/vuex`中。

## Http Client

http请求使用axios库实现，在`/src/utils/http.js`中。
这个文件暴露出以下几个方法:

- `mock`
- `request`
- `cancelRequest`
- `addRequestInterceptors`
- `addResponseInterceptors`

`mock`应该只是单元测试需要用到。
`request`是发送请求的直接方法，用法与`axios`基本相同。
可以用`request(options)`的方式调用，也可以用`request.get, request.post`的方式调用。
`cancelRequest`方法用于撤销某个发送中的请求。
当业务需要对请求自定义时，例如在请求中加入token，在响应中处理错误时，使用后面两个方法进行设置。

## Proxy配置

用于本地开发的proxy可以在`vue.config.js`中进行设置。

```javascript
// vue.config.js
module.exports = {
  devServer: {}
};
```

## 环境变量配置

环境变量由根目录下的以下文件决定：

```text
.env                # 全局环境变量
.env.[mode]         # 特定环境下的环境变量，如`.env.development`
```

文件内容：

```text
FOO=bar // 构建过程中可以访问到的变量
VUE_APP_SECRET=secret // App代码中可以通过`process.env.VUE_APP_SECRET`访问的变量
```

更多细节参见[vue-cli#environment-variables](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables)


## REM适配

如需使用rem适配，建议引入以下几个插件：

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 将px转化为rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 设置rem基准值

### 使用方式

在`postcss.config.js`中，配置`postcss-pxtorem`插件：

```javascript
module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 37.5, // 根据设计稿自行定义
            propList: ['*']
        }
    }
}
```

对于不需要转化为rem的单位，可以使用大写的`PX`代替