
function confirmSourcerInfo() {
  $(".sourcerLinkedInPulled").hide();
  $(".sourcerProfileConfirmContainer").hide();
}


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
            I see. It should not be a big problem. I am breifly <b>out of desk at the moment</b>, but I will respond to your email once I get back to my desk. <b>What is your name and email again?</b>
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


const nurseTypes = [
  "Registered Nurse",
  "Licensed practical nurse",
  "Clinical nurse specialist",
  "Nurse practitioner",
  "Nurse case manager",
  "Intensive Care Unit Registered Nurse",
  "Travel Registered Nurse",
  "Home care registered nurse",
  "Operating room nurse",
  "Staff nurse",
  "Emergency room registered nurse",
  "Labor & delivery registered nurse",
  "Medical/surgical registered nurse",
  "Per diem nurse",
  "Nurse supervisor",
  "Oncology registered nurse",
  "Critical care registered nurse",
  "Neonatal intensive care registered nurse",
  "Dialysis registered nurse",
  "Post-anesthesia care unit registered nurse",
  "Clinical Psychologists"
]

const deptExperienceList = [
  "Ambulatory Clinics",
  "Apheresis",
  "Burn Unit",
  "Cancer Center",
  "Critical Care Unit",
  "Emergency Dept",
  "Gastrointestinal",
  "Intensive Care Unit (ICU)",
  "Intermediate Care Unit (IMU)",
  "Medical-Surgical Units",
  "Neonatal Intensive Care Unit (NICU)",
  "Nursing Education, Development and Research",
  "Operating Rooms",
  "Perioperative Anaesthetic Care Unit (PACU)",
  "Progressive Care Unit (PCU)",
  "Professional Service Nursing",
  "Psychiatry",
  "Shiley Eye Institute",
  "Surgical Intensive Care Unit (SICU)",
  "Sulpizio Cardiovascular Center",
  "Telemetry",
  "Transplant nursing",
  "Women's Services"
]

const partOrFullTimeList = [
  "Long Term",
  "Short Term",
  "5-10 hr per week",
  "10-20 hr per week",
  "20-30 hr per week",
  "30-40 hr per week",
  "40-50 hr per week",
  "50+ hr per week",
]

const desiredShiftList = [
  "Day", 
  "Night",
  "Weekday",
  "Weekend"
]

const driveMissionList = [
  "Better Hours",
  "Flexibility",
  "Less Workload",
  "Non-profit",
  "Research",
  "Academia",
  "Minority Health",
  "Underserved Health",
  "Women's Health",
  "Veterans",
  "Children's Health",
  "School Nurse",
  "Social Cause",
  "Municipalities",
  "Mental Health"
]

const nursingDegreeList = [
  "Associates, ASN",
  "Bachelors, BSN",
  "Masters, MSN, Clinical Nurse Leader, CNL",
  "Masters, MSN, School Nursing",
  "Masters, MSN, Nurse Educator",
  "Masters, MSN, Certified Nurse Anesthetist, CRNA",
  "Masters, MSN, Clinical Nurse Specialist, CNS",
  "Masters, MSN, Certified Nurse Midwife, CNM",
  "Masters, MSN, Nurse Practitioner, NP",
  "Doctor of Nursing, ND",
  "Doctor of Nursing Practice, DNP",
  "Doctor of Nursing Science, DNSc",
  "Doctor of Nursing Philosophy, PhD"
]

const nursingYrExperienceList = [
  "0-1 Year",
  "1-2 Years",
  "2-5 Years",
  "5-10 Years",
  "10-15 Years",
  "15-20 Years",
  "20+ Years"
]

const desiredCompensationList = [
  "$20-25 per hr, $41.6k-52.0k per yr",
  "$25-30 per hr, $52.0k-62.4k per yr",
  "$30-35 per hr, $62.4k-72.8k per yr",
  "$35-40 per hr, $72.8k-83.2k per yr",
  "$40-45 per hr, $83.2k-93.6k per yr",
  "$45-50 per hr, $93.6k-104k per yr",
  "$50-55 per hr, $104k-114k per yr",
  "$55-60 per hr, $114k-125k per yr",
  "$60-65 per hr, $125k-135k per yr",
  "$65-70 per hr, $135k-146k per yr",
  "$70-75 per hr, $146k-156k per yr",
  "$75-80 per hr, $156k-166k per yr",
  "$80+ per hr, 166k+ per yr"
]

const noList = [
  "Weekend Shift",
  "Friday Shift",
  "Night Shift",
  "On Call",
  "Emergency Unit Duty",
  "Travel",
  "Unsteady Schedule",
  "High Patient Load",
  "Community Clinic"
]

const languageList = [
    "Chinese, Mandarin",
    "Chinese, Cantonese",
    "Chinese, Fujianese",
    "Chinese, Shanghainese",
    "Spanish",
    "Hindi",
    "Urdu",
    "Arabic",
    "Portugese",
    "Bengali",
    "Russian",
    "Japanese",
    "Punjabi",
    "German",
    "Malay",
    "Vietnamese",
    "Korean",
    "French",
    "Tamil",
    "Urdu",
    "Turkish",
    "Italian",
    "Thai",
    "Gujarati",
    "Persian",
    "Polish",
    "Romanian",
    "Dutch",
    "Serbo-Croatian",
    "Nepali",
    "Hungarian",
    "Greek",
    "Kazkh"
  ]

const sourcerRecruitingRegion = [
  "US Nationwide", "Non-US", "Alabama", "Birmingham, Alabama Area", "Alaska", "Anchorage, Alaska Area", "Arizona",
  "Phoenix, Arizona  Area", "Tucson, Arizona Area", "Arkansas","Little Rock, Arkansas Area", 
  "California", "Fresno, California Area", "Greater Los Angeles Area", "Greater San Diego Area", 
  "Orange County, California Area", "Sacramento, California Area", "Salinas, California Area", 
  "San Francisco Bay Area", "Santa Barbara, California Area", "Stockton, California Area", "Colorado", 
  "Colorado Springs, Colorado Area", "Fort Collins, Colorado Area", "Greater Denver Area", "Connecticut", 
  "Hartford, Connecticut Area", "New London orwich, Connecticut Area", "Delaware", "District Of Columbia", 
  "Washington D.C. Metro Area", "Florida", "Daytona Beach, Florida Area","Fort Myers, Florida Area", 
  "Fort Pierce, Florida Area", "Gainesville, Florida Area", "Lakeland, Florida Area",
  "Melbourne, Florida Area", "Miami/Fort Lauderdale Area", "Orlando, Florida Area", "Sarasota, Florida Area",
  "Tampa/St. Petersburg, Florida Area", "West Palm Beach, Florida Area", "Georgia", "Greater Atlanta Area",
  "Jacksonville, Florida Area", "Tallahassee, Florida Area", "Hawaii", "Idaho", "Boise, Idaho Area", "Illinois", 
  "Greater Chicago Area", "Peoria, Illinois Area", "Urbana-Champaign, Illinois Area", "Indiana", 
  "Evansville, Indiana Area", "Indianapolis, Indiana Area", "Iowa", "Kansas", "Wichita, Kansas Area", 
  "Kentucky", "Lexington, Kentucky Area", "Louisville, Kentucky Area", "Louisiana", "Maine", "Portland, Maine Area", 
  "Maryland", "Baltimore, Maryland Area", "Massachusetts", "Greater Boston Area", "Michigan", 
  "Fort Wayne, Indiana Area", "Greater Detroit Area", "Greater Grand Rapids, Michigan Area", 
  "Kalamazoo, Michigan Area", "Lansing, Michigan Area", "Saginaw, Michigan Area", "Minnesota", 
  "Greater Minneapolis-St. Paul Area", "Mississippi", "Baton Rouge, Louisiana Area", "Greater New Orleans Area", 
  "Jackson, Mississippi Area", "Mobile, Alabama Area", "Missouri", "Columbia, Missouri Area", "Davenport, Iowa Area",
  "Des Moines, Iowa Area", "Fayetteville, Arkansas Area", "Greater St. Louis Area", "Kansas City, Missouri Area",  
  "Springfield, Missouri Area", "Montana", "Nebraska", "Greater Omaha Area", "Lincoln, Nebraska Area", "Nevada", 
  "Las Vegas, Nevada Area", "Reno, Nevada Area", "New Hampshire", "New Jersey", "New Mexico", 
  "Albuquerque, New Mexico Area", "New York", "Albany, New York Area", "Buffalo iagara, New York Area", 
  "Greater New York City Area", "Rochester, New York Area", "Syracuse, New York Area", "North Carolina", 
  "Charlotte, North Carolina Area", "Raleigh-Durham, North Carolina Area", "Wilmington, North Carolina Area", 
  "North Dakota", "Ohio", "Cincinnati Area", "Cleveland/Akron, Ohio Area", "Columbus, Ohio Area", "Dayton, Ohio Area", 
  "Toledo, Ohio Area", "Oklahoma", "Oklahoma City, Oklahoma Area", "Tulsa, Oklahoma Area", "Oregon", "Eugene, Oregon Area", 
  "Portland, Oregon Area", "Pennsylvania", "Allentown, Pennsylvania Area", "Greater Philadelphia Area", "Greater Pittsburgh Area", 
  "Harrisburg, Pennsylvania Area", "Ithaca, New York Area", "Lancaster, Pennsylvania Area", 
  "Scranton, Pennsylvania Area", "Rhode Island", "Providence, Rhode Island Area", "South Carolina", 
  "Augusta, Georgia Area", "Charleston, South Carolina Area", "Columbia, South Carolina Area", 
  "Greenville, South Carolina Area", "Savannah, Georgia Area", "South Dakota", "Sioux Falls, South Dakota Area",
  "Tennessee", "Asheville, North Carolina Area", "Chattanooga, Tennessee Area", "Greater Memphis Area",
  "Greater Nashville Area", "Huntsville, Alabama Area" , "Johnson City, Tennessee Area", "Knoxville, Tennessee Area", 
  "Texas", "Austin, Texas Area", "Dallas/Fort Worth Area", "El Paso, Texas Area", "Houston, Texas Area",
  "San Antonio, Texas Area", "Utah", "Greater Salt Lake City Area", "Provo, Utah Area", "Vermont", 
  "Burlington, Vermont Area", "Springfield, Massachusetts Area", "Virginia", "Charlottesville, Virginia Area", 
  "Greensboro/Winston-Salem, North Carolina Area", "Norfolk, Virginia Area", "Richmond, Virginia Area",
  "Roanoke, Virginia Area", "Washington", "Greater Seattle Area", "Spokane, Washington Area",
  "West Virginia", "Wisconsin", "Greater Milwaukee Area", "Green Bay, Wisconsin Area", "Madison, Wisconsin Area", 
  "Oshkosh, Wisconsin Area", "Rockford, Illinois Area", "Wyoming"
];

const sourcerRecruitingSpecialty = [
  "General Recruiter",
  "Nurse",
  "Nurse Practitioner",
  "Part Time",
  "Per Diem",
  "Full Time",
  "Temporary Contract",
  "Ambulatory Clinics",
  "Apheresis",
  "Burn Unit",
  "Cancer Center",
  "Critical Care Unit",
  "Emergency Dept",
  "Gastrointestinal",
  "Intensive Care Unit (ICU)",
  "Intermediate Care Unit (IMU)",
  "Medical-Surgical Units",
  "Neonatal Intensive Care Unit (NICU)",
  "Nursing Education, Development and Research",
  "Operating Rooms",
  "Perioperative Anaesthetic Care Unit (PACU)",
  "Progressive Care Unit (PCU)",
  "Professional Service Nursing",
  "Psychiatry",
  "Shiley Eye Institute",
  "Surgical Intensive Care Unit (SICU)",
  "Sulpizio Cardiovascular Center",
  "Telemetry",
  "Transplant nursing",
  "Women's Services"
];

$(document).ready(function() {

  $(".recruitingRegion").select2({
    placeholder: "Recruiting Regions"
  });

  sourcerRecruitingRegion.forEach(function(element) {
    $(".recruitingRegion").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  $(".recruitingSpecialty").select2({
    placeholder: "Recruiting Candidates"
  });

  sourcerRecruitingSpecialty.forEach(function(element) {
    $(".recruitingSpecialty").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // // <!-- Questionnaire 1 Nurse Type -->
  // $(".nurseTypeQuestion").select2({
  //   placeholder: "Nurse Type"
  // });

  // nurseTypes.forEach(function(element) {
  //   $(".nurseTypeQuestion").append(
  //     `
  //      <option value="${element}">${element}</option>
  //     `
  //   )
  // })

  // //<!-- Questionnaire 3 Department Experiences -->
  // $(".deptExperiences").select2({
  //   placeholder: "Departments"
  // });

  // deptExperienceList.forEach(function(element) {
  //   $(".deptExperiences").append(
  //     `
  //      <option value="${element}">${element}</option>
  //     `
  //   )
  // })

  // // <!-- Questionnaire 5 Part Time or Full Time -->
  // $(".partTimeOrFullTime").select2({
  //   placeholder: "Employment Preference"
  // });

  // partOrFullTimeList.forEach(function(element) {
  //   $(".partTimeOrFullTime").append(
  //     `
  //      <option value="${element}">${element}</option>
  //     `
  //   )
  // })

  // // <!-- Questionnaire 7 Desired shift -->
  // $(".desiredShift").select2({
  //   placeholder: "Desired Shift"
  // });

  // desiredShiftList.forEach(function(element) {
  //   $(".desiredShift").append(
  //     `
  //      <option value="${element}">${element}</option>
  //     `
  //   )
  // })

  // // <!-- Questionnaire 9 Drive/mission -->
  // $(".driveMission").select2({
  //   placeholder: "I am passionate about"
  // });

  // driveMissionList.forEach(function(element) {
  //   $(".driveMission").append(
  //     `
  //      <option value="${element}">${element}</option>
  //     `
  //   )
  // })

  // // <!-- Questionnaire 2 Nursing Degree-->
  // $(".nurseDegree").select2({
  //   placeholder: "Degrees"
  // });

  // nursingDegreeList.forEach(function(element) {
  //   $(".nurseDegree").append(
  //     `
  //      <option value="${element}">${element}</option>
  //     `
  //   )
  // })

  // //      <!-- Questionnaire 4 Nursing Experience -->

  // $(".nursingYrExperience").select2({
  //   placeholder: "Years of Professional Experience"
  // });

  // nursingYrExperienceList.forEach(function(element) {
  //   $(".nursingYrExperience").append(
  //     `
  //      <option value="${element}">${element}</option>
  //     `
  //   )
  // })

  // //<!-- Questionnaire 6 Desired compensation -->

  // $(".desiredCompensation").select2({
  //   placeholder: "Desired Compensation"
  // });

  // desiredCompensationList.forEach(function(element) {
  //   $(".desiredCompensation").append(
  //     `
  //      <option value="${element}">${element}</option>
  //     `
  //   )
  // })

  // //<!-- Questionnaire 10 No List -->
  // $(".noList").select2({
  //   placeholder: "Things I don't like"
  // });

  // noList.forEach(function(element) {
  //   $(".noList").append(
  //     `
  //      <option value="${element}">${element}</option>
  //     `
  //   )
  // })

});


