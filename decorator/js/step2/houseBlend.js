import { Beverage } from "./beverage.js";

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  cost() {
    let price = 0.89;

    if (this.hasMilk()) {
      price += 0.1;
    }

    if (this.hasMocha()) {
      price += 0.2;
    }

    return price;
  }
}
