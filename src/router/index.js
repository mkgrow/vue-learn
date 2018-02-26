import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Tabs from '../pages/Tabs'
import UserInfo from '../pages/UserInfo'
import TrialCars from '../pages/TrialCars'
import Articles from '../pages/Articles'
import TrialCarDetail from '../pages/TrailCarDetail'
import Login from '../pages/Login'
import Setting from '../pages/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tabs',
      component: Tabs
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }, {
      path: '/trial-cars',
      name: 'TrialCars',
      component: TrialCars
    }, {
      path: '/articles',
      name: 'Articles',
      component: Articles
    }, {
      path: '/trial-cars/:id',
      name: 'TrialCarDetail',
      component: TrialCarDetail,
      props: true
    }, {
      path: '/user-info',
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
