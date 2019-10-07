export let checkEmail = (rule, value, callback) => {
  const mailReg = /^([a-zA-Z0-9.-_])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  if (!value) {
    return callback(new Error('邮箱不能为空'))
  }
  setTimeout(() => {
    if (mailReg.test(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的邮箱格式'))
    }
  }, 100)
}

export let checkPhone = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('手机号不能为空'))
  } else {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    setTimeout(() => {
      if (reg.test(value)) {
        callback()
      } else {
        return callback(new Error('请输入正确的手机号'))
      }
    }, 100)
  }
}

export let checkIdentity = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('身份证不能为空~'))
  } else {
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    setTimeout(() => {
      if (reg.test(value)) {
        callback()
      } else {
        return callback(new Error('请输入正确的身份证号码~'))
      }
    }, 100)
  }
}
// 必须大于0
export let moreThanZero = (rule, value, callback) => {
  if (value) {
    setTimeout(() => {
      if (value * 1 > 0) {
        callback()
      } else {
        return callback(new Error('金额必须大于0~'))
      }
    }, 100)
  }
}
