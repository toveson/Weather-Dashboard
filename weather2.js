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

            console.log('-----today-----')
            // current day
            // storing the date
            // storing weather icon
            var icon = response.current.weather[0].icon;
            console.log('icon = ' + icon);
            // storing the teperature
            var temp = response.current.temp;
            console.log('temp = ' + Math.floor(temp) + '°F');
            $('#temp').text(Math.floor(temp) + '°F');
            // Storing humidity
            var humidity = response.current.humidity;
            console.log('humidity = ' + humidity + '%')
            // Storing wind speed
            var wind = response.current.wind_speed;
            console.log('wind speed = ' + wind + ' mph');
            // // Storing uv index
            var uvIndex = response.current.uvi;
            console.log(uvIndex);

            console.log('-----5 day-----')
            // I also need to get 5 day forcast (should I make a loop???)
            // date
            // weather icon
            var fiveDayIcon = response.daily[0].weather[0].icon;
            console.log('icon = ' + fiveDayIcon);
            // min temp
            var fiveDayMinTemp = response.daily[0].temp.min;
            // max temp
            var fiveDayMaxTemp = response.daily[0].temp.max;

            var fiveDayTemp = Math.floor(fiveDayMinTemp) + '-' + Math.floor(fiveDayMaxTemp) + '°F'
            console.log('five day temp = ' + fiveDayTemp);
            // humidity
            var fiveDayHumidity = response.daily[0].humidity;
            console.log('humidity = ' + fiveDayHumidity);




        });
    });
};


$(document).ready(function () {
    $('#searchBtn').click(function () {
        cityName = $("#userSearch").val();
        getCityInfo();
    });
});