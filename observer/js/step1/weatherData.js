export class WeatherData {
  #temp;
  #humidity;
  #currentConditionsDisplay;

  constructor({ currentConditionsDisplay }) {
    this.#currentConditionsDisplay = currentConditionsDisplay;
  }

  getTemperature() {
    return this.#temp;
  }
  getHumidity() {
    return this.#humidity;
  }

  setMeasurements(temp, humidity) {
    this.#temp = temp;
    this.#humidity = humidity;
    this.measurementsChanged();
  }

  measurementsChanged() {
    const temp = this.getTemperature();
    const humidity = this.getHumidity();

    this.#currentConditionsDisplay.update(temp, humidity);
    // this.statisticsDisplay.update(temp, humidity);
    // this.forecastDisplay.update(temp, humidity);
  }
}
