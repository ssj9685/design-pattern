export class Duck {
  constructor() {
    this.display();
    this.quack();
    this.swim();
  }

  quack() {
    console.log("Quack");
  }
  swim() {
    console.log("I am swimming");
  }
  display() {
    throw new Error("This method must be overwritten!");
  }
}
