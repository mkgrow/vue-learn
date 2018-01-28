import reqwest from 'reqwest'

// reqwest,一个封装了promise的异步请求插件
// 需要cnpm install reqwest --save

export const getSubscriptions = ({ commit }) => {
  reqwest({
    url: `${process.env.API_ROOT}subscriptions.json`,
    method: 'get',
    contentType: 'application/json',
    crossOrigin: true,
    data: '参数',
    dataType: 'json'
  }).then(subscriptions => {
    commit({
      type: 'getSubscriptions', // 这个type很重要，vue会自动去找mutations.js中名为getMsg的方法
      subscriptions // 成功后把得到的数据通过commit传入mutations
    })
  })
}

export const getTrialCars = ({ commit }) => {
  reqwest({
    url: `${process.env.API_ROOT}trial_cars.json`,
    method: 'get',
    contentType: 'application/json',
    crossOrigin: true,
    data: '参数',
    dataType: 'json'
  }).then(trialCars => {
    commit({
      type: 'getTrialCars', // 这个type很重要，vue会自动去找mutations.js中名为getMsg的方法
      trialCars // 成功后把得到的数据通过commit传入mutations
    })
  })
}

export const getTrialCar = ({ commit }, {id}) => {
  reqwest({
    url: `${process.env.API_ROOT}trial_cars/${id}.json`,
    method: 'get',
    contentType: 'application/json',
    crossOrigin: true,
    data: '参数',
    dataType: 'json'
  }).then(trialCar => {
    commit({
      type: 'getTrialCar', // 这个type很重要，vue会自动去找mutations.js中名为getMsg的方法
      trialCar // 成功后把得到的数据通过commit传入mutations
    })
  })
}
