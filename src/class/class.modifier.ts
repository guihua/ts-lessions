class Father {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  public name: string;
  protected age: number;
  private money: number;

  constructor(name: string, age: number, money: number) {
    this.name = name;
    this.age = age;
    this.money = money;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

class Child extends Father {
  constructor(name: string, age: number, money: number) {
    super(name, age, money);
  }

  desc() {
    console.log(`${this.name}${this.age}${this.money}`);
    // 属性“money”为私有属性，只能在类“Father”中访问
  }
}

const children = new Child('金色小芝麻', 18, 1000);

console.log(children.name);
console.log(children.age); // ERROR 属性“age”受保护，只能在类“Father”及其子类中访问。
console.log(children.money); // ERROR 属性“money”为私有属性，只能在类“Father”中访问。
