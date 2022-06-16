// 装饰器工厂
interface Person4 {
  name: string;
  age: number;
}

// 利用函数柯里化解决传参问题， 向装饰器传入一些参数，也可以叫 参数注解
function factoryEnhancer(name: string) {
  return function enhancer(target: any) {
    // 这个 name 就是装饰器的元数据，外界传递进来的参数
    target.prototype.name = name;
    target.prototype.age = 18;
  };
}

@factoryEnhancer('小芝麻') // 在使用装饰器的时候, 为其指定元数据
class Person4 {
  constructor() {}
}
