document.addEventListener('DOMContentLoaded', function() {
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const message = document.getElementById('message');

    // Генерация случайного числа от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    guessButton.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Пожалуйста, введите число от 1 до 100!';
            return;
        }

        if (userGuess === randomNumber) {
            message.textContent = `Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток!`;
            guessInput.disabled = true;
            guessButton.disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = 'Загаданное число больше!';
        } else {
            message.textContent = 'Загаданное число меньше!';
        }

        guessInput.value = ''; // Очищаем поле ввода
        guessInput.focus();    // Возвращаем фокус на поле
    });

    // Можно также добавить реакцию на нажатие Enter
    guessInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            guessButton.click();
        }
    });
});