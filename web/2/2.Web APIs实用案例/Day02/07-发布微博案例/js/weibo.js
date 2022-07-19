// 日期格式化
function getTime() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  var day = date.getDate();
  day = day < 10 ? '0' + day : day;

  var hours = date.getHours();
  hours = hours < 10 ? '0' + hours : hours;

  var minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  var seconds = date.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;


  var str = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  return str;
};


// 1. 获取元素
// 1.1 文本域
var area = document.querySelector('#area');
// 1.2 发布按钮
var send = document.querySelector('#send');
// 1.3 类名为useCount的span
var useCount = document.querySelector('.useCount');
// 1.4 ul
var ul = document.querySelector('ul');


// 2. 【功能1：文本域输入的过程中统计内容的个数给span】
// 2.1 给文本域注册oninput事件
area.oninput = function () {
  // 2.2 获取文本域中的内容的长度，赋值给类名为useCount的span的innerText
  useCount.innerText = this.value.length;
};



// 3. 【功能2：点击发布按钮创建li追加的ul中】
// 3.1 给按钮注册事件onclik
send.onclick = function () {
  // 3.2,在事件处理程序中 获取文本域中的内容
  var v = area.value;
  // 3.3 检测内容的长度是否等于0，若等于0，提示不能为空
  if (v.length == 0) {
    alert('内容不能为空！');
  } else {
    // 3.4 否则，创建li插入到ul中最前面
    var newLi = document.createElement('li');
    ul.insertBefore(newLi, ul.children[0]);
    // 3.5 创建一个类名为info的div，追加到li中
    var info = document.createElement('div');
    info.className = 'info';
    newLi.appendChild(info);
    // 3.5.1 创建一个img元素，追加到类名为info的div中
    var img = document.createElement('img');
    info.appendChild(img);
    // 3.5.2 设置img的src
    img.src = 'images/03.jpg';
    // 3.5.3 创建一个span元素，追加到类名为info的div中
    var span = document.createElement('span');
    info.appendChild(span);
    // 3.5.4 设置span的内容
    span.innerText = '百里守约';
    // 3.5.5 创建一个p元素，追加到类名为info的div中
    var p = document.createElement('p');
    info.appendChild(p);
    // 3.5.6 把当前时间设置给p元素
    p.innerText = '发布于：' + getTime();
    // 3.6 创建一个类名为content的div,追加到li中
    var content = document.createElement('div');
    content.className = 'content';
    newLi.appendChild(content);
    // 3.7 设置类名为content的div的innerText为文本域的内容
    content.innerText = v;
    // 3.8 发布成功后，清空文本域，数量重置为0
    area.value = '';
    useCount.innerText = '0';
  }

};

