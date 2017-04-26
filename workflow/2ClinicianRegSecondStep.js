const driverType = ["Better Hours", "Better Pay", "Charitable Causes"];
const activePassiveType =["Searching Actively", "Searching Passively"];
const jobSearchType = ["Full Time", "Part Time", "Per Diem", "Short Term Contract"];

function toSecondStepButtonClicked() {
	$('#regFirstStepContainer').hide();
	$("#regSecondStepContainer").show();
	$("#regSecondStepContainer").append(
		`<button onclick="toThirdStepButtonClicked()">Next</button>`
	)
}

$(document).ready(function() {

  $('select').select2();

  driverType.forEach(function(driverType) {
  	  $('#driverType').append(
		`<option value=${driverType}>${driverType}</option>`
	  )
  })

  activePassiveType.forEach(function(activePassiveType) {
  	  $('#activePassiveType').append(
		`<option value=${activePassiveType}>${activePassiveType}</option>`
	  )
  })

  jobSearchType.forEach(function(jobSearchType) {
  	  $('#jobSearchType').append(
		`<option value=${jobSearchType}>${jobSearchType}</option>`
	  )
  })

});