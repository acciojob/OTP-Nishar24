const codes = document.querySelectorAll('.code');

// Pehle field par auto-focus
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            // Number enter hone par value clear karke aage badho
            codes[idx].value = '';
            setTimeout(() => codes[idx + 1].focus(), 10);
        } else if (e.key === 'Backspace') {
            // Backspace par piche wale field par jao
            setTimeout(() => codes[idx - 1].focus(), 10);
        }
    });
});