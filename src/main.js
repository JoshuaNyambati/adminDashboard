import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import routes from './routes/routes'
import { store } from './store/store'


Vue.config.productionTip = false

Vue.use(VueAxios,axios)
Vue.use(VueRouter)

const router = new VueRouter({routes})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
