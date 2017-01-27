function findSum (a,b) { // created function "findSum" with two parameters
	return a + b; // returns the sum of the parameters to call findSum
};
console.log( findSum(1,2)); // console.logs the return

/* of
function findSum (a,b) {
	return a + b;
}
var s = findSum(10,20); 


of

var findSum = function(a, b){
	return a+b
}

findSum(3,4);

*/




function findProduct (c,d) { // created function "findProduct" with two parameters
	return c*d; // returens the product of the parameters to call findProduct
}
console.log( findProduct(4,8)); // console.logs the return


function threeOperation (x, operation) { //created function "threeOperation" with two parameters "x" as number and "operation" as function
	var z = operation(x,3) // "threeOperation" calls "operation" parameter as a function
	return z // returns the value of z to the call threeOperation
}

console.log(threeOperation(4, findSum))
console.log(threeOperation(5, findSum))
console.log(threeOperation(4, findProduct))
console.log(threeOperation(5, findProduct))

