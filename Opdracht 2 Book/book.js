var bookOne = { // object 1
	title: "Biocentrism", // property title with value of the book
	body: ["page 1", "page 2", "page 3"]
};

var bookTwo = { // object 2
	title: "TheGreatGatsby", // property title with value of the book
	body: ["weet ik veel", "waarom", "hoezo"]
};

var bookThree = { // object 3
	title: "Infinite_Jest", // property title with value of the book
	body: ["Written_by_David_Foster Wallace", "Hal_Incadenza", "As_a_child"]
};

function readBook (book) {  // created function readBook that prints out title and each element in the body if used argument in the parameter
	console.log("Title: " + book.title); //statement
		for (var i = 0; i < book.body.length; i++) {
			console.log(book.body[i]);
	}
}

readBook(bookOne)
readBook(bookTwo)
readBook(bookThree)







