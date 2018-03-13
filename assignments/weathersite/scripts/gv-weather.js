/*Greenville Current Conditions*/

var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.wunderground.com/api/11258ffcc177b5a5/conditions/q/TX/Greenville.json', true);

weatherObject.send();

weatherObject.onload = function () {
    var greenvilleWeather = JSON.parse(weatherObject.responseText);
    console.log(greenvilleWeather);
    document.getElementById('currentObs').innerHTML = greenvilleWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = greenvilleWeather.current_observation.temp_f;
    document.getElementById('windSpeed').innerHTML = greenvilleWeather.current_observation.wind_string;
    document.getElementById('humid').innerHTML = greenvilleWeather.current_observation.relative_humidity;
    document.getElementById('w_icon').src = greenvilleWeather.current_observation.icon_url;
}


/*Greenville Forecast*/

var forecastObject = new XMLHttpRequest();
forecastObject.open('GET', 'https://api.wunderground.com/api/11258ffcc177b5a5/forecast/q/TX/Greenville.json', true);

forecastObject.send();

forecastObject.onload = function () {
    var greenvilleForecast = JSON.parse(forecastObject.responseText);
    console.log(greenvilleForecast);
    document.getElementById('forecast1').innerHTML = greenvilleForecast.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('w_icon1').src = greenvilleForecast.forecast.txt_forecast.forecastday["0"].icon_url;
    
    document.getElementById('forecast2').innerHTML = greenvilleForecast.forecast.txt_forecast.forecastday["1"].fcttext;
    document.getElementById('w_icon2').src = greenvilleForecast.forecast.txt_forecast.forecastday["1"].icon_url;
    
    document.getElementById('forecast3').innerHTML = greenvilleForecast.forecast.txt_forecast.forecastday["2"].fcttext;
    document.getElementById('w_icon3').src = greenvilleForecast.forecast.txt_forecast.forecastday["2"].icon_url;
    
    document.getElementById('forecast4').innerHTML = greenvilleForecast.forecast.txt_forecast.forecastday["3"].fcttext;
    document.getElementById('w_icon4').src = greenvilleForecast.forecast.txt_forecast.forecastday["3"].icon_url;
    
    document.getElementById('forecast5').innerHTML = greenvilleForecast.forecast.txt_forecast.forecastday["4"].fcttext;
    document.getElementById('w_icon5').src = greenvilleForecast.forecast.txt_forecast.forecastday["4"].icon_url;
       
}