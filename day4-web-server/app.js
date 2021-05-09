const http = require('http')
// const fs = require('fs')
const path = require('path')
const routes = require('./module/routes')
const ejs = require('ejs')

const server = http.createServer((req, res) => {
    // 如果是访问静态资源，指向static目录下的文件
    routes.static(req, res, 'static')

    // 根据不同路径执行不同操作
    const url = new URL(req.url, 'http://127.0.0.1:3000')
    let pathname = url.pathname
    console.log(req.method)
    // get 请求
    if(pathname === '/news') {
        // 获取参数 url: localhost:3000/news?name=rose&age=18
        let name = url.searchParams.get('name');
        res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html;charset=utf8')
            res.end(name)
    }
    else if(pathname === '/login') {
        // let msg = '从数据库获取的数据';
        // ejs.renderFile('./views/login.ejs', {msg: msg}, (err, data) => {
        //     res.statusCode = 200;
        //     res.setHeader('Content-Type', 'text/html;charset=utf8')
        //     res.end(data)
        // }) 
        ejs.renderFile('./views/form.ejs', {}, (err, data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html;charset=utf8')
            res.end(data)
        })
    }
    else if(pathname === '/doLogin') {
        // 获取post提交的数据
        let postData = '';
        req.on('data', (chunk) => {
            postData+=chunk;
        })
        req.on('end', () => {
            res.end(postData)
        })
    }
    else if(pathname === '/register') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html;charset=utf8')
        res.end('注册')
    }
    else if(pathname === '/admin') {
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