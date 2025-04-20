document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById('reverse-text-modal');
    const closeBtn = modal.querySelector('.close-modal');
    const reverseBtn = document.getElementById('reverse-btn');
    const textInput = document.getElementById('user-text');
    const resultDiv = document.getElementById('result');

    document.querySelectorAll('.gamecart__link[href="#reverse-text-modal"], .cart-3').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'flex';
            textInput.focus();
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });

    reverseBtn.addEventListener('click', reverseText);
    textInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') reverseText();
    });

    function reverseText() {
        const text = textInput.value.trim();

        if (!text) {
            resultDiv.textContent = 'Пожалуйста, введите текст!';
            resultDiv.style.color = '#e74c3c';
            return;
        }

        const reversed = text.split('').reverse().join('');
        resultDiv.innerHTML = `
            <p><strong>Исходный текст:</strong> ${text}</p>
            <p><strong>Перевернутый текст:</strong> ${reversed}</p>
        `;
        resultDiv.style.color = '#2c3e50';
    }

    function closeModal() {
        modal.style.display = 'none';
        textInput.value = '';
        resultDiv.textContent = '';
    }
});