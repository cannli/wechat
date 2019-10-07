const express = require('express')
const Router = express.Router
const sha1 = require('sha1')
const reply = require('../reply/index')
// 引入配置文件
const {url} = require('../config/config')
//引入Theaters
const Theaters = require('../model/Theaters');

const Wechat = require('../wechat/wechat')
const wechatApi = new Wechat()
// 创建路由器对象
const router = new Router()

router.get('/search', async (req, res) => {
    /*
    * 生成js-sdk使用签名
    *   - 组合与签名的4个参数，jsapi_ticket，noncestr(临时字符串), timestamp（时间戳）,url（当前服务器地址）
    *   - 将其进行字典排序，以&连接
    *   - 进行shal加密，最终生成signature
    * */
    const noncestr = String(Math.random()).split('.')[1]
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

    // 渲染页面，将渲染好的页面返回给用户
    res.render('search', {
        signature,
        noncestr,
        timestamp
    })
})
//详情页面路由
router.get('/detail/:id', async (req, res) => {
    //获取占位符id的值
    const {id} = req.params;
    console.log(id,999999)
    //判断id值是否存在
    if (id) {
        //去数据库中找到对应id值得所有数据
        const data = await Theaters.findOne({doubanId: id}, {_id: 0, __v: 0, createTime: 0, doubanId: 0});
        console.log(data);
        //渲染到页面上
        res.render('detail', {data});
    } else {
        res.end('error');
    }

})
/*
* - 开发者服务器 - 验证消息是否来自服务器
*   - 目的 计算出 signature 微信加密签名
*   - 将微信的3个参数，根据字典排序并组合在一起形成一个数组
*   - 将数组里面所有参数拼接字符串，进sha1加密，和微信的signature对比
* */
// 接受处理所有消息
router.use(reply())
// 暴露出去
module.exports = router