import Vue from 'vue'
import Vuex from 'vuex'
import VueFilter from 'vue-filter';
import App from './App.vue'
import { store } from './store/store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

import routes from './router/routes'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueFilter)
Vue.use(Vuex)
Vue.use(VueRouter)


Vue.config.productionTip = false

// const router = new VueRouter({routes});
const router = new VueRouter({mode: 'history', routes});
new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
