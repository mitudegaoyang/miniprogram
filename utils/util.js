const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const toString = (n) => {
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) {
    return "数据非法";  //判断数据是否大于0
  }
  var unit = "千百十亿千百十万千百十年", str = "";
  // n += "00";
  n += "";
  var indexpoint = n.indexOf('.');  // 如果是小数，截取小数点前面的位数
  if (indexpoint >= 0) {
    n = n.substring(0, indexpoint) + n.substr(indexpoint + 1, 2);   // 若为小数，截取需要使用的unit单位
  }
  unit = unit.substr(unit.length - n.length);  // 若为整数，截取需要使用的unit单位
  for (var i = 0; i < n.length; i++) {
    str += "零一二三四五六七八九".charAt(n.charAt(i)) + unit.charAt(i);  //遍历转化为大写的数字
  }
  return str.replace(/一十/g, "十").replace(/零(千|百|十)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|年)/g, "$1").replace(/(亿)万|一(十)/g, "$1$2").replace(/^年零?/g, "").replace(/年$/g, "年"); // 替换掉数字里面的零字符，得到结果
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  toString: toString
}
