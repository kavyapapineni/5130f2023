document.addEventListener("DOMContentLoaded", function () {
  // Check if geolocation is supported by the browser
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Success callback
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const locationInfo = document.getElementById("location-info");
        locationInfo.textContent = `Your location is: Latitude ${latitude}, Longitude ${longitude}`;

        // Get weather information using OpenWeatherMap API
        getWeatherInfo(latitude, longitude);
      },
      function (error) {
        // Error callback
        console.error("Error getting location:", error.message);
        const locationInfo = document.getElementById("location-info");
        locationInfo.textContent =
          "Error getting location. Please enable location services.";
      }
    );
  } else {
    // If geolocation is not supported, display a message to the user
    console.error("Geolocation is not supported by your browser.");
    const locationInfo = document.getElementById("location-info");
    locationInfo.textContent = "Geolocation is not supported by your browser.";
  }
});

function getWeatherInfo(latitude, longitude) {
  const apiKey = "1040e4d4a596ac391cb5f1f5d7f92ce7";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weather-info");
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      weatherInfo.textContent = `Current weather: ${temperature}°C, ${description}`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      const weatherInfo = document.getElementById("weather-info");
      weatherInfo.textContent = "Error fetching weather data.";
    });
}
