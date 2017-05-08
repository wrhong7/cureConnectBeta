var url = "https://hooks.slack.com/services/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";
var chatResponseBoxCounter = 1;

function sendChatContentToServer() {
  var textbox = $(".chatWindowInputBox").val();

  
  //here needs to have the slack update.


  //emptying the chatbox content
  $(".chatWindowInputBox").val("");

  $(".chatWindowContent").append(
      `
      <div class="userSpeaksContianer">
        <div class="userSpeaks">
          ${textbox}
        </div>
      </div>
      `
  );

  $(".chatWindowContent").animate({ scrollTop: $('.chatWindowContent').prop("scrollHeight")}, 1000);


  if (textbox.indexOf('@') > -1) {
    setTimeout(function(){
      if (chatResponseBoxCounter == 1) {
        $(".chatWindowContent").append(
          `
          <div class="cureConnectSpeaks">
            Got it. I am <b>briefly out of my office</b>, but I will help you ASAP. <b>What is something that we can help you with today?</b>
          </div>
          `
        )
      }
      chatResponseBoxCounter += 1
    }, 2000)
  }
  else {
    setTimeout(function(){
      if (chatResponseBoxCounter == 1) {
        $(".chatWindowContent").append(
          `
          <div class="cureConnectSpeaks">
            Good. The issue that you have should not be a big problem. I am breifly <b>out of desk at the moment</b>, but I will respond to your email once I get back to my desk. <b>What is your name and email again?</b>
          </div>
          `
        )
      }
      chatResponseBoxCounter += 1
    }, 2000)  
  }  

  $.ajax({
      data: 'payload=' + JSON.stringify({
          "text": textbox
      }),
      dataType: 'json',
      processData: false,
      type: 'POST',
      url: url
  });


}

function closeChatButton() {
  $(".chatLogoAddOn").css("animation", "chatButtonBlinking 2s infinite");
  $(".chatLogoAddOnCaption").css("display", "block");
  $(".chatImageContainer").css("display", "block");

  $(".chatWithCureConnectWindow").hide();
  $(".exitChatBoxButton").hide();

}

function chatOutputBoxSize(height) {
  console.log(height)
  var outputBoxHeight = Math.floor(height);
  console.log(outputBoxHeight)
  outputBoxHeight = 306 - (outputBoxHeight * 22);
  console.log(outputBoxHeight)
  var outputBoxHeightPX = outputBoxHeight + "px"
  $(".chatWindowContent").css("height", outputBoxHeightPX)
}

function chatWithCureConnect() {

  $(".chatLogoAddOn").css("animation", "none");
  $(".chatLogoAddOnCaption").hide();
  $(".chatImageContainer").hide();

  $(".chatWithCureConnectWindow").css("display", "block");
  $(".exitChatBoxButton").css("display", "block")


  setTimeout(function(){
    $(".chatWindowContent").append(
      `
      <div class="cureConnectSpeaks">
        Hi there! This is Irem.</br> Just in case I lose you,</br><b>what's your name and email</b>?
      </div>
      `
    )
  }, 1500)

}

