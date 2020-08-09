// Pass by referece
function change(objValue) {
	console.log(objValue);
	objValue.x = 92;
	console.log(objValue);
	console.log(objValue.x)
}

var value = {x : 3};
change(value);

console.log(value);
console.log(value.x);
