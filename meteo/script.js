const apiKey = "206819a2b861bc426c3d37bb3b781650"; 

document.getElementById("get-weather").addEventListener("click", function () {
    const city = document.getElementById("city-input").value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("City not found.");
            }
            return response.json();
        })
        .then((data) => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById("city-name").textContent = `City: ${cityName}`;
            document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
            document.getElementById("description").textContent = `Condition: ${description}`;
        })
        .catch((error) => {
            alert(error.message);
        });
});
