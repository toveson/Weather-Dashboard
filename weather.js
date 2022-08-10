// global variables
var cities = [];
var cityName = '';
var now = moment();

function getCityInfo() {
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=54152bc89cd7a8d06acb57627e96a4df`;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var icon = response.weather[0].icon;
        var city = response.name;
        $('#city-date').html(`${city} ${moment(now).format('MMM, DD')}     <img src="http://openweathermap.org/img/w/${icon}.png" />`);

        let queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=54152bc89cd7a8d06acb57627e96a4df`;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var temp = response.current.temp;
            $('#temp').html(`Temperature: ${Math.floor(temp)}°F`);
            var humidity = response.current.humidity;
            $('#humidity').html(`Humidity: ${humidity}%`);
            var wind = response.current.wind_speed;
            $('#wind-speed').html(`Wind Speed: ${wind} mph`);
            var uvIndex = response.current.uvi;
            $('#uv-index').html(`UV Index: ${uvIndex}`);

            var date = moment(now).add(1, 'days').format('M-DD');
            $('#date0').html(`Date: ${date}`);
            var fiveDayIcon = response.daily[0].weather[0].icon;
            $('#icon0').html(`<img src="http://openweathermap.org/img/w/${fiveDayIcon}.png" />`);
            var fiveDayMinTemp = response.daily[0].temp.min;
            var fiveDayMaxTemp = response.daily[0].temp.max;
            var fiveDayTemp = `${Math.floor(fiveDayMinTemp)} - ${Math.floor(fiveDayMaxTemp)}°F`
            $('#temp0').html(`temp: ${fiveDayTemp}`);
            var fiveDayHumidity = response.daily[0].humidity;
            $("#humidity0").html(`Humidity: ${fiveDayHumidity}%`)
            
            // day 1
            var date = moment(now).add(2, 'days').format('M-DD');
            $('#date1').html(`Date: ${date}`);
            var fiveDayIcon = response.daily[1].weather[0].icon;
            $('#icon1').html(`<img src="http://openweathermap.org/img/w/${fiveDayIcon}.png" />`);
            var fiveDayMinTemp = response.daily[1].temp.min;
            var fiveDayMaxTemp = response.daily[1].temp.max;
            var fiveDayTemp = `${Math.floor(fiveDayMinTemp)} - ${Math.floor(fiveDayMaxTemp)}°F`
            $('#temp1').html(`temp: ${fiveDayTemp}`);
            var fiveDayHumidity = response.daily[1].humidity;
            $("#humidity1").html(`Humidity: ${fiveDayHumidity}%`)
            
            // day 2
            var date = moment(now).add(3, 'days').format('M-DD');
            $('#date2').html(`Date: ${date}`);
            var fiveDayIcon = response.daily[2].weather[0].icon;
            $('#icon2').html(`<img src="http://openweathermap.org/img/w/${fiveDayIcon}.png" />`);
            var fiveDayMinTemp = response.daily[2].temp.min;
            var fiveDayMaxTemp = response.daily[2].temp.max;
            var fiveDayTemp = `${Math.floor(fiveDayMinTemp)} - ${Math.floor(fiveDayMaxTemp)}°F`
            $('#temp2').html(`temp: ${fiveDayTemp}`);
            var fiveDayHumidity = response.daily[2].humidity;
            $("#humidity2").html(`Humidity: ${fiveDayHumidity}%`)
            
            // day 3
            var date = moment(now).add(4, 'days').format('M-DD');
            $('#date3').html(`Date: ${date}`);
            var fiveDayIcon = response.daily[3].weather[0].icon;
            $('#icon3').html(`<img src="http://openweathermap.org/img/w/${fiveDayIcon}.png" />`);
            var fiveDayMinTemp = response.daily[3].temp.min;
            var fiveDayMaxTemp = response.daily[3].temp.max;
            var fiveDayTemp = `${Math.floor(fiveDayMinTemp)} - ${Math.floor(fiveDayMaxTemp)}°F`
            $('#temp3').html(`temp: ${fiveDayTemp}`);
            var fiveDayHumidity = response.daily[3].humidity;
            $("#humidity3").html(`Humidity: ${fiveDayHumidity}%`)
            
            // day 4
            var date = moment(now).add(5, 'days').format('M-DD');
            $('#date4').html(`Date: ${date}`);
            var fiveDayIcon = response.daily[4].weather[0].icon;
            $('#icon4').html(`<img src="http://openweathermap.org/img/w/${fiveDayIcon}.png" />`);
            var fiveDayMinTemp = response.daily[4].temp.min;
            var fiveDayMaxTemp = response.daily[4].temp.max;
            var fiveDayTemp = `${Math.floor(fiveDayMinTemp)} - ${Math.floor(fiveDayMaxTemp)}°F`
            $('#temp4').html(`temp: ${fiveDayTemp}`);
            var fiveDayHumidity = response.daily[4].humidity;
            $("#humidity4").html(`Humidity: ${fiveDayHumidity}%`)
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