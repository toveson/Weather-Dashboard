// golbal variables
var cities = [];
var cityName = '';
var now = moment();

function getCityInfo() {
    let queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=54152bc89cd7a8d06acb57627e96a4df';
    // to get latitude and longitude for next request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        // storing the icon
        var icon = response.weather[0].icon;
        // storing the searched city
        var city = response.name;
        // adding city and date to landing page
        $('#city-date').html(city + ' ' + moment(now).format('MMM, DD') + '     ' + '<img src="http://openweathermap.org/img/w/' + icon + '.png" />');

        console.log(response);
        console.log('icon = ' + icon);
        console.log('city = ' + city);

        // One Call API (7 day forecast)
        let queryURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=54152bc89cd7a8d06acb57627e96a4df';
        // getting info to populate html
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // storing the teperature
            var temp = response.current.temp;
            // adding temp to landing page
            $('#temp').html('Temperature: ' + Math.floor(temp) + '°F');
            // Storing humidity
            var humidity = response.current.humidity;
            // adding humidity to landing page
            $('#humidity').html('Humidity: ' + humidity + '%');
            // Storing wind speed
            var wind = response.current.wind_speed;
            // adding wind speed to landing page
            $('#wind-speed').html('Wind Speed: ' + wind + ' mph');
            // Storing wind speed
            // // Storing uv index
            var uvIndex = response.current.uvi;
            // adding uv index to landing page
            $('#uv-index').html('UV Index: ' + uvIndex);

            console.log(response);
            console.log('-----today-----')
            console.log('temp = ' + Math.floor(temp) + '°F');
            console.log('humidity = ' + humidity + '%')
            console.log('wind speed = ' + wind + ' mph');
            console.log('uv index = ' + uvIndex);


            // I also need to get 5 day forecast

            // day 0
            // date
            var date = moment(now).add(1, 'days').format('M-DD');
            // adding date to landing page
            $('#date0').html('Date: ' + date);
            // weather icon
            var fiveDayIcon = response.daily[0].weather[0].icon;
            // adding icon to landing page
            $('#icon0').html('<img src="http://openweathermap.org/img/w/' + fiveDayIcon + '.png" />');
            // min temp
            var fiveDayMinTemp = response.daily[0].temp.min;
            // max temp
            var fiveDayMaxTemp = response.daily[0].temp.max;
            // 5 day temp range
            var fiveDayTemp = Math.floor(fiveDayMinTemp) + '-' + Math.floor(fiveDayMaxTemp) + '°F'
            // adding temp range to landing page
            $('#temp0').html('temp: ' + fiveDayTemp);
            // humidity
            var fiveDayHumidity = response.daily[0].humidity;
            // adding humidity to landing page
            $("#humidity0").html('Humidity: ' + fiveDayHumidity + '%')
            
            // day 1
            // date
            var date = moment(now).add(2, 'days').format('M-DD');
            // adding date to landing page
            $('#date1').html('Date: ' + date);
            // weather icon
            var fiveDayIcon = response.daily[1].weather[0].icon;
            // adding icon to landing page
            $('#icon1').html('<img src="http://openweathermap.org/img/w/' + fiveDayIcon + '.png" />');
            // min temp
            var fiveDayMinTemp = response.daily[1].temp.min;
            // max temp
            var fiveDayMaxTemp = response.daily[1].temp.max;
            // 5 day temp range
            var fiveDayTemp = Math.floor(fiveDayMinTemp) + '-' + Math.floor(fiveDayMaxTemp) + '°F'
            // adding temp range to landing page
            $('#temp1').html('temp: ' + fiveDayTemp);
            // humidity
            var fiveDayHumidity = response.daily[1].humidity;
            // adding humidity to landing page
            $("#humidity1").html('Humidity: ' + fiveDayHumidity + '%')
            
            // day 2
            // date
            var date = moment(now).add(3, 'days').format('M-DD');
            // adding date to landing page
            $('#date2').html('Date: ' + date);
            // weather icon
            var fiveDayIcon = response.daily[2].weather[0].icon;
            // adding icon to landing page
            $('#icon2').html('<img src="http://openweathermap.org/img/w/' + fiveDayIcon + '.png" />');
            // min temp
            var fiveDayMinTemp = response.daily[2].temp.min;
            // max temp
            var fiveDayMaxTemp = response.daily[2].temp.max;
            // 5 day temp range
            var fiveDayTemp = Math.floor(fiveDayMinTemp) + '-' + Math.floor(fiveDayMaxTemp) + '°F'
            // adding temp range to landing page
            $('#temp2').html('temp: ' + fiveDayTemp);
            // humidity
            var fiveDayHumidity = response.daily[2].humidity;
            // adding humidity to landing page
            $("#humidity2").html('Humidity: ' + fiveDayHumidity + '%')
            
            // day 3
            // date
            var date = moment(now).add(4, 'days').format('M-DD');
            // adding date to landing page
            $('#date3').html('Date: ' + date);
            // weather icon
            var fiveDayIcon = response.daily[3].weather[0].icon;
            // adding icon to landing page
            $('#icon3').html('<img src="http://openweathermap.org/img/w/' + fiveDayIcon + '.png" />');
            // min temp
            var fiveDayMinTemp = response.daily[3].temp.min;
            // max temp
            var fiveDayMaxTemp = response.daily[3].temp.max;
            // 5 day temp range
            var fiveDayTemp = Math.floor(fiveDayMinTemp) + '-' + Math.floor(fiveDayMaxTemp) + '°F'
            // adding temp range to landing page
            $('#temp3').html('temp: ' + fiveDayTemp);
            // humidity
            var fiveDayHumidity = response.daily[3].humidity;
            // adding humidity to landing page
            $("#humidity3").html('Humidity: ' + fiveDayHumidity + '%')
            
            // day 4
            // date
            var date = moment(now).add(5, 'days').format('M-DD');
            // adding date to landing page
            $('#date4').html('Date: ' + date);
            // weather icon
            var fiveDayIcon = response.daily[4].weather[0].icon;
            // adding icon to landing page
            $('#icon4').html('<img src="http://openweathermap.org/img/w/' + fiveDayIcon + '.png" />');
            // min temp
            var fiveDayMinTemp = response.daily[4].temp.min;
            // max temp
            var fiveDayMaxTemp = response.daily[4].temp.max;
            // 5 day temp range
            var fiveDayTemp = Math.floor(fiveDayMinTemp) + '-' + Math.floor(fiveDayMaxTemp) + '°F'
            // adding temp range to landing page
            $('#temp4').html('temp: ' + fiveDayTemp);
            // humidity
            var fiveDayHumidity = response.daily[4].humidity;
            // adding humidity to landing page
            $("#humidity4").html('Humidity: ' + fiveDayHumidity + '%')




























            console.log('-----5 day-----')
            console.log('date = ' + date);
            console.log('icon = ' + fiveDayIcon);
            console.log('five day temp = ' + fiveDayTemp);
            console.log('humidity = ' + fiveDayHumidity + '%');
        });
    });
};

// search stores user input and then runs getCityInfo function
$(document).ready(function () {
    $('#searchBtn').click(function () {
        cityName = $("#userSearch").val();
        getCityInfo();
    });
});