// from 0 to 100, print all the numbers that are divisible by 3
function fizzBuzz() {
	for (var i = 1; i <= 100; i++) {  // var counter is 1. var incrementor is i++
		if ( i%3 === 0) {  // Modulo operation is i/3. If the remainder is equal to 0, console log wil loutput "Fizz"
			console.log("Fizz");
		}
		else if ( i%5 === 0) {  // Modulo operation is i/5. If the remainder is equal to 0, console log wil loutput "Buzz"
			console.log('Buzz');
		}
		else {
			console.log(i); // gives an output from 1 to 100 in the console
		}
	}
}

fizzBuzz()