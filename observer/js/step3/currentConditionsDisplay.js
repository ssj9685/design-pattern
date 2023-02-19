import classes from "multi-inherit";
import { Observer, DisplayElement } from "./interface.js";

export class CurrentConditionsDisplay extends classes(
  Observer,
  DisplayElement
) {
  #temp;
  #humidity;
  #weatherData;

  constructor(weatherData) {
    super();
    this.#weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update() {
    this.#temp = this.#weatherData.getTemperature();
    this.#humidity = this.#weatherData.getHumidity();
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
