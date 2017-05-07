function sendChatContentToServer() {
  var textbox = $(".chatWindowInputBox").val();
  
  //emptying the chatbox content
  $(".chatWindowInputBox").empty();

  $(".chatWindowContent").append(
      `
      <div class="userSpeaks">
        ${textbox}
      </div>
      `
  );

  $(".chatWindowContent").animate({ scrollTop: $('.chatWindowContent').prop("scrollHeight")}, 1000);

  console.log(textbox);


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
  outputBoxHeight = 305 - (outputBoxHeight * 22);
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
        Hi there! This is Irem, what can I do for you today?
      </div>
      `
    )
  }, 2000)

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

$(document).ready(function() {

  // <!-- Questionnaire 1 Nurse Type -->
  $(".nurseTypeQuestion").select2({
    placeholder: "Nurse Type"
  });

  nurseTypes.forEach(function(element) {
    $(".nurseTypeQuestion").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  //<!-- Questionnaire 3 Department Experiences -->
  $(".deptExperiences").select2({
    placeholder: "Departments"
  });

  deptExperienceList.forEach(function(element) {
    $(".deptExperiences").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // <!-- Questionnaire 5 Part Time or Full Time -->
  $(".partTimeOrFullTime").select2({
    placeholder: "Employment Preference"
  });

  partOrFullTimeList.forEach(function(element) {
    $(".partTimeOrFullTime").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // <!-- Questionnaire 7 Desired shift -->
  $(".desiredShift").select2({
    placeholder: "Desired Shift"
  });

  desiredShiftList.forEach(function(element) {
    $(".desiredShift").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // <!-- Questionnaire 9 Drive/mission -->
  $(".driveMission").select2({
    placeholder: "I am passionate about"
  });

  driveMissionList.forEach(function(element) {
    $(".driveMission").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // <!-- Questionnaire 2 Nursing Degree-->
  $(".nurseDegree").select2({
    placeholder: "Degrees"
  });

  nursingDegreeList.forEach(function(element) {
    $(".nurseDegree").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  //      <!-- Questionnaire 4 Nursing Experience -->

  $(".nursingYrExperience").select2({
    placeholder: "Years of Professional Experience"
  });

  nursingYrExperienceList.forEach(function(element) {
    $(".nursingYrExperience").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  //<!-- Questionnaire 6 Desired compensation -->

  $(".desiredCompensation").select2({
    placeholder: "Desired Compensation"
  });

  desiredCompensationList.forEach(function(element) {
    $(".desiredCompensation").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  //<!-- Questionnaire 10 No List -->
  $(".noList").select2({
    placeholder: "Things I don't like"
  });

  noList.forEach(function(element) {
    $(".noList").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

});


