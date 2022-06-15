function createArray(length: number, value: any): any[] {
  const result: any = [];

  for (let i = 0; i < length; i++) {
    result[i] = value;
  }

  return result;
}

const result01 = createArray(3, 'x');
console.log(result01); // ['x', 'x', 'x']

// Array<any> 允许数组的每一项都为任意类型, 但是我们预期的是，数组中每一项都应该是输入的 value 的类型
