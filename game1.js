document.addEventListener('DOMContentLoaded', function() {
    // 1. Получаем элементы
    const modal = document.getElementById('guess-number-modal');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const message = document.getElementById('message');
    const closeButtons = document.querySelectorAll('#guess-number-modal .close-modal, #close-button');

    // 2. Инициализация игры
    let randomNumber;
    let attempts;

    function initGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        message.textContent = '';
        guessInput.value = '';
        guessButton.disabled = false;
        console.log('Загадано число:', randomNumber); // Для теста
    }

    // 3. Открытие модалки
    document.querySelector('.gamecart__link[href="#guess-number-modal"]').addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
        initGame();
        guessInput.focus();
    });

    // 4. Закрытие модалки
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

    // 5. Логика игры
    guessButton.addEventListener('click', checkGuess);
    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkGuess();
    });

    function checkGuess() {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(userGuess)) {
            message.textContent = 'Введите число!';
            message.style.color = 'red';
            return;
        }

        if (userGuess < 1 || userGuess > 100) {
            message.textContent = 'Число должно быть от 1 до 100!';
            message.style.color = 'red';
            return;
        }

        if (userGuess === randomNumber) {
            message.textContent = `🎉 Угадали! Число: ${randomNumber}. Попыток: ${attempts}`;
            message.style.color = 'green';
            guessButton.disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = 'Больше!';
            message.style.color = 'orange';
        } else {
            message.textContent = 'Меньше!';
            message.style.color = 'orange';
        }

        guessInput.value = '';
        guessInput.focus();
    }
});