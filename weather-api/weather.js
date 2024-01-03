//Adding API for weather display
//APIUrl: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dd8e1bd7b2cce53b0b82b44535866807
let zipCode = 63146;

const weatherApiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?',
    // data: 'weather?',
    type: 'zip=' + zipCode,
    mode: 'units=imperial',
    apiId: 'APPID=dd8e1bd7b2cce53b0b82b44535866807',
}


//Deconstruction of weather API data
const {url, type, mode, apiId} = weatherApiData;

//Stringing API data together
const urlApi = `${url}${type}&${mode}&${apiId}`

let degreeSymbol = "\u00B0";

// console.log(urlApi);

//Use FETCH to get all the data
fetch(urlApi)
.then( (data) => data.json())
.then( (weatherData) => displayWeather(weatherData) )

//Display weather of city with: Name, Temp, and Pic of weather
const displayWeather = (data) => {
    const weatherIcon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    console.log(data);
    const html = `
    <img 
    src=${weatherIcon}
    class="weather-image" 
    />
    <div class="name"><h2>${data.name}</h2> </div>
    <h2 class="temp">${Math.floor(data.main.temp)}${degreeSymbol}</h2>
    <div class="description">${data.weather[0].description}</div>
    `

    const localWeather = document.querySelector('.weather-card');
    localWeather.innerHTML = html;
    
}