// 在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了
function createTArray<T>(length: number, value: T): T[] {
  const result: T[] = [];

  for (let i = 0; i < length; i++) {
    result[i] = value;
  }

  return result;
}

// 在调用的时候，可以指定它具体的类型为 string 或 number。当然，也可以不手动指定，而让类型推论自动推算出来
const result = createTArray<string>(3, 'x');
console.log(result); // ['x', 'x', 'x']

const result2 = createTArray<number>(3, 3); // T 就相当于一个参数，传什么是什么
console.log(result2); // [3, 3, 3]
