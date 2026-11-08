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

                contactForm
                    .querySelectorAll(".form-control")
                    .forEach(function (field) {

                        field.classList.remove(
                            "is-valid",
                            "is-invalid"
                        );

                    });

            }, 0);

        });

    }

});