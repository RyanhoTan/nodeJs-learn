const express = require('express');
const app = express();

app.get('/user/:idx', (req, res) => {
    res.send(req.params);
})

app.listen(3000, () => {
    console.log('Server is running on 127.0.0.1:3000');
});