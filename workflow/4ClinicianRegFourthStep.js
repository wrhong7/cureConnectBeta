function toFourthStepButtonClicked() {
	$('#regFirstStepContainer').hide();
	$("#regSecondStepContainer").hide();
	$("#regThirdStepContainer").hide();
	
	$("#regFourthStepContainer").show();
	$("#regSecondStepContainer").append(
		`<button onclick="toFourthStepButtonClicked()">Next</button>`
	)
}

$(document).ready(function() {

});