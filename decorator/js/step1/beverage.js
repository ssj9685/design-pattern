export class Beverage {
  description;

  getDescription() {
    return this.description;
  }

  const() {
    throw new Error("This method must be overwritten!");
  }
}
