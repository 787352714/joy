// Object.defineProperty()
// 此方法大量使用在mvvm实现，首先理解对象的四个默认属性(特性)
// 此方法传入三个参数，对象名。键名，属性对象
Object.defineProperty(person,'name',{
  configurable:true,
  writable:true,
  enumerable:true,
  value:'zj'
})

console.log('object :', person);
// configurable,表示是否可以删除此值或者修改特性
// writable,表示是否可以读写
// enumerable,表示是否可以循环取值
// value用来定义值。

// 访问器属性
let book={
  _year:2001,
  edit:1
}

Object.defineProperty(book,'year',{
  enumerable:true,
  configurable:true,
  get(){
    return this.year;
  },
  set(newVal){
    if(newVal>2004){
      this._year=newVal;
      this.edit+=newVal-2004
    }
  }
});

book.year=2005;
console.log('edit :', book.edit,book);

//get 方法用于读取属性调用函数，只指定其表示只读
//set 方法用于写入对象中的属性，包括与get不相关属性。只指定其会被忽略
//严格模式下会抛出错误

