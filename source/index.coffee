module.exports =
  replace : (target, prop) ->
    i     = null
    regex = null
    for i of prop
      regex = new RegExp(i, 'gi')
      target = target.replace(regex, prop[i])
    return target

  eventClick: (data, proxy) ->
    unless typeof proxy[ data.callback ] is 'function' then throw new Error 'Callback should be a function. Fix config.'
    unless window.jQuery then throw new Error 'jQuery required for event click binding.'
    window.jQuery( data.class ).bind 'click', () ->
      proxy[ data.callback ] window.jQuery(this)
    undefined

  eventDelegate: (data, proxy) ->
    unless typeof proxy[ data.callback ] is 'function' then throw new Error 'Callback should be a function. Fix config.'
    unless window.jQuery then throw new Error 'jQuery required for event click binding.'
    window.jQuery( data.class ).delegate data.delegateTo ,'click', () ->
      proxy[ data.callback ] window.jQuery(this)
    undefined

  getCookie: ( cookie ) ->
    re = new RegExp(cookie + '=([^;]+)')
    value = re.exec(document.cookie)
    if value != null then unescape(value[1]) else false

  setCookie: ( cname, cvalue, expires ) ->
    date = new Date
    document.cookie = "#{cname}=#{cvalue};expires=#{expires}"
    undefined

  setToStorage: (kname, kvalue) ->
    if typeof Storage isnt undefined
      localStorage.setItem kname, kvalue
    else
      this.setCookie kname, kvalue, 365*24*60*60*1000
    undefined

  getFromStorage: (kname) ->
    if typeof Storage isnt undefined
      localStorage.getItem kname
    else
      this.getCookie kname
    undefined
