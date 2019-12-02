// reduce依此执行promise

const f1= ()=> new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log('pq :', 'pq');
    resolve(1)
  }, 1200);
})

const f2 = ()=>new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log('p2');
    resolve(2)
  }, 200);
})

const f3 = (array,value)=>{
  array.reduce((item,currentItem)=>{
    return item.then(currentItem);
  },
  Promise.resolve(value))
}

f3([f1,f2],'done')


// reduce实现pipe函数

const pipe = (a)=>input=>a.reduce((f,fn)=>fn(f),input)

const f4 = x=>{console.log('x :', x); return x}
const f5 = x=>{x= x+1; console.log('x :', x); return x}
const f6 = x=>{x= x+1; console.log('x :', x); return x}

pipe([f4,f5,f6])(1)

// 利用forEach实现reduce

const myReduce = function(func,init){
  let array = this; //当arr调用时，将arr赋值给array
  let initValue = init===undefined ? array[0] : init; //设置初始值
  let startpoint = init === undefined ? 1 : 0; //设置起始值
  array.slice(startpoint)/* 将数组截取初始值开始的数组 */.forEach((element,index) => {
    initValue = func(initValue,element,index+startpoint,array) //回调函数，四个参数，保存值，当前元素，当前index，当前数组
  });
  return initValue
};

let arr = [12,3,4];
Array.prototype.myReduce = myReduce;

let reduceValue =  arr.reduce((a,b,c,arr)=>{
  console.log('arr :', arr);
  if(c===2){
    b=b*2
  }
  return a+b
},1)

let myReduceValue = arr.myReduce((a,b)=>{
  return a+b
},1)

console.log('object :', reduceValue,myReduceValue,arr);