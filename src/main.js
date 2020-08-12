import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/bootstrap';
import './plugins/font-awesome';
import store from './vuex/index';
// import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
