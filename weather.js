// golbal varibles


// I need to use the users city to pull info from OpenWeather API (https://openweathermap.org/api)

let APIKey = '{54152bc89cd7a8d06acb57627e96a4df}';
let cityName = 'Springville'
let queryURL = 'api.openweathermap.org/data/2.5/weather?q={' + cityName + '}&appid=' + APIKey

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    // Create CODE HERE to Log the queryURL
    console.log(queryURL);
    // Create CODE HERE to log the resulting object
    console.log(response)
  });



// stuff to store from ajax
    // storing the searched city
    // storing the date
    // storing weather icon
    // storing the teperature
    // Storing humidity
    // Storing wind speed
    // Storing uv index



// I need to get current: 
        // City, Date and Weather icon
        // temp
        // humidity
        // wind speed
        // uv inex (need a color for favorable, moderate, or severe to go with it! )
    // I also need to get 5 day forcast
        // date
        // weather icon
        // temp
        // humidity
        // uv index (This would be extra, Possibly change the background color of the card for the uv index of that day)

// I need to store User input to local storage
    // I will use this to create dynamic buttons with the city name
    // these will be bellow the seach 
    // when they are clickeed they load the weather infor for that city