function getWeather() {
    const cityInput = document.getElementById("cityInput").value;
    const apiKey = "bca8101d42127e03a0b6fc80ebe2c861"; // Replace with your OpenWeatherMap API key
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById("weatherInfo");
        if (data.cod === 200) {
          const { name, weather, main } = data;
          const description = weather[0].description;
          const temperature = main.temp;
          const feelsLike = main.feels_like;
          weatherInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Weather: ${description}</p>
            <p>Temperature: ${temperature}°C</p>
            <p>Feels Like: ${feelsLike}°C</p>
          `;
        } else {
          weatherInfo.innerHTML = `<p>${data.message}</p>`;
        }
      })
      .catch(error => console.error("Error fetching weather data:", error));
  }
  