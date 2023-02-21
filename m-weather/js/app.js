function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=173b06dffec90e907a6cf24470252564`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            loc.textContent = `${data.name}, ${data.sys.country}`;
            temp.textContent =(data.main.temp - 273.15).toFixed(0) + 'C';
            windspeed.textContent = data.wind.speed+"m/s";
            humidity.textContent = data.humidity+"%";
        })
}

const loc = document.getElementById("location");
const temp = document.getElementById("temp");
const windspeed = document.getElementById("wind-speed");
const humidity = document.getElementById("humidity"); 
const btn = document.getElementById("btn");
const city = document.getElementById("city");

getWeather("Chisinau")

btn.addEventListener("click", () => {
    getWeather(city.value)
})