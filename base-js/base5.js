//高程第五章
// 引用类型

//对象的方括号访问法

//一般在对象使用中，推荐点访问法，但当属性名为关键字，保留字或数字，变量时，推荐方括号访问

let obj={
  a:1
}

console.log(obj.a);
obj["b n"]=2;
console.log(obj["b n"]);

// array类型

//array类型的上限是4294967259

//利用length属性实现push方法(将c数组的值逐一push到b数组中)
 let c= [1,2,3,4,9,6,7,8,4];
 let b= new Array();
 for(let item of c){
   console.log(item)
   b[b.length]=item;
 }
 console.log(1111,b);

 //splice()方法

 //删除
 c.splice(0,2);
 console.log(c);
 // 插入
 c.splice(1,0,999);
 console.log(c);
 // 替换
 c.splice(1,1,888);
 console.log(c)


 //reduce()方法 reduce用于处理数组中的每一项来返回一个最终的值。
 // 求和 
 let sum= b.reduce((i,j)=>i+j);
 console.log(sum);
 // 求最大
 let max= b.reduce((i,j)=>i-j>=0?i:j);
 let max2= Math.max.apply(Math,b)//求最大的简便方法（将Math方法放入apply中作为this，刚好传入一个执行数组作为参数）
 console.log(max,max2)

// Function 类型

//函数声明与函数表达式之间的区别
// 二者主要的区别在与变量提升的操作问题上

console.log(sum1) //undefined 执行到这一步时，sum1变量提升，但是是未赋值的变量
var sum1 = function(){
  return 1
}

console.log(sum2) //可以输出函数，因为变量提升，并且提升的是当前函数 
function sum2(){
  return 2
}

// console.log(sum3) //报错，let不能变量提升
// let sum3 = function(){
//   return 3
// }