// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Vuetify from 'vuetify'
import('../node_modules/vuetify/dist/vuetify.min.css')
// import('../node_modules/vuetify/src/stylus/main.styl')
Vue.use(Vuetify)
Vue.use(iView);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
