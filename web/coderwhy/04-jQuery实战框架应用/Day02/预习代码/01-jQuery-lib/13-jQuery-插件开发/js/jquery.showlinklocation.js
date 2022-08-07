// 立即执行函数
;(function(window, jQuery) {

    // 方案一：
    // // 1.给jQuery的原型上添加方法
    // jQuery.fn.showlinklocation = function() {
    //   // this 是jQuery 对象
    //   this.append('(https://www.liujun.com)')
    // }

    // 方案二：
    // // 1.给jQuery的原型上添加方法
    // jQuery.fn.showlinklocation = function() {
    //   // this 是jQuery 对象
    //   this.filter('a').append('(https://www.liujun.com)')
    // }

    // 方案三：
    // // 1.给jQuery的原型上添加方法
    // jQuery.fn.showlinklocation = function() {
    //   // this 是jQuery 对象
    //   this.filter('a').each(function(index) {
    //     var $link = $(this)
    //     $link.append('(https://www.liujun.com)')
    //   })
    // }

    // 最终方案：
    // 1.给jQuery的原型上添加方法
    // jQuery.fn.showlinklocation = function() {
    //   // this 是jQuery 对象
    //   this.filter('a').each((index, element) => {
    //     // 这里的this是原型对象, 拿到每一个a元素
    //     var $link = $(this)
    //     // 给a元素的尾部添加 文本
    //     $link.append( "( "+ $link.attr('href') +"  )" )
    //   })
    // }
})(window, jQuery)