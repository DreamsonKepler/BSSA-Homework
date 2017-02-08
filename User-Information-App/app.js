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
const bodyParser = require('body-parser')


// sets the settings of app.js and view engine sets it in pug
// render the html by pug
app.set('views', __dirname + '/views'); 
app.set('view engine', 'pug');




/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// *bodyParser.json(options)
//  * Parses the text as JSON and exposes the resulting object on req.body.
 

app.use(   bodyParser.urlencoded(   {
    extended: true
}    )   );

app.use('/static', express.static('static') )

//Part 0
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

//Part 1
	//- route 2: Renders a page that displays a form which is your search bar.
app.get('/search', (request, response) => {
	console.log('werkt het?');
	response.render('search');
})

//route 3: 
	// Takes in the post request from your form, then displays matching users on a new page.
	// Users should be matched based on whether either their first or last name contains the input string
app.post('/search', (request, response) => {
	console.log('werkt app.post voor displayname.pug?');
	console.log('searchbar: ' + request.body.searchbar);
	let searchName = request.body.searchbar;
	
	
	fs.readFile(__dirname + '/users.json', 'utf-8', function (err, data) { 
		if (err) throw err 
		const parsedData = JSON.parse(data); 
		let displayUser = []
		for (let i = 0; i < parsedData.length; i++) {

			if (searchName === parsedData[i].firstname) {
				console.log('parsedData ' + parsedData[i].firstname);
				displayUser.push(parsedData[i])
			}
			if (searchName === parsedData[i].lastname) {
				console.log('parsedData ' + parsedData[i].lastname);
				displayUser.push(parsedData[i])
			}
			if (searchName === parsedData[i].email) {
				console.log('parsedData ' + parsedData[i].email);
				displayUser.push(parsedData[i])
			}

		}	

		response.render('displayname', {displayUserInfo: displayUser});
		console.log(displayUser)

	});
		
});

//Part 3
	//route 4:
	//renders a page with three forms on it (first name, last name, and email) 
	// that allows you to add new users to the users.json file.
app.get('/userform', (request, response) => {
	console.log('werkt app.get userform.pug?');
	response.render('userform');
});



	// voeg deze data toe aan users.json
	// dan pas als deze data is toegevoegd; 
	// redirecten naar je homepagina waar de 'nieuwe ' display van database wordt getoond
	// -->
	// read users.JSON 		GEDAAN
	// gebruik parse
	// arrayname.push(newArrayObject)
	// write user.json

app.post('/userform', (request, response) => {
	// // pak data met app.post van userform (die met app.get gemaakt is)
	fs.readFile(__dirname + '/users.json', 'utf-8', function (err, data) { 
		if (err) throw err;
		const userData = request.body;
		const parsedData = JSON.parse(data); 
		parsedData.push(userData);
		const stringData = JSON.stringify(parsedData)

		console.log('parsed: ' + parsedData) // werkt
		console.log('userform: ' + userData) // werkt
		console.log('stringified: ' + stringData) // werkt


		fs.writeFile(__dirname + '/users.json', stringData, 'utf-8', (err) => {
		if (err) throw err;
		console.log('its saved')
		});
		response.redirect('/')
	});
});

//server staat open voor connecties
app.listen(3000,() => {
	console.log('Server has started on port 3000');
});



