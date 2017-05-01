// function triggerExpandMenuButton() {
// 	console.log("hello");
// 	$(".contentCenter").css({"opacity": "0"})
// }

//these functions are used for the user to trigger email entry filed prior to they are moving towards the landing page.

function toNurseRegistration() {
	$(".contentCenterButtonsCover").css("display", "none");
	$(".nurseOnBoardingEmailCover").css("display", "block");
}

function toRecruiterRegisteration() {

}

function toSignInPage() {

}

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

function toggleExpandMenuButton(stage) {

	if (stage = 0) {
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

	if (stage = 1) {
		if (toggled == false ) {
			$(".nurseOnBoardingEmailCover").css({"opacity": "0.1"})
			$(".expandMenuSection").css({"display": "block"})
			toggled = true

		} else {
			$(".nurseOnBoardingEmailCover").css({"opacity": "1"})
			$(".expandMenuSection").css({"display": "none"})
			toggled = false
		}
	}
}

$(document).ready(function() {

	setTimeout(function() {
		$(".goToMainpageButtonDesc").replaceWith("go to cureConnect")
	}, 4000)

	setTimeout(function() {
		$(".demoClinicMatching").append(".")
	}, 1000)

	setTimeout(function() {
		$(".demoClinicMatching").append(".")
	}, 2000)

	setTimeout(function() {
		$(".demoClinicMatching").append(".")
	}, 3000)

	setTimeout(function() {
		$(".demoClinicMatching").css("display", "none")
		$(".demoClinicTitle").css("display", "block")
		$(".demoClinicPreferences").css("display", "block")
	}, 4000)

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
				`Build your profile in five minutes`
			)
		}, function () {
			$(".demoAdvantageMsgDisplay").empty()
		}
	)

	$("#lessPprWrk").hover(
		function() {
			$(".demoAdvantageMsgDisplay").empty()
			$(".demoAdvantageMsgDisplay").append(
				`Apply to jobs with one click`
			)
		}, function () {
			$(".demoAdvantageMsgDisplay").empty()
		}
	)

	$("#appTracking").hover(
		function() {
			$(".demoAdvantageMsgDisplay").empty()
			$(".demoAdvantageMsgDisplay").append(
				`Track your application status`
			)
		}, function () {
			$(".demoAdvantageMsgDisplay").empty()
		}
	)

	$("#transparentProcess").hover(
		function() {
			$(".demoAdvantageMsgDisplay").empty()
			$(".demoAdvantageMsgDisplay").append(
				`Transparent hours, package, patient type & ratio`
			)
		}, function () {
			$(".demoAdvantageMsgDisplay").empty()
		}
	)

	$("#personalityFocus").hover(
		function() {
			$(".demoAdvantageMsgDisplay").empty()
			$(".demoAdvantageMsgDisplay").append(
				`Enjoy working in your own schedule`
			)
		}, function () {
			$(".demoAdvantageMsgDisplay").empty()
		}
	)

    $("#slider > div:gt(0)").hide();
    $("#slider").height($("#slider > div > img").height());
    
	setTimeout(function() {
		setInterval(function () {
	        $('#slider > div:first')
	          .fadeOut(1000)
	          .next()
	          .fadeIn(1000)
	          .end()
	          .appendTo('#slider');
	    }, 4000);
	}, 4000);



});
