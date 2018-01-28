export const getSubscriptions = (state, payload) => {
  state.subscriptions = payload.subscriptions
}

export const getTrialCars = (state, payload) => {
  state.trialCars = payload.trialCars
}

export const getTrialCar = (state, payload) => {
  state.trialCar = payload.trialCar
}
