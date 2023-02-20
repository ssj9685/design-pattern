import { Beverage } from "../beverage.js";
import { CondimentDecorator } from "./condimentDecorator.js";

export class Whip extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  cost() {
    return 0.1 + this.beverage.cost();
  }

  getDescription() {
    return this.beverage.getDescription() + ", Whip";
  }
}
