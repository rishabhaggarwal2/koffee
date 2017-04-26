<?php
/*
This first bit sets the email address that you want the form to be submitted to.
You will need to change this value to a valid email address that you can access.
*/
$webmaster_email = "Cody@KoffeedReinvented.com,KoffeeReinvented@gmail.com";

/*
This bit sets the URLs of the supporting pages.
If you change the names of any of the pages, you will need to change the values here.
*/
$feedback_page = "index.html";
$thankyou_page = "thank_you.html";

/*
This next bit loads the form field data into variables.
If you add a form field, you will need to add it here.
*/
$store_first_name = $_REQUEST['store_first_name'];
$store_last_name = $_REQUEST['store_last_name'];
$store_email = $_REQUEST['store_email'];

$all=    
"First Name: ".$store_first_name."\r\n".
"Last Name: ".$store_last_name."\r\n".
"Email: ".$store_email."\r\n";


/*
The following function checks for email injection.
Specifically, it checks for carriage returns - typically used by spammers to inject a CC list.
*/
function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}

// If the user tries to access this script directly, redirect them to the feedback form,
if (!isset($_REQUEST['store_email'])) {
header( "Location: $feedback_page" );
}

// If we passed all previous tests, send the email then redirect to the thank you page.
else {
mail( "$webmaster_email", "Koffee || Online Store Inquiry",
$all, "From: $store_email" );	
header( "Location: $thankyou_page" );
}
?>