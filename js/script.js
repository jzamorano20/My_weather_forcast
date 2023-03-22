// var baseURL  = 'https://api.openweathermap.org/data/2.5';

var apiKey = "9dbb4af217a19f1ea0ac0e9e0a798db9";

var searchWeather =()=> {
    var city =document.getElementById('city-name').value;
    var url ='https:api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric';
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data));
}
var setInnertText = (id, text) => {
    document.getElementById(id).innerText = text;
}
var displayWeather = temperature => {
    console.log(temperature);
    setInnertText('city', temperature.name);
    setInnertText('temp', temperature.main.temp);
    setInnertText('weather', temperature.weather[0].main);

    var url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    var imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src',url);
}
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

