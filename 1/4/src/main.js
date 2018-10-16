// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

Vue.config.productionTip = false
Vue.prototype.HOST = '/api'
Vue.use(BootstrapVue)
Vue.use(VideoPlayer)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data:{
  	eventHub: new Vue()
  }
})
