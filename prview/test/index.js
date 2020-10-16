
const sleep = function (ms) {
  return new Promise((resolve,reject)=>{
    console.log('1 :>> ', 1);
    setTimeout(()=>{
      resolve()
    },ms)
  })
}

sleep(1000).then(()=>{console.log('2 :>> ', 2);})

//手写浅拷贝
let shallowClone = function(obj){
  let res = Object.create(null)
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      res[key] = element;
    }
  }
  return res;
}
//深拷贝
let deepClone = function(obj){
  let res = Object.create(null);
  if(obj === null)return null;
  if(obj instanceof Date)return new Date(obj);
  if(obj instanceof RegExp)return new RegExp(obj);
  if (typeof obj !== "object") return obj;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      res[key] = deepClone(element);
    }
  }
  return res;
}
//flat
let myFlat = function(arr=[],depth=1){
    let res = [];
    (function flat(arr,depth){
      for (const iterator of arr) {
        if(Array.isArray(iterator)){
          if(depth >0)flat(iterator,depth-1)
        }else{
          //forof不能跳过空元素，要手动执行
          iterator !== void 0 &&res.push(iterator)
        }
      }
    })(arr,depth)
    return res;
}