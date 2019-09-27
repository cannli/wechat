const sha1 = require('sha1')
const config = require('./config')

// 微信返回消息
// { signature: 'b934c7bb0c5729734d50cbbe78891ddd25a61acd',
//     echostr: '1300714144042827514',
//     timestamp: '1569495280',
//     nonce: '1566103464'
// }

// module.exports = () => {
//     return (req, res, next) => {
//         const {signature, echostr, timestamp, nonce} = req.query
//         const {token} = config
//         console.log(`${signature}---${echostr}---${timestamp}---${nonce}---${token}`)
//         const arrStr = [timestamp, nonce, token].sort().join('')
//         const sha1Str = sha1(arrStr)
//         console.log(sha1Str)
//         if (sha1Str === signature) {
//             console.log(sha1Str)
//             res.send(echostr)
//         } else {
//             console.log('88')
//             res.end('error')
//         }
//         console.log(req.query)
//     }
// }
module.exports = () => {
    return (req, res, next) => {
        const {signature, echostr, timestamp, nonce} = req.query
        const {token} = config
        //    console.log(`${signature}---${echostr}---${timestamp}---${nonce}---${token}`)
        const sha1Str = sha1([timestamp, nonce, token].sort().join(''))
        /*
        * 微信会发送2中请求给开发者服务器
        * 1. GET
        *   - 验证服务器的有效性
        * 2. POST
        *   - 微信服务器会将用户发送的数据以POST请求的方式转发到开发者服务器
        *
        * */
        if (req.method === 'GET') {
            if (sha1Str === signature) {
                console.log(sha1Str)
                res.send(echostr)
            } else {
                console.log('88')
                res.end('error')
            }
        } else if (req.method === 'POST') {
            if (sha1Str !== signature) {
                res.end('err')
            }
            console.log(req.query)
            res.end('')
        } else {
            res.end('err')
        }
    }
}

