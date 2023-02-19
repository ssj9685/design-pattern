import { Duck } from "./duck.js";
import { FlyWithWings } from "../behavior/flyBehavior.js";
import { Quack } from "../behavior/quackBehavior.js";

export class MallardDuck extends Duck {
  constructor() {
    super({
      flyBehavior: new FlyWithWings(),
      quackBehavior: new Quack(),
    });
  }

  display() {
    console.log("I am a mallard duck");
  }
}
