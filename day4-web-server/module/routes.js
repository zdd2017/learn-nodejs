const fs = require("fs")
const path = require('path')

// function getMime(type) {
//     switch (type) {
//         case '.html':
//             return 'text/html'
//         case '.css':
//             return 'text/css'
//         case '.js':
//             return 'text/javascript'
//         default:
//             return 'text/plain'
//     }
// }

// 包装成Promise用来实现同步方法
// function getMime(extname) {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./data/mime.json', (err, data) => {
//             if (err) {
//                 reject(err)
//                 return
//             }
//             let mimeObj = JSON.parse(data.toString())
//             resolve(mimeObj[extname])
//         })
//     })
// }

// 改成同步方式
function getMime(extname) {
    let data = fs.readFileSync('./data/mime.json')
    console.log(data, 'mime')
    let mimeObj = JSON.parse(data.toString())
    return mimeObj[extname]
}

exports.static = function (req, res, staticPath) {
    const url = new URL(req.url, 'http://127.0.0.1:3000')
    // 获取路径
    let pathname = url.pathname

    console.log(pathname, 'pathname')
    // 获取后缀
    let extname = path.extname(pathname)
    // 过滤掉图标
    if (pathname != 'favicon.ico') {
        // 默认跳转到index.html
        pathname = pathname ? pathname : 'index.html'
        try {
            let data = fs.readFileSync('./' + staticPath + pathname)
            if (data) {
                res.statusCode = 200;
                // getMime方法——通过后缀获取对应的ContentType
                res.setHeader('ContentType', getMime(extname))
                res.end(data)
            }
        }
        catch (error) {

        }
    }
}
