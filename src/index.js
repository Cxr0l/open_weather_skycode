const keyWeather = 'e293c8239b6b4d53058978c666c2b52a';

const london = {
    lat: 51.5073219,
    lon: -0.1276474
};

const nameCity = document.getElementById("nameCity");
const nameCountry = document.getElementById("nameCountry");
const description = document.getElementById("description");
const coordLat = document.getElementById("latitude");
const coordLong = document.getElementById("longitude");
const temp = document.getElementById("temp");
const icon = document.getElementById("icon");

const weatherBackgrounds = {
    "clear sky": "url('../img/clear-sky.jpeg')",
    "few clouds": "url('../img/few-clouds.jpeg')",
    "scattered clouds": "url('../img/scattered-clouds.jpg')",
    "broken clouds": "url('../img/broken-clouds.jpeg')",
    "overcast clouds": "url('../img/overcast-clouds.webp')",


    "shower rain": "url('../img/shower-rain.jpeg')",
    "light intensity drizzle": "url('../img/shower-rain.jpeg')",
    "drizzle": "url('../img/shower-rain.jpeg')",
    "heavy intensity drizzle": "url('../img/shower-rain.jpeg')",
    "light intensity drizzle rain": "url('../img/shower-rain.jpeg')",
    "drizzle rain": "url('../img/shower-rain.jpeg')",
    "heavy intensity drizzle rain": "url('../img/shower-rain.jpeg')",
    "shower rain and drizzle": "url('../img/shower-rain.jpeg')",
    "heavy shower rain and drizzle": "url('../img/shower-rain.jpeg')",
    "shower drizzle": "url('../img/shower-rain.jpeg')",


    "rain": "url('../img/rain.jpeg')",
    "light rain": "url('../img/rain.jpeg')",
    "moderate rain": "url('../img/rain.jpeg')",
    "heavy intensity rain": "url('../img/rain.jpeg')",
    "very heavy rain": "url('../img/rain.jpeg')",
    "extreme rain": "url('../img/rain.jpeg')",
    "freezing rain": "url('../img/rain.jpeg')",
    "light intensity shower rain": "url('../img/rain.jpeg')",
    "shower rain": "url('../img/rain.jpeg')",
    "heavy intensity shower rain": "url('../img/rain.jpeg')",
    "ragged shower rain": "url('../img/rain.jpeg')",


    "thunderstorm": "url('../img/thunderstorm.jpeg')",
    "thunderstorm with light rain": "url('../img/thunderstorm.jpeg')",
    "thunderstorm with rain": "url('../img/thunderstorm.jpeg')",
    "thunderstorm with heavy rain": "url('../img/thunderstorm.jpeg')",
    "light thunderstorm": "url('../img/thunderstorm.jpeg')",
    "heavy thunderstorm": "url('../img/thunderstorm.jpeg')",
    "ragged thunderstorm": "url('../img/thunderstorm.jpeg')",
    "thunderstorm with light drizzle": "url('../img/thunderstorm.jpeg')",
    "thunderstorm with drizzle": "url('../img/thunderstorm.jpeg')",
    "thunderstorm with heavy drizzle": "url('../img/thunderstorm.jpeg')",


    "snow": "url('../img/snow.jpeg')",
    "light snow": "url('../img/snow.jpeg')",
    "heavy snow": "url('../img/snow.jpeg')",
    "sleet": "url('../img/snow.jpeg')",
    "light shower sleet": "url('../img/snow.jpeg')",
    "shower sleet": "url('../img/snow.jpeg')",
    "light rain and snow": "url('../img/rain-snow.jpeg')",
    "rain and snow": "url('../img/rain-snow.jpeg')",
    "light shower snow": "url('../img/snow.jpeg')",
    "shower snow": "url('../img/snow.jpeg')",
    "heavy shower snow": "url('../img/snow.jpeg')",


    "mist": "url('../img/mist.jpg')",
    "smoke": "url('../img/mist.jpg')",
    "haze": "url('../img/haze.jpg')",
    "sand/dust whirls": "url('../img/mist.jpg')",
    "fog": "url('../img/mist.jpg')",
    "sand": "url('../img/mist.jpg')",
    "dust": "url('../img/mist.jpg')",
    "volcanic ash": "url('../img/volcanic.jpg')",
    "squalls": "url('../img/squalls.jpeg')",
    "tornado": "url('../img/tornado.jpeg')",
};

const currenWeather = async (latitude = london.lat, longitude = london.lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${keyWeather}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const getCoordinateCity = async (nameCity = "Caracas") => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${keyWeather}`; 
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
};

const convertKelvinToCelsius = (tempKelvin) => {
    return Math.round(tempKelvin - 273.15) + " °C";
};

const form = document.getElementById("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const cityInput = document.getElementById("city-input").value;
    getCoordinateCity(cityInput)
    .then(response => {
        currenWeather(response.coord.lat, response.coord.lon);
        nameCity.innerText = response.name;
        nameCountry.innerText = response.sys.country;
        description.innerText = response.weather[0].description;
        coordLat.innerText = response.coord.lat;
        coordLong.innerText = response.coord.lon;

        temp.innerText = convertKelvinToCelsius(response.main.temp);

        let iconWeather = response.weather[0].icon;
        icon.setAttribute("src", `https://openweathermap.org/img/wn/${iconWeather}@2x.png`);

        const weatherDescription = response.weather[0].description;
        const containerWeather = document.querySelector(".container-weather");
        containerWeather.style.backgroundImage = weatherBackgrounds[weatherDescription];
        const containerMain = document.querySelector(".container");
        containerMain.style.backgroundImage = weatherBackgrounds[weatherDescription];
    })
    .catch(error => console.log(error));
});







// const keyWeather2 = "e293c8239b6b4d53058978c666c2b52a";

// const forecast = async (latitude = london.lat, longitude = london.lon) => {
//     const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&appid=${keyWeather2}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// };

// forecast()
// .then(response => {
//     console.log(response);
// })
// .catch(error => console.log(error));