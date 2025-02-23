//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".code");

    inputs[0].focus(); // Auto-focus on first input field

    inputs.forEach((input, index) => {
        input.addEventListener("input", (event) => {
            if (event.inputType === "insertText") {
                // Move to the next input if a number is entered
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace") {
                if (input.value === "" && index > 0) {
                    // Move focus to the previous input and clear it
                    inputs[index - 1].focus();
                    inputs[index - 1].value = "";
                }
            }
        });
    });

    // Prevent non-numeric characters
    inputs.forEach((input) => {
        input.addEventListener("keypress", (event) => {
            if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
            }
        });
    });
});
