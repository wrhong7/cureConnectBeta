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
