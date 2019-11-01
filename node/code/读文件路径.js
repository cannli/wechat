const http = require('http')
const fs = require('fs')
const server = http.createServer()

const path = 'D:/Program Files'

// 2. 接听server的request 请求事件，设置请求处理参数
server.on('request', (req, res) => {
    fs.readFile('./template.html', function (err, data) {
        if (err) {
            return res.end('404')
        }
        fs.readdir(path, function (err,files) {
            if (err) {
                return res.end('404')
            }
            console.log(files)
        })

        res.end(data)
    })
})

server.listen(3001, () => console.log('启动成功'))
