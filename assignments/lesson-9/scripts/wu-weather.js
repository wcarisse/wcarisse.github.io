/*Franklin Current Conditions*/

var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.wunderground.com/api/11258ffcc177b5a5/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function () {
    var franklinWeather = JSON.parse(weatherObject.responseText);
    console.log(franklinWeather);
    document.getElementById('currentObs').innerHTML = franklinWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = franklinWeather.current_observation.temp_f;
    document.getElementById('windSpeed').innerHTML = franklinWeather.current_observation.wind_string;
    document.getElementById('humid').innerHTML = franklinWeather.current_observation.relative_humidity;
    document.getElementById('w_icon').src = franklinWeather.current_observation.icon_url;
}


/*Franklin Forecast*/

var forecastObject = new XMLHttpRequest();
forecastObject.open('GET', 'https://api.wunderground.com/api/11258ffcc177b5a5/forecast/q/MN/Franklin.json', true);

forecastObject.send();

forecastObject.onload = function () {
    var franklinForecast = JSON.parse(forecastObject.responseText);
    console.log(franklinForecast);
    document.getElementById('forecast1').innerHTML = franklinForecast.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('w_icon1').src = franklinForecast.forecast.txt_forecast.forecastday["0"].icon_url;
    
    document.getElementById('forecast2').innerHTML = franklinForecast.forecast.txt_forecast.forecastday["1"].fcttext;
    document.getElementById('w_icon2').src = franklinForecast.forecast.txt_forecast.forecastday["1"].icon_url;
    
    document.getElementById('forecast3').innerHTML = franklinForecast.forecast.txt_forecast.forecastday["2"].fcttext;
    document.getElementById('w_icon3').src = franklinForecast.forecast.txt_forecast.forecastday["2"].icon_url;
    
    document.getElementById('forecast4').innerHTML = franklinForecast.forecast.txt_forecast.forecastday["3"].fcttext;
    document.getElementById('w_icon4').src = franklinForecast.forecast.txt_forecast.forecastday["3"].icon_url;
    
    document.getElementById('forecast5').innerHTML = franklinForecast.forecast.txt_forecast.forecastday["4"].fcttext;
    document.getElementById('w_icon5').src = franklinForecast.forecast.txt_forecast.forecastday["4"].icon_url;
    
    
}

