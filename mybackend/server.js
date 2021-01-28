const express = require('express');
const request = require('request');
const app = express();
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000

//const cityName = process.argv[2]

const URL = `http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=${process.env.API_KEY}`

app.get('/', (req, res) => {
    res.send('Weather app ');
    console.log('server.js is working');
});

app.get('/weather', (req, res) =>{
    res.send('this is weather endpoint');
});

app.get('/cityWeather', (req, res) =>{
    request(URL, (err, response, body) => {
        if(!err && response.statusCode == 200){
            const data = JSON.parse(body);
            console.log(data.main);
            res.send(data.main);
        }
   });

})

// request(URL, (error, response, body) =>{
//     const data = JSON.parse(body);
//     console.log(data.main);
// })
    
app.listen(port);

// app.listen(port, () =>{
//     console.log('port is running', port)
// });