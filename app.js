const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('rui love ting')
}).listen(8081)

console.log('server running on http://47.92.154.136/')
