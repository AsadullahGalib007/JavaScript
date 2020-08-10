var literalCircle = {
	radius: 10,
	getArea: function(){
		console.log(this);
	}
}

literalCircle.getArea();
//When an object literal gets created,'this' instead of
//pointing to the global object, is actually pointing to
//to the actual obejct got created.
