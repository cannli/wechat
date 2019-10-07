const {parseString} = require('xml2js')
const {writeFile, readFile} = require('fs')
const {resolve} = require('path')
module.exports = {
    getUserDataAsync(req) {
        return new Promise((resolve, reject) => {
            let xmlData = ''
            req.on('data', data => {
                //     <xml><ToUserName><![CDATA[gh_ebd3b20f4f1d]]></ToUserName>              开发者id
                //     <FromUserName><![CDATA[odN-ZxOr2DrPNx-SKgWN8A9ENcjc]]></FromUserName>  用户id
                //     <CreateTime>1569599827</CreateTime>                                    时间
                //     <MsgType><![CDATA[text]]></MsgType>                                    文本type
                //     <Content><![CDATA[出发]]></Content>                                    内容
                //     <MsgId>22471268279095273</MsgId>                                       消息id，微信服务器默认保存3天发送的数据，通过这id可以找到，3天就销毁

                xmlData += data.toString()
            }).on('end', () => {
                resolve(xmlData)
            })
        })
    },

    // xml 转 js
    parseXMLAsync(xmlData) {
        return new Promise((resolve, reject) => {
            parseString(xmlData, {trim: true}, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject('parseXMLAsync方法出了问题' + err)
                }
            })
        })
    },

    // 进一步处理xml转成js的数据
    formatMessage(jsData) {
        let message = {}
        jsData = jsData.xml
        // 判断jsData是否是一个对象
        if (typeof jsData === 'object') {
            for (let key in jsData) {
                // 获取属性值
                let val = jsData[key]
                if (Array.isArray(val) && val.length > 0) {
                    message[key] = val[0]
                }
            }
        }
        console.log(message,'message')
        return message
    },

    // 写文件的方法封装
    writeFileAsync(data, fileName) {
        const filePath = resolve(__dirname, fileName)
        // 读写文件要将对象转成json
        data = JSON.stringify(data)
        // 将accessToken保存成一个文件
        return new Promise((resolve, reject) => {
            writeFile(filePath, data, err => {
                if (!err) {
                    resolve()
                } else {
                    reject('writeFileAsync接口出了问题' + err)
                }
            })
        })
    },
    // 读取文件
    readFileAsync(fileName) {
        const filePath = resolve(__dirname, fileName)
        return new Promise((resolve, reject) => {
            readFile(filePath, (err, data) => {
                if (!err) {
                    resolve(JSON.parse(data))
                } else {
                    reject('readFileAsync接口出了问题' + err)
                }
            })
        })
    }
}
