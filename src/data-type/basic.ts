// 默认情况下 null 和 undefined 是所有类型的子类型。
// 在 tsconfig.json 文件中 --strictNullChecks 设置为 true 标记（默认是 false）
// null 和 undefined 只能赋值给 void 和它们各自。
// 反之，可以把 null 和 undefined 赋值给 number 或者 string 等类型的变量。
const u: undefined = undefined;
const n: null = null;
console.log(u, n);
