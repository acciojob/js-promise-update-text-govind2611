//your JS code here. If required.
function delayedHello() {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve('Hello, world!');
				}, 1000);
			});
		}

		delayedHello().then((message) => {
			const outputElement = document.getElementById('output');
			outputElement.textContent = message;
		});