
//Set-up: 
// Made country-app folder in node folder 2.2) made app.js file in country-app folder
// Navigated through terminal via /Users/mikjung/Programming/Opdrachten Canvas/country-app to app.js folder. Opened folder in sublime text
// Typed in console. git init and git npm to create git repository and set up npm.
// Checked if app.js worked by typing in terminal node.js Germany and typed in sublime console.log(process.arg[2]); It worked

// Part 1) Create a Node.js application that does the following:
// 1.1) Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array process.argv
// 1.2) Reads and parses the countries.json file. Note: you must use readFile and not readFileSync.
// 1.3) Outputs information about that specific country. Must be in the following format:
// Country: Netherlands Top Level Domain: .nl

var countryName = process.argv[2] // Assigns function process.argv to var countryname to clarify syntax
var fs = require('fs') // Assign require argument fs to var fs
var JSONfilereader= require(__dirname + '/JSONfilereader')

// 1.3)
function countryCompare (countryinformation) {
	for (var i = 0; i < countryinformation.length; i++) { // Used for loop to go through information in the countries.json file
		if (countryinformation[i].name === countryName) { // If the information stored in process.argv[2](= countryName) is found in the body of the for loop by countryinformation[i].name -> let me know
			console.log ('Country:' + countryinformation[i].name); // // Expresses info about the same name found in the countries.json file as the name put to process.argv[2]
			console.log ('Top level domain:' + countryinformation[i].topLevelDomain); // Expresses info about topLevelDomain which is the same name found in the countries.json file as the name put to process.argv[2]
		}
	}
}


JSONfilereader('./countries.json', countryCompare) // 1.2 + 1.3

console.log(process.argv[2]);// 1.1)






