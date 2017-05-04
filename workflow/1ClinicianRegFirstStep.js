//This is what happens right after choosing click clinician button
//This field will let the clinician to choose their 1. nurse type, 2. specialty, 3. degrees, 4. which states can you practice?


const clinicianSpecialty = [
	"Acute Care NP",
	"Adult NP",
	"Adult-gerontology acute care NP",
	"Adult gerontology primary care NP",
	"Adult Psychiatric-mental health NP",
	"Family NP",
	"Gerontological NP",
	"Pediatric Primary Care NP",
	"Psychiatric-Mental Health NP",
	"School NP"
];

const providerDegreeTypes = [
	"ADN",
	"BSN",
	"LPN",
	"MSN",
	"DNP"
]

const stateLicenses = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Washington District of Columbia (DC)','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming', 'All States', 'Traveling Nurse License'];

function regClinicianButtonClicked() {
	$(".mainpageContianer").show()
	$("#regFirstStepContainer").append(
		`<button onclick="toSecondStepButtonClicked()">Next</button>`
	)
}

$(document).ready(function() {

  $('select').select2();

  providerTypes.forEach(function(providerType) {
  	  $('#providerType').append(
		`<option value=${providerType}>${providerType}</option>`
	  )
  })

  clinicianSpecialty.forEach(function(clinicianSpecialty) {
  	  $('#providerSpecialty').append(
		`<option value=${clinicianSpecialty}>${clinicianSpecialty}</option>`
	  )
  })

  providerDegreeTypes.forEach(function(providerDegreeTypes) {
  	  $('#providerDegree').append(
		`<option value=${providerDegreeTypes}>${providerDegreeTypes}</option>`
	  )
  })

  stateLicenses.forEach(function(stateLicenses) {
  	  $('#providerRegion').append(
		`<option value=${stateLicenses}>${stateLicenses}</option>`
	  )
  })

});




