// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
 require('./assets/css/bootstrap.min.css')
 require('./assets/css/font-awesome.min.css')
 require('./assets/css/flaticon.css')
 require('./assets/css/font-linearicons.css')
 require('./style.css')
 require('./assets/css/travel-setting.css')
 require('./images/favicon.png')

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
