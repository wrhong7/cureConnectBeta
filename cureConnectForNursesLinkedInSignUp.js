// cureConnectForNursesLinkedInSignUp.js


$('a[id*=li_ui_li_gen_]').css({font-size:'20px'; font})

function triggerLinkedIn() {

	api_key: 77a98y6t2xsvbb
	onLoad: onLinkedInLoad
	authorize: true

	console.log("triggered")

	function onLinkedInLoad() {
		IN.Event.on(IN, "auth", onLinkedInAuth);
	}


	// 2. Runs when the viewer has authenticated
	function onLinkedInAuth() {	
		IN.API.Profile("me").fields("id","first-name", "last-name", "email-address", "location", "summary", "positions", "picture-url").result(displayProfiles);
	}

	// 2. Runs when the Profile() API call returns successfully
	function displayProfiles(profiles) {

		member = profiles.values[0];

		var firstName = member.firstName;
		var lastName = member.lastName;
		var linkedInEmailAddress = member.emailAddress;
		var locationInfo = member.location.name;
		var linkedInSummary = member.summary;
		var currentWorkInfo = member.positions.values[0].company.name;
		var currentJobTitle = member.positions.values[0].title;
		var userPhotoFromLinkedIn = member.pictureUrl;

		console.log(firstName)
		console.log(locationInfo)
		console.log(linkedInSummary)
		console.log(currentWorkInfo)
		console.log(currentJobTitle)
		console.log(userPhotoFromLinkedIn)
		// document.getElementById("profiles").innerHTML 

	}

}


