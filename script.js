// URL (required), options (optional)
let longitude = 0
let latitude =0
let locationset = "toronto"
const locationSearch = document.querySelector(".search-button")
const locationText = document.querySelector(".search-bar")

locationSearch.addEventListener('click', ()=>{
    locationset=locationText.value
    locationText.value= ""


fetch('http://api.openweathermap.org/geo/1.0/direct?q='+locationset+'&limit=5&appid=eaae588901936a4177510a9a9982cbfe', {mode: 'cors'})
  .then(function (response) {
    return response.json()
  }).then(function (response) {
    const locationName = document.querySelector(".city")
    const locationTemp= document.querySelector(".Temperature")
    const locationFeelsLike= document.querySelector(".feels-likeTemp")
    const locationweather= document.querySelector(".weather")
    const locationweatherDescription = document.querySelector(".weather-description")
    const locationHumidity= document.querySelector(".humidity")



    



    console.log(response[0].lon)
    console.log(response[0].lat)

    longitude = response[0].lon
    latitude = response[0].lat
    async function getWeatherData(latitude, longitude) {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=eaae588901936a4177510a9a9982cbfe&units=metric', {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData)

        locationTemp.innerHTML= Math.round(weatherData.main.temp) +"&#8451;"
        locationName.innerHTML= locationset.charAt(0).toUpperCase()+locationset.slice(1).toLowerCase()
        locationFeelsLike.innerHTML ="Feels Like: "+ Math.round(weatherData.main.feels_like) +"&#8451;"
        locationweather.innerHTML= "Weather Forecast: " + weatherData.weather[0].main;
        locationweatherDescription.innerHTML = "Weather Description: " + weatherData.weather[0].description
        locationHumidity.innerHTML = "Humidity: "+ weatherData.main.humidity +"%"
    
        console.log("Temperature: "+ weatherData.main.temp)
        console.log("Feels Like: "+ weatherData.main.feels_like)
        console.log("Weather: "+ weatherData.weather[0].main)
        console.log("Humidity: "+ weatherData.main.humidity)
        console.log("Weather Description: "+ weatherData.weather[0].description)
      }
      getWeatherData(latitude,longitude);

   

  }).catch(function (err) {
  })

})
 
  



