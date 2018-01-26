import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Tabs from '../pages/Tabs'
import UserInfo from '../pages/UserInfo'
import TrialCars from '../pages/TrialCars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tabs',
      component: Tabs
    }, {
      path: '/trialCars',
      name: 'TrialCars',
      component: TrialCars
    }, {
      path: '/userInfo',
      name: 'UserInfo',
      component: UserInfo
    }, {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  mode: 'history'
})
