let li = document.querySelector('.xtx_navs li:first-child')
let obj = JSON.parse(localStorage.getItem('pink'))
if (obj) {
    li.innerHTML = `<a href="#">你好，${obj.username}欢迎来到</a>`
} else {
    location.href = './register.html'
}