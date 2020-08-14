document.addEventListener("DOMContentLoaded",
	function (event) {
		function sayHello(event) {
			// console.log(this);
			// console.log(event);
			this.textContent = "Said it";
			var name = document.getElementById('name').value;
			x = document.getElementById('content');
			var msg = "<h2>Hello " + name+ "!</h2>"
			x.innerHTML = msg;
		}
		
		// Unobtrusive event binding
		document.querySelector("button").addEventListener("click", sayHello);

		document.querySelector("body").addEventListener("mousemove",
			function (event) {
				// document.write(event.clientX);
				// document.write(event.clientY);
				var y = document.getElementById("coordinate");
				y.innerHTML = event.clientX + " , " + event.clientY;
			}
		);
	}
);

