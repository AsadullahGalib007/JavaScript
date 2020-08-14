//What is closure?
/*A closure is the combination of a function bundled together (enclosed)
with references to its surrounding state (the lexical environment). */

function makeMultiplier(multiplier){
	function task(x){
		return multiplier * x;
	}

	return task;
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));



function outer(a){
	return(
		function inner(b){
			return a+b;
		}
	);
}

var X = outer(10);
console.log(X);
console.log(X());

var Y = X(15);
console.log(Y);

  (function(window) {   
  	var obj = {};  
  	obj.dreamOn = function () {   
  		console.log("I want to see the global scope! Let me out!");  
  	};  
  	
  	window.doer = obj;
 
 });

 doer.dreamOn();