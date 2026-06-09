const http = require('http');

const server = http.createServer()

server.on('request', (req, res) => {
    let content = '<h1>404</h1>';
    if (req.url === '/' || req.url === '/index.html') {
        content = '<h1>首页</h1>';
    } else if (
        req.url === '/about.html'
    ) {
        content = '<h1>关于页面</h1>';
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(content);
})

server.listen(80)