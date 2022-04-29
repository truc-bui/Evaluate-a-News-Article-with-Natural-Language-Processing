const dotenv = require('dotenv');
dotenv.config();

const path = require('path')

const fetch = require('node-fetch')
const FormData = require('form-data');
const express = require('express');
// const mockAPIResponse = require('./mockAPI.js')

const app = express()
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = process.env.port || 8081
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})


app.post('/test', async function (req, res) {
    try {
        const {
            text
        } = req.body;
        const formData = new FormData();
        formData.append("key", process.env.API_KEY);
        formData.append("txt", text);
        const requestOptions = {
            method: 'POST',
            body: formData,
        };
        const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
        const body = await response.json();
        res.send(body);
    } catch (e) {
        console.error(e);
    }
})