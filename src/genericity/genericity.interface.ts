/**
 * 泛型接口
 *
 * 使用含有泛型的接口来定义函数的形状
 */
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}

// 使用泛型接口的时候，需要定义泛型的类型。
const createInterfaceArray: CreateArrayFunc<string> = function <T>(
  length: number,
  value: T,
): Array<T> {
  const result: T[] = [];

  for (let i = 0; i < length; i++) {
    result[i] = value;
  }

  return result;
};

const result = createInterfaceArray(3, 'x');
console.log(result); // ['x', 'x', 'x']
