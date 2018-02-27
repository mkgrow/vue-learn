// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import './assets/styles/index.scss'
import SearchBar from './components/SearchBar'
import CountDown from './components/CountDown'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.component('search-bar', SearchBar)
Vue.component('count-down', CountDown)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
