const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../myfrontend")));

app.get('/', (req, res) => {
    const date = new Date();
    res.json({currentTime: date.toTimeString() });
    console.log('got the get request');
});

app.get('/api/:cityName', (req, res) =>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${req.params.cityName}&appid=${process.env.API_KEY}`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {        
            const lat = data.coord.lat;
            const lon = data.coord.lon;

            const url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.API_KEY}`
            fetch(url2)
                .then((res) => res.json())
                .then((data) => { 
                    res.send(data)
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
})

app.get('/api/geo/:city', (req, res) => {
    return fetch(`http://gd.geobytes.com/AutoCompleteCity?q=${req.params.city}`)
        .then(cities => cities.json())
        .then((cities) => res.json(cities))
        .catch((error) => console.log(error));
}
);

app.get('/api/details/:city', (req, res) => {
    return fetch(`http://gd.geobytes.com/GetCityDetails?fqcn=${req.params.city}`)
        .then(details => details.json())
        .then((details) => res.json(details))
        .catch((error) => console.log(error));
}
);

app.listen(port);
