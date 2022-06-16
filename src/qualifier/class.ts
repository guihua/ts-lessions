// 类装饰器
// 类装饰器不能用在声明文件中( .d.ts)，也不能用在任何外部上下文中（比如declare的类）。
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
// 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
interface Person {
  name: string;
  age: string;
}

function classEnhancer(target: any) {
  target.xx = 'Person'; // 给类增加属性
  target.prototype.name = '金色小芝麻';
  target.prototype.age = '18';
}

@classEnhancer // 名字随便起
class Person {
  constructor() {}
}

const p = new Person();
console.log(Person.name); // Person
console.log(p.age); // 18
