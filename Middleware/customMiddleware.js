const qs = require('querystring');

const exprss = require('express');

const app = exprss();

// 每次获取的数据是完整数据的一部分，需要多次获取
const customMiddleware = (req, res, next) => {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })
// 当数据获取完成时，自动触发end事件
    req.on('end', () => {
        req.body = qs.parse(str)
        next()
    })
}



module.exports = customMiddleware