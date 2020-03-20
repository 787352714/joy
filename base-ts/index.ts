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
//tribleType = [];

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


//函数声明

function add(x: number,y:number,z:number=1):number{
  return x+y+z
}

const add2:(x:number,y:number,z?:number)=>number = add;

//类

class Animal {
  name:string;
  constructor(name){
    this.name=name
  }
  run(){
    return `${this.name} is runing`
  }
}

const snake = new Animal('lily');

console.log('snake.run() :', snake.run());

class Pet extends Animal {
  eat(){
    return `${this.name} is eating`
  }
}

const cat = new Pet('hanhan');
console.log('cat.run :', cat.run());
console.log('cat.eat :', cat.eat());

class Dog extends Animal {
  constructor(name){
    super(name);
    console.log('name :', name);
  }
  run(){
    return `hhhhh,${super.run()}`
  }
}

const dog = new Dog('小黑');
console.log('dog.run() :', dog.run());


//类的interface约束

interface Radio {
  switchRadio():void;
}

//interface的继承
interface carButton extends Radio {
  openDoor():boolean;
}

//类的约束依赖关键词implements
class Car implements carButton {
  openDoor(){
    return false
  };
  switchRadio(){

  }
}

//枚举

enum direction1 {
  up="up",
  down="down",
  left="left",
  right="right",
}

// 常量枚举，可以在使用过程中直接引用
const enum direction2 {
  up="up",
  down="down",
  left="left",
  right="right",
}


//泛型

function swap<t,d>(tuple:[t,d]):[d,t]{
  return [tuple[1],tuple[0]]
}

const result = swap([1,22]);
console.log('result :', result);

// 泛型限制 可以使泛型利用extends

interface ItWidthLength {
  length:number
}

function echoWithLength <T extends ItWidthLength> (args:T) :T{
  console.log('args.length :', args.length);
  return args
}

//泛型用于类

class GenericNumber<T> {
  innerValue:T;
  add:(arg1:T,arg2:T)=>T
}

const generic = new GenericNumber<number>();
generic.innerValue=111

//泛型用于interface

interface GenericInterface<T> {
  leng:T;
}

const inter:GenericInterface<number> = { leng:1 }
