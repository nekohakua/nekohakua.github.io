# Day14 作业布置

## 一. 完成课堂所有的代码







## 二. 说说服务端渲染和前后端分离的区别

SSR(server side rendering) 服务端渲染

- 优点: 
  - 更快的响应时间 不用等待所有的js加载完成 也能显示比较完整的页面
  - 更好的SEO 可以将SEO的关键信息直接在后台渲染成html 保证了搜索引擎能爬取到关键数据
  - 无需占用客户端资源 解析模板交给后端工作 对于客户端的资源占用更少
- 缺点
  - 占用服务器资源 一个小小的页面的改动 都需要请求一次完整的html页面 有悖于程序员的=="DRY(Don`t repeat yourself)"==原则 如果短时间访问过多 对服务器造成一定的访问压力
  - 
  - 一些常见的api需要先对运行环境判断再使用

前后端分离

- 优点: 
  - 前端专注于ui界面的开发 后端专注于api的开发 单一
  - 体验更好 
- 缺点: 
  - 第一次响应内容较慢 不如服务端渲染快
  - 不利于SEO优化 只是记录一个页面 对于SEO较差



## 三. 说说你对HTTP协议的理解

http

- HyperText Transfer Protocol 超文本传输协议
- 超文本传输协议是一种用于分布式协作式的应用层协议
- 定义了客户端和服务器之间交换报文的格式和方式 默认为80端口
- 使用tcp作为传输层协议 保证了数据的可靠性

组成:`一个HTTP请求主要包括: 请求和响应`

- 请求

  - 主要包含: 请求行 请求头 请求体

  - 请求行:

    - 请求方法字段

    - URL字段

    - HTTP协议版本字段

    - ```js
      GET/index.html HTTP/1.1
      ```

  - 请求头:

    - 键值对组成
    - User-Agent: 对应展示的浏览器的类型
    - Content-type: 对应的请求内容的数据类型
      - application/x-www-form-urlencoded 数据以&分割 的键值对 键值对用=分割
      - application/json json类型
      - application/xml xml类型
      - text/plain 文本类型
      - multipart/form-data 表示上传文件
    - keep-alive

  - 请求体: get/post所带的内容

- 响应

  - 响应行

    - 由协议版本 状态码 状态码的原因短语组成

    - ```js
      HTTP/1.1 200 OK
      ```

  - 响应头

  - 响应体

请求方法

- get 向服务器获取数据
- post 将响应实体交给指定的资源
- head 请求一个与get请求响应相同的响应 没有实体
- put 上传文件 用于替换目标资源的所有
- patch 用于对资源的部分修改
- delete 删除指定的资源
- connect: 建立一个到目标资源标识的服务器的隧道 通常用于代理服务器
- track: 回显服务器收到的请求 主要用于测试和诊断

响应状态码

- 200 表示请求被服务器端正常处理
- 201 post请求 创建新的资源
- 301 永久重定向 表示资源被分配了新的URI 并返回该URI
- 4xx 表示客户端发生错误
  - 400 请求报文存在语法错误
  - 401 未授权的错误 必须携带身份信息
  - 403 没有权限访问
  - 404 服务器找不到请求资源
- 5xx 服务器错误
  - 500 
  - 503 服务器不可用 处于维护或重载状态







## 四. 封装XMLHttpRequest网络请求

```js
function myAjax(url, {
      method = "GET",
      headers = {},
      timeout = 5000,
      data
    } = {}) {
      const xhr = new XMLHttpRequest()
      const promise = new Promise(function (resolve, reject) {
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve({ status: xhr.status, data: xhr.response })
          } else {
            reject({ status: xhr.status, message: xhr.statusText })
          }
        }
        xhr.responseType = "json"
        xhr.timeout = timeout

        if (method.toUpperCase() === "GET") {
          if (Object.keys(data).length > 0) {
            const arr = []
            for (const key in data) {
              const value = data[key]
              arr.push(`${key}=${value}`)
            }
            url = url + "?" + arr.join("&")
          }
          xhr.open(method, url)
          if (Object.keys(headers).length > 0) {
            Object.keys(headers).forEach(key => {
              xhr.setRequestHeader(key, headers[key])
            })
          }
          xhr.send()
        } else {
          xhr.open(method, url)
          xhr.setRequestHeader("Content-Type", "application/json")
          if (Object.keys(headers).length > 0) {
            Object.keys(headers).forEach(key => {
              xhr.setRequestHeader(key, headers[key])
            })
          }

          xhr.send(JSON.stringify(data))
        }

      })
      promise.xhr = xhr
      return promise
    }

    // get
    myAjax("http://123.207.32.32:1888/02_param/get", {
      data: {
        name: "wmm",
        age: 18
      }
    }).then(res => {
      console.log(res);
    })
```



## 五. 说说XMLHttpRequest和Fetch请求的异同

Fecth提供了一种更加现代的处理方案

- 比如返回一个值是`Promise` 
  - 在请求成功时调用resolve回调
- 与XMLHttpRequest不同 不用把所有操作放在同一个对象上
- 语法简单 更加语义化
- 基于标准的promise实现 支持async/await
- 更加底层

Fetch缺点

- 不支持abort(超时取消请求) 不支持超时控制 
- 没有办法检测请求进度 XHR可以
- 默认不会携带cookie

ajax缺点

- 使用起来比较繁琐









































