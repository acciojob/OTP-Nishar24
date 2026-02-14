const codes = document.querySelectorAll(".code");

// Auto focus first input
codes[0].focus();

codes.forEach((code, index) => {

  // Forward typing
  code.addEventListener("input", (e) => {
    const value = e.target.value;

    // Allow only digits
    if (!/^\d$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move to next field
    if (index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  // Backspace behavior
  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {

      if (code.value === "" && index > 0) {
        codes[index - 1].focus();
        codes[index - 1].value = "";
      }
    }
  });

});
