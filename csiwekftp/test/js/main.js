$(document).ready( function() {

$('#close').click( function(e) {
    $('#apply_popup').hide();
	$('#close').hide();
});

$('#store_click').click( function(e) {
    $('#apply_popup').show();
	$('#close').show();
});

$('#store_click_02').click( function(e) {
    $('#apply_popup').show();
	$('#close').show();
});

});