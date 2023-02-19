import classes from "multi-inherit";
import { Observer, DisplayElement } from "./interface.js";

export class CurrentConditionsDisplay extends classes(
  Observer,
  DisplayElement
) {
  #temp;
  #humidity;

  constructor(weatherData) {
    super();
    weatherData.registerObserver(this);
  }

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
