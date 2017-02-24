// made an express require
// made an express require
// made an express request
// set public files to static folder
// made a server

const express = require ('express');
const app = express();

app.use('/home', express.static('public'))


app.listen(3000, function () {
	console.log('index is listening on port 3000')
})


