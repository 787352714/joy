const { add,mul } = require('./a');
const _ = require('lodash')

let a = add(1,2);
console.log('a :', a);

let b = mul(1,2);
console.log('b :', b);

let c = _.concat([1,2],3);
console.log('c :', c);