class Point {
  /** 静态属性，坐标系原点 */
  static origin = new Point(0, 0);
  /** 静态方法，计算与原点距离 */
  static distanceToOrigin(p: Point) {
    return Math.sqrt(p.x * p.x + p.y * p.y);
  }

  /** 实例属性，x 轴的值 */
  x: number;
  /** 实例属性，y 轴的值 */
  y: number;

  /** 构造函数 */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /** 实例方法，打印此点 */
  printPoint() {
    console.log(this.x, this.y);
  }
}

interface PointInstanceType {
  x: number;
  y: number;
  printPoint: () => void;
}

const p1: Point = new Point(1, 2);
const p2: PointInstanceType = {
  x: 1,
  y: 2,
  printPoint() {
    console.log(this.x, this.y);
  },
};
console.log(p1.printPoint());
console.log(p2.printPoint());
