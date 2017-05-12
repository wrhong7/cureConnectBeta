//1. Confirmation: if the number entered is a valid cellphone number.

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
 	return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function cellValidationSuccess() {
	$(".cellphoneServNotif").empty();
	$(".notificationGreen").css("margin-left", "40px;")
	$(".cellphoneServNotif").append(
		`<div class="codeSentNotification">
			<div class="notificationGreen">
				&#10004; The code has been sent to ${enteredCellNumber}.<br>Please check your phone.
			</div>
		</div>
		`
	);

	$(".cellDataEntryButton").empty();
	$(".cellDataEntryButton").css("background-color", "rgba(60, 242, 60, 0.5)")
	$(".cellDataEntryButton").append(
		"&#10004; Code Sent"
	)


	setTimeout(function() {
		$(".cellDataEntryContainer").empty();
		$(".cellDataEntryContainer").append(
			`
			<div class="containerUpperDeck">
				<input 
					class="codeDataEntry"
					placeholder="Enter code"
				>
				</input>
				<div 
					class="codeDataEntryButton"
					onclick="codeValidation()"
				>
					Enter Code
				</div>
			</div>
			<div class="containerLowerDeck">
				<div 
					class="resendButton"
					onclick="reSendValidationCode()"
				>
					Resend Code
				</div>
				<div 
					class="changePhoneNumberButton"
					onclick="changePhoneNumber()"
				>
					Change Phone Number
				</div>
			</div>
			`
		)
	}, 3000)
}

function cellValidationFailure() {
	$(".cellDataEntry").empty();
	$(".cellphoneServNotif").empty();

	if (enteredCellNumber == "") {
		$(".cellphoneServNotif").append(
			`<div class="codeSentNotification">
				Cellphone field is empty.
			</div>
			`
		)
	} else {
		$(".cellphoneServNotif").append(
			`<div class="codeSentNotification">
				${enteredCellNumber} is not a valid cellphone number.</br>Please check again and enter the phone number above.
			</div>
			`
		);
	}

}

var enteredCellNumber;
var cellValCode;

function sendValidationCode() {
	enteredCellNumber = $(".cellDataEntry").val();
	enteredCellNumber = replaceAll(enteredCellNumber, "-", "");
	enteredCellNumber = replaceAll(enteredCellNumber, ".", "");
	enteredCellNumber = replaceAll(enteredCellNumber, " ", "");
	cellValCode = "123EWQ";
	console.log(cellValCode);
	console.log(enteredCellNumber);

	if (enteredCellNumber[0] == "1" && enteredCellNumber.length == 11) {
		enteredCellNumber = `${enteredCellNumber[0]}-${enteredCellNumber.substring(1,4)}-${enteredCellNumber.substring(4,7)}-${enteredCellNumber.substring(7,11)}`
		cellValidationSuccess();
	}
	else if (enteredCellNumber.length == 10) {
		enteredCellNumber = `${enteredCellNumber.substring(0,3)}-${enteredCellNumber.substring(3,6)}-${enteredCellNumber.substring(6,10)}`
		cellValidationSuccess();
	}
	else {
		cellValidationFailure();
	}

}

function reSendValidationCode() {
	$(".resendButton").empty();
	$(".resendButton").append(
		"&#10004; Code Resent"
	);
	$(".resendButton").css("background-color", "rgba(60, 242, 60, 0.5)");
	console.log(enteredCellNumber);

}

function changePhoneNumber() {
	$(".cellDataEntryContainer").empty();
	$(".cellDataEntryContainer").append(
		`
		<div class="cellDataEntryContainer">
			<input 
				class="cellDataEntry"
				placeholder="Your cellpone number"
			>
			</input>
			<div 
				class="cellDataEntryButton"
				onclick="sendValidationCode()"
			>
				validate
			</div>
		</div>
		`
	)
}

// 2. confirmation if the validation code sent out is matching and accurate.

var userSubmittedCode;

function codeValidation() {

	userSubmittedCode = $(".codeDataEntry").val()

	if (userSubmittedCode == "123EWQ") {

		$(".verificationCover").append(
			`
			<div class="confirmVerificationButton">Confirm and<br>Look for Open Positions</div>
			`
		)

	}

}





