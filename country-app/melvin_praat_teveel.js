function processPeople(people, callback){
	for (var i = 0; i < people.length; i++) {
		var person = people[i]
		console.log(person + ' is awesome')
	}
	var theLastPerson = people[people.length-1]
	callback(    theLastPerson   ) //dissTheLastPerson, praiseTheLastPerson
}

function dissTheLastPerson(person){
	console.log('buuuuut ' + person + ' is a terrible life form on this planet and should be gone')
}

function praiseTheLastPerson(person){
	console.log('And ' + person + ' is not only awesome but also a terrific travel partner')
}






var myFriends = ['arthur', 'my cat', 'my ducky', 'my future victim']

processPeople(myFriends, dissTheLastPerson)
processPeople(myFriends, praiseTheLastPerson)

processPeople(myFriends, function(person){
	console.log('dit is een random function, vind je ook niet ' + person + '?')
})

// app.get('/home', function(request, response){

// })