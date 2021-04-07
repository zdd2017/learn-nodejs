// commonjs规范是前端模块化的一种方式，它规定每个js文件都是一个模块，有自己独立的作用域和私有的属性和方法，这些属性和方法对其他文件不可见，只能通过exports暴露出去，其他文件通过require引用
const { wrapUrl } = require('./urlWrapper.js')
// const obj = require('./obj.js')

let url = 'testUrl'

console.log(wrapUrl(url))

// 测试对象
// console.log(obj)