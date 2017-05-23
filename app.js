// function triggerExpandMenuButton() {
// 	console.log("hello");
// 	$(".contentCenter").css({"opacity": "0"})
// }

//these functions are used for the user to trigger email entry filed prior to they are moving towards the landing page.


var userEmail;

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function confirmAndPassEmailAddress() {
	userEmail = $(".nurseOnBoardingEmailDirectionEntryField").val()
	if (validateEmail(userEmail) == true ) {
		window.location.href='cureConnectForNurses.html'
		localStorage["userEnteredEmail"] = userEmail;
	} else {
		$(".nurseOnBoardingEmailDirectionLowerLayer").replaceWith("Please enter a valid email.")
	}
}


function toNurseRegistration() {
	$(".contentCenterButtonsCover").css("display", "none");
	$(".nurseOnBoardingEmailCover").css("display", "block");
}

function toRecruiterRegisteration() {
	$(".contentCenterButtonsCover").css("display", "none");
	$(".firstEmailEntryHeader").empty()
	$(".firstEmailEntryHeader").append(
		`I am a Nurse Recruiter`
	)
	$(".nurseOnBoardingEmailCover").css("display", "block");
}

function toSignInPage() {
	//this will directly force them to move to step 1
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
			$(".nurseOnBoardingRegStep1").css("opacity", "0.7");
			$(".expandMenuSection").css({"display": "block"})
			toggled = true

		} else {
			$(".nurseOnBoardingEmailCover").css({"opacity": "1"})
			$(".nurseOnBoardingRegStep1").css("opacity", "1");
			$(".expandMenuSection").css({"display": "none"})
			toggled = false
		}
	}
}

$(document).ready(function() {

	$(".introForNursesButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".indexIntroForNurses").offset().top},
        'slow');
	});

	$(".introForHospitalsButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".indexIntroForHospitalSection").offset().top},
        'slow');
	});

	$(".nurseApproachButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".indexIntroForNurses").offset().top},
        'slow');
	});

	$(".hospitalApproachButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".indexIntroForHospitalSection").offset().top},
        'slow');
	});

	$(".nurseHowItWorksButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".illustrationCover").offset().top},
        'slow');
	});

	$(".hospitalHowItWorksButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".illustrationCover").offset().top},
        'slow');
	});





	$(".forNursesButton").hover(function() {
		$(".nurseButtonExpansion").css("display", "block");
	}, function() {
		$(".nurseButtonExpansion").css("display", "none");
	})

	$(".forHospitalButton").hover(function() {
		$(".hospitalButtonExpansion").css("display", "block");
	}, function() {
		$(".hospitalButtonExpansion").css("display", "none");
	})

	setTimeout(function() {
		$(".goToMainpageButtonDesc").replaceWith("start")
	}, 4000)

	setTimeout(function() {
		$(".demoClinic").replaceWith(
			`
			<div class="demoClinic">
				<div class="demoClinicTitle">
					<div class="demoClinicTitleLeft">
						<img class="demoClinicTitleComponent demoClinicIcon" src="imageAsset/hospitalLogoOrange.png" />
					</div>
					<div class="demoClinicTitleRight">
						<div class="demoClinicTitleComponent demoClinicName">Queens Regional</div>
						<div class="demoClnicLowerLevel">
							<div class="demoClinicTitleComponent demoClinicDegrees">ICU, 2+ Yr Exp</div>
							<div class="demoClinicTitleComponent demoClinicJurisdiction">NY Lic</div>
						</div>
					</div>
				</div>
				<div class="demoClinicPreferences">
					<div class="demoClinicPayContianer">
						<img class="demoClinicPayIcon" src="/imageAsset/payIconOrange.png" />
						<div class="demoClinicPayAmount">$55/hr</div>
					</div>
					<div class="demoClinicCalContainer">
						<img class="demoClinicCal demoClinicCalIcon" src="/imageAsset/calendarOrange.png" />
						<div class="demoClinicCal demoClinicCalDay">F</div>
					</div>
					<div class="demoClinicDayNightContainer">
						<img class="demoClinicDayNightIcon" src="/imageAsset/dayNightOrange.png" />
						<div class="demoClinicDayNightText">8AM-8PM</div>
					</div>
					<div class="demoClinicLocationContainer">
						<img class="demoClinicLocationIcon" src="/imageAsset/location.png" />
						<div class="demoClinicLocationText">Queens, NY</div>
					</div>
				</div>
			</div>
			`
		)
	}, 2000)

	setTimeout(function() {
		$(".demoClinic").replaceWith(
			`
			<div class="demoClinic">
				<div class="demoClinicTitle">
					<div class="demoClinicTitleLeft">
						<img class="demoClinicTitleComponent demoClinicIcon" src="imageAsset/hospitalLogoOrange.png" />
					</div>
					<div class="demoClinicTitleRight">
						<div class="demoClinicTitleComponent demoClinicName">Anna Baldwin, MD</div>
						<div class="demoClnicLowerLevel">
							<div class="demoClinicTitleComponent demoClinicDegrees">Assist, 1+ Yr Exp</div>
							<div class="demoClinicTitleComponent demoClinicJurisdiction">NJ Lic</div>
						</div>
					</div>
				</div>
				<div class="demoClinicPreferences">
					<div class="demoClinicPayContianer">
						<img class="demoClinicPayIcon" src="/imageAsset/payIconOrange.png" />
						<div class="demoClinicPayAmount">$50/hr</div>
					</div>
					<div class="demoClinicCalContainer">
						<img class="demoClinicCal demoClinicCalIcon" src="/imageAsset/calendarOrange.png" />
						<div class="demoClinicCal demoClinicCalDay">Th</div>
					</div>
					<div class="demoClinicDayNightContainer">
						<img class="demoClinicDayNightIcon" src="/imageAsset/dayNightOrange.png" />
						<div class="demoClinicDayNightText">9AM-6PM</div>
					</div>
					<div class="demoClinicLocationContainer">
						<img class="demoClinicLocationIcon" src="/imageAsset/location.png" />
						<div class="demoClinicLocationText">Newport, NJ</div>
					</div>
				</div>
			</div>
			`
		)
	}, 4000)

	setTimeout(function() {
		$(".demoClinic").replaceWith(
			`
			<div class="demoClinic">
				<div class="demoClinicTitle">
					<div class="demoClinicTitleLeft">
						<img class="demoClinicTitleComponent demoClinicIcon" src="imageAsset/hospitalLogoOrange.png" />
					</div>
					<div class="demoClinicTitleRight">
						<div class="demoClinicTitleComponent demoClinicName">LBJ Memorial Hospital</div>
						<div class="demoClnicLowerLevel">
							<div class="demoClinicTitleComponent demoClinicDegrees">ICU, 5+ Yr Exp</div>
							<div class="demoClinicTitleComponent demoClinicJurisdiction">NY Lic</div>
						</div>
					</div>
				</div>
				<div class="demoClinicPreferences">
					<div class="demoClinicPayContianer">
						<img class="demoClinicPayIcon" src="/imageAsset/payIconOrange.png" />
						<div class="demoClinicPayAmount">$70/hr</div>
					</div>
					<div class="demoClinicCalContainer">
						<img class="demoClinicCal demoClinicCalIcon" src="/imageAsset/calendarOrange.png" />
						<div class="demoClinicCal demoClinicCalDay">F</div>
					</div>
					<div class="demoClinicDayNightContainer">
						<img class="demoClinicDayNightIcon" src="/imageAsset/dayNightOrange.png" />
						<div class="demoClinicDayNightText">9AM-9PM</div>
					</div>
					<div class="demoClinicLocationContainer">
						<img class="demoClinicLocationIcon" src="/imageAsset/location.png" />
						<div class="demoClinicLocationText">New York, NY</div>
					</div>
				</div>
			</div>
			`
		)
	}, 6000)

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
	    }, 3000);
	}, 4000);

});
