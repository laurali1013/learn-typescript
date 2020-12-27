class Animal{
    name: string;
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`;
    }
}

const snake = new Animal('lily');
console.log(snake.run());

///////////////继承/////////////////
class Dog extends Animal{
    bark() {
        return `${this.name} is barking`;
    }
}
const xiaohei = new Dog('xiaohei');
console.log(xiaohei.bark());

///////////////多态/////////////////
class Cat extends Animal{
    constructor(name) {
        super(name); 
    }
    run() {
        return 'Meow,'+ super.run()
    }
}
const xiaobai = new Cat('xiaobai');
console.log(xiaobai.run());

/////////////变量修饰符/////////////////
//public:全局都可以访问
//private:子类不允许访问，只能在本身自己类中访问
//protected:子类允许访问，其他人员无法访问
//readonly:只能读，不能修改
//static:静态属性和方法，可直接调用此类属性和方法，不必实例化对象再调用


