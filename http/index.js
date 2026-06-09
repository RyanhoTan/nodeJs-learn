const http = require('http');

const server = http.createServer()

server.on('request', function(req, res) {
    console.log('someone visit our server');
    console.log(`请求地址：${req.url}，请求方法：${req.method}`);
    // 注意：调用一次res.end()方法就会结束当前这次请求的处理，不能再调用res.end()方法了，否则会报错
    // res.end('hello world');
    // res.end('你好')
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('你好')
})

server.listen(301, function() {
    console.log('server is running at http:// 127.0.0.1:301');
})