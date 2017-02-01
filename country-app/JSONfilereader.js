// Part 2)
// 2.1) For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// 2.2) This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
// 2.3) One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

var fs = require ('fs') // Assigned function require with argument 'fs' to var fs

var JSONfilereader = function (filename, callback) { // Step 2.2) Created function "JSONfile reader" assigned to the module that takes in a filename a callback function as a a parameter
	fs.readFile(filename, 'utf-8', function (err, data) { // 2.3) Function reads the file via readfile function
		if (err) throw err // 
		 var parsedData = JSON.parse(data); // 2.3 )
		console.log('file is being read and parsed in the JASONfilereader')
		callback(parsedData) 
});
}

module.exports = JSONfilereader // 2.1)
