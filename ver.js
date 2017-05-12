function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function cellValidationSuccess() {
	$(".cellphoneServNotif").empty();
	$(".cellphoneServNotif").append(
		`<div class="codeSentNotification">
			Validation code has been sent to ${enteredCellNumber} Please enter the code.
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
			<input 
				class="codeDataEntry"
				placeholder="Enter code"
			>
			</input>
			<div 
				class="codeDataEntryButton"
				onclick="sendValidationCode()"
			>
				Enter Code
			</div>
			<div 
				class="codeDataEntryButton"
				onclick="sendValidationCode()"
			>
				Resend
			</div>
			`
		)
	}, 5000)
}

function cellValidationFailure() {
	$(".cellDataEntry").empty();
	$(".cellphoneServNotif").empty();
	$(".cellphoneServNotif").append(
		`<div class="codeSentNotification">
			${enteredCellNumber} is not a valid cellphone number.</br>Please check again and enter the phone number above.
		</div>
		`
	);
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


