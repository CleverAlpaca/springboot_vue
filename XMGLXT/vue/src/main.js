import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/gloable.css'
import store from './store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.config.productionTip = false

Vue.use(ElementUI, { size: "small" });