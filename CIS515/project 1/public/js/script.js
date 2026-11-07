
document.addEventListener("DOMContentLoaded", function () {
    console.log("Job Application Tracker website loaded successfully.");

    // Bootstrap contact form validation
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            contactForm.classList.add("was-validated");
        });

        // Reset validation styling when the form is cleared
        contactForm.addEventListener("reset", function () {
            window.setTimeout(function () {
                contactForm.classList.remove("was-validated");

                contactForm.querySelectorAll(".form-control").forEach(function (field) {
                    field.classList.remove("is-valid", "is-invalid");
                });
            }, 0);
        });
    }

    // Display submitted values on the confirmation page
    const submittedFields = {
        submittedName: "name",
        submittedEmail: "email",
        submittedSubject: "subject",
        submittedMessage: "message"
    };

    const hasConfirmationFields = Object.keys(submittedFields).some(function (id) {
        return document.getElementById(id) !== null;
    });

    if (hasConfirmationFields) {
        const params = new URLSearchParams(window.location.search);

        Object.entries(submittedFields).forEach(function ([elementId, parameterName]) {
            const element = document.getElementById(elementId);

            if (element) {
                element.textContent = params.get(parameterName) || "Not provided";
            }
        });
    }
});
