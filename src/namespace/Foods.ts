namespace Food {
  export type A = Window;

  export interface Fruits {
    taste: string;
    hardness: number;
  }

  export interface Meat {
    taste: string;
    heat: number;
  }
}

let meat: Food.Meat;
let fruits: Food.Fruits;
