const http = require('http')
// const fs = require('fs')
// const path = require('path')
const routes = require('./module/routes')

const server = http.createServer((req, res) => {
    routes.static(req, res, 'static')
})

server.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000')
})