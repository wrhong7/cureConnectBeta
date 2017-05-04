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
  "Long Term Part Time",
  "Long Term Full Time",
  "Short Term Part Time",
  "Short Term Full Time",
  "Per Diem",
  "On Call",
  "Telehealth",
  "Traveling Nurse"
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



});
