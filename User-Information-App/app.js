// User Information App - Web Server

// Create a Node.js application that is the beginning of a user management system. Your users are all saved in a "users.json" file, and you can currently do the following:
	// search for users
	// add new new users to your users file.

// Part 0 Create one route:
	// route 1: renders a page that displays all your users.


// Part 1 Create two more routes:
	// route 2: renders a page that displays a form which is your search bar.
	// route 3: takes in the post request from your form, then displays matching users on a new page. Users should be matched based on whether either their first or last name contains the input string.
	
// Part 2 Create two more routes:
	// route 4: renders a page with three forms on it (first name, last name, and email) that allows you to add new users to the users.json file.
	// route 5: takes in the post request from the 'create user' form, then adds the user to the users.json file. Once that is complete, redirects to the route that displays all your users (from part 0).



const express = require('express');
const fs = require ('fs');
const app = express ();
const router = express.Router();


// sets the settings of app.js and view engine sets it in pug
// render the html by pug
//__dirname is: /Users/mikjung/Programming/BSSA-Homework/User-Information-App
//__dirname + '/views' is: /Users/mikjung/Programming/BSSA-Homework/User-Information-App/views
app.set('views', __dirname + '/views'); // moet je deze erbij zetten?
app.set('view engine', 'pug');

// app.use(express.static(path))


//route 1
//handelt een GET request af en stuurt een response terug naar de client
//deze response moet je zelf programmeren, bijv. response.send(args) of response.render(args)
app.get('/', (request, response) => {
	console.log ('render the pug-page');
	fs.readFile(__dirname + '/users.json', 'utf-8', (error, data) => {
		if(error) {
			throw error;
		}
		const parsedData = JSON.parse(data); // ontleed de string naar een het juiste data-type = arry of ojbect

		response.render('index', {userInfoList : parsedData});

	});
});		

//- route 2: Renders a page that displays a form which is your search bar.
app.get('/search', (request, response) => {
	console.log('werkt het?');
	// maak een searchbar in pug
		// kijken of pug werkt (V)
		// searchbar searchen op google -- form tag in html (V)
		// converten naar pug (V)

	// maak een response.render
	response.render('search');

})

//route 3: 
	// Takes in the post request from your form, then displays matching users on a new page.
	// Users should be matched based on whether either their first or last name contains the input string
app.post('/search', (request, response) => {
	console.log('werkt app.post?')
})

//server staat open voor connecties
app.listen(3000,() => {
	console.log('Server has started on port 3000');
});



