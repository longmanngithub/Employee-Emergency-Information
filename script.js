// Error messages

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("user");
    const illnessDetails = document.getElementById("illness-details");
    const insuranceDetails = document.getElementById("insurance-details");
    const otherInsuranceDetails = document.getElementById("other");
    const surgeryDetails = document.getElementById("surgery-details");
    const successMessage = document.getElementById("success-message");

    const errorMessages = {
        fname: "Please enter your first name.",
        lname: "Please enter your last name.",
        age: "Please enter your age.",
        blood: "Please select your blood group.",
        contact : "Please enter your emergency contact number.",
        illness: "Please specify your illness.",
        illnessDuration: "Please enter the duration of your illness.",
        agentName: "Please enter your agent name.",
        otherInsurance: "Please specify the other company.",
        nomineeName: "Please provide your nominee's name.",
        surgeryDetails: "Please specify your surgery.",
    }

    const inputs = form.querySelectorAll("input, select");

    inputs.forEach(input => {
        input.addEventListener("invalid", function(event) {
            event.preventDefault();
            const errorMessage = document.getElementById(`${input.id}-error`);
            if (errorMessage) {
                errorMessage.textContent = errorMessages[input.id];
                errorMessage.classList.add("visible");
            }
        });

        input.addEventListener("input", function() {
            const errorMessage = document.getElementById(`${input.id}-error`);
            if (errorMessage) {
                errorMessage.textContent = "";
                errorMessage.classList.remove("visible");
            }
        });
    });

    form.addEventListener("submit", function(event){
        let valid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                valid = false;
                const errorMessage = document.getElementById(`${input.id}-error`);
                if (errorMessage) {
                    errorMessage.textContent = errorMessages[input.id];
                    errorMessage.classList.add("visible");
                }
            }
        });

        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            successMessage.textContent = "Form submitted successfully!";
            successMessage.classList.add("visible");
            form.reset();
        }
    });

    const radioYesIllness = document.getElementById("yesIllness");
    const radioNoIllness = document.getElementById("noIllness");
    const radioYesInsurance = document.getElementById("yesInsurance");
    const radioNoInsurance = document.getElementById("noInsurance");
    const radioOtherInsurance = document.getElementById("otherInsurance");
    const radioYesSurgery = document.getElementById("yesSurgery");
    const radioNoSurgery = document.getElementById("noSurgery");

    radioYesIllness.addEventListener("change", function() {
        if (radioYesIllness.checked) {
            illnessDetails.style.display = 'block';
        }
    });

    radioNoIllness.addEventListener("change", function() {
        if (radioNoIllness.checked) {
            illnessDetails.style.display = 'none';
        }
    });

    radioYesInsurance.addEventListener("change", function() {
        if (radioYesInsurance.checked) {
            insuranceDetails.style.display = 'block';
        }
    });

    radioNoInsurance.addEventListener("change", function() {
        if (radioNoInsurance.checked) {
            insuranceDetails.style.display = 'none';
        }
    });

    radioOtherInsurance.addEventListener("change", function() {
        if (radioOtherInsurance.checked) {
            otherInsuranceDetails.style.display = 'block';
        }
    });

    radioYesSurgery.addEventListener("change", function() {
        if (radioYesSurgery.checked) {
            surgeryDetails.style.display = 'block';
        }
    });

    radioNoSurgery.addEventListener("change", function() {
        if (radioNoSurgery.checked) {
            surgeryDetails.style.display = 'none';
        }
    });
    
});

// Fixing the text in the blood menu to be white

document.getElementById('blood').addEventListener('change', function() {
    if (this.value === "") {
        this.classList.add('u-select');
    } else {
        this.classList.remove('u-select');
    }
});

// Toggle show illness details

document.addEventListener('DOMContentLoaded', function() {
    const illnessDetails = document.getElementById('illness-details');
    const radioYes = document.getElementById('yesIllness');
    const radioNo = document.getElementById('noIllness');

    illnessDetails.style.display = 'none';      // Hide the menu by default

    // Create function to show or hide the menu
    function toggleIllnessDetails() {
        if (radioYes.checked) {
            illnessDetails.style.display = 'block';
            document.getElementById('illness').setAttribute('required', '');
            document.getElementById('illnessDuration').setAttribute('required', '');
        } else {
            illnessDetails.style.display = 'none';
            document.getElementById('illness').removeAttribute('required', '');
            document.getElementById('illnessDuration').removeAttribute('required', '');
        }
    }

    // Add event listeners to the radio buttons
    radioYes.addEventListener('change', toggleIllnessDetails);
    radioNo.addEventListener('change', toggleIllnessDetails);
});

// Toggle show insurance details

document.addEventListener('DOMContentLoaded', function() {
    const insuranceDetails = document.getElementById('insurance-details');
    const radioYes = document.getElementById('yesInsurance');
    const radioNo = document.getElementById('noInsurance');
    const radioCompany = document.querySelectorAll('input[name="company"]');

    insuranceDetails.style.display = 'none';      // Hide the menu by default

    // Create function to show or hide the menu
    function toggleInsuranceDetails() {
        if (radioYes.checked) {
            insuranceDetails.style.display = 'block';
            document.getElementById('agentName').setAttribute('required', '');
            for (let i = 0; i < radioCompany.length; i++) {
                radioCompany[i].setAttribute('required', '');
            }
        } else {
            insuranceDetails.style.display = 'none';
            document.getElementById('agentName').removeAttribute('required', '');
            for (let i = 0; i < radioCompany.length; i++) {
                radioCompany[i].removeAttribute('required', '');
            }
        }
    }

    // Add event listeners to the radio buttons
    radioYes.addEventListener('change', toggleInsuranceDetails);
    radioNo.addEventListener('change', toggleInsuranceDetails);
});

// Toggle show other insurance details

document.addEventListener('DOMContentLoaded', function() {
    const otherInsuranceDetails = document.getElementById('otherInsurance');
    const radioOther = document.querySelectorAll('input[name="company"]');

    otherInsuranceDetails.style.display = 'none';      // Hide the menu by default

    // Create function to show or hide the menu
    function toggleOtherInsuranceDetails() {
        if (document.getElementById('other').checked) {
            otherInsuranceDetails.style.display = 'block';
            document.getElementById('otherInsurance').setAttribute('required', '');
        } else {
            otherInsuranceDetails.style.display = 'none';
            document.getElementById('otherInsurance').removeAttribute('required', '');
        }
    }

    // Add event listeners to the radio buttons
    radioOther.forEach(radio => {
        radio.addEventListener('change', toggleOtherInsuranceDetails);
    });
});

// Toggle show surgery details

document.addEventListener('DOMContentLoaded', function() {
    const surgeryDetails = document.getElementById('surgery-details');
    const radioYes = document.getElementById('yesSurgery');
    const radioNo = document.getElementById('noSurgery');

    surgeryDetails.style.display = 'none';      // Hide the menu by default

    // Create function to show or hide the menu
    function toggleSurgeryDetails() {
        if (radioYes.checked) {
            surgeryDetails.style.display = 'block';
            document.getElementById('surgeryDetails').setAttribute('required', '');
        } else if (radioNo.checked) {
            surgeryDetails.style.display = 'none';
            document.getElementById('surgeryDetails').removeAttribute('required', '');
        }
    }

    // Add event listeners to the radio buttons
    radioYes.addEventListener('change', toggleSurgeryDetails);
    radioNo.addEventListener('change', toggleSurgeryDetails);
});

// Set the default behavior of the submit button

document.getElementById("user").addEventListener("submit", function(event) {
    var isValid = true;
    if (!isValid) {
        event.preventDefault();
    }
});