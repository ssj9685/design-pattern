import { Beverage } from "../beverage.js";
import { CondimentDecorator } from "./condimentDecorator.js";

export class Mocha extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  cost() {
    return 0.2 + this.beverage.cost();
  }

  getDescription() {
    return this.beverage.getDescription() + ", Mocha";
  }
}
