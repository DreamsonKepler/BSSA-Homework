// Part 1
// Create a website that allows people to post messages to a page. 
// A message consists of a title and a body. The site should have two pages:
    // Page 1: The first page shows people a form where they can add a new message.
        // - make a get request for form
        // - make a post request for form
    // Page 2:The second page shows each of the messages people have posted.
            // we store the messages in the database 
            // Make sure there's a way to navigate the site so users can access each page.
            // iterate the array with a for loop
// Page 2         
// Messages must be stored in a postgres database. 
// Create a "messages" table with three columns: column name / column data type:   
    // id: serial primary key
    // title: text
    // body: tex

// hoe maak je nieuwe database aan?
    // --> create database <name>; 
// hoe verwijs ik naar de database vanaf app.js
    // check github grondig, en kom daarna met vragen
     // const db = require(__)
// wat doet mijn oude code van app.post
    // check de lecture
    // de kennis van de lecture moet je gebruiken o.a. in je app.post
    //console.log (request.body) // you have a post request. request.body: is the body with some key
     // store that into a variable,and then you put in to <model>.create
const pg = require('pg');
const express = require('express');
const app = express();
const db = require(__dirname + '/models/db.js');
// new Sequelize ('sequelize_fun', 'Kido', 'postgres', {
//     dialect: 'postgres'


app.set('views', __dirname + '/views'); 
app.set('view engine', 'pug');

// First Page
app.get('/form', (request, response) => {
    //db.someMessage();
    console.log('werkt app.get form.pug?')
    response.render('form')
});

app.post('/form', (request, response) => {
    //db.Message.create()
    console.log('werkt app.post?')
});

//Second Page
 // show messages of the peopele who posted
 // make a navigate bar

//server staat open voor connecties
app.listen(3000,() => {
    console.log('Server hast started on port 3000')
});



