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
    }
    // else if (message.MsgType === 'location') { // 地理位置信息
    //     content = `纬度：${message.Location_X} 经度：${message.Location_Y}缩放大小：${message.Scale}位置信息：${message.Label}`
    // }
    else if (message.MsgType === 'event') {
        if (message.Event === 'subscribe') {
            //用户订阅事件
            content = '欢迎您关注硅谷电影公众号~ \n' +
                '回复 首页 查看硅谷电影预告片 \n' +
                '回复 热门 查看最热门的电影 \n' +
                '回复 文本 搜索电影信息 \n' +
                '回复 语音 搜索电影信息 \n' +
                '也可以点击下面菜单按钮，来了解硅谷电影公众号';
        } else if (message.Event === 'unsubscribe') {
            //用户取消订阅事件
            console.log('无情取关~');
        } else if (message.Event === 'CLICK') {
            content = '您可以按照以下提示来进行操作~ \n' +
                '回复 首页 查看硅谷电影预告片 \n' +
                '回复 热门 查看最热门的电影 \n' +
                '回复 文本 搜索电影信息 \n' +
                '回复 语音 搜索电影信息 \n' +
                '也可以点击下面菜单按钮，来了解硅谷电影公众号'
        }
    }
    options.content = content
    return options
}
