export class Beverage {
  description = "Unknown Beverage";

  getDescription() {
    return this.description;
  }

  cost() {
    throw new Error("This method must be overwritten!");
  }
}
