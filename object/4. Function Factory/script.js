// Function Factory
function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));			//30

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));			//200





// Passing function as argument
function doOperation(x, operation) {
	return operation(x);
}

var result = doOperation(5, multiplyBy3);
console.log(result);							//15

result = doOperation(100, doubleAll);
console.log(result);							//200