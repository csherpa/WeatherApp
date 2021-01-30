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



app.get('/api/:latitude/:longitude', (req, res) => {
    //const url = `http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${process.env.API_KEY}`
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.params.latitude}&lon=${req.params.longitude}&units=metric&exclude=minutely&appid=${process.env.API_KEY}`
    return fetch(url)
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((err) => console.log(err));
});

app.get('/api/geo/:city', (req, res) => {
    return fetch(`http://gd.geobytes.com/AutoCompleteCity?q=${req.params.city}`)
        .then(cities => cities.json())
        .then((cities) => res.json(cities))
        .catch((error) => console.log('error', error));
}
);

app.get('/api/details/:city', (req, res) => {
    return fetch(`http://gd.geobytes.com/GetCityDetails?fqcn=${req.params.city}`)
        .then(details => details.json())
        .then((details) => res.json(details))
        .catch((error) => console.log('error', error));
}
);

app.listen(port);
