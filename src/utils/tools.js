/**
 *  组件消息池数据
 * @param {Array} arr
 * @param {Object} item
 */
export const buildList = (arr, item) => {
  let params = {
    id: item._,
    user_type: item.user_type,
    user: item.user,
    create_at: dateFtt('yyyy-MM-dd hh:mm:ss', item.create_at),
    msg: item.msg
  }

  return arr.concat([params])
}

/* export const dateFormat = date => {
  let o = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes()
  }

  return `${o.year}-${o.month}-${o.day} ${o.hour}:${o.minute}`
} */

/**
 * 时间格式转换器
 * @param {String: 所需结果格式} type
 * @param {Date} date
 */
export const dateFtt = (type, date) => {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds() // 秒
  }

  if (/(y+)/.test(type)) {
    type = type.replace(RegExp.$1, (date.getFullYear() + ''))
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(type)) {
      type = type.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return type
}
