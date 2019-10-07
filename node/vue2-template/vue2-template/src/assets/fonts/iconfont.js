;(function (window) {
  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconok" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.998465 54.313c-222.052329 0-402.093844 180.019003-402.093844 402.084635 0 222.074841 180.040493 402.093844 402.093844 402.093844 222.076888 0 402.095891-180.019003 402.095891-402.093844C914.093333 234.332003 734.07433 54.313 511.998465 54.313L511.998465 54.313zM742.633263 352.102267 482.586598 612.162234l0 0.00921c-11.993149 11.993149-30.283724 13.861706-44.228317 5.615904-2.607384-1.531889-5.04183-3.41068-7.255241-5.615904 0-0.00921 0-0.00921 0-0.00921L281.38618 462.436164c-14.20656-14.20656-14.20656-37.254485 0-51.474348 14.208607-14.20656 37.235043-14.20656 51.441603 0l124.017548 124.007315 234.326886-234.326886c14.20656-14.217816 37.254485-14.217816 51.461045 0C756.839823 314.847781 756.839823 337.895707 742.633263 352.102267L742.633263 352.102267zM742.633263 352.102267"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-date" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M768 563.2H512v256h256v-256zM716.8 0v102.4H307.2V0H204.8v102.4H153.6C96.768 102.4 51.712 148.48 51.712 204.8L51.2 921.6a102.4 102.4 0 0 0 102.4 102.4h716.8c56.32 0 102.4-46.08 102.4-102.4V204.8c0-56.32-46.08-102.4-102.4-102.4h-51.2V0h-102.4z m153.6 921.6H153.6V358.4h716.8v563.2z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = (function () {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }())
  var shouldInjectCss = script.getAttribute('data-injectcss')

  /**
   * document ready
   */
  var ready = function (fn) {
    if (document.addEventListener) {
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function () {
          document.removeEventListener('DOMContentLoaded', loadFn, false)
          fn()
        }
        document.addEventListener('DOMContentLoaded', loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded (w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function () {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function () {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      }

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function () {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function (el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function (el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg () {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>')
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)
})(window)
