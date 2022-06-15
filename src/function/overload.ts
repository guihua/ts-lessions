// 函数重载
// 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力
// 它查找重载列表，尝试使用第一个重载定义。如果匹配的话就使用这个。因此，在定义重载的时候，一定要把最精确的定义放在最前面
const obj: any = {};

function attr(val: number): void;
// eslint-disable-next-line @typescript-eslint/unified-signatures
function attr(val: string): void;
function attr(val: any): void {
  if (typeof val === 'string') {
    obj.name = val;
  } else if (typeof val === 'number') {
    obj.age = val;
  }
}

attr('123'); // YES
attr(10); // YES
attr(true); // ERROR
