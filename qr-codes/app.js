const express = require('express');
const https = require('https');
const app = express();

app.set('view engine', 'ejs');

const url = 'https://quickchart.io/qr?text='; // URL for QuickChart API

let text = '2 be or n0t to be $'; // Sample text to use in query string

//Endpoint for the html page
app.get('/', (req, res) => {
    res.render('app'); // rendered by EJS
});

//Endpoint that sends a GET request to the API using the https module
app.get('/generate', async (req, res) => {
    https.get(url + encodeURIComponent(text), response => {
        res.setHeader('Content-Type', 'image/png'); // the default format is png - this can be changed
        response.pipe(res); // pipe the image to the client since it's a stream
    });
});

app.listen(3000, () => {
    console.log('Server started...');
});