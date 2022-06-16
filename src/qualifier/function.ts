// 方法装饰器用来装饰方法
// 第一个参数： 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
// 第二个参数： 是方法的名称
// 第三个参数： 是方法的描述
function functionEnhancer(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // target 如果装饰的是个普通属性的话，那么这个 target 指向类的原型 Person.prototype
  console.log(target); // Person { getName: [Function] }
  console.log(`key ${propertyKey}`); // key getName
  console.log(`desc ${JSON.stringify(descriptor)}`); // {"writable":true,"enumerable":true,"configurable":true}
}

class Person3 {
  name: string;

  constructor() {
    this.name = '金色小芝麻';
  }

  @functionEnhancer
  getName() {
    return 'getName';
  }
}

const user2 = new Person3();
user2.getName = function () {
  return '金色小芝麻';
};

console.log(user2.getName()); // '金色小芝麻'
