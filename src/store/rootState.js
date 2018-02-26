const state = {
  consumer: {},
  isLogin: false,
  subscriptions: '', // 初始值为空
  trialCars: '',
  articles: '',
  loadMore: {
    pageNum: 1,
    hasMore: true,
    noMore: false,
    loading: false
  },
  trialCar: '',
  tab: 'tab1'
}
export default state
