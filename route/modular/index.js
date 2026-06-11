const express = require('express');
const router = require('./server');

const app = express();

app.use('/server' , router);

app.listen(80, () => {
    console.log('Server is running on 127.0.0.1:80');
})