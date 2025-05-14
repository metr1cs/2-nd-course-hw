document.addEventListener('DOMContentLoaded', function() {
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const message = document.getElementById('message');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    document.querySelector('.gamecart__link[href=""]').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('guess-number-modal').style.display = 'flex';
    });

    document.querySelector('.close-modal').addEventListener('click', closeModal);

    document.getElementById('close-button').addEventListener('click', closeModal);

    guessButton.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Введите число от 1 до 100!';
            return;
        }

        if (userGuess === randomNumber) {
            message.textContent = `🎉 Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток!`;
            guessButton.disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = 'Загаданное число больше!';
        } else {
            message.textContent = 'Загаданное число меньше!';
        }

        guessInput.value = '';
        guessInput.focus();
    });

    guessInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            guessButton.click();
        }
    });

    function closeModal() {
        document.getElementById('guess-number-modal').style.display = 'none';
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        message.textContent = '';
        guessInput.value = '';
        guessButton.disabled = false;
    }
});
