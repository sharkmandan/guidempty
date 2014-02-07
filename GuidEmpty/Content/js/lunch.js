$(function () {
	choose();
	$('#lunch-go').on('click', choose);

	function choose() {
		var choices = document.getElementById('lunch-source').value.split('\n');
		Math.random(); Math.random(); Math.random();
		var choice = choices[Math.floor(Math.random() * choices.length)];
		if (choice !== '') {
			if (choice === "Siggy's") { choice = "Siggy's (are you sure you want to ruin your day?)";}
			var output = document.getElementById('lunch-output');
			output.innerHTML = choice;
			output.className = 'done';
		}
		else {
			choose();
		}
	}
});