import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import DefaultLayout from './layouts/default'

Vue.config.productionTip = false

Vue.component('default-layout', DefaultLayout)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
