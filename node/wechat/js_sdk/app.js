'use strict'
const express = require('express')
const auth = require('./config/auth')
const app = new express()
// 配置模板资源目录
app.set('views', './views')
// 配置模板引擎
app.set('./search','ejs')
// 页面路由
app.get('/search',(req,res) =>{
    // 渲染页面，将渲染好的页面返回给用户
    res.render('search')
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