const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer()

server.on('request', (req, res) => {


    let fp = ''

    if (req.url === '/') {
        fp = path.join(__dirname, '/music/index.html');
    } else {
        fp = path.join(__dirname, '/music', req.url);
    }

    fs.readFile(fp, 'utf8', (err, data) => {
        if (err) return res.end('404 Not Found');
        


        res.end(data);
        console.log('有人访问了:', req.url);
    })
})

server.listen(80, () => {
    console.log('服务器运行在 127.0.0.1:80');
});