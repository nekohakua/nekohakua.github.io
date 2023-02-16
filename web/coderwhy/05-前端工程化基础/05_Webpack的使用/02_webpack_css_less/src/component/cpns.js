import "../css/div_style.css"
// 没有导出仅仅引用可以省略from,这样做可以把这个文件div_style.css添加到webpack打包依赖图里，而不是通过在index.html来link
import "../css/title_style.less"

const divEl = document.createElement("div")
divEl.textContent = "Hello World"
divEl.classList.add("content")
document.body.append(divEl)

const titleEl = document.createElement("h2")
titleEl.textContent = "哈哈哈"
titleEl.classList.add("title")
document.body.append(titleEl)