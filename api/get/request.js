const express = require('express');

const app = express();

const routeGet = require('./router')

app.use('/api', routeGet)

app.listen(80, () => {
    console.log('express server is running on 127.0.0.1')
})