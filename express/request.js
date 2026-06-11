const express = require('express');


const app = express();

app.get('/user', (req, res) => {
    res.send({
        name: 'Ryan',
        age: 18,
    })
})

app.post('/user', (req, res) => {
    res.send('这是一个POST请求');
})

app.listen(3000, () => {
    console.log('Server is running on 127.0.0.1:3000');
})