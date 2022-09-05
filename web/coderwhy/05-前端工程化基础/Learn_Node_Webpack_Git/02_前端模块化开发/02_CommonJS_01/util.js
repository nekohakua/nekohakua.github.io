const UTIL_NAME = "util_name"

function formatCount() {
  return "200万"
}

function formatDate() {
  return "2022-10-10"
}

// exports一开始是一个空对象
console.log(exports) // {}

// 因为node实现了CommonJS,所以在node里面可以用exports，浏览器没有实现，所以在浏览器不能用
exports.UTIL_NAME = UTIL_NAME
exports.formatCount = formatCount
exports.formatDate = formatDate

