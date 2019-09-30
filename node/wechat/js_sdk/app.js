'use strict'
const express = require('express')
const router = require('./router')
const app = new express()

// 配置模板资源目录
app.set('views', './views');
// 配置模板引擎
app.set('view engine', 'ejs');
// 应用页面路由
app.use(router)
app.listen(1234)
console.log('Listening:1234')