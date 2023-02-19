import { Duck } from "./duck.js";

export class RedHeadDuck extends Duck {
  constructor() {
    super();
  }

  display() {
    console.log("I am a red head duck");
  }
}
