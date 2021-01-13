// 数组的深层

export const deepthArr = function(arr:any[],childName:string):any[]{
  let receiveArray:any[] = [];
  const getarr = function (arr:any[]) {
    arr.forEach(item=>{
      receiveArray.push(item);
      if(item[childName]){
        getarr(item[childName]);
      }
    })
  }
  getarr(arr)
  return receiveArray
}

// 深拷贝

export const deepClone = function(obj:any):any{
  if(typeof obj !== "object"||obj === null){
    return obj;
  }
  let result;
  if(obj instanceof Array){
    result =[];
  }else{
    result = {}
  }
  for(let child in obj){
    if(Object.hasOwnProperty.call(obj,child)){
      result[child] = deepClone(obj[child]);
    }
  }
  return result;
}