class Animal {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name); // 调用父类的 constructor(name)
    console.log(this.name);
  }

  sayHi(): string {
    // 将子类共用的方法抽象出来放在父类中，自己特殊逻辑放在子类中重写父类的逻辑
    return `Meow, ${super.sayHi()}`; // 调用父类的 sayHi()
  }
}

const c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom
