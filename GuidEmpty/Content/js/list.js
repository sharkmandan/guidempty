$(document).ready(function () {
	$('#list-go').on('click', function () {
		$('#list-output').val("'" + $('#list-source').val().replace(/'/g, "''").split('\n').join("',\n'") + "'").focus();
	});
});