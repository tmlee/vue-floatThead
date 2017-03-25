// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FloatThead from '../../dist/vue-floatthead.js'

Vue.config.productionTip = false

Vue.use(FloatThead)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><App/></div>',
  components: { App }
})
