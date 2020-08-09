function test(){
	console.log(this);				//window{...}
	this.myName = "Galib";
}

test();
console.log(window.myName);			//Galib




// Capital 'C' in function name defines function constructors. It is a good practice.
function Circle(radius) {
	console.log(this);				//Circle{...}
	this.radius = radius;
	this.getArea = function(){
		return Math.PI * Math.pow(this.radius, 2);
	}
}

var myCircle = new Circle(10);
//When we invoke a function together with the 'new' keyword
//the JS engine makes 'this' point to the object itself
console.log(myCircle);				//Circle{...}
console.log(myCircle.radius);		//Circle{...}
console.log(myCircle.getArea());	//314.1592653589793		
