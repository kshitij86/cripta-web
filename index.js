const express = require('express')
const ejs = require('ejs')

const url = "https://api.coinranking.com/v1/public/coins"
const app = express()

app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => res.render("index")); 
app.get('/help', (req,res) => res.render("help"));


const PORT = 5000
app.listen(PORT, () => console.log(`Started listening on ${PORT}`)); 
