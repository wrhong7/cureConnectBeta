const providerTypes = [
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
];

$(document).ready(function() {

  $(document).ready(function() {
    $(".nurseTypeQuestion").select2({
      placeholder: "Nurse Type"
    });
  });

  providerTypes.forEach(function(element) {
    $(".nurseTypeQuestion").append(
      `
       <option value="${element}">${element}</option>
      `
    )
  })

});
