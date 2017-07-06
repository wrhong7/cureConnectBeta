// 2. Runs when the JavaScript framework is loaded
function onLinkedInLoad() {
	IN.Event.on(IN, "auth", onLinkedInAuth);
	//we are injecting artificial codes here to change the signin with linkedin Button
	$(".IN-widget").css('cssText', 'width: 100%; height: 100%');
	$('span[id*="-logo"]').css('cssText', 'display: none !important;')
	$('span[id*="-title"]').css('cssText', 'padding: 0 !important; border: none !important')
	$('span[id*="-title-text"]').css('cssText', 'background-color: #10A7EA !important; border: #10A7EA !important; font-size: 20px !important; font-weight: 200 !important; font-family: Montserrat, sans-serif !important;')
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

	var userInfoArray = {};

	userInfoArray.firstName = firstName;
	userInfoArray.lastName = lastName;
	userInfoArray.linkedInEmailAddress = linkedInEmailAddress;
	userInfoArray.locationInfo = locationInfo;
	userInfoArray.linkedInSummary = linkedInSummary;
	userInfoArray.currentWorkInfo = currentWorkInfo;
	userInfoArray.currentJobTitle = currentJobTitle;
	userInfoArray.userPhotoFromLinkedIn = userPhotoFromLinkedIn;

	// we are carrying these values from LinkedIn to the ver.html page through the local storage.
	// we are JSON stringifying since local storage holds everything in format of JSON

	localStorage.setItem("userLinkedInInfo", JSON.stringify(userInfoArray))

	window.location.href = "ver.html";
}





