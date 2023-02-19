import { Duck } from "./duck.js";

export class RubberDuck extends Duck {
  constructor() {
    super();
  }

  display() {
    console.log("I am a rubber duck");
  }
}
