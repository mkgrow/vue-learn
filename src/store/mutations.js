export const getSubscriptions = (state, payload) => {
  state.subscriptions = payload.subscriptions
}

export const getTrialCars = (state, payload) => {
  let trialCars = {pageNum: state.trialCars.pageNum}
  trialCars.count = payload.trialCars.count
  trialCars.links = payload.trialCars.links
  trialCars.data = (state.trialCars.data || []).concat(payload.trialCars.data)
  state.trialCars = trialCars
  state.trialCars.pageNum++
  if (payload.trialCars.links.next) {
    state.loadMore.hasMore = true
    state.loadMore.loading = true
  } else {
    state.loadMore.hasMore = false
    state.loadMore.noMore = true
    state.loadMore.loading = false
  }
}

export const getTrialCar = (state, payload) => {
  state.trialCar = payload.trialCar
}

export const getConsumer = (state, payload) => {
  state.consumer = payload.consumer
}

export const getArticles = (state, payload) => {
  let articles = {pageNum: state.articles.pageNum}
  articles.count = payload.articles.count
  articles.links = payload.articles.links
  articles.data = (state.articles.data || []).concat(payload.articles.data)
  state.articles = articles
  state.articles.pageNum++
  if (payload.articles.links.next) {
    state.loadMore.hasMore = true
    state.loadMore.loading = true
  } else {
    state.loadMore.hasMore = false
    state.loadMore.noMore = true
    state.loadMore.loading = false
  }
}

export const getArticle = (state, payload) => {
  state.article = payload.article
}

export const getSales = (state, payload) => {
  let sales = {pageNum: state.sales.pageNum}
  sales.count = payload.sales.count
  sales.links = payload.sales.links
  sales.data = (state.sales.data || []).concat(payload.sales.data)
  state.sales = sales
  state.sales.pageNum++
  if (payload.sales.links.next) {
    state.loadMore.hasMore = true
    state.loadMore.loading = true
  } else {
    state.loadMore.hasMore = false
    state.loadMore.noMore = true
    state.loadMore.loading = false
  }
}
