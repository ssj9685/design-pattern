import { Beverage } from "./beverage.js";

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  cost() {
    return 0.89;
  }
}
