const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// Log requests
app.use(logger('dev')); // anytime we get a request from the client -> log it to the console

// Parse incoming requests data
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static('static')) // loads static files

app.set('views', __dirname + '/server/views'); 
app.set('view engine', 'pug');

// Index
app.get('/index', (request, response) => {
    response.render('index');
});

// Resume
app.get('/resume', (request, response) => {
    response.render('resume');
});

// Charisma
app.get('/charisma', (request, response) => {
    response.render('charisma');
});

// Make connection with the server
app.listen(3000,() => {
    console.log('Server hast started on port 3000')
});