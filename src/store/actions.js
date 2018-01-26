import reqwest from 'reqwest'

// reqwest,一个封装了promise的异步请求插件
// 需要cnpm install reqwest --save

export const getSubscriptions = ({ commit }) => {
  reqwest({
    url: `http://carhot.cn/api/subscriptions.json`,
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
