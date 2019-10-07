exports.install = function (Vue, options) {
  'use strict'

// 纯粹的alert框 success error warning
  Vue.prototype.alert = function (text, type = 'warning') {
    this.$alert(text, '提示', {
      showCancelButton: true,
      showConfirmButton: false,
      dangerouslyUseHTMLString: true,
      type: type
    }).catch(() => {
      // errCb
    })
  }
// message提示  success  warning  error
  Vue.prototype.message = function (text, type = 'success') {
    if (type === 'error') {
      this.$message.error(text)
    } else {
      this.$message({
        message: text,
        type: type
      })
    }
  }
// 有确认按钮，确认后有相应的操作
  Vue.prototype.confirm = function (text, okCb, errCb) {
    this.$confirm(text, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      // okCb
    }).catch(() => {
      // errCb
    })
  }

  // 切换
  Vue.prototype.backRegister = function () {
    let testUrl = window.location.host
    if (testUrl === 'abstest.tenpay.com' || testUrl === 'abs.tenpay.com' || testUrl === 'fit.oa.com' || testUrl === 'absdev.tenpay.com') {
      return false
    } else {
      return true
    }
  }
  Vue.prototype.backLogin = function (url = '/abs/login.html') {
    let testUrl = window.location.host
    if (testUrl === 'abstest.tenpay.com') {
      window.location.href = `https://abstest.tenpay.com${url}`
    } else if (testUrl === 'abs.tenpay.com') {
      window.location.href = `https://abs.tenpay.com${url}`
    } else if (testUrl === 'absdev.tenpay.com'){
      window.location.href = `https://absdev.tenpay.com${url}`
    } else {
      window.location.href = `http://localhost${url}`
    }
  }
  Vue.prototype.debounce = function (func, wait, immediate) {
    let timeout, args, context, timestamp, result

    const later = function () {
      // 据上一次触发时间间隔
      const last = +new Date() - timestamp

      // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last)
      } else {
        timeout = null
        // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
        if (!immediate) {
          result = func.apply(context, args)
          if (!timeout) context = args = null
        }
      }
    }

    return function (...args) {
      context = this
      timestamp = +new Date()
      const callNow = immediate && !timeout
      // 如果延时不存在，重新设定延时
      if (!timeout) timeout = setTimeout(later, wait)
      if (callNow) {
        result = func.apply(context, args)
        context = args = null
      }
      return result
    }
  }

  Vue.prototype.valToName = function (arr, val, flag) {
    if (!arr) {
      return '-'
    }
    let valArr = []
    let name = ''
    if (val && val.length > 0) {
      valArr = val.split(flag)
    }
    for (let x in arr) {
      for (let y in valArr) {
        if (arr[x].val == valArr[y]) {
          name += arr[x].name + ','
        }
      }
    }
    return name
  }

  // 判断文件的格式
  Vue.prototype.BaseConfigFn = function (val) {
    if (val == null || val === '' || val.length <= 0) {
      console.log('没有url')
      return
    }
    let MediumType = {
      '.jpg|.gif|.png|.jpeg': 'image',
      '.doc|.docx|.xls|.xlsx|.ppt|.pptx|.pdf': 'document',
      '.wmv|.asf|.flv|.mp4|.rmvb': 'video',
      '.wav|.mp3|.ogg': 'audio'
    }
    let extension = val.substring(val.lastIndexOf('.'))
    for (let key in MediumType) {
      let reg = new RegExp(key)
      if (reg.test(extension.toLowerCase())) {
        console.log(MediumType[key], 999)
        return MediumType[key]
      }
    }
    return '其他'
  }
  // 根据有多个值组成的字符串val，得出name
  Vue.prototype.multiValToName = function (arr, str, flag, name) {
    if (!arr || arr.length <= 0 || !str) return '-'
    let strArr = str.split(',')
    let arrAdd = arr.filter(x => strArr.some(y => y === x[flag])).map(z => z[name]).join('，')
    return arrAdd
  }

  // 判断按钮是否显示
  Vue.prototype.menuIsBool = function (arr, str) {
    if (!arr || arr.length === 0) {
      return false
    } else {
      return arr.some(item => item.buttonName === str)
    }
  }
}

