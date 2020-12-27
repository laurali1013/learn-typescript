//指定name必须是字符串类型变量
const hello = (name: string) => {
    return `hello ${name}`;
};
hello('Laura');
//下面语法会报错：因为要求name是一个string类型
// hello(123);
