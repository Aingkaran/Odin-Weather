// URL (required), options (optional)
let longitude = 0
let latitude =0
let locationset = "toronto"

fetch('http://api.openweathermap.org/geo/1.0/direct?q='+locationset+'&limit=5&appid=eaae588901936a4177510a9a9982cbfe', {mode: 'cors'})
  .then(function (response) {
    return response.json()
  }).then(function (response) {
    const cityName = document.querySelector(".city")
    const cityTemp= document.querySelector(".Temperature")
    const cityFeelsLike= document.querySelector(".feels-likeTemp")
    const weather= document.querySelector(".weather")
    const weatherDescription = document.querySelector(".weather-description")
    const cityHumidity= document.querySelector(".humidity")
    const citySearch = document.querySelector(".search-button")

    citySearch.addEventListener('click', ()=>{

        


    })



    console.log(response[0].lon)
    console.log(response[0].lat)

    longitude = response[0].lon
    latitude = response[0].lat
    async function getWeatherData(latitude, longitude) {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=eaae588901936a4177510a9a9982cbfe&units=metric', {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData)
    
        console.log("Temperature: "+ weatherData.main.temp)
        console.log("Feels Like: "+ weatherData.main.feels_like)
        console.log("Weather: "+ weatherData.weather[0].main)
        console.log("Humidity: "+ weatherData.main.humidity)
        console.log("Weather Description: "+ weatherData.weather[0].description)
      }
      getWeatherData(latitude,longitude);
  }).catch(function (err) {
  })


 
  



