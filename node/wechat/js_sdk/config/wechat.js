/*
* 获取access-token
* 微信调用接口的全局唯一凭证
* 特点 ： 唯一的，有效期 2小时，提前5分钟调用
* https请求方式: GET
* https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
* 设计思路：
*   - 首次本地没有，发送请求获取access-token，保存起来（本地文件）
*   - 第二次或以后，先读本地文件，判断它是否过期
*     - 过期了
*       - 重新请求获取，保存覆盖之前的文件（保证文件唯一性）
*     - 没有过期
*       - 直接使用
*
*
*   - 整理思路
*     读取本地文件（readAccessToken）
*       - 本地有文件
*         判断它是否过期(isValidAccessToken)
*           - 过期了
*              - 重新请求获取(getAccessToken)，保存覆盖之前的文件（保证文件唯一性）(saveAccessToken)
*           - 没有过期
*             - 直接使用
*       - 没有文件
*         - 发送请求获取access-token((getAccessToken))，保存起来（本地文件）(saveAccessToken) ,直接调用
*
* */

const rq = require('request-promise-native')   // 会返回一个promise
const {writeFile, readFile} = require('fs')

const {appID, appSecret} = require('./config')
const menu = require('./menu')

class Wechat {
    constructor() {
    }

    /*
    * 获取access_token
    * { access_token: '25_T6tsWKB7EALkrcWdeyYqdKsIfQ41oYEW65FF1gg4au97MDmIt-
    * KVNiRlWQsJbjAbkH2-EQG83b5FJ6bItOrzHVcIG9hHgCadDenaFU48ZXmtxTZ-_
    * YHd8viyBOJ44Yx8SHE09WFw7gZpgANwZLNcAEAPBD',expires_in: 7200 }
    * */
    getAccessToken() {  // appid, secret
        const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appSecret}`
        // 为什么要返回一个promise,因为要全局返回
        return new Promise((resolve, reject) => {
            rq({method: 'GET', url, json: true})
                .then(res => {
                    // 设置token的过期时间
                    res.expires_in = Date.now() + (res.expires_in - 300) * 1000
                    resolve(res)
                }).catch(err => {
                console.log(err)
                reject('getAccessToken方法出了问题' + err)
            })
        })
    }

    /*
    * 保存token
    * @param accessToken
    * */
    saveAccessToken(accessToken) {
        // 读写文件要将对象转成json
        accessToken = JSON.stringify(accessToken)
        // 将accessToken保存成一个文件
        return new Promise((resolve, reject) => {
            writeFile('./accessToken.txt', accessToken, err => {
                if (!err) {
                    console.log('保存成功');
                    resolve()
                } else {
                    reject('saveAccessToken接口出了问题' + err)
                }
            })
        })
    }

    /*
    * 读取token
    * */
    readAccessToken() {
        return new Promise((resolve, reject) => {
            readFile('./accessToken.txt', accessToken, (err, data) => {
                if (!err) {
                    console.log('文件读取成功~');
                    resolve(data.JSON.parse)
                } else {
                    reject('readAccessToken接口出了问题' + err)
                }
            })
        })
    }

    /*
    * 用来检测token是否有效
    * */
    isValidAccessToken(data) {
        // 检测传入的参数是否有效
        if (!data && !data.access_token && !data.expires_in) return false
        // data.expires_in< Date.now() 表示过期 用 false
        return data.expires_in > Date.now()
    }

    /*
    * 获取没有过期的token
    * @return {Promise<any>} access_token
    * */
    fetchAccessToken() {
        if (this.access_token && this.expires_in && this.isValidAccessToken(this)) {
            // 说明之前保存过token,并且是有效的
            return Promise.resolve({access_token: this.access_token, expires_in: this.expires_in})
        }
        return (this.readAccessToken()
                .then(async res => {
                    // 有文件时，也要判断有没有过期
                    if (this.isValidAccessToken(res)) {
                        // 有效的
                        return Promise.resolve(res)
                    } else {
                        // 过期了， 重新请求
                        const res = await this.getAccessToken()
                        // 保存起来
                        await this.saveAccessToken(res)
                        return Promise.resolve(res)
                    }
                })
                .catch(async err => {
                    // 没有文件，重新请求
                    const res = await this.getAccessToken()
                    await this.saveAccessToken(res)
                    return Promise.resolve(res)
                }).then(res => {
                    // 将数据挂载到this
                    this.access_token = res.access_token
                    this.expires_in = res.expires_in
                    console.log(res, 'return')
                    return Promise.resolve(res)
                })
        )
    }

    /*
    *创建自定义菜单
    * */
    createMenu(menu) {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await this.fetchAccessToken()
                const url = ` https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${data.access_token}`
                // 发送请求
                const result = await rq({method: 'POST', url, json: true, body: menu})
                resolve(result)
            } catch (e) {
                reject('createMenu方法出问题了,' + e)
            }
        })
    }

    /*
    * 删除菜单
    * */
    deleteMenu() {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await this.fetchAccessToken()
                const url = ` https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=${data.access_token}`
                // 发送请求
                const result = await rq({method: 'GET', url, json: true})
                resolve(result)
            } catch (e) {
                reject('deleteMenu方法出问题了,' + e)
            }
        })
    }
}


(async () => {
    const w = new Wechat()
    let result = await w.deleteMenu()
    console.log(result, 'delete')
    result = await w.createMenu(menu)
    console.log(result, 'create')
})()