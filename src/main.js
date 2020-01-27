import Vue from 'vue'
import * as VeeValidate from 'vee-validate'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faLinkedinIn, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VeeValidate);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
