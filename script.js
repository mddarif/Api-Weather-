const apiKey = "a0350eaa193e97de8ec5f76bd5d496f4";
  // ONLY the key here

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found or API error");
        }

        const data = await response.json();

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText =
            `Temperature: ${data.main.temp} °C`;
        document.getElementById("humidity").innerText =
            `Humidity: ${data.main.humidity}%`;
        document.getElementById("description").innerText =
            data.weather[0].description;

        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {
        alert(error.message);
        console.error(error);
    }
}
