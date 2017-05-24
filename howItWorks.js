<<<<<<< HEAD
var illustrationInProgress = false;

$(document).ready(function() {

	$(".howItWorksSection").hover(function() {
		if (illustrationInProgress === false) {
			
			illustrationInProgress = true;

			setTimeout(function(){
				$(".initialStage").hide();
				$(".firstStage").css("display", "block");
				$(".secondStage").hide();
				$(".thirdStage").hide();
				$(".fourthStage").hide();	
			}, 3000)

			setTimeout(function(){
				$(".initialStage").hide();
				$(".firstStage").hide();
				$(".secondStage").css("display", "block");
				$(".thirdStage").hide();
				$(".fourthStage").hide();
			}, 6000)

			setTimeout(function(){
				$(".initialStage").hide();
				$(".firstStage").hide();
				$(".secondStage").hide();
				$(".thirdStage").css("display", "block");
				$(".fourthStage").hide();
			}, 9000)

			setTimeout(function(){
				$(".initialStage").hide();
				$(".firstStage").hide();
				$(".secondStage").hide();
				$(".thirdStage").hide();
				$(".fourthStage").css("display", "block");
			}, 12000)	

			setTimeout(function() {
				illustrationInProgress = false
			},15000)
			
		}
	})
})
=======
$(document).ready(function() {



setTimeout(function(){
	$(".initialStage").hide();
	$(".firstStage").css("display", "block");
}, 3000)

setTimeout(function(){
	$(".firstStage").hide();
	$(".secondStage").css("display", "block");
}, 6000)

setTimeout(function(){
	$(".secondStage").hide();
	$(".thirdStage").css("display", "block");
}, 9000)

setTimeout(function(){
	$(".thirdStage").hide();
	$(".fourthStage").css("display", "block");
}, 12000)

// setTimeout(function(){
// 	$(".fourthStage").hide();
// 	$(".fifthStage").css("display", "block");
// }, 10000)

// setTimeout(function(){
// 	$(".fifthStage").hide();
// 	$(".sixthStage").css("display", "block");
// }, 12000)

// setTimeout(function(){
// 	$(".sixthStage").hide();
// 	$(".seventhStage").css("display", "block");
// }, 14000)

})
>>>>>>> b51d513ea780ae1652f8385110fe4b4501d0ef8f
