module.exports = options => {
    let replyMessage = `
    <xml>
      <ToUserName><![CDATA[${options.toUserName}]]></ToUserName>
      <FromUserName><![CDATA[${options.fromUserName}]]></FromUserName>
      <CreateTime>${Date.now()}</CreateTime>
      <MsgType><![CDATA[${options.msgType}]]></MsgType>
    `
    if (options.msgType === 'text') {          // text
        replyMessage += `<Content><![CDATA[${options.content}]]></Content>`
    } else if (options.msgType === 'image') { // img
        replyMessage += `<Image><MediaId><![CDATA[${options.media_id}]]></MediaId></Image>`
    } else if (options.msgType === 'voice') { // 语音
        replyMessage += `<Voice><MediaId><![CDATA[${options.media_id}]]></MediaId></Voice>`
    } else if (options.msgType === 'video') {  // 视频
        replyMessage += `
                    <Video>
                        <MediaId><![CDATA[${options.media_id}]]></MediaId>
                        <Title><![CDATA[${options.title}]]></Title>
                        <Description><![CDATA[${options.description}]]></Description>
                    </Video>`
    } else if (options.msgType === 'music') {  // 音乐
        replyMessage += `<Music>
                <Title><![CDATA[${options.title}]]></Title>
                <Description><![CDATA[${options.description}]]></Description>
                <MusicUrl><![CDATA[${options.musicUrl}]]></MusicUrl>
                <HQMusicUrl><![CDATA[${options.hqMusicUrl}]]></HQMusicUrl>
                <ThumbMediaId><![CDATA[${options.media_id}]]></ThumbMediaId>
        </Music>`
    } else if (options.msgType === 'news') {  //
        replyMessage += `<ArticleCount>${options.content.length}</ArticleCount><Articles>`
        options.content.forEach(item => {
            replyMessage += `
            <item>
              <Title><${item.title}]]></Title>
              <Description><![CDATA[${item.description}]]></Description>
              <PicUrl><![CDATA[${item.picUrl}]]></PicUrl>
              <Url><![CDATA[${item.url}]]></Url>
            </item>`
        })
        replyMessage += `</Articles>`
    }
    replyMessage += `</xml>`
    return replyMessage
}