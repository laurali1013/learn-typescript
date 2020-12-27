//输入是number类型，返回值是number类型
function add(x: number, y: number, z?: number): number{
    if (typeof z === 'number') {
        return x + y + z; 
    } else {
        return x + y;
    }    
}
let result = add(1, 2, 3);


//输入默认z可以说也是可选参数
function add1(x: number, y: number, z=10): number{
    if (typeof z === 'number') {
        return x + y + z; 
    } else {
        return x + y;
    }    
}
//函数也有类型
const add2: (x: number, y: number, z?: number) => number = add;