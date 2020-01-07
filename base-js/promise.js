//基础

const promise = new Promise((resolve, reject) => {
    console.log('1111 :', a);
    resolve("成功后传出的值");
    reject(2)
})

promise.then(value => {
    console.log('value :', value);
})

const x = promise.catch(value => {
    console.log('value :', value);
})

x.then(res => {
    console.log('res :', res);
})

//顺序执行promise

const times = function (vcount, ms) {
    setTimeout(() => {
        console.log('vcount :', vcount);
    }, ms);
}

const promise1 =  new Promise(resolve=>{
    times(1,1000);
    resolve(1)
})
const promise2 =  new Promise(resolve=>{
    times(2,2000);
    resolve(2)
})
const promise3 =  new Promise(resolve=>{
    times(3,500);
    resolve(3)
})
const promise4 =  new Promise(resolve=>{
    times(4,1000);
    resolve(4)
});

const arr= [promise1,promise2,promise3,promise4];

// arr.reduce((a,b)=>{
//     return a.then(b)
// },Promise.resolve());

Promise.all(arr).then(res=>{
    console.log('res :', res);
});



console.log('new Image :', [new Video()]);