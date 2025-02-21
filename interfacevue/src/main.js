import Vue from "vue"
import App from "./App.vue"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import axios from "axios"
import VueAxios from "vue-axios"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
new Vue({
  el: "#app",
  components: {},
  render: (h) => h(App),
})
