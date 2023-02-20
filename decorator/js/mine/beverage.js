export class Beverage {
  getDescription() {
    for (const condiment of this.condiments) {
      this.setDiscription(`${this.description}, ${condiment.getDescription()}`);
    }

    return this.description;
  }

  setDiscription(description) {
    this.description = description;
  }

  addCondiments(condiments) {
    this.condiments.push(...condiments);
  }

  setPrice(price) {
    this.price = price;
  }

  cost() {
    let price = this.price;

    for (const condiment of this.condiments) {
      price += condiment.getPrice();
    }

    return price;
  }
}
