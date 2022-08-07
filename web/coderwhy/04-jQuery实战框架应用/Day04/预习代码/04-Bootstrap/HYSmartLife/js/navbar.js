$(function() {
  // tab 选项卡的切换
  $('.navbar .link-text').on('click', function() {
    $(this)
     .addClass('active')
     .siblings() // 寻找自身的兄弟
     .removeClass('active')
  })
})