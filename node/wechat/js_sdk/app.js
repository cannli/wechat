'use strict'
const express = require('express')
const sha1 = require('sha1')
const auth = require('./config/auth')
const app = new express()
// 引入配置文件
const {url} = require('./config/config')
const Wechat = require('./config/wechat')
const wechatApi = new Wechat()
// 配置模板资源目录
app.set('views', './views');
// 配置模板引擎
app.set('view engine', 'ejs');
// 页面路由
app.get('/search', async (req, res) => {
    /*
    * 生成js-sdk使用签名
    *   - 组合与签名的4个参数，jsapi_ticket，noncestr(临时字符串), timestamp（时间戳）,url（当前服务器地址）
    *   - 将其进行字典排序，以&连接
    *   - 进行shal加密，最终生成signature
    * */
    const noncestr ='app_weewrew-canli' // Math.random().split('.')[1]
    const timestamp = Date.now()
    const {ticket} = await wechatApi.fetchTicket()

    const arr = [
        `jsapi_ticket=${ticket}`,
        `noncestr=${noncestr}`,
        `timestamp=${timestamp}`,
        `url=${url}/search`
    ]
    const str = arr.sort().join('&')
    const signature = sha1(str)
    console.log(signatrue,'signature')
    // 渲染页面，将渲染好的页面返回给用户
    res.render('search',{
        signature,
        noncestr,
        timestamp
    })
})
/*
* - 开发者服务器 - 验证消息是否来自服务器
*   - 目的 计算出 signature 微信加密签名
*   - 将微信的3个参数，根据字典排序并组合在一起形成一个数组
*   - 将数组里面所有参数拼接字符串，进sha1加密，和微信的signature对比
* */
// 接受处理所有消息
app.use(auth())
app.listen(1234)
console.log('Listening:1234')