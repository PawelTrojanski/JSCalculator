function typeChar(char) {
	var prev = $('#equation').val();
	$('#equation').val(prev + char);
}

function clearEquation() {
	$('#equation').val('');
}

function getResult() {
	var val = $('#equation').val();
	$('#equation').val(eval(val))
}

function removeLastChar() {
	var val = $('#equation').val();
	$('#equation').val(val.substr(0, val.length - 1));
}