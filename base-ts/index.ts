// enum Color{red,blue=2,yellow};
// let c:Color= Color.red;

// 基础类型

//String,number,boolean

let str: string = "string";
let num: number = 1;
let isFlag: boolean = true;

//null , undefined

let none: null = null;
let und: undefined = undefined;

// 多重类型和any

let numberOrString: number | string = 1;
numberOrString = "1111"
let tribleType: number | boolean | string = 1;
tribleType = "2222";
tribleType = true;
tribleType = [];

//数组和元组

let baseArr: number[] = [1,2,3];
let baseArr2: Array<number> = [2,3,4]

let tuple:[number,string] = [2,"2"];

//interface 接口，用于定义一个对象，函数，类的结构性子类型化

interface Person {
  readonly id:number; //readonly属性表示只读属性
  name:string;
  age?:number; //?表示可选属性
}


//由接口生成的对象
let user1: Person ={
  id:1,
  name:"张三",
} 