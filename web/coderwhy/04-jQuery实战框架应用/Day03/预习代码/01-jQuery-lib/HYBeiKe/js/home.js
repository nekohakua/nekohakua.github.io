$(function() {

  
  var $houseSearch = $('.house-search')
  var $searchTips = $('.search-tips')
  var $searchList = $('.search-list')
  var $searchMenuUl = $('.search-menu > ul')
  var $arrow = $('.search-menu > .arrow')
  var $secondHouse = $('.second-house')
  var $headerAddress = $('.header .address')
  var $headerNavUl = $('.header .nav > ul')

  var placeholderTips = '请输入区域、商圈或小区名开始'
  var currentSearchMenuKey = 'site'
  // 缓存热们推荐的数据
  var cacheHotRecommend = []

  // 1.监听输入框的focus状态
  $houseSearch.on('focus', function() {

    // 判断输入框是否有值
    var value = $(this).val()
    // 如果输入框有值，触发一个input事件
    if(value.trim()){
      $(this).trigger('input')
      return 
    }

    // 如果有缓存使用缓存  
    if(cacheHotRecommend.length){
      renderSearchLists(cacheHotRecommend)
      return
    }

    // 2.发起网络请求获取热门推荐数据
    HyReq.get(HYConfig.BASE_URL + HYAPI.HOT_RECOMMEND)
      .then((res) => {
        // 3.拿到搜索的结果
        var searchResults = res.rent_house_list.list || []
        if(searchResults && searchResults.length){
          // 4.数据的缓存 和 映射
          cacheHotRecommend = searchResults.map((item) => {
            return { title: item.app_house_title }
          })
        }
        renderSearchLists(cacheHotRecommend)
      })
  })

  // 2.监听失去焦点
  $houseSearch.on('blur', function() {
    $searchTips.css('display', 'none')
  })

  // 3.监听输入内容
  $houseSearch.on('input', debounce(function() {
    // 这里需要防抖？还是节流？
    var value = $(this).val()
    HyReq.get(HYConfig.BASE_URL + HYAPI.HOME_SEARCH, {
      cityId: 440100,
      cityName: '广州',
      channel: currentSearchMenuKey,
      keyword: value,
      query: value,
    })
    .then((res) => {
      var searchResults = res.data.result || []
      searchResults = searchResults.map((item) => {
        return { title: item.hlsText ? item.hlsText: item.text }
      })
      renderSearchLists(searchResults, 1)
    })
  }))

  // 4.获取首页的数据
  HyReq.get(HYConfig.BASE_URL + HYAPI.HOME_PAGE)
    .then((res) => {
      console.log(res)
      var searchMenus = res.searchMenus || []
      // 渲染地址
      renderHeaderAddress(res.curLocation.city)
      // 渲染头部导航
      renderHeaderNavbar(res.topBars || [])
      // 渲染搜索栏
      renderSearchBar(searchMenus)
      // 渲染二手好房
      renderSecondHouse(res.secondHouse || [])
      
    })

  // 5.监听SearchBar的点击事件
  $searchMenuUl.on('click', 'li', function(){
    var $li = $(this)
    renderSearchBarArrow($li)
    // 切换高亮
    $li.addClass('active').siblings().removeClass('active')
    // 切换placeHolder -> attr
    $houseSearch.prop({
      placeholder: placeholderTips + $li.text()
    })
    // 记录当前选中的item绑定的key
    currentSearchMenuKey = $li.data('key')
  })

  function renderHeaderAddress(title = '') {
    $headerAddress.text(title)
  }

  function renderHeaderNavbar(nabars = []) {
    var htmlStr = ''
    nabars.forEach((item) => {
      htmlStr+=`
      <li><a href="${item.linkUrl}" target="_blank">${item.title}</a></li>
      `
    })
    $headerNavUl.empty() // 先清除
    $headerNavUl.append(htmlStr) // 在添加
  }

  function renderSecondHouse(secondHouse) {
    var houses = secondHouse.houses || []
    var $name = $secondHouse.find('.house-title .name')
    var $subName = $secondHouse.find('.house-title .sub-name')
    var $house = $secondHouse.find('.house')

    $name.text(secondHouse.title)
    $subName.text(secondHouse.subTitle)

    $house.empty()
    houses.forEach((item) => {
      var htmlStr = `
      <div class="item">
        <div class="bg">
          <img class="tag-img" src="${item.tagImgUrl}" alt="">
          <img class="vrlogo" src="./img/vrlogo@2x.png" alt="">
        </div>
        <div class="bottom">
          <div class="name">
            <p>${item.title}</p>
            <p>${item.subTitle}</p>
          </div>
          <div class="info">
            <span class="description">${item.specification} ${item.area}</span>
            <div class="price">
              <span class="price-ref">参考价:</span>
              <span class="price-val">${item.referenceTotalPrice}</span>
            </div>
        </div>
        </div>
      </div>
      `
      $house.prepend(htmlStr)
    })
  }

  function renderSearchBarArrow($li) {
    if(!$li) return
    var width = $li.width()
    var position = $li.position()
    // 切换选项卡
    $arrow.css('left', position.left + (width / 2) + 'px')
  }

  function renderSearchBar(searchMenus = []) {
    var htmlString = ''
    searchMenus.forEach((item, index) => {
      var active = index === 0 ? 'active': '' 
      htmlString += `
       <li class="item ${active}" data-key="${item.key}"><span>${item.title}</span></li>
      `
    })
    $searchMenuUl.append(htmlString)
  }  

  function renderSearchLists(hotRecommends = [], type = 0) {
    var tipMes = type ===0 ? '热门搜索' : '你可能在找'
    // 将结果渲染到页面上
    var htmlString = `<li><span>${tipMes}</span></li>`
    hotRecommends.forEach((element) => {
      htmlString += `
        <li><span>${element.title}</span></li>
      `
    })
    $searchList.empty().append(htmlString)
    $searchTips.css('display', 'block')
  }
})