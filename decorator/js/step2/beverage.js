export class Beverage {
  description;
  milk;
  soy;
  mocha;
  whip;

  constructor() {
    this.description = "Unknown Beverage";
    this.milk = false;
    this.soy = false;
    this.mocha = false;
    this.whip = false;
  }

  getDescription() {
    if (this.hasMilk()) {
      this.description += ", Milk";
    }

    if (this.hasSoy()) {
      this.description += ", Soy";
    }

    if (this.hasMocha()) {
      this.description += ", Mocha";
    }

    if (this.hasWhip()) {
      this.description += ", Whip";
    }

    return this.description;
  }

  cost() {
    return 0;
  }

  hasMilk() {
    return this.milk;
  }

  hasSoy() {
    return this.soy;
  }

  hasMocha() {
    return this.mocha;
  }

  hasWhip() {
    return this.whip;
  }

  setMilk(milk) {
    this.milk = milk;
  }

  setSoy(soy) {
    this.soy = soy;
  }

  setMocha(mocha) {
    this.mocha = mocha;
  }

  setWhip(whip) {
    this.whip = whip;
  }
}
