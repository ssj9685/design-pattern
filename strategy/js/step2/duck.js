export class Duck {
  constructor() {
    this.display();
    this.quack();
    this.swim();
    this.fly(); // This is not a good idea, but we will fix it in the next step
  }

  quack() {
    console.log("Quack");
  }
  swim() {
    console.log("I am swimming");
  }
  fly() {
    console.log("I am flying");
  }
  display() {
    throw new Error("This method must be overwritten!");
  }
}
