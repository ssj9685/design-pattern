import { Beverage } from "../beverage.js";
import { CondimentDecorator } from "./condimentDecorator.js";

export class Soy extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  cost() {
    return 0.15 + this.beverage.cost();
  }

  getDescription() {
    return this.beverage.getDescription() + ", Soy";
  }
}
