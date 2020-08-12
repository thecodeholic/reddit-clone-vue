import Vue from 'vue'
import Vuex from 'vuex'
import posts from './posts';
import user from './user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    posts,
    user
  }
})

export default store;