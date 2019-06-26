# 功能列表

## 路由配置

路由配置文件位于`/src/router.js`中，配置方式没有做多大修改，使用传统的配置方式即可。

按需加载路由使用webpack dynamic import的方式实现，如下：

```javascript
export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */'./views/About.vue')
  }]
})
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
