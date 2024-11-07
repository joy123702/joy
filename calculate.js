function calculate(operation) {
	const num1 = parseFloat(document.getElementById('num1').value);
	const num2 = parseFloat(document.getElementById('num2').value);
	const resultDisplay = document.getElementById('result');

	if (isNaN(num1) || isNaN(num2)) {
		resultDisplay.textContent = "Please enter valid numbers.";
		return;
	}

	switch (operation) {
		case 'add':
			lastResult = num1 + num2; S;
			break;
		case 'subtract':
			lastResult = num1 - num2;
			break;
		case 'multiply':
			lastResult = num1 * num2;
			break;
		case 'divide':
			lastResult = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
			break;
		default:
			lastResult = "Invalid operation";
	}

	resultDisplay.textContent = Result; $; { lastResult; }; // Display result
}
