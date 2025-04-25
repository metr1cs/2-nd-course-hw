// game4.js - Камень, ножницы, бумага (исправленная версия)
document.addEventListener('DOMContentLoaded', function() {
    // Элементы игры
    const modal = document.getElementById('rps-game-modal');
    const closeBtn = document.querySelector('#rps-game-modal .close-modal');
    const rpsButtons = document.querySelectorAll('.rps-choice');
    const resultDiv = document.getElementById('rps-result');
    const playButton = document.querySelector('a[href="#rps-game-modal"]');

    // Варианты выбора с русскими названиями
    const choices = [
        { id: 'rock', name: 'Камень' },
        { id: 'scissors', name: 'Ножницы' },
        { id: 'paper', name: 'Бумага' }
    ];

    // Открытие модального окна
    playButton.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        resultDiv.innerHTML = '';
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Обработка выбора пользователя
    rpsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const userChoiceId = this.dataset.choice;
            const userChoice = choices.find(c => c.id === userChoiceId);
            const computerChoice = getComputerChoice();
            const result = determineWinner(userChoice, computerChoice);

            displayResult(userChoice, computerChoice, result);
        });
    });

    // Получение случайного выбора компьютера
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Определение победителя (исправленная логика)
    function determineWinner(userChoice, computerChoice) {
        if (userChoice.id === computerChoice.id) {
            return 'Ничья!';
        }

        // Правила победы:
        // Камень побеждает ножницы
        // Ножницы побеждают бумагу
        // Бумага побеждает камень
        const winConditions = {
            'rock': 'scissors',     // Камень > Ножницы
            'scissors': 'paper',   // Ножницы > Бумага
            'paper': 'rock'        // Бумага > Камень
        };

        return winConditions[userChoice.id] === computerChoice.id
            ? 'Вы победили!'
            : 'Компьютер победил!';
    }

    // Отображение результата (всегда на русском)
    function displayResult(userChoice, computerChoice, result) {
        resultDiv.innerHTML = `
            <p>Ваш выбор: <strong>${userChoice.name}</strong></p>
            <p>Выбор компьютера: <strong>${computerChoice.name}</strong></p>
            <p class="result-message">${result}</p>
        `;

        // Добавляем класс для стилизации результата
        const resultClass = result.includes('победили') ? 'win' :
            result.includes('Компьютер') ? 'lose' : 'draw';
        resultDiv.querySelector('.result-message').classList.add(resultClass);
    }

    // Закрытие при клике вне окна
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});