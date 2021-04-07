// nodejs是一种运行环境，可以让js运行在服务器上
// const http = require('http')
// const url = require('url')

// http.createServer((req, res) => {
//     const url = new URL(req.url, 'http://127.0.0.1:3000')
//     // const url = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
//     console.log(url, 'url')
//     res.statusCode = 200
//     // content-type 告诉客户端返回内容的类型，客户端以此来决定怎样显示
//     // 一些常见的content-type
//     // 举例 text/plain text/html 的区别
//     res.setHeader('Content-Type', 'text/html;charset=utf8')
//     // 中文乱码问题
//     res.end('<h1>中文</h1>')
// }).listen(3001)

const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1:3000')
    console.log(url.searchParams.get('name'))
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world')
})

server.listen(port, () => {
    console.log(`服务器运行在 http://127.0.0.1:${port}/`)
})