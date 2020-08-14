document.addEventListener("DOMContentLoaded",
	function (event) {
		function sayHello(event) {
			console.log(this);
			this.textContent = "Said it";
			var name = document.getElementById('name').value;
			x = document.getElementById('content');
			var msg = "<h2>Hello " + name+ "!</h2>"
			x.innerHTML = msg;
		}
		// Unobtrusive event binding
		document.querySelector("button").addEventListener("click", sayHello);
	}
);

