const state = {
  consumer: {},
  isLogin: false,
  subscriptions: '', // 初始值为空
  trialCars: '',
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
