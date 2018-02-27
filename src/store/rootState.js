const state = {
  consumer: {},
  isLogin: false,
  subscriptions: '', // 初始值为空
  trialCars: {
    pageNum: 1
  },
  sales: {
    pageNum: 1
  },
  articles: {
    pageNum: 1
  },
  loadMore: {
    hasMore: true,
    noMore: false,
    loading: false
  },
  trialCar: '',
  article: '',
  tab: 'tab1'
}
export default state
