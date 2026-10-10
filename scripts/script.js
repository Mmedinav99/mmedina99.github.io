
"use strict";

// Interactive Welcome Button
const welcomeButton = document.getElementById("welcomeButton");
const interactionMessage = document.getElementById("interactionMessage");

if (welcomeButton && interactionMessage) {

    welcomeButton.addEventListener("click", function () {

        const isHidden = interactionMessage.hidden;

        interactionMessage.hidden = !isHidden;

        if (isHidden) {
            welcomeButton.textContent = "Hide Message";
            welcomeButton.setAttribute("aria-expanded", "true");
        } else {
            welcomeButton.textContent = "Coming Soon";
            welcomeButton.setAttribute("aria-expanded", "false");
        }

    });

}
