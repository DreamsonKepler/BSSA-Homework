
//Set-up: 
// Made country-app folder in node folder 2.2) made app.js file in country-app folder
// Navigated through terminal via /Users/mikjung/Programming/Opdrachten Canvas/country-app to app.js folder. Opened folder in sublime text
// Typed in console. git init and git npm to create git repository and set up npm.
// Checked if app.js worked by typing in terminal node.js Germany and typed in sublime console.log(process.arg[2]); It worked

//A)
// Part 1) Create a Node.js application that does the following:
var countryName = process.argv[2] //  step 3.2) Assigns function process.argv to var countryname to clarify syntax
var fs = require('fs') // step 2.2) Assign require argument fs to var fs
var JSONfilereader= require(__dirname + '/JSONfilereader')

JSONfilereader('./countries.json', function readJSON() { // Call JSONfilereader with arguments countries.json (imports module) and function readJSON
	console.log('hallo')

})

console.log(process.argv[2]);// step 1) Takes in one parameter from the command line, the name of a country. See set-up Note: command line arguments can be read from the global array process.argv

// step 2) Reads and parses the countries.json file. Note: you must use readFile and not readFileSync.
fs.readFile('countries.json', 'utf8', function (err, data) { // step 2.1) Connect variable fs (= function require) with function readFile to use the latter function. Also reads the countries.json file
	if (err)
		throw err
	var countryinformation = JSON.parse(data); // step 2.3) Assigned the data of countries.json to variable countryinformation. Json.parse accessed the data stored in countries.json and translate this to readible data in javascript.
	function readJSON () {
		for (var i = 0; i < countryinformation.length; i++) { // step 2.4) Used for loop to go through information in the countries.json file
			if (countryinformation[i].name === countryName) { // step 2.5) If the information stored in process.argv[2](= countryName) is found in the body of the for loop by countryinformation[i].name -> let me know
				console.log ('Country:' + countryinformation[i].name); //step 2.6) // Expresses info about the same name found in the countries.json file as the name put to process.argv[2]
				console.log ('Top level domain:' + countryinformation[i].topLevelDomain); // Expresses info about topLevelDomain which is the same name found in the countries.json file as the name put to process.argv[2]
		}
	}
}
});




