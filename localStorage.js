$(document).ready(function() {
	$(".headerSignIn").empty();
	$(".headerSignIn").append(localStorage["userEnteredEmail"]);
	//here we use local storage cache to pull out the email content where the user has entered into the browser.
})