'use strict'
const express = require('express')
const router = require('./router')
//引入数据库模块
const db = require('./db');
const app = new express()

// 配置模板资源目录
app.set('views', './views');
// 配置模板引擎
app.set('view engine', 'ejs');
(async () => {
    //等待连接数据库
    await db;
    //应用路由器
    app.use(router);
})()
app.listen(3000)
console.log('Listening:3000')