$(function() {
  // 1.给轮播图动态添加图片
  // var banners = [
  //   './img/banner0.png',
  //   './img/banner1.png',
  //   './img/banner2.png'
  // ]

  // var bannerHtmlStr = ''
  // banners.forEach(function(item, index) {
  //   var active = index === 0 ? 'active' : '' 
  //   bannerHtmlStr += `
  //   <div class="carousel-item ${active}" data-interval="3000">
  //     <img src="${item}" class="d-block w-100" alt="...">
  //   </div>
  //   `
  // })
  // $('.carousel-inner').append(bannerHtmlStr)

  // $('.carousel').carousel('cycle') // 自动轮播


  var banners = [
    { bigUrl: './img/banner0.png', smUrl: './img/banner0_sm.png'},
    { bigUrl: './img/banner1.png', smUrl: './img/banner1_sm.png'},
    { bigUrl: './img/banner2.png', smUrl: './img/banner2_sm.png'}
  ]

  $(window).resize(throttle(function() {
    $('.carousel').carousel('dispose') // 取消轮播
    var screenWidth = $(this).outerWidth() // border + padding + content
    var isBigScreen = screenWidth >= 576 ? true : false

    renderBanners(banners, isBigScreen)
    startAutoPlay()
  }))
  $(window).trigger('resize')



  function renderBanners(banners = [], isBigScreen) {
    var bannerHtmlStr = ''
    banners.forEach(function(item, index) {
      var active = index === 0 ? 'active' : '' 
      var curImg = isBigScreen ? item.bigUrl : item.smUrl
      bannerHtmlStr += `
      <div class="carousel-item ${active}" data-interval="3000">
        <img src="${curImg}" class="d-block w-100" alt="...">
      </div>
      `
    })
    $('.carousel-inner').empty().append(bannerHtmlStr)
  }

  function startAutoPlay() {
    $('.carousel').carousel('cycle') // 自动轮播
  }
})