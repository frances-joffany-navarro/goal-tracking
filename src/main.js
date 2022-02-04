import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

//StyleSheet
import '@/assets/style.css';

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSeedling)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
