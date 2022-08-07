# Day03 作业布置

## 一. 完成课堂所有的代码

01-AJAX初体验

```js
<script>
      //1.监听文档完全加载完毕
      $(function () {
        //1.get
        const p = $.ajax({
          url: "https://httpbin.org/get",
          //不区分大小写
          method: "get",
          success(res) {
            console.log("res--", res);
          },
          error(err) {
            console.log(err);
          },
        });
        console.log(p);
        //2.post
        $.ajax({
          url: "https://httpbin.org/post",
          method: "post",
          success(res) {
            console.log("res", res);
          },
          error(err) {
            console.log("err", err);
          },
        });
        //3.put --更新
        $.ajax({
          url: "https://httpbin.org/put",
          method: "put",
          // 期望浏览器端发挥的数据类型,默认会根据响应的类型来自动的推断类型
          // dataType: "json",
          success(res) {
            console.log("res", res);
          },
          error(err) {
            console.log("err", err);
          },
        });
        //4.删除-delete
        $.ajax({
          url: "https://httpbin.org/delete",
          method: "delete",
          success(res) {
            console.log("res", res);
          },
          error(err) {
            console.log("err", err);
          },
        });
      });
</script>
```

02-请求发生错误

```js
<script>
      //1.监听文档完全加载完毕
      $(function () {
        //1.500 后台代码异常
        $.ajax({
          url: "https://httpbin.org/status/500",
          method: "get",
          success(res) {
            console.log(res);
          },
          error(err) {
            console.log(err);
          },
        });
        //503-服务器维护--后台接口有问题
        $.ajax({
          url: "https://httpbin.org/status/503",
          method: "get",
          success(res) {
            console.log(res);
          },
          error(err) {
            console.log("err", err);
          },
        });
        //403 没有权限获取资源
        $.ajax({
          url: "https://httpbin.org/status/403",
          method: "get",
          success(res) {
            console.log(res);
          },
          error(err) {
            console.log("err", err);
          },
        });
        //404 服务器找不到请求资源,路径可能写错
        $.ajax({
          url: "https://httpbin.org/statusw222/kkosjoiwoi",
          method: "get",
          success(res) {
            console.log(res);
          },
          error(err) {
            console.log("err", err);
          },
        });
      });
    </script>
```

03-请求超时

```js
  <script>
      //1.监听文档完全加载完毕
      $(function () {
        const jqXHR = $.ajax({
          // 后端需要8秒后才会返回数据
          url: "https://httpbin.org/delay/8",
          method: "post",
          //2.设置超时事件5s
          timeout: 5000,
          success(res) {
            console.log(res);
          },
          error(err) {
            console.log("err", err);
          },
        });
        $(".cancel").on("click", function () {
          // 手动取消请求
          jqXHR.abort();
        });
      });
    </script>
```

04-Get请求参数

```js
   <script>
      //1.监听文档完全加载完毕
      $(function () {
        //1.url添加查询字符串
        $.ajax({
          url: "https://httpbin.org/get?sno=888&stuName=张三",
          method: "get",
          success(res) {
            console.log(res);
          },
        });
        //2.在data中提交参数
        $.ajax({
          url: "https://httpbin.org/get",
          //源码中会拼接
          data: {
            sname: "李四",
            sno: "1234",
          },
          success(res) {
            console.log(res);
          },
        });
        //3.给 get请求添加请求头,
        $.ajax({
          url: "https://httpbin.org/get",
          headers: {
            // 比如你登录成功之后,后台会返回一个token
            // 登陆凭证
            accessToken: "123abc",
          },
          success(res) {
            console.log(res);
          },
        });
        //4.简写
        $.get("https://httpbin.org/get")
          .then(function (res) {
            //jQuery1.8后用then ,jQuery1.8前用done
            console.log(res);
          })
          .catch(function () {
            //fail调用
            console.log("catch");
          })
          .always(function () {
            //相当于finally
            console.log("always--");
          });
      });
    </script>
```

05-post参数

```js
<script>
      //1.监听文档完全加载完毕
      $(function () {
        //1.在url提交查询字符串
        $.ajax({
          url: "http://httpbin.org/post?uname=张三&age=90",
          method: "post",
          success(res) {
            console.log(res);
          },
        });
        //2.在data中提交查询字符串
        $.ajax({
          url: "http://httpbin.org/post",
          method: "post",
          data: {
            address: "北京",
            age: 10,
          },
          success(res) {
            console.log(res);
          },
        });
        //3.在data中JSON字符串
        $.ajax({
          url: "http://httpbin.org/post",
          method: "post",
          data: JSON.stringify({
            age: 20,
            address: "北京",
          }),
          //application/json; charset=UTF-8
          contentType: "application/json; charset=UTF-8",
          success(res) {
            console.log(res);
          },
        });
        //4.在data中FormData
        var formData = new FormData();
        formData.append("username", "lisi");
        formData.append("password", 122);
        $.ajax({
          url: "http://httpbin.org/post",
          method: "post",
          data: formData,
          //processData:true, 会将data为对象的转成查询字符串
          processData: false,
          //向服务器发送数据时指定内容类型.为 false， 代表是  multipart/form-data  。表单类型，一般用于上传文件
          contentType: false,
          success(res) {
            console.log(res);
          },
        });
        //5.添加请求头
        $.ajax({
          url: "http://httpbin.org/post",
          method: "post",
          data: formData,
          //processData:true, 会将data为对象的转成查询字符串
          processData: false,
          //向服务器发送数据时指定内容类型.为 false， 代表是  multipart/form-data  。表单类型，一般用于上传文件
          contentType: false,
          //请求头
          headers: {
            accessToken: "hello",
          },
          success(res) {
            console.log(res);
          },
        });
        //6.post简写
        $.post("http://httpbin.org/post", {
          address: "山东",
          age: 22,
        }).then((res) => {
          console.log(res);
        });
      });
    </script>
```

06-jquery.showlinklocation.js

```
(function (g, $) {
  //1.在jquery的原型上添加了一个 showlinklocation
  // 让网页中所有的a标签文本的后面追加对应的域名地址
  //jQuery.prototype===jQuery.fn
  $.fn.showLinkLocation = function () {
    console.log(this.filter("a"));
    this.filter("a").each(function (index, element) {
      var $a = $(element);
      $a.append(`(${$a.attr("href")})`);
    });
  };
})(window, jQuery);
```

07-Lodash初体验

```js
   <script>
      //1.监听文档完全加载完毕
      $(function () {
        console.log(window._);
        console.log(_.VERSION);
        //数组--字符串,用#分割
        console.log(_.join([1, 2, 3, 4, 5], "#"));
      });
    </script>
```

08-手写Lodash

```
(function (window) {
  function Lodash() { }
  window._ = Lodash;
  //类方法
  _.VERSION = "4.17.21";
  _.join = function (arr, separater) {
    return arr.join(separater);
  };
})(window)
```

09-Lodash-number的操作

```js
<script src="../libs/lodash-4.17.21.js"></script>
    <script>
      //1.获取随机数,下限-上限-指定是否返回浮点数
      console.log(_.random(10));
      console.log(_.random(5, 10));
      //会返回浮点数
      console.log(_.random(5, 10, true));
    </script>
```

10-Lodash-string的操作

```js
<script src="../libs/lodash-4.17.21.js"></script>
    <script>
      //  转换字符串为驼峰写法
      console.log(_.camelCase("hello world"));
      console.log(_.camelCase("^^^hello world--"));
      //_.endsWith(string, target) - 检查字符串是否以给定的target字符串结尾
      console.log(_.endsWith("helloworld", "world"));
      // 字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分
      console.log(_.padStart("abc", 4, "p"));
      //_.trim(string, chars) - 从字符串中移除前面和后面的 空格 或 指定的字符
      console.log(_.trim("  djdjdj  "));
    </script>
```

11-Lodash-array的操作

```js
<script src="../libs/lodash-4.17.21.js"></script>
    <script>
      console.log(_.first([1, 2, 3, 4, 5]));
      console.log(_.last([1, 2, 3, 4, 5]));
      //去重
      console.log(_.uniq([1, 2, 4, 4, 2, 3, 1]));
      //过滤出假值
      console.log(_.compact([0, 2, 3, 4, "ll", null, undefined, false]));
      //_.flatten(arr) - 减少一级array嵌套深度。返回新数组
      console.log(_.flatten([1, 2, 3, [4, 5, 6, [9, 10, 11]]]));
    </script>
```

12-Lodash-Object

```js
    <script src="../libs/lodash-4.17.21.js"></script>
    <script>
      var obj = {
        name: "张三",
        age: 90,
        hobby: {
          dance() {
            console.log("dance---");
          },
          type: ["弹琴", "编程", "唱歌"],
        },
        address: "北京",
      };
      //_.pick(object, [props]) :  从object中选中的属性来创建一个对象。返回新对象
      console.log(_.pick(obj, ["age", "address"]));
      //_.omit(object, [props]):  反向版_.pick ;  删除object对象的属性。返回新对象
      console.log(_.omit(obj, ["age", "address"]));
      //浅克隆
      var newObj = _.clone(obj);
      // obj.hobby.type = ["hh"];
      // console.log(newObj.hobby.type);
      //深拷贝
      var deepObj = _.cloneDeep(obj);
      obj.hobby.type = ["hh"];
      console.log(deepObj.hobby.type);
    </script>
```

13-dayjs初体验

```js
<script>
      //window.dayjs=工厂函数-- dayjs()创建对象
      //Dayjs
      console.log(dayjs());
      //格式化日期
      console.log(dayjs().format());
      console.log(dayjs().format);
      console.log(dayjs.prototype.format);
</script>
```

14-手写dayjs

```js
(function (g) {
  // browser -> window 全局对象
  // node -> global 全局对象
  //看当前环境是否支持globalThis
  g = typeof globalThis !== "undefined" ? globalThis : g ;
  //1.创建工厂函数-返回 new 构造器--对象
  function dayjs() {
    return new Dayjs();
  }
  //2.构造器
  function Dayjs() {
    //年月日
    var date = new Date();
    //2.1 添加属性
    this.$y = date.getFullYear();
    this.$M = date.getMonth() + 1;
    this.$D = date.getDate();
  }
  //3.原型上添加方法
  Dayjs.prototype.format = function () {
    return `${this.$y}-${this.$M}-${this.$D}`
  }
  dayjs.prototype = Dayjs.prototype;
  g.HYdayjs = dayjs;
})(this);

```



## 二.列出AJAX常用的配置参数(Parameters)

* url - 指定发送请求的 URL

* method / type - 用于指定请求的类型 (e.g. "POST", "GET", "PUT")，默认为GET

* data - 指定要发送到服务器的数据（PlainObject or String or Array）

* processData：当data是一个对象时，jQuery 从对象的键/值对生成数据字符串，除非该processData选项设置为false. 例如，{ a: "bc", d: "e,f" }被转换为字符串"a=bc&d=e%2Cf"，默认为true

* header - 请求头的内容（PlainObject）

* contentType - 默认值：application/x-www-form-urlencoded; charset=UTF-8，向服务器发送数据时指定内容类型。

  * papplication/x-www-form-urlencoded; charset=UTF-8： 请求体的数据以查询字符串形式提交，如：a=bc&d=e%2Cf。

  * papplication/json; charset=UTF-8 指定为json字符串类型

  * 为 false， 代表是 multipart/form-data 。表单类型，一般用于上传文件

* dataType : 期望服务器端发回的数据类型（json、xml、text...），默认会根据响应的类型来自动推断类型

* timeout: 请求超时时间。它以毫秒为单位

* beforeSend : 这是一个在发送请求之前运行的函数，返回false会取消网路请求

* success - 请求成功回调的函数

* error - 请求失败回调的函数

## 三.用jQuery的AJAX编写GET和POST请求

* get请求

  ```js
  <script>
        //1.监听文档完全加载完毕
        $(function () {
          //1.url添加查询字符串
          $.ajax({
            url: "https://httpbin.org/get?sno=888&stuName=张三",
            method: "get",
            success(res) {
              console.log(res);
            },
          });
          //2.在data中提交参数
          $.ajax({
            url: "https://httpbin.org/get",
            //源码中会拼接
            data: {
              sname: "李四",
              sno: "1234",
            },
            success(res) {
              console.log(res);
            },
          });
          //3.给 get请求添加请求头,
          $.ajax({
            url: "https://httpbin.org/get",
            headers: {
              // 比如你登录成功之后,后台会返回一个token
              // 登陆凭证
              accessToken: "123abc",
            },
            success(res) {
              console.log(res);
            },
          });
          //4.简写
          $.get("https://httpbin.org/get")
            .then(function (res) {
              //jQuery1.8后用then ,jQuery1.8前用done
              console.log(res);
            })
            .catch(function () {
              //fail调用
              console.log("catch");
            })
            .always(function () {
              //相当于finally
              console.log("always--");
            });
        });
   </script>
  ```

* post

  ```js
  //1.监听文档完全加载完毕
        $(function () {
          //1.在url提交查询字符串
          $.ajax({
            url: "http://httpbin.org/post?uname=张三&age=90",
            method: "post",
            success(res) {
              console.log(res);
            },
          });
          //2.在data中提交查询字符串
          $.ajax({
            url: "http://httpbin.org/post",
            method: "post",
            data: {
              address: "北京",
              age: 10,
            },
            success(res) {
              console.log(res);
            },
          });
          //3.在data中JSON字符串
          $.ajax({
            url: "http://httpbin.org/post",
            method: "post",
            data: JSON.stringify({
              age: 20,
              address: "北京",
            }),
            //application/json; charset=UTF-8
            contentType: "application/json; charset=UTF-8",
            success(res) {
              console.log(res);
            },
          });
          //4.在data中FormData
          var formData = new FormData();
          formData.append("username", "lisi");
          formData.append("password", 122);
          $.ajax({
            url: "http://httpbin.org/post",
            method: "post",
            data: formData,
            //processData:true, 会将data为对象的转成查询字符串
            processData: false,
            //向服务器发送数据时指定内容类型.为 false， 代表是  multipart/form-data  。表单类型，一般用于上传文件
            contentType: false,
            success(res) {
              console.log(res);
            },
          });
          //5.添加请求头
          $.ajax({
            url: "http://httpbin.org/post",
            method: "post",
            data: formData,
            //processData:true, 会将data为对象的转成查询字符串
            processData: false,
            //向服务器发送数据时指定内容类型.为 false， 代表是  multipart/form-data  。表单类型，一般用于上传文件
            contentType: false,
            //请求头
            headers: {
              accessToken: "hello",
            },
            success(res) {
              console.log(res);
            },
          });
          //6.post简写
          $.post("http://httpbin.org/post", {
            address: "山东",
            age: 22,
          }).then((res) => {
            console.log(res);
          });
        });
      </script>
  ```

  

## 四.列出Lodash其它常用的函数

* 字符串（String）

  * _.camelCase(string) - 转换字符串为驼峰写法。

  * _.capitalize(string) - 转换字符串首字母为大写，剩下为小写。

  * _.endsWith(string, target) - 检查字符串是否以给定的target字符串结尾。

  * _padStart(str, length,char) - 如字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分。

  * _.trim(string, chars) - 从字符串中移除前面和后面的 空格 或 指定的字符。

* 数组（Array）

  * _.first(arr, level) - 获取array中的第一个元素。

  * _.last(arr, [n=1]) - 获取array中的最后一个元素。

  * _.uniq(arr) - 创建一个去重后的array数组副本。返回新的去重后的数组。

  * _.compact(arr) - 创建一个新数组，包含原数组中所有的非假值元素。返回过滤掉假值的新数组。

  * _.flatten(arr) - 减少一级array嵌套深度。返回新数组。

* 对象

  * _.pick(object, [props]) : 从object中选中的属性来创建一个对象。返回新对象。

  * _.omit(object, [props]): 反向版_.pick ; 删除object对象的属性。返回新对象。

  * _.clone( value) - 支持拷贝 arrays、 booleans、 date 、map、 numbers， Object 对象, sets, strings, symbols等等。 arguments对象的可枚举属性会拷贝为普通对象。（注：也叫浅拷贝） 返回拷贝后的值。

  * _.cloneDeep(value) -这个方法类似_.clone，担它会递归拷贝 value。（注：也叫深拷贝）。返回拷贝后的值。

* 集合（Array | Object）

  * _.sample(): 从collection（集合）中获得一个随机元素。返回随机元素。

  * _.orderBy : 给数组排序，默认是升序asc。

  * _.each() / _.forEach() - 遍历(集合) 中的每个元素

  * _.filter( ) - 返回一个新的过滤后的数组。

* 函数

  * _.curry() - 返回新的柯里化（curry）函数。_
  * .debounce() - 返回新的 debounced（防抖动）函数。
  *  _.throttle() - 返回节流的函数。

























