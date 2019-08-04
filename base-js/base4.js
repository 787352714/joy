 // 高程第四章
// 引用数据机制

// 基础引用
let a= 1;
b=a; 
console.log(b);
b=2;
console.log(b);
// 基本数据类型的引用会直接改变被复制的数据类型的值，因为其都保存在一个内存栈中
// 复制引用类型
obj= new Object();
obj.name= 'zj';
let person= obj;
console.log(obj.name,person.name);
person.name ='hzh';
console.log(obj.name)  //hzh
// 引用类型的复制时，虽然其被保存在不同的内存栈中，但是其指向的对象都存在于一个内存堆中
// 函数内的数据处理 机制
let fucObj= new Object;
fuc =function(obj){
    obj.name='zj';
    personObj = obj
    person.name='hzh'
}
fuc(fucObj);
console.log(fucObj.name);
// 由于函数的执行机制是只将对应的值传入参数之中
// 当传入一个对象时，将此对象作为一个值传递到函数中，但是其怪异的地方在于会和引用类型一样去改变
// 外部对象。而在函数内部，由于其是作为值传入的，所以不具有引用类型的特点，不会随其复制的对象改变
// 而改变，函数内部复制的对象，在函数执行结束时，就被销毁。

// 执行环境及作用域
// 执行环境是由于作用域链的存在而产生的一种执行机制
// 我们说js的执行万物届对象，是因为所用的js执行环境都是在window对象下做执行调用的，而其执行方式
// 依赖原型链的思想，即一个执行环境在遇到一个数据类型调用时，会向上搜索其原型对象的值。
// 所以会产生局部作用域，而执行过程中，不会向下搜索原型链。可以带入栈的堆放的原理进行理解。
