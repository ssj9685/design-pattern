export class CondimentDecorator {
  beverage;

  getDescription() {
    throw new Error("This method must be overwritten!");
  }
}
