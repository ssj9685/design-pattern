import { Beverage } from "./beverage.js";

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast Coffee";
  }

  cost() {
    return 0.99;
  }
}
