$(function() {
    // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
    // 节流阀即互斥锁：当点击了小li时，就把页面滚动事件里面的 li 的背景选择 添加 current锁起来不执行
    var flag = true

    // 1.显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top

    // 当页面一加载就看看是否显示电梯导航，这样我们刷新页面时并且满足条件时就不会没有显示电梯导航了
    toggleTool()
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn()
        } else (
            $(".fixedtool").fadeOut()
        )
    }

    $(window).scroll(function() {
        toggleTool()

        // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    // console.log(i)
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current")
                }
            })
        }

    })

    // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function() {
        flag = false
        console.log($(this).index())
        // 当我们每次点击小li 就需要计算出页面要去往的位置 
        // 选出对应索引号的内容区的盒子 计算它的.offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top
        // 页面动画滚动效果
        $("body, html").stop().animate({
            scrollTop: current
        }, function() {
            // 回调函数 当滚动事件执行完后执行
            flag = true
        })
        
        // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名 变红色背景
        $(this).addClass("current").siblings().removeClass()
    })

})