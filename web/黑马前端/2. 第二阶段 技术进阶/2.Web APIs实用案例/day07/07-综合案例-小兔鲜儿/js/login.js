let loginButton = document.querySelector('.dl')
let remember = document.querySelector('.remember')
let username = document.querySelector('[name=username]')
let password = document.querySelector('[name=password]')

loginButton.addEventListener('click', function(e) {
    e.preventDefault()
    if (!remember.checked) {
        alert('请勾选协议')
        return
    }
    let obj = {
        username: username.value,
        password: password.value
    }
    localStorage.setItem('pink', JSON.stringify(obj))
    // 这个要注意不是../index.html
    location.href = './index.html'
})

let obj = JSON.parse(localStorage.getItem('pink'))
if (obj) {
    username.value = obj.username
    password.value = obj.password
    remember.checked = true
}