// 属性装饰器用来装饰属性
// 属性装饰器表达式会在运行时当做函数被调用，传入下列两个参数
// 第一个参数： 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
// 第二个参数： 是属性的名称
function paramEnhancer(target: any, propertyKey: string) {
  console.log(target); // Person {}
  console.log(`key ${propertyKey}`); // key name
}

class Person1 {
  @paramEnhancer
  name: string;

  constructor() {
    this.name = '金色小芝麻';
  }
}

const user1 = new Person1();
user1.name = '你好啊！';
console.log(user1.name); // 你好啊！
