function closeMe() {
	x = document.getElementById('demo');

	// option1: Change the style attribute directly
	// x.style.display = 'none';

	//option2: Change the class
	x.className = "close";
}

function openMe() {
	x = document.getElementById('demo');

	// option1: Change the style attribute directly
	// x.style.display = 'block';

	//option2: Change the class
	x.className = "open";
}