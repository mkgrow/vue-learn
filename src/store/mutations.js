export const getSubscriptions = (state, payload) => {
  state.subscriptions = payload.subscriptions
}

export const getTrialCars = (state, payload) => {
  let trialCars = {}
  trialCars.count = payload.trialCars.count
  trialCars.links = payload.trialCars.links
  trialCars.data = (state.trialCars.data || []).concat(payload.trialCars.data)
  state.trialCars = trialCars
  state.loadMore.pageNum++
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
