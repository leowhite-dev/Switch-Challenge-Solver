document.getElementById('initial-state').addEventListener('blur', function() {
	const input = this.value;
	const regex = /^(?=.*r)(?=.*g)(?=.*b)(?=.*y)[rgby]{4}$/;  // r, g, b, y 每个字符出现一次
	const errorMessage = document.getElementById('error-message');

	if (!regex.test(input)) {
			this.style.border = '2px solid red';
			errorMessage.style.display = 'inline';
	} else {
			this.style.border = '';
			errorMessage.style.display = 'none';
	}
});
