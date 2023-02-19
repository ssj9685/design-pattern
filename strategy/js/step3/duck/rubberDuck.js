import { Duck } from "./duck.js";
import { FlyNoWay } from "../behavior/flyBehavior.js";
import { Quack } from "../behavior/quackBehavior.js";

export class RubberDuck extends Duck {
  constructor() {
    super({
      flyBehavior: new FlyNoWay(),
      quackBehavior: new Quack(),
    });
  }

  display() {
    console.log("I am a rubber duck");
  }
}
