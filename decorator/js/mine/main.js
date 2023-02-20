import { HouseBlend } from "./houseBlend.js";
import { Soy } from "./condiments/soy.js";
import { Milk } from "./condiments/milk.js";

function main() {
  const houseBlend = new HouseBlend();
  houseBlend.addCondiments([new Soy(), new Milk()]);

  const description = houseBlend.getDescription();
  const cost = houseBlend.cost();

  console.log(`${description} $${cost}`);
}

main();
