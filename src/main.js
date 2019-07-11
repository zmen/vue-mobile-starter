import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './vuex';
import '@/styles/main.scss';
import '@/styles/base.scss';

import registerBaseComponent from '@/components/base';

registerBaseComponent(Vue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
