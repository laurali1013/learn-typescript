//定义boolean类型变量
let isDone: boolean = false;

//定义number类型变量(可定义二级制变量)
let age: number = 20;
let binaryNumber: number = 0b1111;

//定义string类型变量(可定义模板字符串)
let fistName: string = 'Laura';
let message: string = `Hello,My name is ${fistName},age is ${age}`;

//定义undefined、null类型变量，这两中类型的是所有类型的子类型
let u: undefined = undefined;
let n: null = null;
let num: number = undefined;

//any类型的变量
let notSure: any = 4;
notSure = 'maybe a string'
notSure = true;

//定义number或者string类型变量
let numberOrString: number | string = 234;
numberOrString = 'abc';

//定义数组
let arrOfNumber: number[] = [1, 2, 3, 4];
arrOfNumber.push(5);
//数组如果push一个string类型数据，则会报错，如下：
//arrOfNumber.push('abc');

//定义元组类型变量
let numberAndString: [number, string] = [123,'Laura'];




