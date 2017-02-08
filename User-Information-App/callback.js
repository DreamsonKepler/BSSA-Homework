var createHTMLPosts = function (posts, callback){
    var result = [];
    for(var i = 0; i < posts.length; i++){
        var postInHTML = '<p>' + posts[i] + '</p>'
        result.push(postInHTML)
    }
}

var myAmazingPosts = ['I love teddy bears.', 
'Hugging people increases serotonin levels.',
 'Sleeping replenish neurotransmitters in your brain',
  'Lollies have way too much sugar, but I cannot stop eating them :3'];

createHTMLPosts(myAmazingPosts, function (result) {
	console.log(result);
}

// my example
var Introduction = function (greetings){
	greetings();
};

function name(){
	console.log('my name is kido')
};

Introduction(name)

// example Melvin
var someSong = function (theSingerSings) {
	console.log ('and here is a singer singing')
	theSingerSings();
}

function shouting(){
	console.log("wuhaaaaaa")
}

function whispering(){
	console.log('pspspsps')

var singing = funciton(){
	console.log('o sole mio! perche blabla')
}

someSong(shouting)

someSong(whispering)

someSong(singing)
}