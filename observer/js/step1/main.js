import { WeatherData } from "./weatherData.js";
import { CurrentConditionsDisplay } from "./currentConditionsDisplay.js";

// import { StatisticsDisplay } from "./StatisticsDisplay.js";
// import { ForecastDisplay } from "./ForecastDisplay.js";

function main() {
  const currentConditionsDisplay = new CurrentConditionsDisplay();
  // const statisticsDisplay = new StatisticsDisplay();
  // const forecastDisplay = new ForecastDisplay();
  // const weatherData = new WeatherData({ currentConditionsDisplay, statisticsDisplay, forecastDisplay});

  const weatherData = new WeatherData({ currentConditionsDisplay });

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);
}
main();
