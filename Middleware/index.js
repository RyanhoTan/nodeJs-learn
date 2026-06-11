const express = require('express');

const app = express();

app.use((req, res, next) => {
    const time = Date.now();
    req.enterTime = new Date(time).toLocaleString();
    next()
})

app.get('/', (req, res) => {
    res.send(`这是/，time: ${req.enterTime}`)
})

app.get('/user', (req, res) => {
    res.send(`这是/user，time: ${req.enterTime}`)
})

app.listen(80, () => {
    console.log('Server is running on 127.0.0.1:80');
})