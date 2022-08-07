# Day01 作业布置

## 一. 完成课堂所有的代码

01-安装使用--CDN

```js
 <!-- 使用CDN方式引入,执行下面的js文件 -->
    <!--1. window.jQuery 函数,工厂函数 -->
    <!-- 2.window.$ 函数 -->
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script>
      console.log(jQuery);
      console.log($);
      console.log(jQuery === $);
      document.querySelector("body").textContent = "hello world";
      //用jQuery
      jQuery("body").text("hello jQuery");
</script>
```

02-jQuery安装-下载源码引入

```js
<script src="../libs/jquery-3.6.0.js"></script>
<script>
      $("body").text("hello world");
      const $body = jQuery("body");
      $body.text("你好啊");
</script>
```

03-原生实现-计数器

```js
<button class="add">+</button>
<span>0</span>
<button class="sub">-</button>
<script>
      const addEl = document.querySelector(".add");
      const subEl = document.querySelector(".sub");
      const spanEl = document.querySelector("span");
      let count = 0;
      addEl.onclick = function () {
        spanEl.textContent = ++count;
      };
      subEl.onclick = function () {
        spanEl.textContent = --count;
      };
</script>
```

04-jQuery 实现计数

```js
    <button class="add">+</button>
    <span>0</span>
    <button class="sub">-</button>
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      const $add = $(".add");
      const $sub = $(".sub");
      const $span = $("span");
      let count = 0;
      $add.on("click", function () {
        $span.text(++count);
      });
      $sub.on("click", function () {
        $span.text(--count);
      });
    </script>
```

05-原生实现计数器--问题

```js
   <script>
      // load:文档加载事件,所有文件包括所有外部文件加载完毕(图片,样式)
      window.onload = function () {
        const addEl = document.querySelector(".add");
        const subEl = document.querySelector(".sub");
        const spanEl = document.querySelector("span");
        let count = 0;
        addEl.onclick = function () {
          spanEl.textContent = ++count;
        };
        subEl.onclick = function () {
          spanEl.textContent = --count;
        };
      };
    </script>
    <button class="add">+</button>
    <span>0</span>
    <button class="sub">-</button>
```

06-jQuery-监听文档加载

```js
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      // //jQuery监听document的DOMContentLoaded事件的四种方案
      //1.方式一
      $(document).ready(function () {
        $(".box").text("hello");
      });
      //方式二:
      $("document").ready(function () {
        $(".box").text("hi");
      });
      //方式三
      $().ready(function () {
        $(".box").text("你好");
      });
      //方式四.更推荐
      $(function () {
        $(".box").text("hello world");
      });
      //监听window的load事件，即网页所有资源（外部连接，图片等）加载完
      $(window).on("load", function () {
        const $add = $(".add");
        const $sub = $(".sub");
        const $span = $("span");
        let count = 0;
        $add.on("click", function () {
          $span.text(++count);
        });
        $sub.on("click", function () {
          $span.text(--count);
        });
      });
    </script>
    <div class="box">我是Box</div>
    <button class="add">+</button>
    <span>0</span>
    <button class="sub">-</button>
```

07-jQuery实现计数器-优化

```js
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      //监听文件加载,类似于DOMContentLoaded
      $(function () {
        const $add = $(".add");
        const $sub = $(".sub");
        const $span = $("span");
        let count = 0;
        $add.on("click", function () {
          $span.text(++count);
        });
        $sub.on("click", function () {
          $span.text(--count);
        });
      });
    </script>
    <button class="add">+</button>
    <span>0</span>
    <button class="sub">-</button>
```

08-监听window的load

```js
<script src="../libs/jquery-3.6.0.js"></script>
    <script>
      // 监听window的load事件,网页的所有资源,包括外部资源,图片都加载完
      $(window).on("load", function () {
        console.log("图片加载完成");
      });
    </script>
    <img src="https://img12.360buyimg.com/seckillcms/s140x140_jfs/t1/134551/23/21384/49746/6177c793E9de1ff88/af975a055053ace0.jpg.webp"
    />
```

10-jQuery-变量名jQuery冲突

```js
<!-- window.$ = "我是fwf-utils" -->
    <script src="utils/hy-utils.js"></script>

    <!-- _$ =之前备份的window.$--"我是fwf" -->
    <!-- _jQuery=之前备份的window.jQuery--我是fwf-utils -->
    <!-- window.$= function.. -->
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      console.log(jQuery); //function
      console.log("%O", jQuery); //function
      // 解决变量$的冲突,传入true,会恢复之前备份的jQuery,因为源码中有个deep
      // 返回jQuery--function
      const newjQuery = $.noConflict(true);
      console.log(jQuery);
      console.log(newjQuery);
    </script>
```

11-jQ函数和参数

```js
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      // jQuery是一个工厂函数
      // 1.传入假值"",null,NaN,null,undefined
      console.log(jQuery(""));
      console.log(jQuery(undefined));
      console.log(jQuery(null));
      //2. 传入选择器
      console.log(jQuery("body"));
      console.log(jQuery("li", "ul"));
      //3.传入HTML字符串,返回包含新创建元素的结合
      const $div = jQuery("<div>");
      console.log($div);
      const $p = jQuery(`<p>我是段落</p>`);
      $p.appendTo("body");
      console.log($p);
      // 4.传入元素类型
      const ulEl = document.querySelector("ul");
      console.log(jQuery(ulEl));
      //5.传入函数 ,监听文档加载,返回
      const $doc = $(function () {
        console.log("监听文档加载");
      });
      console.log(jQuery($doc));
    </script>
```

12-jQ对象

```js
    <ol>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ol>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      //1.新建一个空的jQ对象
      console.log($());
      //2.新建一个包含document元素的jQuery元素
      console.log($(document));
      // 3.创建一个匹配到多个li元素的集合--jQ对象
      console.log($("li", document.querySelector("ul")));
    </script>
```

13-区别

```js
    <script>
      // jQuery对象是一个类数组对象,该对象中包含所选中的DOM Element的集合
      const bodyEl = document.querySelector("body");
      const $body = $("body");
      console.log("%O", bodyEl);
      console.log($body);
      console.log($(document));
      console.log("%O", document);
    </script>
```

14-jQuery对象和DOM-Element的转换

```js
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      //1.jQuery对象转为DOM Element
      const $li = $("ul>li");
      console.log($li);
      //方法一 :用索引
      console.log($li[3]);
      // 方法二: 用get
      // 获取到匹配元素集合中所有的元素
      console.log($li.get());
      //获取到匹配元素集合中,某一个元素
      console.log($li.get(3));
      // 2.DOM Element 转成 jQuery对象
      const ulEl = document.querySelector("ul");
      console.log($(ulEl));
      console.log($(ulEl).get(0));
    </script>
```

15-设置模板

```
   <ul class="list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      //1.监听文档完全加载完毕
      $(function () {});
    </script>
```

16-jQuery的选择器

```js
   <ul class="list">
      <li id="one">1</li>
      <li title="two">2</li>
      <li class="three">3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      //1.监听文档完全加载完毕
      $(function () {
        //2.基本选择器
        console.log($("#one"));
        console.log($(".list"));
        console.log($("li"));
        //3.属性选择器
        console.log($("[title]"));
        //4.后代选择器
        console.log($(".list>#one"));
        //5.兄弟选择器
        console.log($(".three + li"));
        //6.交集
        console.log($("ul.list"));
        //7.伪类
        console.log($("ul li:nth-child(1)"));
        //8.扩展
        // li索引为1
        console.log($("ul li:eq(1)"));
        //奇数
        console.log($("ul li:odd()"));
        //偶数
        console.log($("ul li:even()"));
        //第一个
        console.log($("ul li:first"));
        //最后一个
        console.log($("ul li:last"));
      });
    </script>
```

17-过滤器

```html
   <ul class="list">
      <li>1</li>
      <li>2</li>
      <li class="item3">3</li>
      <li class="item">4</li>
      <li class="item">5</li>
    </ul>
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      //1.监听文档完全加载完毕
      $(function () {
        //过滤器--原型上的方法
        //1.eq-索引为0
        console.log($("ul>li").eq(0));
        // 选择器
        console.log($("li:eq(0)"));
        //2.first
        console.log($("li").first());
        //3.last
        console.log($("li").last());
        //4. not(选择器)
        console.log($("li").not(".item3"));
        //5.filter
        console.log($("li").filter(".item3"));
        //6.find 匹配到的后代元素
        console.log($("ul").find(".item"));
        //7.odd 和even
        console.log($("li").even());
        console.log($("li").odd());
        //8.支持链式调用
        console.log($("li").even().filter(".item3"));
      });
    </script>
```

18-文本操作-text

```js
   <script>
      //1.监听文档完全加载完毕
      $(function () {
        // 所有的li
        console.log($("li").text());
        console.log($("ul").text());
        //设置文本,会给匹配元素集合中所有的元素添加文本
        $("ul>li").text("哈哈哈");
      });
    </script>
```

19-文本的操作-html

```html
    <ul class="list">
      <li>1</li>
      <li>
        222
        <span>aaa</span>
        <span>bbb</span>
        <span>ccc</span>
      </li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      //1.监听文档完全加载完毕
      $(function () {
        //1.匹配到元素集合中第一个元素的HTML内容
        console.log($(".list li").html());
        console.log($("span").html());
        //2.设置每个匹配元素的HTML内容
        $("ul li").html(`<p>我是段落<a href="#">点击一下</a></p>`);
      });
    </script>
```

20-设置文本-val

```html
<ul class="list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>

    用户名<input type="text" name="username" class="username" /><br />
    密码<input type="password" name="password" class="password" /><br />
    <button class="login">登录</button>
    <button class="setVal">设置表单值</button>

    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      //1.监听文档完全加载完毕
      $(function () {
        //2.点击登陆,获取表单值
        $(".login").click(function () {
          console.log($(".username").val());
          console.log($(".password").val());
        });
        //3.点击设置值按钮
        $(".setVal").click(function () {
          $(".username").val("小红");
          $(".password").val("111");
        });
      });
    </script>
```

21-css操作-width

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      li {
        width: 100px;
        height: 80px;
        background-color: pink;
        color: orange;
        padding: 5px;
        margin: 10px;
        border: 2px solid #333;
      }
      li:nth-child(1) {
        padding: 10px;
        border: 8px solid #333;
      }
    </style>
  </head>
  <body>
    <ul class="list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      //1.监听文档完全加载完毕
      $(function () {
        //2.width().获取到匹配元素集合中的第一个元素的宽度
        //width: content ;
        //100
        console.log($(".list li").width());
        //innerWidth:padding + content;
        console.log($(".list li").innerWidth());
        //outerWidth: border + padding + content
        console.log($(".list li").outerWidth());
        //3.设置宽度,设置每个匹配的元素的宽度,number/string
        $(".list li").width(50);
        $(".list li").width("50%");
        $(".list li").width("100px");
        console.log($(".list li").width());
        //4.height().获取到匹配元素集合中的第一个元素的高度
        // height: content ;
        console.log($(".list li").height());
        //5.设置高度,给每个匹配到元素的高度
        $(".list li").height(200);
        console.log($(".list li").height());
      });
    </script>
  </body>
</html>

```

22-css操作-css

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      li {
        width: 100px;
        height: 80px;
        background-color: pink;
        color: orange;
        padding: 5px;
        margin: 10px;
        border: 2px solid #333;
      }
      li:nth-child(1) {
        padding: 10px;
        border: 8px solid #333;
      }
    </style>
  </head>
  <body>
    <ul class="list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      //1.监听文档完全加载完毕
      $(function () {
        //2.css获取匹配到元素集中第一个元素样式属性的值
        //100px,带单位
        console.log($("ul li").css("width"));
        console.log($("ul li").width()); //100,number,不带单位
        //2.1获取多个样式,
        // 返回字符串{padding: '10px', border: '8px solid rgb(51, 51, 51)'}
        console.log($("ul li").css(["padding", "border"]));

        //3.设置一个或者多个css属性
        //会添加到style属性上
        $("ul li").css({
          "font-size": "30px",
          width: 200,
        });
        //所有的li的颜色为红色,奇数的li颜色是绿色
        $("ul li").css("color", "red").odd().css("color", "green");
      });
    </script>
  </body>
</html>

```

23-class操作

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .active {
        color: red;
      }
      .item {
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <ul class="list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <button>切换</button>
    <script src="../libs/jquery-3.6.0.js"></script>
    <script>
      //1.监听文档完全加载完毕
      $(function () {
        //1.添加类
        $("ul li:nth-child(1)").addClass("active");
        $("li").even().addClass("item");
        //2.判断是否存在某个class
        //默认第一个
        const isExit = $("ul li").hasClass("active");
        console.log(isExit);
        //3.删除
        //3.1删除全部li的类名
        // $("ul li").removeClass();
        //3.2删除某一个class
        $("ul li:nth-child(1)").removeClass("active");
        //4.切换
        $("button").click(function () {
          $("ul").toggleClass("active");
        });
      });
    </script>
  </body>
</html>

```

24-HYjQuery.js

```js
//1.立即执行函数--防止全局变量的命名冲突
//2.参数:window??减少变量查找所经过的scope作用域,把它当做局部变量,查找的更快
//参数二:回调函数
(function (global, factory) {
  factory(global);
})(window, function (window) {
  //3.定义jQuery函数
  function HYjQuery(selector) {
    //返回jQ对象
    return new HYjQuery.fn.init(selector);
  }
  //备份原来的
  // let _jQuery = window.jQuery;
  // let _$ = window.$;
  //4.原型上的方法
  HYjQuery.prototype = {
    constructor: HYjQuery,
    hasClass: function () { },
    text: function () { },
  };
  //5.类方法
  //解决变量冲突
  HYjQuery.noConfict = function () { };
  HYjQuery.isArray = function () { };
  //6.构造函数--创建jQuery对象
  HYjQuery.fn = HYjQuery.prototype;
  HYjQuery.fn.init = function (selector) {
    var el = document.querySelector(selector);
    this[0] = el;
    this.length = 1;
    console.log("this==", this);
    return this;
  };
  //HYjQuery.fn=HYjQuery.fn.init.prototype=HYjQuery.prototype,
  //所有使用 new jQuery.fn.init() 生成的对象也能够访问到 jQuery.fn 上的所有原型方法
  HYjQuery.fn.init.prototype = HYjQuery.fn;
  window.HYjQuery = window.$ = HYjQuery;
});

```



## 二.jQuery函数和jQuey对象分别是什么？

* jQuery是一个工厂函数( 别名$ )，调用该函数，会根据传入参数类型来返回匹配到元素的集合，一般把该集合称为jQuery对象

* jQuery对象是一个包含所匹配到元素的集合，该集合是类数组(array-like)对象
* jQuery对象是通过调用jQuery函数来创建的
* 源码通过 调用jQuery函数--返回jQuery.fn.init(selector)构造函数--创建jQuery对象,
* 通过jQuery.fn=jQuery.fn.init.prototype=jQuery.prototype=jQuery对象.__proto__,让所有使用 new jQuery.fn.init() 生成的对象也能够访问到 jQuery.fn 上的所有原型方法

## 三.jQuery对象和DOM Element有什么区别？

* 获取方式不同
  * DOM Element 是通过原生方式获取，例如：document.querySelector()
  * jQuery对象是通过调用jQuery函数获取，例如：jQuery(' ')
* jQuery对象是一个类数组对象，该对象中会包含所选中的DOM Element的集合
* jQuery对象的原型上扩展非常多实用的方法，DOM Element 则是W3C规范中定义的属性和方法



## 四.jQuery中常用的过滤器有哪些（Filtering）

* .eq(index): 从匹配元素的集合中，取索引处的元素， eq全称(equal 等于)，返回jQuery对象。

* .first() : 从匹配元素的集合中，取第一个元素，返回jQuery对象。

* .last(): 从匹配元素的集合中，取最后一个元素，返回jQuery对象。

* .not(selector): 从匹配元素的集合中，删除匹配的元素，返回jQuery对象。

* .filter(selector): 从匹配元素的集合中，过滤出匹配的元素，返回jQuery对象。

* .find(selector): 从匹配元素集合中，找到匹配的后代元素，返回jQuery对象。
* .odd() :将匹配到元素的集合减少为集合中的奇数，从零开始编号，返回jQuery对象。
* .even()：将匹配到元素的集合减少到集合中的偶数，从零开始编号，返回jQuery对象



```js
<script>
      //1.监听文档完全加载完毕
      $(function () {
        //过滤器--原型上的方法
        //1.eq-索引为0
        console.log($("ul>li").eq(0));
        // 选择器
        console.log($("li:eq(0)"));
        //2.first
        console.log($("li").first());
        //3.last
        console.log($("li").last());
        //4. not(选择器)
        console.log($("li").not(".item3"));
        //5.filter
        console.log($("li").filter(".item3"));
        //6.find 匹配到的后代元素
        console.log($("ul").find(".item"));
        //7.odd 和even
        console.log($("li").even());
        console.log($("li").odd());
        //8.支持链式调用
        console.log($("li").even().filter(".item3"));
      });
</script>
```















