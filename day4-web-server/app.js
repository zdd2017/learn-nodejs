const http = require('http')
// const fs = require('fs')
const path = require('path')
const routes = require('./module/routes')

const server = http.createServer((req, res) => {
    // 如果是访问静态资源，指向static目录下的文件
    routes.static(req, res, 'static')

    // 根据不同路径执行不同操作
    const url = new URL(req.url, 'http://127.0.0.1:3000')
    let pathname = url.pathname
    if(pathname === '/login') {
        console.log("login")
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html;charset=utf8')
        res.end('登录')
    }
    if(pathname === '/register') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html;charset=utf8')
        res.end('注册')
    }
    if(pathname === '/admin') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html;charset=utf8')
        res.end('用户')
    }
    else {
        res.statusCode = 404;
            res.end('404 not found')
    }
})

server.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000')
})