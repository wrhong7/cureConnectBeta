// function triggerExpandMenuButton() {
// 	console.log("hello");
// 	$(".contentCenter").css({"opacity": "0"})
// }

var toggled = false

function toggleExpandMenuButton() {

	if (toggled == false ) {
		$(".contentCenter").css({"opacity": "0.1"})
		$(".contentCenterScrollDownBar").css({"display": "none"})
		$(".expandMenuSection").css({"display": "inline"})
		toggled = true

	} else {
		$(".contentCenter").css({"opacity": "1"})
		$(".contentCenterScrollDownBar").css({"display": "inline"})
		toggled = false
	}
		
}

$(document).ready(function() {

	$(".demoButton").hover(
		function() {
			$(".demoButtonGroup").empty()
			$(".demoButtonGroup").append(
				`<div class="goToMainpageButton" onclick="location.href='landingPage.html';" >Go to CureConnect</div>`
			)
		},	function() {
		}  
	)

	$("#demoAdvantagefiveMinsReg").hover(
		function() {
			$(".demoAdvantageMsgDisplay").empty()
			$(".demoAdvantageMsgDisplay").append(
				`Takes only five minutes to register`
			)
		}, function () {
			$(".demoAdvantageMsgDisplay").empty()
		}
	)

	$("#lessPprWrk").hover(
		function() {
			$(".demoAdvantageMsgDisplay").empty()
			$(".demoAdvantageMsgDisplay").append(
				`Reduced burdensome paperwork to only five minutes`
			)
		}, function () {
			$(".demoAdvantageMsgDisplay").empty()
		}
	)

	$("#appTracking").hover(
		function() {
			$(".demoAdvantageMsgDisplay").empty()
			$(".demoAdvantageMsgDisplay").append(
				`Know the real-time status of the application`
			)
		}, function () {
			$(".demoAdvantageMsgDisplay").empty()
		}
	)

	$("#transparentProcess").hover(
		function() {
			$(".demoAdvantageMsgDisplay").empty()
			$(".demoAdvantageMsgDisplay").append(
				`Know everything before you apply--hours, package, patient type & ratio etc`
			)
		}, function () {
			$(".demoAdvantageMsgDisplay").empty()
		}
	)

	$("#personalityFocus").hover(
		function() {
			$(".demoAdvantageMsgDisplay").empty()
			$(".demoAdvantageMsgDisplay").append(
				`We pay attention to what motivates you`
			)
		}, function () {
			$(".demoAdvantageMsgDisplay").empty()
		}
	)


});