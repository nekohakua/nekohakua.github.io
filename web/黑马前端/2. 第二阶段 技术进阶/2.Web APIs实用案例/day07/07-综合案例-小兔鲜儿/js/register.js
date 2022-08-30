!(function() {
    let code = document.querySelector('.code')
    code.addEventListener('click', function() {
        this.innerHTML = '60秒后重新获取'
        let num = 60
        let timer = setInterval(function() {
            num--
            code.innerHTML = `${num}秒后重新获取`
            if (0 === num) {
                code.innerHTML = '重新获取'
                clearInterval(timer)
            }
        }, 1000)
    })

    let username = document.querySelector('[name=username]')
    username.addEventListener('change', verifyUsername)
    function verifyUsername() {
        let span = username.nextElementSibling
        let reg = /^[a-zA-Z0-9-_]{6,10}$/
        if (!reg.test(username.value)) {
            span.innerHTML = '请输入6到9个大小写字母或数字和-_'
            return false
        } else {
            span.innerHTML = ''
            return true
        }
    }

    let phone = document.querySelector('[name="phone"]')
    phone.addEventListener('change', verifyPhone)
    function verifyPhone() {
        let span = phone.nextElementSibling
        let reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
        if (!reg.test(phone.value)) {
            span.innerHTML = `请输入11位的手机号码`
            return false
        } else {
            span.innerHTML = ''
            return true
        }
    }

    let codeInput = document.querySelector('[name=code]')
    codeInput.addEventListener('change', verifyCodeInput)
    function verifyCodeInput() {
        let span = codeInput.nextElementSibling
        let reg = /^\d{6}$/
        if (!reg.test(codeInput.value)) {
            span.innerHTML = '请输入6位验证码'
            return false
        } else {
            span.innerHTML = ''
            return true
        }
    }

    let password = document.querySelector('[name=password]')
    password.addEventListener('change', verifyPassword)
    function verifyPassword() {
        let span = password.nextElementSibling
        let reg = /^[a-zA-Z0-9-_]{6,20}$/
        if (!reg.test(password.value)) {
            span.innerHTML = '请输入6-20位密码'
            return false
        } else {
            span.innerHTML = ''
            return true
        }
    }

    let confirmPassword = document.querySelector('[name=confirm]')
    confirmPassword.addEventListener('change', verifyConfirmPassword)
    function verifyConfirmPassword() {
        let span = confirmPassword.nextElementSibling
        if (confirmPassword.value !== password.value) {
            span.innerHTML = '两次密码不一致'
            return false
        } else {
            span.innerHTML = ''
            return true
        }
    }

    let icon = document.querySelector('.icon-queren')
    icon.addEventListener('click', function() {
        this.classList.toggle('icon-queren2')
    })

    let form = document.querySelector('form')
    function verifyQueren() {
        if (!icon.classList.contains('icon-queren2')) {
            alert('请勾选同意协议')
            return false
        } else {
            return true
        }
        
    }
    form.addEventListener('submit', function(e) {
        if (!verifyUsername()) {
            e.preventDefault()
        }
        if (!verifyPhone()) {
            e.preventDefault()
        }
        if (!verifyCodeInput()) {
            e.preventDefault()
        }
        if (!verifyPassword()) {
            e.preventDefault()
        }
        if (!verifyConfirmPassword()) {
            e.preventDefault()
        }
        if (!icon.classList.contains('icon-queren2')) {
            alert('请勾选同意协议')
            e.preventDefault()
        }
    })

})()