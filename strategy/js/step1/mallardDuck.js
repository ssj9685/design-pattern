import { Duck } from "./duck.js";

export class MallardDuck extends Duck {
  constructor() {
    super();
  }

  display() {
    console.log("I am a mallard duck");
  }
}
