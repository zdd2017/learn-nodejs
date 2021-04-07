const obj = {
    name: 'obj',
    get() {
        console.log('get')
    },
    post() {
        console.log('post')
    }
}

// module.exports = obj
exports.obj = obj