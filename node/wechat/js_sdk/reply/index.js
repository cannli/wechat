const sha1 = require('sha1')
const config = require('../config/config')
const {getUserDataAsync, parseXMLAsync, formatMessage} = require('../utils/tool')
const template = require('./template')
const reply = require('./reply')
// 微信返回消息
// { signature: 'b934c7bb0c5729734d50cbbe78891ddd25a61acd',
//     echostr: '1300714144042827514',
//     timestamp: '1569495280',
//     nonce: '1566103464'
// }
module.exports = () => {
    return async (req, res, next) => {
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
            // 接收请求体中的数据，这些数据是流的形式,在xml转成js对象
            const jsData = await parseXMLAsync(await getUserDataAsync(req))
            // 再根据自己的要求转成想要的js对象格式
            let message = formatMessage(jsData)
            // 微信服务器返回数据处理
            let options = reply(message)
            // 将xml转成对象
            // { ToUserName: 'gh_ebd3b20f4f1d',
            //     FromUserName: 'odN-ZxOr2DrPNx-SKgWN8A9ENcjc',
            //     CreateTime: '1569651248',
            //     MsgType: 'text',
            //     Content: '/::<',
            //     MsgId: '22472002919305329'
            // }
            // 如果开发者服务器没有返回响应给微信服务器，微信服务器会发送3次请求过来
            // 判断用户的type

            // 把将要返回给微信客服端的数据再转成xml
            let replyMessage = template(options)
            // 返回响应给微信服务器
            res.send(replyMessage)
            //  res.end('')
        } else {
            res.end('err')
        }
    }
}

