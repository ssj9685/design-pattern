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

  const houseBlendWithMilk = new HouseBlend();
  houseBlendWithMilk.setMilk(true);
  console.log(
    `${houseBlendWithMilk.getDescription()} $${houseBlendWithMilk.cost()}`
  );

  const houseBlendWithMocha = new HouseBlend();
  houseBlendWithMocha.setMocha(true);
  console.log(
    `${houseBlendWithMocha.getDescription()} $${houseBlendWithMocha.cost()}`
  );

  const houseBlendWithMilkAndMocha = new HouseBlend();
  houseBlendWithMilkAndMocha.setMilk(true);
  houseBlendWithMilkAndMocha.setMocha(true);
  console.log(
    `${houseBlendWithMilkAndMocha.getDescription()} $${houseBlendWithMilkAndMocha.cost()}`
  );

  // Not too many classes but we must create a new method for each condiment
}

main();
