import Vue from 'vue';
// sessionStorage 操作i
Vue.prototype.$getSessionStorage = function(key){
  return sessionStorage.getItem(key)
};
Vue.prototype.$setSessionStorage = function(key,value){
  sessionStorage.setItem(key,value)
};
Vue.prototype.$removeSessionStorage = function(key){
  sessionStorage.removeItem(key)
};
Vue.prototype.$clearSessionStorage = function(){
  sessionStorage.clear()
};
//localStorage操作

Vue.prototype.$getLocalStorage = function(key){
  let overDate = localStorage.getItem(`${key}time`)
  if(overDate){
    if(new Date().getTime()<=overDate){
      return localStorage.getItem(key);
    }else{
      localStorage.removeItem(key);
      localStorage.removeItem(`${key}time`);
      console.warn('缓存已过期，已删除');
      return null
    }
  }else{
    return localStorage.getItem(key);
  }
}

Vue.prototype.$setLocalStorage = function(key,value){
  return localStorage.setItem(key,value);
}

Vue.prototype.$removeLocalStorage = function(key){
  localStorage.removeItem(key)
}

Vue.prototype.$clearLocalStorage = function(){
  localStorage.clear()
}
// 为localstorage设置过期时间，模仿cookie

Vue.prototype.$setTimeLocalStorage = function(key,value,timeType,time){
  let setTime = 0;
  switch (timeType) {
    case 's':
      setTime = time*1000
      break;
    case 'min':
      setTime = time*1000*60
      break;
    case 'h':
      setTime = time*1000*60*60
      break;
    case 'd':
      setTime = time*1000*60*60*24
      break;
    case 'm':
      setTime = time*1000*60*60*24*30
      break;
    case 'y':
      setTime = time*1000*60*60*24*365
      break;
    default:
      break;
  }
  let overDueTime = new Date().getTime()+setTime;
  localStorage.setItem(`${key}time`,overDueTime);
  localStorage.setItem(key,value);
}