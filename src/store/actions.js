import reqwest from 'reqwest'

// reqwest,一个封装了promise的异步请求插件
// 需要npm install reqwest --save

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

export const getTrialCars = ({ commit }, { page }) => {
  reqwest({
    url: `${process.env.API_ROOT}trial_cars?format=json&page=${page}`,
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

export const getArticles = ({ commit }, { page }) => {
  reqwest({
    url: `${process.env.API_ROOT}articles?&format=json&page=${page}`,
    method: 'get',
    contentType: 'application/json',
    crossOrigin: true,
    data: 'q[news_owner_id_eq]=1',
    dataType: 'json'
  }).then(articles => {
    console.log(articles)
    commit({
      type: 'getArticles', // 这个type很重要，vue会自动去找mutations.js中名为getMsg的方法
      articles // 成功后把得到的数据通过commit传入mutations
    })
  })
}

export const codeLogin = ({ commit }, {phone, code}) => {
  reqwest({
    url: `${process.env.API_ROOT}consumer?phone=${phone}&code=${code}`,
    type: 'json',
    method: 'post',
    contentType: 'application/json',
    crossOrigin: true
  }).then(consumer => {
    commit({
      type: 'getConsumer', // 这个type很重要，vue会自动去找mutations.js中名为getMsg的方法
      consumer // 成功后把得到的数据通过commit传入mutations
    })
  })
}
