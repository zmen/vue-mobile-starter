import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    ...modules,
  },
});
