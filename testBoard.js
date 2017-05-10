const recruitingContractType = [
  "Full Time - W2",
  "Full Time - 1099",
  "Part Time - 1099"
]

const jobPostingExpiration = [
  "Expires in 1 week",
  "Expires in 2 weeks",
  "Expires in 3 weeks",
  "Expires in 4 weeks",
  "Expires in 5 weeks",
  "Expires in 6 weeks"
]

var user3422InstArray = [
  "NY Phil Institute-Main", 
  "NY Phil Institute-Uppe West Side Campus", 
  "NY Phil Institue-Westchester Urgent Care"
  //this needs to be shifted into a bunch of arrays in my opinion
]

function fetchInstitutionContent() {
  $(".recruiterContent").hide();
  $(".jobPostingContent").hide();
  $(".jobPostingBookmark").hide();
  $(".institutionContent").css("display", "block");
  $(".institutionBookmark").css("display", "block");
}

function fetchJobPostingContent() {
  $(".recruiterContent").hide();
  $(".institutionContent").hide();
  $(".institutionBookmark").hide();
  $(".jobPostingContent").css("display", "block");
  $(".jobPostingBookmark").css("display", "block");
}

function jobPostingContent() {

}

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

  $(".sourcerInfoCover").hide();

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

const nursingDegreeLicenseList = [
  "Licensed Practical Nurse - LPN",
  "Registered Nurse - RN",
  "Nurse Practitioner - NP",
  "Advanced Practice Registered Nurse - APRN",
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
  "US Nationwide", "Non-US",
  "Alabama, AL, Rural Area", "Birmingham, Alabama, AL Area", 
  "Alaska, AK, Rural Area", "Anchorage, Alaska AK Area", 
  "Arizona, AZ, Rural Area", "Phoenix, Arizona, AZ  Area", "Tucson, Arizona, AZ Area", 
  "Arkansas, AR, Rural Area", "Little Rock, Arkansas, AR Area", 
  "California, CA, Rural Area", "Fresno, California, CA Area", "Greater Los Angeles Area, LA", "Greater San Diego Area", "Orange County, California, CA Area", "Sacramento, California, CA Area", "Salinas, California, CA Area", 
  "San Francisco Bay Area", "Santa Barbara, California, CA Area", "Stockton, California, CA Area", 
  "Colorado, CO, Rural Area", "Colorado, CO Springs, Colorado, CO Area", "Fort Collins, Colorado, CO Area", "Greater Denver Area", 
  "Connecticut, CT, Rural Area", "Hartford, Connecticut, CT Area", "New London Norwich, Connecticut, CT Area", 
  "Delaware, DE", 
  "Washington D.C. Metro Area", 
  "Florida, FL, Rural Area", "Daytona Beach, Florida, FL Area","Fort Myers, Florida, FL Area", "Fort Pierce, Florida, FL Area", "Gainesville, Florida, FL Area", "Lakeland, Florida, FL Area",
  "Melbourne, Florida, FL Area", "Miami/Fort Lauderdale Area", "Orlando, Florida, FL Area", "Sarasota, Florida, FL Area",
  "Tampa/St. Petersburg, Florida, FL Area", "West Palm Beach, Florida, FL Area", 
  "Georgia, GA, Rural Area", "Greater Atlanta Area", "Jacksonville, Florida, FL Area", "Tallahassee, Florida, FL Area", 
  "Hawaii", 
  "Idaho, ID Rural Area", "Boise, Idaho, ID Area", 
  "Illinois, IL Rural Area", 
  "Greater Chicago Area", "Peoria, Illinois, IL Area", "Urbana-Champaign, Illinois, IL Area", 
  "Indiana, IN, Rural Area", "Evansville, Indiana, IN Area", "Indiana, INpolis, Indiana, IN Area", 
  "Iowa, IA, Rural Area", 
  "Kansas, KS, Rural Area", "Wichita, Kansas, KS Area", 
  "Kentucky, KY, Rural Area", "Lexington, Kentucky, KY Area", "Louisville, Kentucky, KY Area", "Louisiana, LA Rural Area", 
  "Maine, ME, Rural Area", "Portland, Maine, ME Area", 
  "Maryland, MD Rural Area", "Baltimore, Maryland, MD Area", 
  "Massachusetts, MA Rural Area", "Greater Boston Area", 
  "Michigan, MI, Rural Area", "Fort Wayne, Indiana, IN Area", "Greater Detroit Area", "Greater Grand Rapids, Michigan, MI Area", "Kalamazoo, Michigan, MI Area", "Lansing, Michigan, MI Area", "Saginaw, Michigan, MI Area", 
  "Minnesota, MN, Rural Area", "Greater Minneapolis-St. Paul Area", 
  "Mississippi, MS, Rural Area", "Baton Rouge, Louisiana, LA Area", "Greater New Orleans Area", 
  "Jackson, Mississippi, MS Area", "Mobile, Alabama, AL Area", "Missouri, MO, Rural Area", "Columbia, Missouri, MO Area", "Davenport, Iowa, IA Area",
  "Des Moines, Iowa, IA Area", "Fayetteville, Arkansas, AR Area", "Greater St. Louis Area", "Kansas, KS City, Missouri, MO Area",  
  "Springfield, Missouri, MO Area", 
  "Montana, MT, Rural Area", 
  "Nebraska, NE", "Greater Omaha Area", "Lincoln, Nebraska Area", "Nevada, NV, Rural Area", 
  "Las Vegas, Nevada, NV Area", "Reno, Nevada, NV Area", "New Hampshire, NH, Rural Area", "New Jersey, NJ, Rural Area", "New Mexico, NM, Rural Area", 
  "Albuquerque, New Mexico, NM Area", "New York, NY, Rural Area", "Albany, New York, NY Area", "Buffalo Niagara, New York, NY Area", 
  "Greater New York, NY City Area", "Rochester, New York, NY Area", "Syracuse, New York, NY Area", "North Carolina, NC, Rural Area", 
  "Charlotte, North Carolina, NC Area", "Raleigh-Durham, North Carolina, NC Area", "Wilmington, North Carolina, NC Area", 
  "North Dakota, ND, Rural Area", "Ohio, OH, Rural Area", "Cincinnati Area", "Cleveland/Akron, Ohio, OH Area", "Columbus, Ohio, OH Area", "Dayton, Ohio, OH Area", 
  "Toledo, Ohio, OH Area", "Oklahoma, OK, Rural Area", "Oklahoma, OK City, Oklahoma, OK Area", "Tulsa, Oklahoma, OK Area", "Oregon, OR, Rural Area", "Eugene, Oregon, OR Area", 
  "Portland, Oregon, OR Area", "Pennsylvania, PA, Rural Area", "Allentown, Pennsylvania, PA Area", "Greater Philadelphia Area", "Greater Pittsburgh Area", 
  "Harrisburg, Pennsylvania, PA Area", "Ithaca, New York, NY Area", "Lancaster, Pennsylvania, PA Area", 
  "Scranton, Pennsylvania, PA Area", "Rhode Island, RI, Rural Area", "Providence, Rhode Island Area", "South Carolina, SC, Rural Area", 
  "Augusta, Georgia, GA Area", "Charleston, South Carolina, SC Area", "Columbia, South Carolina, SC Area", 
  "Greenville, South Carolina, SC Area", "Savannah, Georgia, GA Area", "South Dakota, SD, Rural Area", "Sioux Falls, South Dakota Area",
  "Tennessee, TN, Rural Area", "Asheville, North Carolina, NC Area", "Chattanooga, Tennessee, TN Area", "Greater Memphis Area",
  "Greater Nashville Area", "Huntsville, Alabama, AL Area" , "Johnson City, Tennessee, TN Area", "Knoxville, Tennessee, TN Area", 
  "Texas, TX, Rural Area", "Austin, Texas, TX Area", "Dallas/Fort Worth Area", "El Paso, Texas, TX Area", "Houston, Texas, TX Area",
  "San Antonio, Texas, TX Area", "Utah, UT Rural Area", "Greater Salt Lake City Area", "Provo, Utah, UT Area", "Vermont, VT, Rural Area", 
  "Burlington, Vermont, VT Area", "Springfield, Massachusetts, MA Area", "Virginia, VA, Rural Area", "Charlottesville, Virginia, VA Area", 
  "Greensboro/Winston-Salem, North Carolina, NC Area", "Norfolk, Virginia, VA Area", "Richmond, Virginia, VA Area",
  "Roanoke, Virginia, VA Area", "Washington, WA Rural Area", "Greater Seattle Area", "Spokane, Washington Area",
  "West Virginia, WV, Rural Area", "Wisconsin, WI, Rural Area", "Greater Milwaukee Area", "Green Bay, Wisconsin, WI Area", "Madison, Wisconsin, WI Area", 
  "Oshkosh, Wisconsin, WI Area", "Rockford, Illinois, IL Area", "Wyoming, WY, Rural Area"
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

const nursingStateLicenseList = [
  "Nurse License Compact (NLC) Applicable", "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]

const benefitsList = [
  "Medical",
  "Prescription Drug Coverage",
  "Dental",
  "Vision",
  "Life Insurance",
  "Disabilty Insurance",
  "Pension Plan",
  "Tuition Reimbursement",
  "Child Care",
  "Fitness centers"
]

const workdays = [
  "Undecided-1 day per week",
  "Undecided-2 days per week",
  "Undecided-3 day per week",
  "Undecided-4 day per week",
  "Undecided-5 days per week",
  "Undecided-6 days per week",
  "Monday to Friday",
  "Saturday and Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

const shiftList = [
  "Dayshift",
  "Nightshift",
  "Undecided",
  "Alternating",
  "5-15 Hrs/Wk",
  "16-25 Hrs/Wk",
  "25-35 Hrs/Wk",
  "35-45 Hrs/Wk"
]

$(document).ready(function() {

  // user3422InstArray - jobPostInstNameField

  $(".jobPostInstNameField").select2({
    placeholder: "Institution Name"
  });

  user3422InstArray.forEach(function(element) {
    $(".jobPostInstNameField").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // nurseTypes - nurseTypeField

  $(".nurseTypeField").select2({
    placeholder: "Nurse Types"
  });

  nurseTypes.forEach(function(element) {
    $(".nurseTypeField").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // nursingDegreeLicenseList - degreesLicensesField

  $(".degreesLicensesField").select2({
    placeholder: "Degrees and Licenses"
  });

  nursingDegreeLicenseList.forEach(function(element) {
    $(".degreesLicensesField").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // desiredCompensationList - compInputField

  $(".compInputField").select2({
    placeholder: "Compensations"
  });

  desiredCompensationList.forEach(function(element) {
    $(".compInputField").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // workdays - workdayInput

  $(".workdayInput").select2({
    placeholder: "Which days will candidate be working?"
  });

  workdays.forEach(function(element) {
    $(".workdayInput").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // nursingYrExperienceList - yrsOfExpField

  $(".yrsOfExpField").select2({
    placeholder: "Years of Experience"
  });

  nursingYrExperienceList.forEach(function(element) {
    $(".yrsOfExpField").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // nursingStateLicenseList - stateLicField

  $(".stateLicField").select2({
    placeholder: "Contract Type"
  });

  nursingStateLicenseList.forEach(function(element) {
    $(".stateLicField").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // benefitsList - benefitsField

  $(".benefitsField").select2({
    placeholder: "Offering Benefits"
  });

  benefitsList.forEach(function(element) {
    $(".benefitsField").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  // shiftList - shiftHrsField

  $(".shiftHrsField").select2({
    placeholder: "Shift & Hours"
  });

  shiftList.forEach(function(element) {
    $(".shiftHrsField").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })


  $(".recruitingContractType").select2({
    placeholder: "Contract Type"
  });

  recruitingContractType.forEach(function(element) {
    $(".recruitingContractType").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

  $(".jobPostingExpiration").select2({
    placeholder: "Posting Expires in"
  });

  jobPostingExpiration.forEach(function(element) {
    $(".jobPostingExpiration").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })









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
