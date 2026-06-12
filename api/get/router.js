const express = require('express');

const router = express.Router()

router.get('/get', (req, res) => {
    res.send(
        {
            status: 0,
            message: '获取数据成功',
            data: req.query
        }
    )
})

module.exports = router