import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Tabs from '../pages/Tabs'
import UserInfo from '../pages/UserInfo'
import TrialCars from '../pages/TrialCars'
import TrialCarDetail from '../pages/TrailCarDetail'
import TrailCarOrder from '../pages/TrailCarOrder'
import SelectAddress from '../pages/SelectAddress'
import Sales from '../pages/Sales'
import SaleDetail from '../pages/SaleDetail'
import Articles from '../pages/Articles'
import ArticleDetail from '../pages/ArticleDetail'
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
      path: '/trial-cars/:id',
      name: 'TrialCarDetail',
      component: TrialCarDetail,
      props: true
    }, {
      path: '/trial-car-order/:id',
      name: 'TrailCarOrder',
      component: TrailCarOrder
    }, {
      path: '/select-address/:id',
      name: 'SelectAddress',
      component: SelectAddress
    }, {
      path: '/articles',
      name: 'Articles',
      component: Articles
    }, {
      path: '/articles/:id',
      name: 'ArticleDetail',
      component: ArticleDetail,
      props: true
    }, {
      path: '/user-info',
      name: 'UserInfo',
      component: UserInfo
    }, {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/sales',
      name: 'Sales',
      component: Sales
    }, {
      path: '/sales/:id',
      name: 'saleDetail',
      component: SaleDetail,
      props: true
    }
  ],
  mode: 'history'
})
