var nurseCustomSearchSetting = true

function nurseCustomSearchSwitch() {
	if (nurseCustomSearchSetting == true) {
		nurseCustomSearchSetting = false;
		$(".jobPostNumber").empty();
		$(".jobPostNumber").append(
			`
				Showing 130 results - your search is <b>not personalized</b> based on your resume <span class="turnOffCustomSearch" onclick="nurseCustomSearchSwitch()">turn on personalization</span> 
			`
		);
	} else {
		nurseCustomSearchSetting = true;
		$(".jobPostNumber").empty();
		$(".jobPostNumber").append(
			`
				Showing 29 results - your search is <b>personalized</b> based on your resume <span class="turnOffCustomSearch" onclick="nurseCustomSearchSwitch()">turn off personalization</span>
			`
		);	
	}
}

$(document).ready(function(){
    $(".moreSearchCriteriaButton").click(function(){
        $(".moreSearchCriteriaContainer").toggle(1000);
    });
});