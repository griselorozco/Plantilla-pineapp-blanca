// =========================================================
// * Vuetify Material Dashboard PRO - v2.0.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard-pro
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from '@/store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import './plugins/vue-world-map'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import VueLoading from 'vuejs-loading-plugin'
import Toasted from 'vue-toasted'
import * as VueGoogleMaps from 'vue2-google-maps'
import * as LocationPicker from 'vue2-location-picker'
import VAvatarUploader from 'vuetify-avatar-uploader'

Vue.config.productionTip = false
Vue.use(VueLoading)
Vue.use(Toasted, {
  iconPack: 'material', // set your iconPack, defaults to material. material|fontawesome|custom-class
})
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBLIV4-SCP5lvNAAuQ27ca0lKUgnvpn1dw',
    libraries: 'places',
  },
})
Vue.use(VAvatarUploader)
Vue.use(LocationPicker, {
  installComponents: true, // If true, create it globally
})

console.log(i18n)

export const EventBus = new Vue()

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
