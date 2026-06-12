const express = require('express');
const custom = require('./customMiddleware');

const app = express();

app.use(custom);

app.post('/', (req, res) => {
    res.send(req.body);
})

app.listen(80, () => {
    console.log('Server is running on http://127.0.0.1');
});