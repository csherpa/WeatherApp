const express = require('express');
const path = require('path');

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

app.listen(PORT);