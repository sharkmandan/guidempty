$(document).ready(function () {
	$('body').on('focus', 'input,textarea', function () {
		// Clicking will re-select the item that was clicked, set a timeout to select the whole Guid
		var self = this;
		window.setTimeout(function () {
			self.select();
		}, 100);
	});
	document.getElementById('inptHeading').focus();

	$(window).scroll(function () {
		if ($(document).scrollTop() == 0) {
			$('#home').removeClass('min');
		}
		else {
			$('#home').addClass('min');
		}
	});
});