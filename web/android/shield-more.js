// 方法一：
//屏蔽F12和右键
// function click(e) {
//     if (document.all) {
//         if (event.button == 2 || event.button == 3) {
//             alert("欢迎光临寒舍，有什么需要帮忙的话，请与站长联系！谢谢您的合作！！！");
//             oncontextmenu = 'return false';
//         }
//     }
//     if (document.layers) {
//         if (e.which == 3) {
//             oncontextmenu = 'return false';
//         }
//     }
// }
// if (document.layers) {
//     document.captureEvents(Event.MOUSEDOWN);
// }
// document.onmousedown = click;
// document.oncontextmenu = new Function("return false;")

// document.onkeydown = document.onkeyup = document.onkeypress = function () {
//     if (window.event.keyCode == 123) {
//         window.event.returnValue = false;
//         return (false);
//     }
// }


// 方法二：【打开开发者工具再访问页面这个方法无效，解决思路：检测分辨率就是一种办法， 你尝试之后就知道了 但是你想完全规避怎么可能呢 只要你的网站还能被访问 怎么可能规避呢】
// 该方法可以有效禁止F12和右击、审查元素----设置中强行打开开发者会直接关闭网页。
// 该方法在demo阶段发现两个问题：

// 方法会导致手机端无法滑动，滑动或者操作会被判定为改变分辨率造成强制关闭网页的情况。
// 在别的页面打开F12在加载自己的网页时，虽然也及时关闭，但在响应里还是可以看到流量包。

// //禁用右键（防止右键查看源代码） 
// window.oncontextmenu = function () { return false; }
// //禁止任何键盘敲击事件（防止F12和shift+ctrl+i调起开发者工具） 
//    window.onkeydown = window.onkeyup = window.onkeypress = function () {
//      window.event.returnValue = false;
// return false;
//    }
// //如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面 
// var h = window.innerHeight, w = window.innerWidth;
//    window.onresize = function () {
// if (h != window.innerHeight || w != window.innerWidth) {
//        window.close();
//        window.location = "about:blank";
//      }
//    }


// 方法三：
// （该方法有效禁止F12，强行打开会重定向到自己定义的页面去，可以直接引入js，或者你下载放自己服务器上）
{/* <script src="https://www.lcean.cf/js/console-ban.min.js"></script>
//引用方法
<script>
  // default options
  ConsoleBan.init()
  // custom options
  ConsoleBan.init({
    redirect: 'https://www.lcean.cf/404.html'
  })
</script> */}

// JS实现按下F12跳转到其他指定页面代码
function collect() {
    //开始javascript执行过程的数据收集
    console.profile();
    //配合profile方法，作为数据收集的结束
    console.profileEnd();
    //判断profiles里有无内容,若有,则说明按下了F12  
    if (console.clear) {
        //清空控制台
        console.clear()
    };
    if (typeof console.profiles == "object") {
        return console.profiles.length > 0;
    }
}
function check() {
    if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)) {
        jump();
    }
    if (typeof console.profiles == "object" && console.profiles.length > 0) {
        jump();
    }
}
check();
window.onresize = function() {
    //判断当前窗口内页高度和窗口高度
    if ((window.outerHeight - window.innerHeight) > 200)
    jump();
}
function jump() {
    window.location = "https://www.baidu.com/";
}