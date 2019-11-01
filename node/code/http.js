const http = require('http')
const server = http.createServer()

// 2. 接听server的request 请求事件，设置请求处理参数
server.on('request', (req, res) => {
    let url = req.url
    if (url === '/') {
        res.end('hello world')
    } else {
        res.end('404 no found.')
    }
})

server.listen(3001, () => console.log('启动成功'))
