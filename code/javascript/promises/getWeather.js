const apiKey = "YOUR_API_KEY";
const city = "London";

async function getWeather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`,
    );
    const data = await response.json();

    if (data.main && data.main.temp) {
      console.log(`A temperatura atual em ${cityName} é ${data.main.temp}°C`);
    } else {
      console.log("Não foi possível obter a temperatura.");
    }
  } catch (error) {
    console.log("Ocorreu um erro ao obter a temperatura:", error);
  }
}

getWeather(city);
