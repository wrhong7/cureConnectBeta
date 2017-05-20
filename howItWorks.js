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