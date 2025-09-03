import "./styles.css";

const API_KEY = "5HAJVFLL3K77Y9KUYTSR56RVT";

async function getWeatherByCity(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${API_KEY}&contentType=json`,
      { mode: "cors" },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
}

const userCity = prompt("Please enter city and submit");
document.body.innerHTML = `<div>
Loading...
</div>`;

getWeatherByCity(userCity)
  .then((data) => {
    const celcius =
      ((Number.parseFloat(data.currentConditions.temp) - 32) * 5) / 9;
    document.body.innerHTML = `<div>
    The temperature in ${userCity[0].toUpperCase() + userCity.slice(1)} is currently ${Math.trunc(data.currentConditions.temp * 10) / 10} degrees Fahrenheit or ${Math.trunc(celcius * 10) / 10} degrees Celcius
    </div>`;
  })
  .catch((err) => console.log(err));
