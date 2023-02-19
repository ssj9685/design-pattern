export class Duck {
  #flyBehavior;
  #quackBehavior;

  constructor({ flyBehavior, quackBehavior }) {
    this.#flyBehavior = flyBehavior;
    this.#quackBehavior = quackBehavior;

    this.display();
    this.swim();
    this.performQuack();
    this.performFly();
  }

  swim() {
    console.log("I am swimming");
  }

  display() {
    throw new Error("This method must be overwritten!");
  }

  performFly() {
    this.#flyBehavior.fly();
  }

  performQuack() {
    this.#quackBehavior.quack();
  }

  setFlyBehavior(flyBehavior) {
    this.#flyBehavior = flyBehavior;
  }
}
