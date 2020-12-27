
//把特定的功能提取出一个interface
interface Radio{
    switchRadio(): void;
}

//检查电池容量的interface
interface Battery{
    checkBatteryStatus(): void;
}
//接口继承
interface RadioWithBattery extends Radio{
    checkBatteryStatus(): void;
}

//////////////////////////////
class Car implements Radio{
    switchRadio() {}
}
/*
class Cellphone implements Radio,Battery{
    switchRadio() {}
    checkBatteryStatus(){}
}
*/

class Cellphone implements RadioWithBattery{
    switchRadio() { };
    checkBatteryStatus(){};
}