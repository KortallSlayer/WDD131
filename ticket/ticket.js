const form = document.querySelector("#ticketForm");
const ticketType = document.querySelector("#ticketType");
const codeContainer = document.querySelector("#codeContainer");
const codeLabel = document.querySelector("#codeLabel");
const userCode = document.querySelector("#userCode");
const output = document.querySelector("#output");

function updateNotesField() {
    const value = ticketType.value;

    if (value === "student") {
        codeContainer.hidden = false;
        codeLabel.textContent = "Student I#";

        userCode.placeholder = "Enter your 9 digit I number";
        userCode.pattern = "[0-9]{9}";
        userCode.maxLength = 9;
        userCode.required = true;
        userCode.inputMode = "numeric";
    }

    else if (value === "guest") {
        codeContainer.hidden = false;
        codeLabel.textContent = "Access Code";

        userCode.placeholder = "Enter event code";
        userCode.pattern = "EVENT131";
        userCode.maxLength = 8;
        userCode.required = true;
        userCode.inputMode = "text";
    }

    else {
        codeContainer.hidden = true;
        userCode.required = false;
        userCode.value = "";
    }
}

function validateCode() {
    const value = userCode.value.trim();

    if (ticketType.value === "student") {
        if (!/^[0-9]{9}$/.test(value)) {
            userCode.setCustomValidity("Student I# must be 9 digits");
        }
        else {
            userCode.setCustomValidity("");
        }
    }

    else if (ticketType.value === "guest") {
        if (value !== "EVENT131") {
            userCode.setCustomValidity("Access Code is incorrect");
        }
        else {
            userCode.setCustomValidity("");
        }
    }
}
userCode.addEventListener("input", validateCode);
ticketType.addEventListener("change", function() {
    updateNotesField();
    validateCode();
});

ticketType.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getTicketType() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}

function changeForm() {
    if (userType.value === "student") {
        codeLabel.textContent = "Student I#";
        userCode.placeholder = "Enter your 9 digit I number";
        userCode.pattern = "[0-9]{9}";
        userCode.maxLength = 9;
    }
    else if (userType.value === "guest") {
        codeLabel.textContent = "Access Code";
        userCode.placeholder = "Enter event code";
        userCode.pattern = "EVENT131";
        userCode.maxLength = 8;
    }
}

form.addEventListener("submit", function (event) {
    validateCode();

if (!form.checkValidity()) {
    form.reportValidity();
    return;
}
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.ticketType.value;
  const eventDate = form.availableDate.value;

  // Validate the input
  // Let the user know to select at least one campus
//   if(selectedCampuses.length == 0) {
//     output.textContent = "please select at least one campus.";
//     // exit the function so the rest of the form dosnt submit
//     return;
//   }
  
//   // Let the user know if they choose many campuses but didn't put a note that they need to add a note
//   if(type === 'many' && selectedCampuses.length < 2) {
//     output.textContent = "you need to select two or more campuses."
//   }
  
  //Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses

  

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateNotesField();
});