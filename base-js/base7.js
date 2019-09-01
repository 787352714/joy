//由于函数声明提升的问题，函数命名尽量不要使用一个名称

// 递归 我调用我自己

//普通模式递归

function factorial_normel(num){
  if (num<2) {
    return 1   
  }
  return num*factorial_normel(num-1)
}

console.log('factorial_normel :', factorial_normel(5));

//利用arguments

function factorial_arguments(num){
  if (num<2) {
    return 1   
  }
  return num*arguments.callee(num-1)
}

console.log('factorial_arguments :', factorial_arguments(5));