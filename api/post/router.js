const express = require('express')

const router = express.Router()

router.post('/post', (req, res) => {
    res.send({
        status: 0,
        message: '数据提交成功',
        data: req.body
    })
})

module.exports = router