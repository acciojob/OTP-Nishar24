//your JS code here. If required.
const codeContainer = document.querySelector(".code-container");
const codes = document.querySelectorAll(".code");

// Automatically focus the next input field when a digit is entered
codes.forEach((code, index) => {
  code.addEventListener("input", (e) => {
    if (e.target.value.length === 1 && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  // Handle backspace to focus the previous input field
  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      codes[index - 1].focus();
    }
  });
});