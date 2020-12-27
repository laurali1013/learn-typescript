//arg是any类型，返回值也是any
function echo(arg) {
    return arg;
}
const result = echo(123);

//泛型 generics:创建了一个占位符，T可以是任意类型,
function echo1<T>(arg:T):T{
    return arg;
}

const str1: string = 'str1';
const result1 = echo1(str1);
const result2 = echo1(123);
const result3 = echo1(true);

function swap<T,U>(tuple:[T,U]):[U,T] {
    return [tuple[1], tuple[0]];
}
const result4 = swap(['string', 123]);
console.log(result4);

//约束泛型:没有办法确定arg有length属性，所以会报错
/*
function echoWithArr<T>(arg:T):T {
    console.log(arg.length);
    return arg;    
}
*/
//解决方法1：函数作用给一个T类型的arry，那么报错会消失
function echoWithArr<T>(arg:T[]):T[] {
    console.log(arg.length);
    return arg;    
}
const arrs = echoWithArr([1, 2, 3]);

//解决方法2：函数只允许接收那些有length属性的参数
interface IWithLength{
    length: number;
}
function echoWithLength<T extends IWithLength>(arg:T):T {
    console.log(arg.length);
    return arg;    
}
const str = echoWithLength('str');
const obj = echoWithLength({ length: 10 ,width:10});
const arr2 = echoWithLength([1, 3, 4]);


//队列：先进先出
class Queue{
    private data = [];
    push(item) {
        return this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const queue = new Queue();
queue.push(1);
queue.push('str');
//只有number类型的数据才有toFixed方法
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());


//队列：先进先出-----改造后
class Queue1<T>{
    private data = [];
    push(item:T) {
        return this.data.push(item);
    }
    pop():T {
        return this.data.shift();
    }
}
//创建number类型的实例对象
const queue1 = new Queue1<number>();
queue1.push(1);
console.log(queue1.pop().toFixed());
//创建string类型的实例对象
const queue2 = new Queue1<string>();
queue2.push('133');
console.log(queue.pop().length);

//interface和generics的混合使用
interface KeyPair<T, U>{
    key: T;
    value: U;
}
let kp1: KeyPair<number, string> = { key: 123, value: 'str' };
let kp2: KeyPair<string, string> = { key: '123', value: 'str' };

//定义数组的两种方式
let arry1: number[] = [1, 3, 4];
let arry2: Array<number> = [1, 3, 4];


//interface描写一个函数类型
interface IPlus<T>{
    (a: T, b: T): T;
}
function plus(a: number, b: number): number{
    return a + b;
}
function connect(a: string, b: string): string{
    return a + b;
}
const a: IPlus<number> = plus;
const b: IPlus<string> = connect;

