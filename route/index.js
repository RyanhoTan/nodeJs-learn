const express = require('express');

const app = express()


// 只有当 method 和 路由 都匹配时，才会调用回调函数
app.get('/', (req, res) => {
    res.send('Hello Express');
})

app.post('/', (req, res) => {
    res.send('这是一个POST请求');
})


app.listen(80, () => {
    console.log('express server is running on 127.0.0.1:80')
})