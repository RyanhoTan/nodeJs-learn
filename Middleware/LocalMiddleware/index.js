const express = require('express');

const app = express();

const mw1 = (req, res, next) => {
    console.log('这是第一个局部中间件');
    next();
}

const mw2 = (req, res, next) => {
    console.log('这是第二个局部中间件');
    next();
}


// 也可以写成[mw1, mw2]，按照顺序依次执行
app.get('/', mw1, mw2, (req, res) => {
    res.send('这是根路由');
})

app.listen(80, () => {
    console.log('Server is running on 127.0.0.1:80');
})