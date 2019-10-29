export const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const ICON_DEFAULT = 'static/images/map/marker-icon.png';

export const ICON_SHADOW_DEFAULT = 'static/images/map/marker-shadow.png';

export function objVerify(obj, excludeProps = []) {
  let result = {};
  for (let key in obj) {
    const val = obj[key];
    if (val !== null && val !== undefined && !excludeProps.includes(val)) {
      result[key] = val;
    }
  }
  return result;
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function objToStyleStr(obj) {
  let styleStr = '';
  for (const key in obj) {
    let pre = key.replace(/[A-Z]/g, function (match) {
      return '-' + match.toLowerCase();
    });
    styleStr += `${pre}:${obj[key]};`;
  }
  return styleStr;
}

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function() {
    let last = +new Date() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function() {
    context = this;
    args = arguments;
    timestamp = +new Date();
    // 第一次调用该方法时，且immediate为true，则调用func函数
    let callNow = immediate && !timeout;
    // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}
