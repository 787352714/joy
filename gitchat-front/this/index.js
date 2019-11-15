const fn={
  bar:10,
  foo: function(){
    console.log('bar :', this.bar);
    console.log('this :', this);
  }
};

let thisFn= fn.foo;
thisFn();// this为window
fn.foo();// this为fn对象
// 二者不同在于函数执行时的调用对象，thisFn调用函数时执行环境为window
// fn.foo()执行环境为fn 箭头函数的绑定无法被修改。

const o1 = {
  text: 'o1',
  fn: function() {
      return this.text
  }
}
const o3 = {
  text: 'o3',
  fn: function() {
      var fn = o1.fn
      return fn()
  }
}
console.log('o :', o3.fn());