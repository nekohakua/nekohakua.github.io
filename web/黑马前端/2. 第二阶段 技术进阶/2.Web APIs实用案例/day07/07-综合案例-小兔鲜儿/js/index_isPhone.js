!(function () {
    const userAgent = navigator.userAgent
    const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
    const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)

    if (android || iphone) {
        location.href = 'https://www.baidu.com/'
    }
})()