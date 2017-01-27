// B) 

// Set up:
// For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".


// Part 1: This module should have a function that takes in a filename and a callback function as a parameter. 
// It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
var fs = require ('fs') // Assigned function require with argument 'fs' to var fs



// var JSONfilereader = function (filename, callback)
// function JSONfilereader (filename, callback)
var JSONfilereader = function (filename, callback) { // Step 2.1) Created function "JSONfile reader" assigned to the module that takes in a filename a callback function as a a parameter
	fs.readFile(filename, 'utf-8', function (err, data) { // 2.2) Function reads the file via readfile function
		if (err) throw err // 2.3) body of readfile function with if (err) throw err
		JSON.parse(data); // 2.3 )parses the JSON
		console.log('file is being read and parsed in the JASONfilereader')
		if (typeof callback === 'function') {callback()} // 2.4) Check if callback is a function
	});
}

module.exports = JSONfilereader // Step 1) Created a module: assigned 'JSONfilereader' (is a variable) to module.exports for syntax reasons and to export to another file








// ----


// var exports = module.exports = {};
// exports.myFunction = (filename,

// var fs = require('fs')
// fs.readFile('/countries-json', 'utf-8', function (err,data) {
// 	if (err)
// 		throw err
// })

// var countries = function 

// function myFunction ()

// var greeter = function ( name ) {
//     console.log( 'Hello, I am ' + name )
// }
// module.exports = greeter


// // One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// // Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.