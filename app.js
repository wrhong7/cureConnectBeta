// function triggerExpandMenuButton() {
// 	console.log("hello");
// 	$(".contentCenter").css({"opacity": "0"})
// }

function fromPg0ToPg1() {
	$(".nurseOnBoardingEmailCover").css("display", "none")
	$(".bottomStatusBar").css("display", "block")
	$(".nurseOnBoardingRegStep1").css("display", "block")
	$(".prevButton").css("display", "block")
	$(".nextButton").replaceWith(
		`<div class="nextButton cureConnectForNursePage1ToPage2" onclick="fromPg1ToPg2()">
			<div class="nextButtonArrow">
				>
			</div>
			<div class="nextButtonCaption">
				next
			</div>
		</div>
		`
	)
}

function fromPg1ToPg0() {
	$(".nurseOnBoardingEmailCover").css("display", "block")
	$(".bottomStatusBar").css("display", "none")
	$(".nurseOnBoardingRegStep1").css("display", "none")
	$(".prevButton").css("display", "none")
	$(".nextButton").replaceWith(
		`<div class="nextButton cureConnectForNursePage1ToPage2" onclick="fromPg0ToPg1()">
			<div class="nextButtonArrow">
				>
			</div>
			<div class="nextButtonCaption">
				next
			</div>
		</div>
		`
	)
}

function fromPg1ToPg2() {
	$(".nurseOnBoardingRegStep1").css("display", "none");
	$(".nurseOnBoardingRegStep2").css("display", "block");
	$(".bottomStatusBarStep2").css("background-color", "white");
	$(".bottomStatusBarStep2").css("border-radius", "10px");
	$(".bottomStatusBarStep2").css("color", "#10A7EA");
	$(".bottomStatusBarLowerLayer").text("2 mins remaining");
	$(".nextButton").replaceWith(
		`<div class="nextButton cureConnectForNursePage1ToPage2" onclick="fromPg2ToPg3()">
			<div class="nextButtonArrow">
				>
			</div>
			<div class="nextButtonCaption">
				next
			</div>
		</div>
		`
	);
	$(".prevButton").replaceWith(
		`<div class="prevButton cureConnectForNursePage1ToLandingPage" onclick="fromPg2ToPg1()">
			<div class="prevButtonArrow">
				<
			</div>
			<div class="prevButtonCaption">
				prev
			</div>
		</div>
		`
	);
	$(".prevButton").css("display", "block");

}

function fromPg2ToPg1() {
	$(".nurseOnBoardingRegStep1").css("display", "block");
	$(".nurseOnBoardingRegStep2").css("display", "none");
	$(".bottomStatusBarStep2").css("background-color", "#10A7EA");
	$(".bottomStatusBarStep2").css("color", "white");
	$(".bottomStatusBarLowerLayer").text("4 mins remaining");
	$(".nextButton").replaceWith(
		`<div class="nextButton cureConnectForNursePage1ToPage2" onclick="fromPg1ToPg2()">
			<div class="nextButtonArrow">
				>
			</div>
			<div class="nextButtonCaption">
				next
			</div>
		</div>
		`
	)
	$(".prevButton").replaceWith(
		`<div class="prevButton cureConnectForNursePage1ToLandingPage" onclick="fromPg1ToPg0()">
			<div class="prevButtonArrow">
				<
			</div>
			<div class="prevButtonCaption">
				prev
			</div>
		</div>
		`
	)
	$(".prevButton").css("display", "block")
}

function fromPg2ToPg3() {

}

function fromPg3ToPg2() {

}





var toggled = false

function toggleExpandMenuButton() {

	if (toggled == false ) {
		$(".contentCenter").css({"opacity": "0.1"})
		$(".contentCenterScrollDownBar").css({"display": "none"})
		$(".expandMenuSection").css({"display": "block"})
		toggled = true

	} else {
		$(".contentCenter").css({"opacity": "1"})
		$(".contentCenterScrollDownBar").css({"display": "block"})
		$(".expandMenuSection").css({"display": "none"})
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
