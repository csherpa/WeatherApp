const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config();

const PORT = process.env.PORT || 5000

const app = express();
app.use(express.static(__dirname + "/public"));

app.get('/api',(req,res)=>{
    res.send({working: true})
})
app.get('/home', (req,res) =>{
    console.log('working')
    res.sendFile(path.resolve(__dirname + "/public/index.html"))
})

app.get('/api/:city', (req, res) =>{
    const cityName = req.params.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {     
            console.log(data)   
            const Lat = data.coord.lat;
            //console.log(Lat)
            const Lon = data.coord.lon;
            //console.log(Lon)

            const url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${Lat}&lon=${Lon}&units=metric&exclude=minutely&appid=${process.env.API_KEY}`
            fetch(url2)
                .then((res) => res.json())
                .then((data) => { 
                    res.send(data)
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
})


app.listen(PORT);