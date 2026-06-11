const express = require('express');

const app = express();

app.use('/music', express.static('../music'));

app.listen(80, () => {
    console.log('Server is running on 127.0.0.1:80')
})