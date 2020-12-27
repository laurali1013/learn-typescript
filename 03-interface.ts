//定义接口
interface IPerson{
    readonly id: number;//只读,不能修改
    name: string;
    age: number;
    grade?: number;//可有可无
}
//定义符合IPerson接口的变量
let laura: IPerson = {
    id:1,
    name:'laura',
    age: 20,
    // gender:'female'//会报错，没有完全匹配
}
