const fs = require('fs')

// fs.stat
// fs.stat('./file.js', (err, stats) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('是目录吗 ' + stats.isDirectory())
//     console.log('是文件吗 ' + stats.isFile())
// })

// fs.mkdir
// fs.mkdir('./mkdir', (err, stats) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('创建成功')
// })

// fs.writeFile
// fs.writeFile('./newFile', 'hello', (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('写入成功')
// })

// fs.appendFile
// fs.appendFile('./newFile', '\nappend content', (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('追加成功')
// })

// fs.readFile
// fs.readFile('./newFile', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     // data是Buffer类型，转换为字符串
//     console.log(data.toString())
// })

// fs.readdir
// fs.readdir('./outer', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

// fs.rename
// fs.rename('./newFile', './outer/newFile', (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
// })

// fs.rmdir
// fs.rmdir('./mkdir', (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('移除目录成功')
// })

// fs.unlink
// fs.unlink('./mkdir/test', (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('移除文件成功')
// })

// 读取流
// var data = ''

// const stream = fs.createReadStream('./file.js')

// stream.on('data', function (chunk) {
//     data += chunk
// })

// stream.on('end', function () {
//     console.log(data) // 打印出file.js里的内容
// })

// stream.on('error', function (err) {
//     console.log(err)
// })

// 写入流
// const data = '写点东西进去'
// var stream = fs.createWriteStream('./writeSteam.js')
// stream.write(data, 'utf-8')

// stream.end()

// stream.on('finish', function () {
//     console.log('写入完成')
// })

// stream.on('error', function (err) {
//     console.log(err)
// })

// 文件复制
const readStream = fs.createReadStream('./file.js')
const writeSteam = fs.createWriteStream('./copy.js')

readStream.pipe(writeSteam)
