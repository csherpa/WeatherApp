const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('', (req, res) => {
    res.send('Weather app');
})

app.get('/weather', (req, res) =>{
    res.send('this is weather endpoint');
})


app.listen(port, () =>{
    console.log('port is running', port)
});