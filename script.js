// Start Selectors
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");
const cityText = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const apiKey = "381ca98f221a67287b89441197a14268";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// End Selectors

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.cod === "404") {
        weather.style.display = "none";
        document.querySelector(".error").style.display = "block";
      } else {
        weather.style.display = "block";
        error.style.display = "none";
      }
      cityText.innerHTML = data.name;
      temperature.innerHTML = Math.round(data.main.temp) + "°C";
      humidity.innerHTML = data.main.humidity + "%";
      wind.innerHTML = data.wind.speed + " km/h";
      weatherIcon.src = `images/${data.weather[0].main}.png`;
    });
}
searchBtn.addEventListener("click", () => checkWeather(searchBox.value));
