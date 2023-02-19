import { Subject } from "./interface.js";
export class WeatherData extends Subject {
  #observers;
  #temp;
  #humidity;

  constructor() {
    super();
    this.#observers = [];
  }

  registerObserver(observer) {
    this.#observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.#observers.indexOf(observer);
    if (index >= 0) {
      this.#observers.splice(index, 1);
    }
  }

  notifyObservers() {
    for (const observer of this.#observers) {
      observer.update(this.#temp, this.#humidity);
    }
  }

  getTemperature() {
    return this.#temp;
  }

  getHumidity() {
    return this.#humidity;
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temp, humidity) {
    this.#temp = temp;
    this.#humidity = humidity;
    this.measurementsChanged();
  }
}
