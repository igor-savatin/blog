import Vue from 'vue'
import Vuex from 'vuex'
import VueFilter from 'vue-filter';
import App from './App.vue'
import { store } from './store/store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueFilter)
Vue.use(Vuex)



Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
