var cities = [];
var cityName = '';

function getCityInfo() {

    let queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=54152bc89cd7a8d06acb57627e96a4df';
    // to get latitude and longitude for next request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var lat = response.coord.lat;
        var lon = response.coord.lon;

        // stuff to store from ajax
        // storing the searched city
        var city = response.name;
        console.log('city = ' + city);
        // storing the date

        
        // One Call API (7 day forcast)
        let queryURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=54152bc89cd7a8d06acb57627e96a4df';
        // getting info to populate html
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // current day
            // storing the date
            // storing weather icon
            var icon = response.current.weather[0].icon;
            console.log('icon = ' + icon);
            // storing the teperature
            var temp = response.current.temp;
            console.log('temp = ' + Math.floor(temp) + '°F');
            // Storing humidity
            var humidity = response.current.humidity;
            console.log('humidity = ' + humidity + '%')
            // Storing wind speed
            var wind = response.current.wind_speed;
            console.log('wind speed = ' + wind + ' mph');
            // // Storing uv index
            var uvIndex = response.current.uvi;
            console.log(uvIndex);


            // I also need to get 5 day forcast
            // date
            // weather icon
            // temp
            // humidity




        });
    });
};


$(document).ready(function () {
    $('#searchBtn').click(function () {
        cityName = $("#userSearch").val();
        getCityInfo();
    });
});