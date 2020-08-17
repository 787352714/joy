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