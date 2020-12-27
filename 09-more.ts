//类型别名type aliases
type PlusType = (x: number, y: number) => number;

function sum(x: number, y: number) :number{
    return x + y;
}
const sum2: PlusType = sum;

//联合类型
type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName(n: NameOrResolver): string{
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

//类型断言type assertion
function getLength(input: string | number): number {
    //method1 
    // const str = input as String;
    // if (str.length) {
    //   return str.length;  
    // } else {
    //     const num = input as Number;
    //     return num.toString().length;
    // }  
    //method2
    if ((<string>input).length) {
        return (<string>input).length;
    } else {
        return input.toString().length;
    }
}