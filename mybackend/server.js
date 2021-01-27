const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Weather app running');
});

adf
app.get('/weather', (req, res) =>{
    res.send('this is weather endpoint');
    console.log('received a get request');
});


app.listen(port, () =>{
    console.log('port is running', port)
});