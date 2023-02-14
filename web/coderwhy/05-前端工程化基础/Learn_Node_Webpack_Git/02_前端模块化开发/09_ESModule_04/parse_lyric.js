// 1.默认导出一
// function paresLyric() {
//     return ["歌词"]
// }

// // 以前写法
// // export {
// //     paresLyric,
// // }

// export default paresLyric

// 默认导出二
export default function() {
    return ["新歌词"]
}

// 注意事项：一个模块只有一个默认导出