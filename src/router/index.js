import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

const core = [{
  path: '/',
  name: 'home',
  component: Home,
}];

function shouldLoadModule(moduleName) {
  if (!process.env.VUE_APP_LOAD_MODULES) return true;
  const reg = new RegExp(process.env.VUE_APP_LOAD_MODULES);
  return reg.test(moduleName);
}

// only include necessary modules to increase performance during development
// inspired by https://github.com/pobusama
let modules = [];
const requireComponent = require.context('./');

requireComponent.keys().filter(name => /.js$/.test(name)).forEach((name) => {
  const r = requireComponent(name);
  if (r.default && shouldLoadModule(name)) {
    modules = modules.concat(r.default);
  }
});

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...core,
    ...modules,
  ],
});
