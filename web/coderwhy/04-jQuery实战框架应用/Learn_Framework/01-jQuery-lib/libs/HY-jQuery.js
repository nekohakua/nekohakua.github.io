/**
 * Created by liujun on 2022/06/03
 */
;(function (global, factory) {
  factory(global)
})(window, function (window) {
  var HYjQuery = function (selector) {
    return new HYjQuery.fn.init(selector)
  }

  HYjQuery.fn = HYjQuery.prototype = {
    constructor: HYjQuery,
    init: function (selector) {
      // 1.传入 '' null undefined NaN  0  false  或者 不传递参数
      if (selector == undefined || !selector) {
        return this
      } else if (HYjQuery.isFunction(selector)) {
        HYjQuery.ready(selector)
      } else if (HYjQuery.isString(selector)) {
        selector = HYjQuery.trim(selector)
        // 判断是否是html字符串
        if (HYjQuery.isHtml(selector)) {
          var temp = document.createElement('div')
          temp.innerHTML = selector
          //数组 转成 类数组, 并添加到 this中
          [].push.apply(this, temp.children)
        } else {
          // 简单的选择器引擎
          var nodes = document.querySelectorAll(selector)
          for (var i = 0, len = nodes.length; i < len; i++) {
            this[i] = nodes[i]
          }
          this.length = nodes.length
        }
        return this
      } else if (HYjQuery.isLikeArray(selector)) {
        var temp = [].slice.call(selector) // 类数组转成数组
        [].push.apply(this, temp)
        return this
      } else {
        // 其它情况(包含:dom,对象,基本数据类型的处理)
        this[0] = selector
        this.length = 1
        return this
      }
    },
    //在这里扩展 HYjQuery 原型上其它的属性
    HYjQuery: '1.0',
    selector: '',
    length: 0,
    //在这里扩展 jQuery 原型上其它的方法
    toArray: function () {
      // 将类数组转成数组
      return [].slice.call(this)
    },
    get: function (index) {
      // 1. 判断有没有传递参数
      if (arguments.length == 0) {
        return this.toArray()
      } else if (index >= 0) {
        return this[index]
      } else {
        return this[this.length + index]
      }
    },
    eq: function (index) {
      // 1.判断有没有传递参数
      if (arguments.length == 0) {
        return $()
        //2.有参数
      } else {
        return $(this.get(index))
      }
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    // 借用数组中的push方法
    push: [].push,
    sort: [].sort,
    splice: [].splice,
    each: function (fn) {
      $.each(this, fn)
    },
    map: function (fn) {
      $.map(this, fn)
    }
  }
  // 修改init函数的原型为jQ函数的原型
  HYjQuery.fn.init.prototype = HYjQuery.fn

  // 给jQ函数以及jQ原型扩展方法
  HYjQuery.extend = HYjQuery.fn.extend = function (obj) {
    // 遍历取出传入对象的key和value
    for (var key in obj) {
      this[key] = obj[key]
    }
  }

  if (typeof window === 'object' && typeof window.document === 'object') {
    window.HYjQuery = window.$ = HYjQuery
  }
  // 给HYjQuery函数,添加静态函数
  HYjQuery.extend({
    //判断是否是一个字符串
    isString: function (str) {
      return typeof str === 'string'
    },
    //判断是否是一个html代码片段
    isHtml: function (html) {
      return (
        html.charAt(0) == '<' &&
        html.charAt(html.length - 1) == '>' &&
        html.length >= 3
      )
    },
    //去除前后的空格
    trim: function (str) {
      //1.判断当前浏览器是否支持该函数
      if (str.trim) {
        return str.trim(str)
        //2.ie 8 以下不支持trim()函数
      } else {
        return str.replace('/^s+|s+$/g', '')
      }
    },
    //判断是否是真数组或者是伪数组。是返回true
    isLikeArray: function (arr) {
      //1.先排除window ,function对象和非对象的情况
      if (
        !HYjQuery.isObject(arr) &&
        HYjQuery.isFunction(arr) &&
        HYjQuery.isWindow(arr)
      ) {
        //非数组
        return false
        //2.数组
      } else if (HYjQuery.isArray(arr)) {
        return true
        //3.类数组
      } else if (
        HYjQuery.isObject(arr) &&
        'length' in arr &&
        arr.length - 1 in arr
      ) {
        return true
        //3.非数组
      } else {
        return false
      }
    },
    //判断对象是否是window对象
    isWindow: function (w) {
      return w === window.window
    },
    //判断是否是对象
    isObject: function (obj) {
      return obj != null && typeof obj === 'object'
    },
    //判断是否是一个function
    isFunction: function (fn) {
      return fn != null && typeof fn === 'function'
    },
    //判断是否是一个数组
    isArray: function (arr) {
      return {}.toString.call(arr) === '[object Array]'
    },
    //监听文档是否加载完毕
    ready: function (fn) {
      // 1.直接判断文档是否加载完毕
      if (document.readyState == 'complete') {
        fn()
      }
      // 2.添加监听
      // 2.1判断是否支持addEventListener
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn)
      }
      // 2.2如果不支持就通过attachEvent
      else {
        document.attachEvent('onreadystatechange', function () {
          // 为了避免重复执行, 需要判断当前的状态是否已经加载完毕
          if (document.readyState == 'complete') {
            fn()
          }
        })
      }
    },
    // 遍历指定的对象
    each: function (obj, fn) {
      // 1.遍历 真/伪数组
      if (HYjQuery.isLikeArray(obj)) {
        for (var i = 0, len = obj.length; i < len; i++) {
          var result = fn.call(obj[i], i, obj[i]) // this 代表是value
          if (result == false) {
            break
          }
        }
      } else {
        for (var key in obj) {
          // 2.遍历对象
          var result = fn.call(obj[key], key, obj[key]) // this 代表是value
          if (result == false) {
            break
          }
        }
      }
    },
    map: function (obj, fn) {
      // 1.定义一个数组, 用于保存fn函数返回的数据
      var res = []
      // 2.遍历数组(数组/类数组)
      if (HYjQuery.isLikeArray(obj)) {
        for (var i = 0, len = obj.length; i < len; i++) {
          var result = fn(obj[i], i) //获取回调函数返回的结果
          res.push(result) // 把返回的结果存在一个新的数组中
        }
      } else {
        // 3.遍历对象
        for (var key in obj) {
          var result = fn(obj[key], key) //获取回调函数返回的结果
          res.push(result) // 把返回的结果存在一个新的数组中
        }
      }
      //4.返回新的数组
      return res
    }
  })
})
