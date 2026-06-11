const express = require('express');
const router = express.Router();

router.get('/user/find', (req, res) => {
    res.send('get请求');
})

router.post('/user/add', (req, res) => {
    res.send('post请求');
})

module.exports = router;