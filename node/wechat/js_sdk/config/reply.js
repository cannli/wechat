module.exports = (message) => {
    let options = {
        toUserName: message.FromUserName,
        fromUserName: message.ToUserName,
        msgType: message.MsgType
    }

    let content = '你说什么我听不懂'
    if (message.MsgType === 'text') {
        if (message.Content === '1') {
            content = '今晚吃鸡，大吉大利'
        } else if (message.Content === '2') {
            content = '将来你就是大侠'
        } else if (message.Content.match('爱')) {
            content = '我也爱你'
        }
    } else if (message.MsgType === 'image') {
        options.msgType = 'image'
        options.media_id = 'MediaId'
        console.log(message.PicUrl)
    } else if (message.MsgType === 'voice') {
        options.msgType = 'voice'
        options.media_id = 'MediaId'
        console.log('voice')
    } else if (message.MsgType === 'location') { // 地理位置信息
        content = `纬度：${message.Location_X} 经度：${message.Location_Y}缩放大小：${message.Scale}位置信息：${message.Label}`
    } else if (message.MsgType === 'event') { // 关注与取消关注事件
        if (message.Event === 'subscribe') {
            console.log('欢迎您的关注~')
            content = '欢迎您的关注'
        } else if (message.Event === 'unsubscribe') {
            console.log('无情关注~')
        }
    }
    options.content = content
    return options
}
