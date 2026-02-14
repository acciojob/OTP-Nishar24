const codes = document.querySelectorAll('.code');

// Pehle box par focus
codes[0].focus();

codes.forEach((code, idx) => {
    // Shuruat mein value reset
    code.value = '';

    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            // Typing forward logic
            codes[idx].value = ''; 
            setTimeout(() => {
                if (idx < codes.length - 1) {
                    codes[idx + 1].focus();
                }
            }, 10);
        } else if (e.key === 'Backspace') {
            // Backspace behavior
            setTimeout(() => {
                if (idx > 0) {
                    codes[idx - 1].focus();
                }
            }, 10);
        }
    });
});