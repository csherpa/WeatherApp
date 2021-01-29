const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const date = new Date();
    res.json({currentTime: date.toTimeString() });
    console.log('got the get request');
});

//get weather by cityname
app.get('/:cityName', (req, res) => {
    const cityName = req.params.cityName;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}`
    
    return fetch(url)
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((err) => console.log(err));

});



app.listen(port);

// app.get('/api/geo/:citySearch', (req, res) => {
//     const searchUrl = `http://gd.geobytes.com/AutoCompleteCity?q=${req.params.city}`
//     return fetch(searchUrl)
//         .then((data) => data.json())
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err));      
// });
    
// const weather = {
        //     city: city,
        //     temperature: Math.round((cityWeather.main.temp - 273.15) * 9/5 + 32),
        //     temp_max: Math.round((cityWeather.main.temp_max - 273.15) * 9/5 + 32),
        //     temp_min: Math.round((cityWeather.main.temp_min - 273.15) * 9/5 + 32),
        //     humidity: cityWeather.main.humidity,
        //     description: cityWeather.weather[0].description,
        //     windspeed: cityWeather.wind.speed
        // }