const express = require('express');

const app = express();

app.get('/index', (req, res) => {
    res.send(req.query);
})

app.listen(80, () => {
    console.log('Server is running on 127.0.0.1:80');
})