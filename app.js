const express = require('express')
const app = express()

app.use(express.static('public'));

app.use(express.static('styles'));

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html');
 });

 app.get('/works', function (req, res) {
    res.sendFile(__dirname + '/views/works.html');
 });

app.listen(3000)

