const fs = require('fs')

// 1. 判断服务器上是否有upload目录，如果没有，创建upload目录；如果有，不进行操作
// const path = './upload'

// fs.stat(path, (err, stats) => {
//     // 如果不存在
//     if (err) {
//         // 创建upload目录
//         mkdir(path)
//         return
//     }
//     // 如果存在upload文件，不存在目录，创建目录
//     if (stats.isFile()) {
//         // 删除upload文件，不删无法创建同名目录
//         fs.unlink(path, (err) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//         })
//         mkdir(path)
//     }
// })

// function mkdir(path) {
//     fs.mkdir(path, (err) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         console.log('创建成功')
//     })
// }

// 2.读取test目录下的所有文件放在一个数组里
// const path = './test'
// let files = []
// fs.readdir(path, (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     for (var i = 0; i < data.length; i++) {
//         fs.stat(path + '/' + data[i], (err, stats) => {
//             console.log(i, data[i])
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             if (stats.isFile()) {
//                 files.push(data[i])
//             }
//         })
//     }
//     console.log(files)
// })

const basePath = './test'
let files = []

// 判断是否是文件
function isFile(path) {
    return new Promise((resolve, reject) => {
        fs.stat(basePath + '/' + path, (err, stats) => {
            if (err) {
                console.log(err)
                return
            }
            if (stats.isFile()) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })
}

fs.readdir(basePath, async (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    for (var i = 0; i < data.length; i++) {
        if (await isFile(data[i])) {
            files.push(data[i])
        }
    }
    console.log(files)
})