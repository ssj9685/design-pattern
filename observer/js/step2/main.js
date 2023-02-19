import { WeatherData } from "./WeatherData.js";
import { CurrentConditionsDisplay } from "./currentConditionsDisplay.js";

// import { StatisticsDisplay } from "./StatisticsDisplay.js";
// import { ForecastDisplay } from "./ForecastDisplay.js";

function main() {
  const weatherData = new WeatherData();
  const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
  // const statisticsDisplay = new StatisticsDisplay(weatherData);
  // const forecastDisplay = new ForecastDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);
}
main();
