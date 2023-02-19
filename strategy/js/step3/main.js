import { FlyRocketPowered } from "./behavior/flyBehavior.js";
import { MallardDuck } from "./duck/mallardDuck.js";
import { RedHeadDuck } from "./duck/redheadDuck.js";
import { RubberDuck } from "./duck/rubberDuck.js";

function main() {
  const mallardDuck = new MallardDuck();
  const redHeadDuck = new RedHeadDuck();
  const rubberDuck = new RubberDuck();

  rubberDuck.setFlyBehavior(new FlyRocketPowered()); // change behavior at runtime
  rubberDuck.performFly();
}
main();
