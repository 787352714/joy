
const sleep = function (ms) {
  return new Promise((resolve,reject)=>{
    console.log('1 :>> ', 1);
    setTimeout(()=>{
      resolve()
    },ms)
  })
}

sleep(1000).then(()=>{console.log('2 :>> ', 2);})