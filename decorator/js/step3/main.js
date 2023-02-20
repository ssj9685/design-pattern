import { Espresso } from "./espresso.js";
import { DarkRoast } from "./darkRoast.js";
import { HouseBlend } from "./houseBlend.js";
import { Mocha } from "./decorator/mocha.js";
import { Soy } from "./decorator/soy.js";
import { Whip } from "./decorator/whip.js";

function main() {
  const beverage = new Espresso();
  console.log(beverage.getDescription() + " $" + beverage.cost());

  let beverage2 = new DarkRoast();
  beverage2 = new Mocha(beverage2);
  beverage2 = new Mocha(beverage2);
  beverage2 = new Whip(beverage2);
  console.log(beverage2.getDescription() + " $" + beverage2.cost());

  let beverage3 = new HouseBlend();
  beverage3 = new Soy(beverage3);
  beverage3 = new Mocha(beverage3);
  beverage3 = new Whip(beverage3);
  console.log(beverage3.getDescription() + " $" + beverage3.cost());
}

main();
