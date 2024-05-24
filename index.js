var connectedArr = [];
var deleteName = [];
var currentIndex = 0;
var answerArr = [];
var cardValid = true;
let columnB = "";
let columnF = "";
let selectedValues = [];
let spsurveystartingtime = "";
startservey();
//hi
// Function to shuffle array in place (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// this function will going to be run onle once
function startservey() {
  currentIndex = 0;
  console.log("start servey is working here ");

  retrievedArray = JSON.parse(sessionStorage.getItem("route"));

  // Do something with the retrieved array
  console.log(
    "this is the retrived array============================================" +
      retrievedArray
  );
  connectedArr = [...retrievedArray];
  for (let i = 3; i < 12; i++) {
    updatePageNumbers(connectedArr[i], i);
  }
  displayImage();
}

// ++++++++++++++++++++++30-04-24++++++++++++++++++++++++++++++++++++++++

// Index to keep track of the current image

// Function to display the image at the current index
function displayImage() {
  if (deleteName.length != 0) {
    for (var i = 0; i < deleteName.length; i++) {
      document.getElementById(deleteName[i]).style.display = "none";
      //   document.getElementById("lastsubmission").style.display = "none";
      //   document.getElementById("formfirst").style.display = "none";
      //   document.getElementById("formsecond").style.display = "none";
      //   document.getElementById("formthird").style.display = "none";
    }
  }

  var imageId = connectedArr[currentIndex];

  if (imageId === "formfirst") {
    document.getElementById(imageId).style.display = "block";
    cardValid = true;
    deleteName.push(imageId);
  } else if (imageId === "formsecond") {
    document.getElementById(imageId).style.display = "block";
    deleteName.push(imageId);
    cardValid = true;
  } else if (imageId === "formthird") {
    deleteName.push(imageId);
    cardValid = true;
    document.getElementById(imageId).style.display = "block";
  } else if (imageId === "lastsubmission") {
    document.getElementById(imageId).style.display = "block";
    cardValid = true;
    deleteName.push(imageId);
  } else if (imageId === "spSurveyStarted") {
    document.getElementById(imageId).style.display = "block";
    cardValid = true;
    deleteName.push(imageId);
  } else {
    shuffleDivs(imageId);
    cardValid = false;
    deleteName.push(imageId);
    document.getElementById(imageId).style.display = "block";
  }
}

// Function to navigate to the next image
function saveAndNext() {
  // currentIndex = (currentIndex + 1) % connectedArr.length;
  var imageId = connectedArr[currentIndex];
  console.log(
    "this is the image id validation" + validateRadioGroupIncard(imageId)
  );

  if (validateRadioGroupIncard(imageId) !== "space") {
    currentIndex = currentIndex + 1;
    displayImage();
  } else {
    alert("Please choose atleast one option ");
  }
}

// Function to navigate to the previous image
function getBackLastDeletedId() {
  // currentIndex =
  //   (currentIndex - 1 + connectedArr.length) % connectedArr.length;
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    document.querySelector("form-third").style.display = "block";
  }
  displayImage();
}

// Function to get the image URL based on the ID
function getImageUrl(imageId) {
  // Assuming the images are stored in a folder named "images"
  return imageId; // Change the extension if needed
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function shuffleDivs(id) {
  const container = document.getElementById(id);
  const divs = Array.from(container.querySelectorAll(".row"));
  const containerDiv = container.querySelector(".container");
  const m1ZeroRow = container.querySelector(".m1-zero-row");
  const lab = container.querySelector(".label");

  // const divs = Array.from(container.querySelector(".allinone .row"));

  shuffleArray(divs);

  container.appendChild(m1ZeroRow);
  // Append shuffled divs back to container
  divs.forEach((div) => {
    container.appendChild(div);
  });
  container.appendChild(lab);

  container.appendChild(containerDiv);
}

function updatePageNumbers(id, count) {
  var pageno = count;
  const container = document.getElementById(id);
  const containerM1 = container.querySelector(".container");
  const pagenoElement = containerM1.querySelector(".pageno");
  // Append text to the existing content
  pagenoElement.textContent = "Page no : " + pageno + " of" + " 11";
}

function validateRadioGroupIncard(fieldName) {
  var activityr61 = "activity" + fieldName;
  var activityName = 'input[name="' + activityr61 + '"]:checked';
  var chakedorNot = document.querySelector(activityr61);
  // const r61walk = document.querySelector(activityName)
  //   ? document.querySelector(activityName).value
  //   : "space";

  if (fieldName === "formfirst") {
    r61walk = document.querySelector(activityName)
      ? document.querySelector(activityName).value
      : "nospace";
  } else if (fieldName === "formsecond") {
    r61walk = document.querySelector(activityName)
      ? document.querySelector(activityName).value
      : "nospace";
  } else if (fieldName === "formthird") {
    r61walk = document.querySelector(activityName)
      ? document.querySelector(activityName).value
      : "nospace";
  } else if (fieldName === "lastsubmission") {
    r61walk = document.querySelector(activityName)
      ? document.querySelector(activityName).value
      : "nospace";
  } else if (fieldName === "spSurveyStarted") {
    r61walk = document.querySelector(activityName)
      ? document.querySelector(activityName).value
      : "nospace";
  }

  // else if (fieldName === connectedArr[currentIn3ex]) {
  //   r61walk = document.querySelector(activityName)
  //     ? document.querySelector(activityName).value
  //     : "nospace";
  // }
  else {
    r61walk = document.querySelector(activityName)
      ? document.querySelector(activityName).value
      : "space";
  }

  return r61walk;
}

// function enableAndDisableBackButton(id) {
//   // var buttonId = "saveAndNext" + id;
//   // var inputID = "activity" + id;
//   // var nextButton = document.getElementById(buttonId);
//   // // var radioButton = document.querySelector(
//   // //   'input[name="' + inputID + '"]:checked'
//   // // ).value;
//   // console.log("thsi sis the id ??????????????????" + id);
//   // if (id === "m1") {
//   //   const m1walk = document.querySelector('input[name="activitym1"]:checked')
//   //     ? document.querySelector('input[name="activitym1"]:checked').value
//   //     : "";
//   //   var nextButtonm1 = document.getElementById("saveAndNextm1");
//   //   if (m1walk != "") {
//   //     nextButtonm1.disabled = false;
//   //   } else {
//   //     nextButtonm1.disabled = true;
//   //   }
//   // }

//   // if (id === "m2") {
//   //   const m2walk = document.querySelector('input[name="activitym2"]:checked')
//   //     ? document.querySelector('input[name="activitym2"]:checked').value
//   //     : "";
//   //   var nextButtonm2 = document.getElementById("saveAndNextm2");
//   //   if (m2walk != "") {
//   //     nextButtonm2.disabled = false;
//   //   } else {
//   //     nextButtonm2.disabled = true;
//   //   }
//   // }

//   // if (id === "m3") {
//   //   var m3walkser = document.querySelector('input[name="activitym3"]:checked')
//   //     ? document.querySelector('input[name="activitym3"]:checked').value
//   //     : "";
//   //   var nextButtonm3 = document.getElementById("saveAndNextm3");
//   //   if (m3walkser != "") {
//   //     nextButtonm3.disabled = false;
//   //   } else {
//   //     nextButtonm3.disabled = true;
//   //   }
//   // }

//   // if (id === "m4") {
//   //   var m4walkser = document.querySelector('input[name="activitym4"]:checked')
//   //     ? document.querySelector('input[name="activitym4"]:checked').value
//   //     : "";
//   //   var nextButtonm4 = document.getElementById("saveAndNextm4");
//   //   console.log("this is the m4 value truee or false" + m4walkser);
//   //   if (m4walkser != "") {
//   //     nextButtonm4.disabled = false;
//   //     const m4walks = document.querySelector(
//   //       'input[name="activitym4"]:checked'
//   //     ).value;
//   //     console.log("this is the value of m4" + m4walks);
//   //   } else {
//   //     nextButtonm4.disabled = true;
//   //   }
//   // }

//   // //  M2@SUB

//   // const m21walk = document.querySelector('input[name="activitym21"]:checked');

//   // const m22walk = document.querySelector('input[name="activitym22"]:checked');

//   // const m23walk = document.querySelector('input[name="activitym23"]:checked');

//   // const m24walk = document.querySelector('input[name="activitym24"]:checked');

//   // // M3@sub

//   // const m31walk = document.querySelector('input[name="activitym31"]:checked');

//   // const m32walk = document.querySelector('input[name="activitym32"]:checked');

//   // const m33walk = document.querySelector('input[name="activitym33"]:checked');

//   // const m34walk = document.querySelector('input[name="activitym34"]:checked');

//   // // M4@sub

//   // const m41walk = document.querySelector('input[name="activitym41"]:checked');

//   // const m42walk = document.querySelector('input[name="activitym42"]:checked');

//   // const m43walk = document.querySelector('input[name="activitym43"]:checked');

//   // const m44walk = document.querySelector('input[name="activitym44"]:checked');

//   // // M5@sub

//   // const m51walk = document.querySelector('input[name="activitym51"]:checked');

//   // const m52walk = document.querySelector('input[name="activitym52"]:checked');

//   // const m53walk = document.querySelector('input[name="activitym53"]:checked');

//   // const m54walk = document.querySelector('input[name="activitym54"]:checked');

//   // // M6@sub

//   // const m61walk = document.querySelector('input[name="activitym61"]:checked');

//   // const m62walk = document.querySelector('input[name="activitym62"]:checked');

//   // const m63walk = document.querySelector('input[name="activitym63"]:checked');

//   // const m64walk = document.querySelector('input[name="activitym64"]:checked');

//   // // R1@sub

//   // const r1walk = document.querySelector('input[name="activityr1"]:checked');

//   // const r2walk = document.querySelector('input[name="activityr2"]:checked');

//   // const r3walk = document.querySelector('input[name="activityr3"]:checked');

//   // const r4walk = document.querySelector('input[name="activityr4"]:checked');

//   // // R2@sub

//   // const r21walk = document.querySelector('input[name="activityr21"]:checked');

//   // const r22walk = document.querySelector('input[name="activityr22"]:checked');

//   // const r23walk = document.querySelector('input[name="activityr23"]:checked');

//   // const r24walk = document.querySelector('input[name="activityr24"]:checked');

//   // // R3@sub

//   // const r31walk = document.querySelector('input[name="activityr31"]:checked');

//   // const r32walk = document.querySelector('input[name="activityr32"]:checked');

//   // const r33walk = document.querySelector('input[name="activityr33"]:checked');

//   // const r34walk = document.querySelector('input[name="activityr34"]:checked');

//   // // R4@sub

//   // const r41walk = document.querySelector('input[name="activityr41"]:checked');

//   // const r42walk = document.querySelector('input[name="activityr42"]:checked');

//   // const r43walk = document.querySelector('input[name="activityr43"]:checked');

//   // const r44walk = document.querySelector('input[name="activityr44"]:checked');

//   // // R5@sub

//   // const r51walk = document.querySelector('input[name="activityr51"]:checked');

//   // const r52walk = document.querySelector('input[name="activityr52"]:checked');

//   // const r53walk = document.querySelector('input[name="activityr53"]:checked');

//   // const r54walk = document.querySelector('input[name="activityr54"]:checked');

//   // // R6@sub

//   // const r61walk = document.querySelector('input[name="activityr61"]:checked');

//   // const r62walk = document.querySelector('input[name="activityr62"]:checked');

//   // const r63walk = document.querySelector('input[name="activityr63"]:checked');

//   // const r64walk = document.querySelector('input[name="activityr64"]:checked')
//   //   ? document.querySelector('input[name="activityr64"]:checked').value
//   //   : "";
// }
// function toggleNextButtonVisibilitym1() {
//   enableAndDisableBackButton("m1");
// }
// function toggleNextButtonVisibilitym2() {
//   enableAndDisableBackButton("m2");
// }

// function toggleNextButtonVisibilitym3() {
//   enableAndDisableBackButton("m3");
// }
// function toggleNextButtonVisibilitym4() {
//   enableAndDisableBackButton("m4");
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

document.getElementById("next1").addEventListener("click", function () {
  let isValid = true;

  saveAndNext();
  const textInputField = document.getElementById("ename");
  const textInputContainer = document.getElementById("ename-field");
  const genderDiv = document.getElementById("gender-div");
  const ageDiv = document.getElementById("age-div");
  const incomeDiv = document.getElementById("income-div");
  const employmentDiv = document.getElementById("employment-div");
  const educationDiv = document.getElementById("education-div");
  const cityDiv = document.getElementById("city-div");

  // Validate text input
  if (textInputField.value.trim() === "") {
    textInputContainer.style.border = "2px solid red";
    isValid = false;
  } else {
    textInputContainer.style.border = "none";
  }

  // Validate gender div
  if (!isRadioChecked(genderDiv)) {
    genderDiv.style.border = "2px solid red";
    isValid = false;
  } else {
    genderDiv.style.border = "none";
  }

  // Validate age div
  if (!isRadioChecked(ageDiv)) {
    ageDiv.style.border = "2px solid red";
    isValid = false;
  } else {
    ageDiv.style.border = "none";
  }

  // Validate income div
  if (!isRadioChecked(incomeDiv)) {
    incomeDiv.style.border = "2px solid red";
    isValid = false;
  } else {
    incomeDiv.style.border = "none";
  }

  // Validate employment div
  if (!isRadioChecked(employmentDiv)) {
    employmentDiv.style.border = "2px solid red";
    isValid = false;
  } else {
    employmentDiv.style.border = "none";
  }

  // Validate education div
  if (!isRadioChecked(educationDiv)) {
    educationDiv.style.border = "2px solid red";
    isValid = false;
  } else {
    educationDiv.style.border = "none";
  }

  // Validate city div
  if (!isRadioChecked(cityDiv)) {
    cityDiv.style.border = "2px solid red";
    isValid = false;
  } else {
    cityDiv.style.border = "none";
  }

  if (isValid) {
    saveAndNext();
  } else {
    alert("Please fill all fields correctly.");
  }
});

function isRadioChecked(div) {
  const radioButtons = div.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return true;
    }
  }
  return false;
}

//this fuction is for the remove boarder of radio button
document
  .querySelectorAll('.gender-category input[type="radio"]')
  .forEach((radioButton) => {
    radioButton.addEventListener("click", function () {
      const div = this.closest(".gender-category");
      div.style.border = "none"; // Remove red border
    });
  });

//this function is the remove the boarder of text field
document.getElementById("ename").addEventListener("input", function () {
  const textInputContainer = document.getElementById("ename-field");

  if (this.value.trim() !== "") {
    textInputContainer.style.border = "none"; // Remove border
  } else {
    textInputContainer.style.border = "2px solid red"; // Add border if empty
  }
});

function resetFieldColors() {
  document.querySelectorAll('input[type="text"]').forEach((input) => {
    input.style.border = "";
    input.addEventListener("input", function () {
      input.style.border = "";
    });
  });

  document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.style.border = "";
    input.addEventListener("input", function () {
      input.style.border = "";
    });
  });
  document.querySelectorAll('input[type="time"]').forEach((input) => {
    input.style.border = "";
    input.addEventListener("input", function () {
      input.style.border = "";
    });
  });
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.parentElement.style.color = "";
    radio.addEventListener("change", function () {
      if (this.checked) {
        Array.from(
          document.querySelectorAll(`input[name="${this.name}"]`)
        ).forEach((radio) => {
          radio.parentElement.style.color = "";
        });
      }
    });
  });
}

function alertAndColor(message, fieldClass) {
  alert(message);
  const fields = document.querySelectorAll(`.${fieldClass}`);
  fields.forEach((field) => {
    field.style.color = "red";
  });
}

document.getElementById("back1").addEventListener("click", function () {
  getBackLastDeletedId();
});

entryBack.addEventListener("click", function () {
  window.location.href = "entry.html";
});

document.getElementById("OtherPurpose").addEventListener("change", function () {
  const otherGenderText = document.getElementById("OtherTravelPurpose");
  if (this.checked) {
    otherGenderText.classList.remove("hidden");
  } else {
    otherGenderText.classList.add("hidden");
  }
});

document.getElementById("OtherPartner").addEventListener("change", function () {
  const otherGenderText = document.getElementById("OtherTravelPartner");
  if (this.checked) {
    otherGenderText.classList.remove("hidden");
  } else {
    otherGenderText.classList.add("hidden");
  }
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++next button 2 second page+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

document.getElementById("next2").addEventListener("click", function () {
  let isValid = true;
  selectedValues = [];
  saveAndNext();
  let isValidPinNumber = true;

  // +++++++++++++++++++++++++++++ This is only for checkbox question++++++++++++++++++++++++++++

  const travelPurposeDiv = document.getElementById("travel-purpose-div");

  const checkboxes = document.querySelectorAll(
    'input[name="travel_purpose"]:checked'
  );

  let isCheckbox5 = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.value != "5") {
      selectedValues.push(checkbox.value);
    } else {
      isCheckbox5 = 1;
    }
  });

  const otherPurposeCheckbox = document.getElementById("OtherPurpose");
  const otherPurposeInput = document.getElementById("OtherTravelPurpose");

  if (otherPurposeCheckbox.checked && otherPurposeInput.value.trim() !== "") {
    selectedValues.push(otherPurposeInput.value.trim());
  } else if (
    otherPurposeCheckbox.checked &&
    otherPurposeInput.value.trim() === ""
  ) {
    isValid = false;
    travelPurposeDiv.style.border = "2px solid red";
    alert("Please specify 'Other' purpose.");
  }

  if (isCheckbox5 != 0 && otherPurposeInput.value.trim() !== "") {
    travelPurposeDiv.style.border = "";
  }

  document
    .querySelectorAll(`input[name="travel_purpose"]`)
    .forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (document.querySelector(`input[name="travel_purpose"]:checked`)) {
          travelPurposeDiv.style.border = "";
        }
      });
    });

  //+++++++++++++++++++++++++++++++++++++End checkbox +++++++++++++++++++++++++++++++

  const travelWorkDiv = document.getElementById("travel-work-div");
  const travelPartnerDiv = document.getElementById("travel-partner-div");

  const travelPurposeYesNoDiv = document.getElementById(
    "travel_purpose_yes_no-div"
  );
  const travel11Div = document.getElementById("travel-11-div");
  const travel11bdiv = document.getElementById("travel-11b-div");

  const for_b = document.getElementById("nmt");
  const paratransit = document.getElementById("paratransit");
  const personal = document.getElementById("personal");

  // Validate travel work div
  if (!isRadioChecked(travelWorkDiv)) {
    travelWorkDiv.style.border = "2px solid red";
    isValid = false;
  } else {
    travelWorkDiv.style.border = "none";
  }

  // Validate travel purpose div
  if (!isRadioChecked(travelPurposeYesNoDiv)) {
    travelPurposeYesNoDiv.style.border = "2px solid red";
    isValid = false;
  } else {
    travelPurposeYesNoDiv.style.border = "none";
  }

  let istravel_work = document.querySelector(
    'input[name="travel_work"]:checked'
  )
    ? document.querySelector('input[name="travel_work"]:checked').value
    : "";

  if (istravel_work != "") {
    if (istravel_work !== "1") {
      if (!document.querySelector(`input[name="travel_partner"]:checked`)) {
        travelPartnerDiv.style.border = "2px solid red";
        isValid = false;
      }
    } else {
      travelPartnerDiv.style.border = "none";
    }
  }

  let istravel_purpose = document.querySelector(
    'input[name="travel_purpose_yes_no"]:checked'
  )
    ? document.querySelector('input[name="travel_purpose_yes_no"]:checked')
        .value
    : "";

  if (istravel_purpose === "1") {
    const fieldCheckingFortravel = [
      "travel_purpose",
      "travel_11",
      "whith_whom",
    ];
    fieldCheckingFortravel.forEach((fieldName) => {
      if (!document.querySelector(`input[name="${fieldName}"]:checked`)) {
        if (fieldName === "travel_11") {
          isValid = false;
          travel11Div.style.border = "2px solid red";
        }
        if (fieldName === "whith_whom") {
          isValid = false;
          travel11bdiv.style.border = "2px solid red";
        }
        if (fieldName === "travel_purpose") {
          isValid = false;
          travelPurposeDiv.style.border = "2px solid red";
        }
      }
    });
  }

  const fieldsToCheck = ["cToe"];

  // Check if radio buttons are selected
  fieldsToCheck.forEach((fieldName) => {
    if (!document.querySelector(`input[name="${fieldName}"]:checked`)) {
      isValid = false;
      // Apply error styling or message for radio button groups
      const mainmilemode = document.getElementById("mainmilemode");
      mainmilemode.style.border = "2px solid red";
    } else {
      mainmilemode.style.border = "2px solid rgb(54, 153, 202)";
    }
  });

  const modeChoice = ["modeChoiceBtn", "modeChoiceBtnf"];
  for (var i = 0; i < modeChoice.length; i++) {
    if (
      document.getElementById(modeChoice[i]).getAttribute("data-value") === null
    ) {
      const btn = document.getElementById(modeChoice[i]);
      btn.style.border = "2px solid red";
      isValid = false;
    }
  }

  const textFields = [
    { name: "originType", minLength: 1 },
    { name: "origin_area", minLength: 1 },
    { name: "startingTime", minLength: 1 },
    { name: "duration", minLength: 1 },
    { name: "waitingTime", minLength: 1 },
    { name: "waitingTimeE", minLength: 1 },
    { name: "durationf", minLength: 1 },
    { name: "destinationType", minLength: 1 },
    { name: "destination_area", minLength: 1 },
    { name: "endTime", minLength: 1 },
    { name: "durationd", minLength: 1 },
  ];

  textFields.forEach((field) => {
    const inputElement = document.querySelector(`input[name="${field.name}"]`);
    if (inputElement.value.trim().length < field.minLength) {
      isValid = false;
      inputElement.style.border = "2px solid red"; // Apply error styling
    } else {
      inputElement.style.border = ""; // Remove error styling
    }
  });

  const pinCodeValidation = [
    { name: "destination_pin", minLength: 6 },
    { name: "origin_pin", minLength: 6 },
  ];
  pinCodeValidation.forEach((field) => {
    const inputElement = document.querySelector(`input[name="${field.name}"]`);
    if (inputElement.value.trim().length != field.minLength) {
      isValidPinNumber = false;
      inputElement.style.border = "2px solid red"; // Apply error styling
    } else {
      inputElement.style.border = ""; // Remove error styling
    }
  });

  //It automatically change the colour of text input button of image section
  const inputElements = document.querySelectorAll('input[type="text"]');
  inputElements.forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value.trim().length >= 1) {
        this.style.border = "";
      }
    });
  });

  const inputElementsnum = document.querySelectorAll('input[type="number"]');
  inputElementsnum.forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value.trim().length >= 1) {
        this.style.border = "";
      }
    });
  });
  const inputElementsnumtime = document.querySelectorAll('input[type="time"]');
  inputElementsnumtime.forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value.trim().length >= 1) {
        this.style.border = "";
      }
    });
  });

  const walkingOrBicycleQuestions = [
    "Q13s",
    "Q14s",
    "Q15s",
    "Q16s",
    "Q17s",
    "Q18s",
    "Q19s",
    "Q20s",
    "Q21s",
    "overall-Fb-nmt",
  ];
  const autoRelatedQuestions = [
    "Q22s",
    "Q23s",
    "Q24s",
    "Q25s",
    "Q26s",
    "Q27s",
    "Q28s",
    "overall-Fb-para",
  ];
  const personalVehicleQuestions = [
    "Q29s",
    "Q30s",
    "Q31s",
    "Q32s",
    "Q33s",
    "overall-Fb-personal",
  ];

  // Validate based on selected transportation mode
  if (columnB === "walk" || columnB === "bicycle") {
    isValid = validateRadioButtons(for_b, walkingOrBicycleQuestions) && isValid;
  } else if (
    columnB === "auto" ||
    columnB === "auto_app" ||
    columnB === "cab" ||
    columnB === "cab(app)" ||
    columnB === "2-Wheeler(app)"
  ) {
    isValid =
      validateRadioButtons(paratransit, autoRelatedQuestions) && isValid;
  } else if (
    columnB === "personal_car" ||
    columnB === "personal_2-wheeler" ||
    columnB === "drop-off"
  ) {
    isValid =
      validateRadioButtons(personal, personalVehicleQuestions) && isValid;
  }
  const fnmt = document.getElementById("fnmt");
  const fparatransit = document.getElementById("fparatransit");
  const fpersonal = document.getElementById("fpersonal");
  const walkBicycleQuestionsF = [
    "fQ13s",
    "fQ14s",
    "fQ15s",
    "fQ16s",
    "fQ17s",
    "fQ18s",
    "fQ19s",
    "fQ20s",
    "fQ21s",
    "overall-Ff-nmt",
  ];
  const autoRelatedQuestionsF = [
    "fQ22s",
    "fQ23s",
    "fQ24s",
    "fQ25s",
    "fQ26s",
    "fQ27s",
    "fQ28s",
    "overall-Ff-para",
  ];
  const personalVehicleQuestionsF = [
    "fQ29s",
    "fQ30s",
    "fQ31s",
    "fQ32s",
    "fQ33s",
    "overall-Ff-personal",
  ];

  // Validate based on selected final transportation mode
  if (columnF === "walk" || columnF === "bicycle") {
    isValid = validateRadioButtons(fnmt, walkBicycleQuestionsF) && isValid;
  } else if (
    columnF === "auto" ||
    columnF === "auto_app" ||
    columnF === "cab" ||
    columnF === "cab(app)" ||
    columnF === "2-wheeler(app)"
  ) {
    isValid =
      validateRadioButtons(fparatransit, autoRelatedQuestionsF) && isValid;
  } else if (
    columnF === "personal_car" ||
    columnF === "personal_2-wheeler" ||
    columnF === "drop-off"
  ) {
    isValid =
      validateRadioButtons(fpersonal, personalVehicleQuestionsF) && isValid;
  }

  const secureDiv = document.getElementById("secure-div");
  const secure = ["Q34", "Q35", "Q36", "Q37", "Q38", "Q39"];
  isValid = validateRadioButtons(secureDiv, secure) && isValid;

  // Validate Q40 and its dependencies
  const q40 = document.querySelector('input[name="Q40"]:checked');
  const Q40 = document.getElementById("Q40_div");
  if (!q40) {
    isValid = false;
    Q40.style.border = "2px solid red";
  } else if (q40.value === "1") {
    // Check if Q40 is 1
    ["Q40a", "Q40b"].forEach((fieldName) => {
      if (!document.querySelector(`input[name="${fieldName}"]:checked`)) {
        isValid = false;
        if (fieldName === "Q40a") {
          const Q40a = document.getElementById("Q40a");
          Q40a.style.border = "2px solid red";
        } else {
          const Q40b = document.getElementById("Q40b");
          Q40b.style.border = "2px solid red";
        }
      }
    });
  }
  if (isValid) {
    if (isValidPinNumber) {
      saveAndNext();
    } else {
      alert("Please enter 6-digit number.");
    }
  } else {
    alert("Please fill all required fields correctly.");
  }
});

function validateRadioButtons(div, questions) {
  let isValid = true;
  for (let i = 0; i < questions.length; i++) {
    if (!document.querySelector(`input[name="${questions[i]}"]:checked`)) {
      isValid = false;
    }
  }
  if (!isValid) {
    div.style.border = "2px solid red";
  } else {
    div.style.border = "1px solid black";
  }
  return isValid;
}

document.getElementById("back2").addEventListener("click", function () {
  getBackLastDeletedId();
});

//+++++++++++++++++This section is for the in the image section when user click on mode chice the popup appears
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function updateModeChoice(mode) {
  columnB = mode;
  const btn = document.getElementById("modeChoiceBtn");
  changeBtnText(btn, mode);
  updateButtonValueAndStyle("modeChoiceBtn", mode);
  btn.dispatchEvent(new CustomEvent("modeChange", { detail: mode }));
  closePopup();
}

document.getElementById("modeChoiceBtn").addEventListener("click", openPopup);
//+++++++++++end of the column b mode choice++++++++++++++++++++++++++

//++++++++++++++++++this is for f mode choice++++++++++++++
document.getElementById("modeChoiceBtnf").addEventListener("click", openPopupf);
function openPopupf() {
  document.getElementById("popupf").style.display = "flex";
}

function closePopupf() {
  document.getElementById("popupf").style.display = "none";
}

function updateModeChoicef(mode) {
  columnF = mode;
  const btn = document.getElementById("modeChoiceBtnf");
  changeBtnText(btn, mode);
  updateButtonValueAndStyle("modeChoiceBtnf", mode);
  btn.dispatchEvent(new CustomEvent("modeChange", { detail: mode }));
  closePopupf();
}

//+++++++++++++++++++++end f mode choice ++++++++++++++++++++++

function changeBtnText(btn, mode) {
  if (mode === "walk") {
    btn.textContent = "Walk";
  } else if (mode === "bicycle") {
    btn.textContent = "Bicycle";
  } else if (mode === "auto_app") {
    btn.textContent = "Auto (app)";
  } else if (mode === "auto") {
    btn.textContent = "Auto";
  } else if (mode === "cab(app)") {
    btn.textContent = "Cab (app)";
  } else if (mode === "cab") {
    btn.textContent = "Cab";
  } else if (mode === "2-Wheeler(app)" || mode === "2-wheeler(app)") {
    btn.textContent = "2-Wheeler (app)";
  } else if (mode === "personal_car") {
    btn.textContent = "Personal Car";
  } else if (mode === "personal_2-wheeler") {
    btn.textContent = "Personal 2-wheeler";
  } else if (mode === "drop-off") {
    btn.textContent = "Drop-off";
  }
}

function updateButtonValueAndStyle(buttonId, value) {
  const btn = document.getElementById(buttonId);

  if (value) {
    // Assuming 'value' is non-null and valid
    btn.setAttribute("data-value", value); // Update data-value
    btn.style.border = ""; // Clear any custom border style
  }
}
// ++++++++++++++++above function for mode choice+++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++next button 3+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.getElementById("next3").addEventListener("click", function () {
  saveAndNext();
  let isValid = true;
  let isSmartPhone = document.querySelector('input[name="smartPhone"]:checked')
    ? document.querySelector('input[name="smartPhone"]:checked').value
    : "";
  const fieldsToCheck = ["Q41", "Q42", "Q43", "Q44", "Q45"];
  const fieldsTocheckForCsection = ["smartPhone"];
  const smartPhoneId = document.getElementById("smartPhone");
  const Question34 = document.getElementById("question34");
  const dataPackageDiv = document.getElementById("data_package_div");
  for (var i = 0; i < fieldsTocheckForCsection.length; i++) {
    if (
      !document.querySelector(
        `input[name="${fieldsTocheckForCsection[i]}"]:checked`
      )
    ) {
      smartPhoneId.style.border = "2px solid red";
      isValid = false;
    }
  }

  if (isSmartPhone === "1") {
    for (var i = 0; i < fieldsToCheck.length; i++) {
      if (
        !document.querySelector(`input[name="${fieldsToCheck[i]}"]:checked`)
      ) {
        Question34.style.border = "2px solid red";
        isValid = false;
      } else {
        Question34.style.border = "none";
      }
    }
    if (!isRadioChecked(dataPackageDiv)) {
      dataPackageDiv.style.border = "2px solid red";
      isValid = false;
    } else {
      dataPackageDiv.style.border = "none";
    }
  }

  if (isValid) {
    saveAndNext();
  } else {
    alert("Please fill all required fields correctly.");
  }
});

// ++++++++++++++++++++++++++++++++++++++++++++the image section+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document
  .getElementById("modeChoiceBtn")
  .addEventListener("modeChange", function (event) {
    const mode = event.detail;
    const nmtDiv = document.getElementById("nmt");
    const paratransitDiv = document.getElementById("paratransit");
    const personalDiv = document.getElementById("personal");

    if (mode === "walk" || mode === "bicycle") {
      nmtDiv.classList.remove("hidden");
      paratransitDiv.classList.add("hidden");
      personalDiv.classList.add("hidden");
    } else if (
      mode === "auto" ||
      mode === "auto_app" ||
      mode === "cab(app)" ||
      mode === "cab" ||
      mode === "2-Wheeler(app)" ||
      mode === "Train"
    ) {
      nmtDiv.classList.add("hidden");
      paratransitDiv.classList.remove("hidden");
      personalDiv.classList.add("hidden");
    } else if (
      mode === "personal_car" ||
      mode === "personal_2-wheeler" ||
      mode === "drop-off"
    ) {
      nmtDiv.classList.add("hidden");
      paratransitDiv.classList.add("hidden");
      personalDiv.classList.remove("hidden");
    }
  });

document
  .getElementById("modeChoiceBtnf")
  .addEventListener("modeChange", function (event) {
    const mode = event.detail;
    const nmtDiv = document.getElementById("fnmt");
    const paratransitDiv = document.getElementById("fparatransit");
    const personalDiv = document.getElementById("fpersonal");

    if (mode === "walk" || mode === "bicycle") {
      nmtDiv.classList.remove("f_hidden");
      paratransitDiv.classList.add("f_hidden");
      personalDiv.classList.add("f_hidden");
    } else if (
      mode === "auto" ||
      mode === "auto_app" ||
      mode === "cab(app)" ||
      mode === "cab" ||
      mode === "2-wheeler(app)" ||
      mode === "Train"
    ) {
      nmtDiv.classList.add("f_hidden");
      paratransitDiv.classList.remove("f_hidden");
      personalDiv.classList.add("f_hidden");
    } else if (
      mode === "personal_car" ||
      mode === "personal_2-wheeler" ||
      mode === "drop-off"
    ) {
      nmtDiv.classList.add("f_hidden");
      paratransitDiv.classList.add("f_hidden");
      personalDiv.classList.remove("f_hidden");
    }
  });

//This is for f column
document
  .querySelectorAll('input[name="ftransportation"]')
  .forEach(function (radioButton) {
    radioButton.addEventListener("change", function () {
      // Show or hide "nmt" and "paratransit" based on the selected radio button
      const nmtDiv = document.getElementById("fnmt");
      const paratransitDiv = document.getElementById("fparatransit");
      const personalDiv = document.getElementById("fpersonal");

      if (radioButton.value === "walk" || radioButton.value === "bicycle") {
        nmtDiv.classList.remove("f_hidden");
        paratransitDiv.classList.add("f_hidden");
        personalDiv.classList.add("f_hidden");
      } else if (
        radioButton.value === "auto" ||
        radioButton.value === "auto_app" ||
        radioButton.value === "cab(app)" ||
        radioButton.value === "cab" ||
        radioButton.value === "2-wheeler(app)" ||
        radioButton.value === "Train"
      ) {
        nmtDiv.classList.add("f_hidden");
        paratransitDiv.classList.remove("f_hidden");
        personalDiv.classList.add("f_hidden");
      } else if (
        radioButton.value === "personal_car" ||
        radioButton.value === "personal_2-wheeler" ||
        radioButton.value === "drop-off"
      ) {
        nmtDiv.classList.add("f_hidden");
        paratransitDiv.classList.add("f_hidden");
        personalDiv.classList.remove("f_hidden");
      }
    });
  });
//It is for crime option bellow the second form
function toggleCrimeOptions() {
  var crimeOptions = document.getElementById("crime_options");
  var yesRadio = document.getElementById("yes_victim");

  if (yesRadio.checked) {
    crimeOptions.style.display = "block";
  } else {
    crimeOptions.style.display = "none";
  }
}

//This is for section c when use click on Do you have smartphon yes no option, if yes then this section appears

function toggleSmartphone() {
  var crimeOptions = document.getElementById("smartphone_options");
  var yesRadio = document.getElementById("yes_phone");

  if (yesRadio.checked) {
    crimeOptions.style.display = "block";
  } else {
    crimeOptions.style.display = "none";
  }
}

// Function to get the current date and time in a formatted string
function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// +++++++++++++++++++++++++++++++++++++the submit button++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let StartdateTime = "";

document
  .querySelector('input[name="ename"]')
  .addEventListener("change", function () {
    // Set the StartdateTime when the user selects a gender
    StartdateTime = getCurrentDateTime();
  });

// Function to get user location using Geolocation API
// and Put the data into the local database also
function getUserLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Handle form submission when user clicks the submit button
      document.getElementById("submit").addEventListener("click", function (e) {
        console.log("submit button is working now totally fine ");

        e.preventDefault(); // Prevent the default form submission

        const userConfirmation = window.confirm(
          "Are you sure you want to submit the data?"
        );

        const smartphone = document.querySelector(
          'input[name="smartPhone"]:checked'
        );

        if (userConfirmation) {
          window.location.href = "entry.html";

          // Collect form data

          const requestedemil = document.querySelector(
            'input[name="requested_Email"]'
          ).value;

          const ename = document.querySelector('input[name="ename"]').value;
          // const route = document.querySelector('input[name="route"]').value;
          const gender = document.querySelector('input[name="gender"]:checked')
            ? document.querySelector('input[name="gender"]:checked').value
            : "";
          const age = document.querySelector('input[name="age"]:checked')
            ? document.querySelector('input[name="age"]:checked').value
            : "";
          const income = document.querySelector('input[name="income"]:checked')
            ? document.querySelector('input[name="income"]:checked').value
            : "";
          const employment = document.querySelector(
            'input[name="employment"]:checked'
          )
            ? document.querySelector('input[name="employment"]:checked').value
            : "";
          const education = document.querySelector(
            'input[name="education"]:checked'
          )
            ? document.querySelector('input[name="education"]:checked').value
            : "";
          const origin_area = document.querySelector(
            'input[name="origin_area"]'
          ).value;
          const origin_pin = document.querySelector(
            'input[name="origin_pin"]'
          ).value;
          const destination_area = document.querySelector(
            'input[name="destination_area"]'
          ).value;
          const destination_pin = document.querySelector(
            'input[name="destination_pin"]'
          ).value;
          const city = document.querySelector('input[name="city"]:checked')
            ? document.querySelector('input[name="city"]:checked').value
            : "";
          const travel_work = document.querySelector(
            'input[name="travel_work"]:checked'
          )
            ? document.querySelector('input[name="travel_work"]:checked').value
            : "";
          const travel_partner = document.querySelector(
            'input[name="travel_partner"]:checked'
          )
            ? document.querySelector('input[name="travel_partner"]:checked')
                .value
            : "";
          const travel_purpose_yes_no = document.querySelector(
            'input[name="travel_purpose_yes_no"]:checked'
          )
            ? document.querySelector(
                'input[name="travel_purpose_yes_no"]:checked'
              ).value
            : "";
          // const travel_purpose = document.querySelector(
          //   'input[name="travel_purpose"]:checked'
          // )
          //   ? document.querySelector('input[name="travel_purpose"]:checked')
          //       .value
          //   : "";
          const travel_11 = document.querySelector(
            'input[name="travel_11"]:checked'
          )
            ? document.querySelector('input[name="travel_11"]:checked').value
            : "";

          const whith_whom = document.querySelector(
            'input[name="whith_whom"]:checked'
          )
            ? document.querySelector('input[name="whith_whom"]:checked').value
            : "";
          //This is for image section
          const originType = document.querySelector(
            'input[name="originType"]'
          ).value;
          const startingTime = document.querySelector(
            'input[name="startingTime"]'
          ).value;
          const duration = document.querySelector(
            'input[name="duration"]'
          ).value;
          // const transportation = document.querySelector(
          //   'input[name="transportation"]:checked'
          // )
          //   ? document.querySelector('input[name="transportation"]:checked')
          //       .value
          //   : "";
          const waitingTime = document.querySelector(
            'input[name="waitingTime"]'
          ).value;
          const cToe = document.querySelector('input[name="cToe"]:checked')
            ? document.querySelector('input[name="cToe"]:checked').value
            : "";

          const durationd = document.querySelector(
            'input[name="durationd"]'
          ).value;
          const waitingTimeE = document.querySelector(
            'input[name="waitingTimeE"]'
          ).value;
          const durationf = document.querySelector(
            'input[name="durationf"]'
          ).value;
          // const ftransportation = document.querySelector(
          //   'input[name="ftransportation"]:checked'
          // )
          //   ? document.querySelector('input[name="ftransportation"]:checked')
          //       .value
          //   : "";
          const destinationType = document.querySelector(
            'input[name="destinationType"]'
          ).value;
          const endTime = document.querySelector('input[name="endTime"]').value;
          const Q13i = document.querySelector('input[name="Q13i"]:checked')
            ? document.querySelector('input[name="Q13i"]:checked').value
            : "";
          const Q13s = document.querySelector('input[name="Q13s"]:checked')
            ? document.querySelector('input[name="Q13s"]:checked').value
            : "";
          const Q14i = document.querySelector('input[name="Q14i"]:checked')
            ? document.querySelector('input[name="Q14i"]:checked').value
            : "";
          const Q14s = document.querySelector('input[name="Q14s"]:checked')
            ? document.querySelector('input[name="Q14s"]:checked').value
            : "";
          const Q15i = document.querySelector('input[name="Q15i"]:checked')
            ? document.querySelector('input[name="Q15i"]:checked').value
            : "";
          const Q15s = document.querySelector('input[name="Q15s"]:checked')
            ? document.querySelector('input[name="Q15s"]:checked').value
            : "";
          const Q16i = document.querySelector('input[name="Q16i"]:checked')
            ? document.querySelector('input[name="Q16i"]:checked').value
            : "";
          const Q16s = document.querySelector('input[name="Q16s"]:checked')
            ? document.querySelector('input[name="Q16s"]:checked').value
            : "";
          const Q17i = document.querySelector('input[name="Q17i"]:checked')
            ? document.querySelector('input[name="Q17i"]:checked').value
            : "";
          const Q17s = document.querySelector('input[name="Q17s"]:checked')
            ? document.querySelector('input[name="Q17s"]:checked').value
            : "";
          const Q18i = document.querySelector('input[name="Q18i"]:checked')
            ? document.querySelector('input[name="Q18i"]:checked').value
            : "";
          const Q18s = document.querySelector('input[name="Q18s"]:checked')
            ? document.querySelector('input[name="Q18s"]:checked').value
            : "";
          const Q19i = document.querySelector('input[name="Q19i"]:checked')
            ? document.querySelector('input[name="Q19i"]:checked').value
            : "";
          const Q19s = document.querySelector('input[name="Q19s"]:checked')
            ? document.querySelector('input[name="Q19s"]:checked').value
            : "";
          const Q20i = document.querySelector('input[name="Q20i"]:checked')
            ? document.querySelector('input[name="Q20i"]:checked').value
            : "";
          const Q20s = document.querySelector('input[name="Q20s"]:checked')
            ? document.querySelector('input[name="Q20s"]:checked').value
            : "";
          const Q21i = document.querySelector('input[name="Q21i"]:checked')
            ? document.querySelector('input[name="Q21i"]:checked').value
            : "";
          const Q21s = document.querySelector('input[name="Q21s"]:checked')
            ? document.querySelector('input[name="Q21s"]:checked').value
            : "";
          const overallFbnmt = document.querySelector(
            'input[name="overall-Fb-nmt"]:checked'
          )
            ? document.querySelector('input[name="overall-Fb-nmt"]:checked')
                .value
            : "";
          const Q22i = document.querySelector('input[name="Q22i"]:checked')
            ? document.querySelector('input[name="Q22i"]:checked').value
            : "";
          const Q22s = document.querySelector('input[name="Q22s"]:checked')
            ? document.querySelector('input[name="Q22s"]:checked').value
            : "";
          const Q23i = document.querySelector('input[name="Q23i"]:checked')
            ? document.querySelector('input[name="Q23i"]:checked').value
            : "";
          const Q23s = document.querySelector('input[name="Q23s"]:checked')
            ? document.querySelector('input[name="Q23s"]:checked').value
            : "";
          const Q24i = document.querySelector('input[name="Q24i"]:checked')
            ? document.querySelector('input[name="Q24i"]:checked').value
            : "";
          const Q24s = document.querySelector('input[name="Q24s"]:checked')
            ? document.querySelector('input[name="Q24s"]:checked').value
            : "";
          const Q25i = document.querySelector('input[name="Q25i"]:checked')
            ? document.querySelector('input[name="Q25i"]:checked').value
            : "";
          const Q25s = document.querySelector('input[name="Q25s"]:checked')
            ? document.querySelector('input[name="Q25s"]:checked').value
            : "";
          const Q26i = document.querySelector('input[name="Q26i"]:checked')
            ? document.querySelector('input[name="Q26i"]:checked').value
            : "";
          const Q26s = document.querySelector('input[name="Q26s"]:checked')
            ? document.querySelector('input[name="Q26s"]:checked').value
            : "";
          const Q27i = document.querySelector('input[name="Q27i"]:checked')
            ? document.querySelector('input[name="Q27i"]:checked').value
            : "";
          const Q27s = document.querySelector('input[name="Q27s"]:checked')
            ? document.querySelector('input[name="Q27s"]:checked').value
            : "";
          const Q28i = document.querySelector('input[name="Q28i"]:checked')
            ? document.querySelector('input[name="Q28i"]:checked').value
            : "";
          const Q28s = document.querySelector('input[name="Q28s"]:checked')
            ? document.querySelector('input[name="Q28s"]:checked').value
            : "";
          const overallFbpara = document.querySelector(
            'input[name="overall-Fb-para"]:checked'
          )
            ? document.querySelector('input[name="overall-Fb-para"]:checked')
                .value
            : "";
          const Q29i = document.querySelector('input[name="Q29i"]:checked')
            ? document.querySelector('input[name="Q29i"]:checked').value
            : "";
          const Q29s = document.querySelector('input[name="Q29s"]:checked')
            ? document.querySelector('input[name="Q29s"]:checked').value
            : "";
          const Q30i = document.querySelector('input[name="Q30i"]:checked')
            ? document.querySelector('input[name="Q30i"]:checked').value
            : "";
          const Q30s = document.querySelector('input[name="Q30s"]:checked')
            ? document.querySelector('input[name="Q30s"]:checked').value
            : "";
          const Q31i = document.querySelector('input[name="Q31i"]:checked')
            ? document.querySelector('input[name="Q31i"]:checked').value
            : "";
          const Q31s = document.querySelector('input[name="Q31s"]:checked')
            ? document.querySelector('input[name="Q31s"]:checked').value
            : "";
          const Q32i = document.querySelector('input[name="Q32i"]:checked')
            ? document.querySelector('input[name="Q32i"]:checked').value
            : "";
          const Q32s = document.querySelector('input[name="Q32s"]:checked')
            ? document.querySelector('input[name="Q32s"]:checked').value
            : "";
          const Q33i = document.querySelector('input[name="Q33i"]:checked')
            ? document.querySelector('input[name="Q33i"]:checked').value
            : "";
          const Q33s = document.querySelector('input[name="Q33s"]:checked')
            ? document.querySelector('input[name="Q33s"]:checked').value
            : "";
          const overallFbpersonal = document.querySelector(
            'input[name="overall-Fb-personal"]:checked'
          )
            ? document.querySelector(
                'input[name="overall-Fb-personal"]:checked'
              ).value
            : "";

          //This is for f cloumn

          const fQ13i = document.querySelector('input[name="fQ13i"]:checked')
            ? document.querySelector('input[name="fQ13i"]:checked').value
            : "";
          const fQ13s = document.querySelector('input[name="fQ13s"]:checked')
            ? document.querySelector('input[name="fQ13s"]:checked').value
            : "";
          const fQ14i = document.querySelector('input[name="fQ14i"]:checked')
            ? document.querySelector('input[name="fQ14i"]:checked').value
            : "";
          const fQ14s = document.querySelector('input[name="fQ14s"]:checked')
            ? document.querySelector('input[name="fQ14s"]:checked').value
            : "";
          const fQ15i = document.querySelector('input[name="fQ15i"]:checked')
            ? document.querySelector('input[name="fQ15i"]:checked').value
            : "";
          const fQ15s = document.querySelector('input[name="fQ15s"]:checked')
            ? document.querySelector('input[name="fQ15s"]:checked').value
            : "";
          const fQ16i = document.querySelector('input[name="fQ16i"]:checked')
            ? document.querySelector('input[name="fQ16i"]:checked').value
            : "";
          const fQ16s = document.querySelector('input[name="fQ16s"]:checked')
            ? document.querySelector('input[name="fQ16s"]:checked').value
            : "";
          const fQ17i = document.querySelector('input[name="fQ17i"]:checked')
            ? document.querySelector('input[name="fQ17i"]:checked').value
            : "";
          const fQ17s = document.querySelector('input[name="fQ17s"]:checked')
            ? document.querySelector('input[name="fQ17s"]:checked').value
            : "";
          const fQ18i = document.querySelector('input[name="fQ18i"]:checked')
            ? document.querySelector('input[name="fQ18i"]:checked').value
            : "";
          const fQ18s = document.querySelector('input[name="fQ18s"]:checked')
            ? document.querySelector('input[name="fQ18s"]:checked').value
            : "";
          const fQ19i = document.querySelector('input[name="fQ19i"]:checked')
            ? document.querySelector('input[name="fQ19i"]:checked').value
            : "";
          const fQ19s = document.querySelector('input[name="fQ19s"]:checked')
            ? document.querySelector('input[name="fQ19s"]:checked').value
            : "";
          const fQ20i = document.querySelector('input[name="fQ20i"]:checked')
            ? document.querySelector('input[name="fQ20i"]:checked').value
            : "";
          const fQ20s = document.querySelector('input[name="fQ20s"]:checked')
            ? document.querySelector('input[name="fQ20s"]:checked').value
            : "";
          const fQ21i = document.querySelector('input[name="fQ21i"]:checked')
            ? document.querySelector('input[name="fQ21i"]:checked').value
            : "";
          const fQ21s = document.querySelector('input[name="fQ21s"]:checked')
            ? document.querySelector('input[name="fQ21s"]:checked').value
            : "";
          const overallFfnmt = document.querySelector(
            'input[name="overall-Ff-nmt"]:checked'
          )
            ? document.querySelector('input[name="overall-Ff-nmt"]:checked')
                .value
            : "";
          const fQ22i = document.querySelector('input[name="fQ22i"]:checked')
            ? document.querySelector('input[name="fQ22i"]:checked').value
            : "";
          const fQ22s = document.querySelector('input[name="fQ22s"]:checked')
            ? document.querySelector('input[name="fQ22s"]:checked').value
            : "";
          const fQ23i = document.querySelector('input[name="fQ23i"]:checked')
            ? document.querySelector('input[name="fQ23i"]:checked').value
            : "";
          const fQ23s = document.querySelector('input[name="fQ23s"]:checked')
            ? document.querySelector('input[name="fQ23s"]:checked').value
            : "";
          const fQ24i = document.querySelector('input[name="fQ24i"]:checked')
            ? document.querySelector('input[name="fQ24i"]:checked').value
            : "";
          const fQ24s = document.querySelector('input[name="fQ24s"]:checked')
            ? document.querySelector('input[name="fQ24s"]:checked').value
            : "";
          const fQ25i = document.querySelector('input[name="fQ25i"]:checked')
            ? document.querySelector('input[name="fQ25i"]:checked').value
            : "";
          const fQ25s = document.querySelector('input[name="fQ25s"]:checked')
            ? document.querySelector('input[name="fQ25s"]:checked').value
            : "";
          const fQ26i = document.querySelector('input[name="fQ26i"]:checked')
            ? document.querySelector('input[name="fQ26i"]:checked').value
            : "";
          const fQ26s = document.querySelector('input[name="fQ26s"]:checked')
            ? document.querySelector('input[name="fQ26s"]:checked').value
            : "";
          const fQ27i = document.querySelector('input[name="fQ27i"]:checked')
            ? document.querySelector('input[name="fQ27i"]:checked').value
            : "";
          const fQ27s = document.querySelector('input[name="fQ27s"]:checked')
            ? document.querySelector('input[name="fQ27s"]:checked').value
            : "";
          const fQ28i = document.querySelector('input[name="fQ28i"]:checked')
            ? document.querySelector('input[name="fQ28i"]:checked').value
            : "";
          const fQ28s = document.querySelector('input[name="fQ28s"]:checked')
            ? document.querySelector('input[name="fQ28s"]:checked').value
            : "";
          const overallFfpara = document.querySelector(
            'input[name="overall-Ff-para"]:checked'
          )
            ? document.querySelector('input[name="overall-Ff-para"]:checked')
                .value
            : "";
          const fQ29i = document.querySelector('input[name="fQ29i"]:checked')
            ? document.querySelector('input[name="fQ29i"]:checked').value
            : "";
          const fQ29s = document.querySelector('input[name="fQ29s"]:checked')
            ? document.querySelector('input[name="fQ29s"]:checked').value
            : "";
          const fQ30i = document.querySelector('input[name="fQ30i"]:checked')
            ? document.querySelector('input[name="fQ30i"]:checked').value
            : "";
          const fQ30s = document.querySelector('input[name="fQ30s"]:checked')
            ? document.querySelector('input[name="fQ30s"]:checked').value
            : "";
          const fQ31i = document.querySelector('input[name="fQ31i"]:checked')
            ? document.querySelector('input[name="fQ31i"]:checked').value
            : "";
          const fQ31s = document.querySelector('input[name="fQ31s"]:checked')
            ? document.querySelector('input[name="fQ31s"]:checked').value
            : "";
          const fQ32i = document.querySelector('input[name="fQ32i"]:checked')
            ? document.querySelector('input[name="fQ32i"]:checked').value
            : "";
          const fQ32s = document.querySelector('input[name="fQ32s"]:checked')
            ? document.querySelector('input[name="fQ32s"]:checked').value
            : "";
          const fQ33i = document.querySelector('input[name="fQ33i"]:checked')
            ? document.querySelector('input[name="fQ33i"]:checked').value
            : "";
          const fQ33s = document.querySelector('input[name="fQ33s"]:checked')
            ? document.querySelector('input[name="fQ33s"]:checked').value
            : "";
          const overallFfpersonal = document.querySelector(
            'input[name="overall-Ff-personal"]:checked'
          )
            ? document.querySelector(
                'input[name="overall-Ff-personal"]:checked'
              ).value
            : "";

          const Q34 = document.querySelector('input[name="Q34"]:checked')
            ? document.querySelector('input[name="Q34"]:checked').value
            : "";
          const Q35 = document.querySelector('input[name="Q35"]:checked')
            ? document.querySelector('input[name="Q35"]:checked').value
            : "";
          const Q36 = document.querySelector('input[name="Q36"]:checked')
            ? document.querySelector('input[name="Q36"]:checked').value
            : "";
          const Q37 = document.querySelector('input[name="Q37"]:checked')
            ? document.querySelector('input[name="Q37"]:checked').value
            : "";
          const Q38 = document.querySelector('input[name="Q38"]:checked')
            ? document.querySelector('input[name="Q38"]:checked').value
            : "";
          const Q39 = document.querySelector('input[name="Q39"]:checked')
            ? document.querySelector('input[name="Q39"]:checked').value
            : "";
          const Q40 = document.querySelector('input[name="Q40"]:checked')
            ? document.querySelector('input[name="Q40"]:checked').value
            : "";
          const Q40a = document.querySelector('input[name="Q40a"]:checked')
            ? document.querySelector('input[name="Q40a"]:checked').value
            : "";
          const Q40b = document.querySelector('input[name="Q40b"]:checked')
            ? document.querySelector('input[name="Q40b"]:checked').value
            : "";

          /*This is for section c*/

          const smartphone = document.querySelector(
            'input[name="smartPhone"]:checked'
          )
            ? document.querySelector('input[name="smartPhone"]:checked').value
            : "";
          const data_package = document.querySelector(
            'input[name="data_package"]:checked'
          )
            ? document.querySelector('input[name="data_package"]:checked').value
            : "";
          const Q41 = document.querySelector('input[name="Q41"]:checked')
            ? document.querySelector('input[name="Q41"]:checked').value
            : "";
          const Q42 = document.querySelector('input[name="Q42"]:checked')
            ? document.querySelector('input[name="Q42"]:checked').value
            : "";
          const Q43 = document.querySelector('input[name="Q43"]:checked')
            ? document.querySelector('input[name="Q43"]:checked').value
            : "";
          const Q44 = document.querySelector('input[name="Q44"]:checked')
            ? document.querySelector('input[name="Q44"]:checked').value
            : "";
          const Q45 = document.querySelector('input[name="Q45"]:checked')
            ? document.querySelector('input[name="Q45"]:checked').value
            : "";

          const otherTravelText =
            document.getElementById("OtherTravelPartner").value;
          const otherPurposeText =
            document.getElementById("OtherTravelPurpose").value;

          // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

          const m11 = document.querySelector('input[name="activitym1"]:checked')
            ? document.querySelector('input[name="activitym1"]:checked').value
            : "";

          const m12 = document.querySelector('input[name="activitym2"]:checked')
            ? document.querySelector('input[name="activitym2"]:checked').value
            : "";

          const m13 = document.querySelector('input[name="activitym3"]:checked')
            ? document.querySelector('input[name="activitym3"]:checked').value
            : "";

          const m14 = document.querySelector('input[name="activitym4"]:checked')
            ? document.querySelector('input[name="activitym4"]:checked').value
            : "";

          //  M2@SUB

          const m21 = document.querySelector(
            'input[name="activitym21"]:checked'
          )
            ? document.querySelector('input[name="activitym21"]:checked').value
            : "";

          const m22 = document.querySelector(
            'input[name="activitym22"]:checked'
          )
            ? document.querySelector('input[name="activitym22"]:checked').value
            : "";

          const m23 = document.querySelector(
            'input[name="activitym23"]:checked'
          )
            ? document.querySelector('input[name="activitym23"]:checked').value
            : "";

          const m24 = document.querySelector(
            'input[name="activitym24"]:checked'
          )
            ? document.querySelector('input[name="activitym24"]:checked').value
            : "";

          // M3@sub

          const m31 = document.querySelector(
            'input[name="activitym31"]:checked'
          )
            ? document.querySelector('input[name="activitym31"]:checked').value
            : "";

          const m32 = document.querySelector(
            'input[name="activitym32"]:checked'
          )
            ? document.querySelector('input[name="activitym32"]:checked').value
            : "";

          const m33 = document.querySelector(
            'input[name="activitym33"]:checked'
          )
            ? document.querySelector('input[name="activitym33"]:checked').value
            : "";

          const m34 = document.querySelector(
            'input[name="activitym34"]:checked'
          )
            ? document.querySelector('input[name="activitym34"]:checked').value
            : "";

          // M4@sub

          const m41 = document.querySelector(
            'input[name="activitym41"]:checked'
          )
            ? document.querySelector('input[name="activitym41"]:checked').value
            : "";

          const m42 = document.querySelector(
            'input[name="activitym42"]:checked'
          )
            ? document.querySelector('input[name="activitym42"]:checked').value
            : "";

          const m43 = document.querySelector(
            'input[name="activitym43"]:checked'
          )
            ? document.querySelector('input[name="activitym43"]:checked').value
            : "";

          const m44 = document.querySelector(
            'input[name="activitym44"]:checked'
          )
            ? document.querySelector('input[name="activitym44"]:checked').value
            : "";

          // M5@sub

          const m51 = document.querySelector(
            'input[name="activitym51"]:checked'
          )
            ? document.querySelector('input[name="activitym51"]:checked').value
            : "";

          const m52 = document.querySelector(
            'input[name="activitym52"]:checked'
          )
            ? document.querySelector('input[name="activitym52"]:checked').value
            : "";

          const m53 = document.querySelector(
            'input[name="activitym53"]:checked'
          )
            ? document.querySelector('input[name="activitym53"]:checked').value
            : "";

          const m54 = document.querySelector(
            'input[name="activitym54"]:checked'
          )
            ? document.querySelector('input[name="activitym54"]:checked').value
            : "";

          // M6@sub

          const m61 = document.querySelector(
            'input[name="activitym61"]:checked'
          )
            ? document.querySelector('input[name="activitym61"]:checked').value
            : "";

          const m62 = document.querySelector(
            'input[name="activitym62"]:checked'
          )
            ? document.querySelector('input[name="activitym62"]:checked').value
            : "";

          const m63 = document.querySelector(
            'input[name="activitym63"]:checked'
          )
            ? document.querySelector('input[name="activitym63"]:checked').value
            : "";

          const m64 = document.querySelector(
            'input[name="activitym64"]:checked'
          )
            ? document.querySelector('input[name="activitym64"]:checked').value
            : "";

          // R1@sub

          const r11 = document.querySelector('input[name="activityr1"]:checked')
            ? document.querySelector('input[name="activityr1"]:checked').value
            : "";

          const r12 = document.querySelector('input[name="activityr2"]:checked')
            ? document.querySelector('input[name="activityr2"]:checked').value
            : "";

          const r13 = document.querySelector('input[name="activityr3"]:checked')
            ? document.querySelector('input[name="activityr3"]:checked').value
            : "";

          const r14 = document.querySelector('input[name="activityr4"]:checked')
            ? document.querySelector('input[name="activityr4"]:checked').value
            : "";

          // R2@sub

          const r21 = document.querySelector(
            'input[name="activityr21"]:checked'
          )
            ? document.querySelector('input[name="activityr21"]:checked').value
            : "";

          const r22 = document.querySelector(
            'input[name="activityr22"]:checked'
          )
            ? document.querySelector('input[name="activityr22"]:checked').value
            : "";

          const r23 = document.querySelector(
            'input[name="activityr23"]:checked'
          )
            ? document.querySelector('input[name="activityr23"]:checked').value
            : "";

          const r24 = document.querySelector(
            'input[name="activityr24"]:checked'
          )
            ? document.querySelector('input[name="activityr24"]:checked').value
            : "";

          // R3@sub

          const r31 = document.querySelector(
            'input[name="activityr31"]:checked'
          )
            ? document.querySelector('input[name="activityr31"]:checked').value
            : "";

          const r32 = document.querySelector(
            'input[name="activityr32"]:checked'
          )
            ? document.querySelector('input[name="activityr32"]:checked').value
            : "";

          const r33 = document.querySelector(
            'input[name="activityr33"]:checked'
          )
            ? document.querySelector('input[name="activityr33"]:checked').value
            : "";

          const r34 = document.querySelector(
            'input[name="activityr34"]:checked'
          )
            ? document.querySelector('input[name="activityr34"]:checked').value
            : "";

          // R4@sub

          const r41 = document.querySelector(
            'input[name="activityr41"]:checked'
          )
            ? document.querySelector('input[name="activityr41"]:checked').value
            : "";

          const r42 = document.querySelector(
            'input[name="activityr42"]:checked'
          )
            ? document.querySelector('input[name="activityr42"]:checked').value
            : "";

          const r43 = document.querySelector(
            'input[name="activityr43"]:checked'
          )
            ? document.querySelector('input[name="activityr43"]:checked').value
            : "";

          const r44 = document.querySelector(
            'input[name="activityr44"]:checked'
          )
            ? document.querySelector('input[name="activityr44"]:checked').value
            : "";

          // R5@sub

          const r51 = document.querySelector(
            'input[name="activityr51"]:checked'
          )
            ? document.querySelector('input[name="activityr51"]:checked').value
            : "";

          const r52 = document.querySelector(
            'input[name="activityr52"]:checked'
          )
            ? document.querySelector('input[name="activityr52"]:checked').value
            : "";

          const r53 = document.querySelector(
            'input[name="activityr53"]:checked'
          )
            ? document.querySelector('input[name="activityr53"]:checked').value
            : "";

          const r54 = document.querySelector(
            'input[name="activityr54"]:checked'
          )
            ? document.querySelector('input[name="activityr54"]:checked').value
            : "";

          // R6@sub

          const r61 = document.querySelector(
            'input[name="activityr61"]:checked'
          )
            ? document.querySelector('input[name="activityr61"]:checked').value
            : "";

          const r62 = document.querySelector(
            'input[name="activityr62"]:checked'
          )
            ? document.querySelector('input[name="activityr62"]:checked').value
            : "";

          const r63 = document.querySelector(
            'input[name="activityr63"]:checked'
          )
            ? document.querySelector('input[name="activityr63"]:checked').value
            : "";

          const r64 = document.querySelector(
            'input[name="activityr64"]:checked'
          )
            ? document.querySelector('input[name="activityr64"]:checked').value
            : "";

          const genderrnotlisted =
            document.getElementById("GenderNotSpecified").value;
          const otherEmployment =
            document.getElementById("otherEmployment").value;

          // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

          // Get the currenQ13
          const dateTime = getCurrentDateTime();

          // Create an object with the form data, including geolocation data
          const formDataObject = {
            Ename: ename,
            // Gender: gender,
            Gender: gender === "4" ? genderrnotlisted : gender,
            Age: age,
            Income: income,
            // Employment: employment,

            Employment: employment === "4" ? otherEmployment : employment,
            Education: education,
            OriginArea: origin_area,
            OriginPin: origin_pin,
            DestinationArea: destination_area,
            DestinationPin: destination_pin,
            City: city,
            Latitude: latitude,
            Longitude: longitude,
            TravelWork: travel_work,
            TravelPartner:
              travel_partner === "5" ? otherTravelText : travel_partner,
            Q8: travel_purpose_yes_no,
            // TravelPurpose:
            //   travel_purpose === "5" ? otherPurposeText : travel_purpose,
            TravelPurpose: selectedValues.join(","),
            Travel11: travel_11,
            Withwhom: whith_whom,
            /*This is for image*/
            OriginType: originType,
            StartingTime: startingTime,
            Duration: duration,
            Transportation: columnB,
            WaitingTime: waitingTime,
            CToe: cToe,
            durationD: durationd,
            WaitingTimeE: waitingTimeE,
            Durationf: durationf,
            Ftransportation: columnF,
            DestinationType: destinationType,
            EndTime: endTime,

            Q13s:
              columnB === "walk" || columnB === "bicycle"
                ? Q13s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-Wheeler(app)",
                  ].includes(columnB)
                ? Q22s
                : ["personal_car", "personal_2-wheeler", "drop-off"].includes(
                    columnB
                  )
                ? Q29s
                : " ",

            Q14s:
              columnB === "walk" || columnB === "bicycle"
                ? Q14s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-Wheeler(app)",
                  ].includes(columnB)
                ? Q23s
                : ["personal_car", "personal_2-wheeler", "drop-off"].includes(
                    columnB
                  )
                ? Q30s
                : " ",

            Q15s:
              columnB === "walk" || columnB === "bicycle"
                ? Q15s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-Wheeler(app)",
                  ].includes(columnB)
                ? Q24s
                : ["personal_car", "personal_2-wheeler", "drop-off"].includes(
                    columnB
                  )
                ? Q31s
                : " ",

            Q16s:
              columnB === "walk" || columnB === "bicycle"
                ? Q16s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-Wheeler(app)",
                  ].includes(columnB)
                ? Q25s
                : ["personal_car", "personal_2-wheeler", "drop-off"].includes(
                    columnB
                  )
                ? Q32s
                : " ",

            Q17s:
              columnB === "walk" || columnB === "bicycle"
                ? Q17s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-Wheeler(app)",
                  ].includes(columnB)
                ? Q26s
                : ["personal_car", "personal_2-wheeler", "drop-off"].includes(
                    columnB
                  )
                ? Q33s
                : " ",

            Q18s:
              columnB === "walk" || columnB === "bicycle"
                ? Q18s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-Wheeler(app)",
                  ].includes(columnB)
                ? Q27s
                : " ",

            Q19s:
              columnB === "walk" || columnB === "bicycle"
                ? Q19s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-Wheeler(app)",
                  ].includes(columnB)
                ? Q28s
                : " ",

            Q20s: columnB === "walk" || columnB === "bicycle" ? Q20s : " ",

            Q21s: columnB === "walk" || columnB === "bicycle" ? Q21s : " ",

            overallFbRating:
              columnB === "walk" || columnB === "bicycle"
                ? overallFbnmt
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-Wheeler(app)",
                  ].includes(columnB)
                ? overallFbpara
                : ["personal_car", "personal_2-wheeler", "drop-off"].includes(
                    columnB
                  )
                ? overallFbpersonal
                : " ",

            fQ13s:
              columnF === "walk" || columnF === "bicycle"
                ? fQ13s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-wheeler(app)",
                  ].includes(columnF)
                ? fQ22s
                : ["personal_car", "personal_2-wheeler", "drop-off"].includes(
                    columnF
                  )
                ? fQ29s
                : " ",

            fQ14s:
              columnF === "walk" || columnF === "bicycle"
                ? fQ14s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-wheeler(app)",
                  ].includes(columnF)
                ? fQ23s
                : ["personal_car", "personal_2-wheeler", "drop-off"].includes(
                    columnF
                  )
                ? fQ30s
                : " ",

            fQ15s:
              columnF === "walk" || columnF === "bicycle"
                ? fQ15s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-wheeler(app)",
                  ].includes(columnF)
                ? fQ24s
                : ["personal_car", "personal_2-wheeler", "drop-off"].includes(
                    columnF
                  )
                ? fQ31s
                : " ",

            fQ16s:
              columnF === "walk" || columnF === "bicycle"
                ? fQ16s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-wheeler(app)",
                  ].includes(columnF)
                ? fQ25s
                : ["personal_car", "personal_2-wheeler", "drop-off"].includes(
                    columnF
                  )
                ? fQ32s
                : " ",

            fQ17s:
              columnF === "walk" || columnF === "bicycle"
                ? fQ17s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-wheeler(app)",
                  ].includes(columnF)
                ? fQ26s
                : ["personal_car", "personal_2-wheeler", "drop-off"].includes(
                    columnF
                  )
                ? fQ33s
                : " ",

            fQ18s:
              columnF === "walk" || columnF === "bicycle"
                ? fQ18s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-wheeler(app)",
                  ].includes(columnF)
                ? fQ27s
                : " ",

            fQ19s:
              columnF === "walk" || columnF === "bicycle"
                ? fQ19s
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-wheeler(app)",
                  ].includes(columnF)
                ? fQ28s
                : " ",

            fQ20s: columnF === "walk" || columnF === "bicycle" ? fQ20s : " ",

            fQ21s: columnF === "walk" || columnF === "bicycle" ? fQ21s : " ",

            overallFfRating:
              columnF === "walk" || columnF === "bicycle"
                ? overallFfnmt
                : [
                    "auto",
                    "auto_app",
                    "cab",
                    "cab(app)",
                    "2-wheeler(app)",
                  ].includes(columnF)
                ? overallFfpara
                : ["personal_car", "personal_2-wheeler", "drop-off"].includes(
                    columnF
                  )
                ? overallFfpersonal
                : " ",
            Q34: Q34,
            Q35: Q35,
            Q36: Q36,
            Q37: Q37,
            Q38: Q38,
            Q39: Q39,
            Q40: Q40,
            Q40a: Q40a,
            Q40b: Q40b,
            smartphone: smartphone,
            data_package: data_package,
            Q41: Q41,
            Q42: Q42,
            Q43: Q43,
            Q44: Q44,
            Q45: Q45,
            EndDateTime: dateTime,
            StartdateTime: StartdateTime,
            SPSurveyStartingtime: spsurveystartingtime,
            Requestedemil: requestedemil,

            m11: m11,
            m12: m12,
            m13: m13,
            m14: m14,
            m21: m21,
            m22: m22,
            m23: m23,
            m24: m24,
            m31: m31,
            m32: m32,
            m33: m33,
            m34: m34,
            m41: m41,
            m42: m42,
            m43: m43,
            m44: m44,
            m51: m51,
            m52: m51,
            m53: m53,
            m54: m54,
            m61: m61,
            m62: m62,
            m63: m63,
            m64: m64,
            r11: r11,
            r12: r12,
            r13: r13,
            r14: r14,
            r21: r21,
            r22: r22,
            r23: r23,
            r24: r24,
            r31: r31,
            r32: r32,
            r33: r33,
            r34: r34,
            r41: r41,
            r42: r42,
            r43: r43,
            r44: r44,
            r51: r51,
            r52: r52,
            r53: r53,
            r54: r54,
            r61: r61,
            r62: r62,
            r63: r63,
            r64: r64,
          };

          // Push the form data to local storage
          if (localStorage.formdata) {
            const existingData = JSON.parse(localStorage.formdata);
            existingData.push(formDataObject);
            localStorage.formdata = JSON.stringify(existingData);
          } else {
            localStorage.formdata = JSON.stringify([formDataObject]);
          }

          // // Clear the form
          // document.querySelector("form").reset();

          location.reload();
          window.location.href = "entry.html";
        }
      });
    });
  }
}

getUserLocation();

function toggleotherpurpose() {
  document.getElementById("travel-11-div").style.display = "none";
}
function togglenootherpurpose() {
  document.getElementById("travel-11-div").style.display = "block";
}

function togglenoworkorscool() {
  document.getElementById("travel-partner-div").style.display = "none";
}

function toggleworkorscool() {
  document.getElementById("travel-partner-div").style.display = "block";
  // document.getElementById("travel-11b-div").style.display = "none";
}

// 4. Employment* and its text box on off
function otheremp() {
  document.getElementById("otherEmployment").style.display = "block";
}

function noOtheremp() {
  document.getElementById("otherEmployment").style.display = "none";
}

//___________________________________________________________________

// text box of Gender not listed here
function onclickGenderNotSpecified() {
  document.getElementById("GenderNotSpecified").style.display = "block";
}

function offtextFieldofGendernotListed() {
  document.getElementById("GenderNotSpecified").style.display = "none";
}

// -----------------------------------------------------------

//8(c). Whom do you use public transport stop for other purpose? * textt box on off

function onclickwhithwhom() {
  document.getElementById("whithwhom").style.display = "block";
}

function onclickwhithnoneofthem() {
  document.getElementById("whithwhom").style.display = "none";
}

//hi

// 11 th   yes no   questions
function onclickOpen11a() {
  document.getElementById("travel-purpose-div").style.display = "block";
  document.getElementById("travel-11-div").style.display = "block";
  document.getElementById("travel-11b-div").style.display = "block";
}

function onclickClose11a() {
  document.getElementById("travel-purpose-div").style.display = "none";
  document.getElementById("travel-11-div").style.display = "none";
  document.getElementById("travel-11b-div").style.display = "none";
}

// to record location

document
  .getElementById("startSpsurvey")
  .addEventListener("click", function (e) {
    spsurveystartingtime = getCurrentDateTime();
    console.log("sp survey starting date time" + spsurveystartingtime);
  });

// function submit() {
//   // requestedemil = document.getElementById("feedbackRecordEmail").value;
//   requestedemil = document.querySelector('input[name="requested_Email"]').value;
//   console.log9("this is user given email" + requestedemil);
// }

//hi
