// starting link to have the 


var apiKey = "9dbb4af217a19f1ea0ac0e9e0a798db9";


var url = baseURL + '/weather?appid=' + apiKey;

function getLocation() {
   
    navigator.geolocation.getCurrentPosition(function(locationData) {
     console.log(locationData)
    
     $.get(url + '&lat=' + locationData.coords.latitude + '&lon=' + locationData.coords.longitude).then(function(data) {
    console.log(data);
});
    });
}

getLocation();

var baseURL  = 'https://api.openweathermap.org/data/2.5/forecast';
// pulling info from the weather api to display the data
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
var searchWeather =(cityName)=> {
    var url =`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data));
}
var setInnertText = (id, text) => {
    document.getElementById(id).innerText = text;
}
var displayWeather = weatherData => {
    console.log(weatherData);
    // setInnertText('city', temperature.name);
    // setInnertText('temp', temperature.main.temp);
    // setInnertText('weather', temperature.weather[0].main);

    // var url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    // var imgIcon = document.getElementById('image-icon');
    // imgIcon.setAttribute('src',url);
}
document.addEventListener("DOMContentLoaded", () => {
    // Handling button click
    document.querySelector(".button-search").addEventListener("click", () => {
        var searchedCity = document.querySelector('.text-search');
        console.log(searchedCity.value);
        if(searchedCity.value){
            searchWeather(searchedCity.value);
        }       
   }) 
 });
//  forecast.forEach(day => {
//     let date = new Date(day.js * 1000);
//     let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
//     let name = days[date.getDay()];
//     let dayBlock = document.createElement("div");
//     dayBlock.className = 'forecast__item';
//     dayBlock.innerHTML =
//       `<div class="forecast-item__heading">${name}</div>
//       <div class="forecast-item__info">
//       <i class="wi ${applyIcon(day.weather[0].icon)}"></i>
//       <span class="degrees">${Math.round(day.temp.day)}
//       <i class="wi wi-degrees"></i></span></div>`;
//     FORECAST.appendChild(dayBlock);
//   });
// var url = baseURL + '/weather?id={city id}&appid=' + apiKey;

// function getLocation() {
   
//     navigator.geolocation.getCurrentPosition(function(locationData) {
//      console.log(locationData)
    
//      $.get(url + '&lat=' + locationData.coords.latitude + '&lon=' + locationData.coords.longitude).then(function(data) {
//     console.log(data);
// });
//     });
// }

// getLocation();

// function getWeatherByCity() {
//     $.get(url + '$q=freehold').then(function(data) {
//         console.log(data)
//     })
// }



// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// ```