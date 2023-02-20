import { DarkRoast } from "./darkRoast.js";
import { Decaf } from "./decaf.js";
import { Espresso } from "./espresso.js";
import { HouseBlend } from "./houseBlend.js";

function main() {
  const houseBlend = new HouseBlend();
  const darkRoast = new DarkRoast();
  const decaf = new Decaf();
  const espresso = new Espresso();

  console.log(`${houseBlend.getDescription()} $${houseBlend.cost()}`);
  console.log(`${darkRoast.getDescription()} $${darkRoast.cost()}`);
  console.log(`${decaf.getDescription()} $${decaf.cost()}`);
  console.log(`${espresso.getDescription()} $${espresso.cost()}`);

  // Too many classes like..
  // const houseBlendWithMilk = new HouseBlendWithMilk();
  // const houseBlendWithMocha = new HouseBlendWithMocha();
  // const houseBlendWithMilkAndMocha = new HouseBlendWithMilkAndMocha();
  // const houseBlendWithMilkAndMochaAndWhip = new HouseBlendWithMilkAndMochaAndWhip();
  // ...
}

main();
