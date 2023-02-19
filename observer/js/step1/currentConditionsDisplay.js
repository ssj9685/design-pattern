export class CurrentConditionsDisplay {
  #temp;
  #humidity;

  update(temp, humidity) {
    this.#temp = temp;
    this.#humidity = humidity;
    this.display();
  }

  display() {
    console.log(
      `Current conditions: ${this.#temp}F degrees and ${
        this.#humidity
      }% humidity`
    );
  }
}
