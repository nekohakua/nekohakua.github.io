;(function(window, $) {

  function request(config) {
    // 返回一个Promise
    return $.ajax({
      timeout: config.timeout || 5000,
      url: config.url || '',
      method: config.method || 'GET',
      data: config.data || {},
      headers: config.headers || {}
    })
  }

  function get(url, data = {}, config = {}) {
    // 返回一个Promise
    return request({
      url,
      method: 'GET',
      data,
      ...config
    })
  }

  function post(url, data = {}, config = {}) {
    return request({
      url,
      method: 'POST',
      data,
      ...config
    })
  }


  window.HyReq = {
    request,
    get,
    post
  }

})(window, jQuery)