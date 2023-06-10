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