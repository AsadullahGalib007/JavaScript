function func() {
	var msg = "Hello!";
	return msg;
}

var _func = function() {
	var msg = "Hello Bello";
	return msg;
}


var _funcc = function() {
	var msg = "Hello there";
	return msg;
}

console.log(func());
console.log(_func);
console.log(_funcc());

console.log(undefined + 5);
var x = "Not" + undefined;

if(x!=undefined)
	console.log("x is not undefined");