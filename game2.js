document.addEventListener('DOMContentLoaded', function() {
    const mathModal = document.getElementById('math-game-modal');
    const mathProblem = document.getElementById('math-problem');
    const mathAnswer = document.getElementById('math-answer');
    const mathSubmit = document.getElementById('math-submit');
    const mathResult = document.getElementById('math-result');
    const mathClose = document.getElementById('math-close');

    // Для отслеживания правильных ответов
    let correctAnswers = 0;
    let totalQuestions = 0;

    // Открытие модалки
    document.querySelectorAll('[href="#math-game-modal"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            mathModal.style.display = 'block';
            updateProblem();
        });
    });

    // Закрытие модалки
    mathClose.addEventListener('click', closeMathModal);
    document.querySelector('#math-game-modal .close-modal').addEventListener('click', closeMathModal);

    function closeMathModal() {
        mathModal.style.display = 'none';
    }

    // Генерация задачи
    function generateMathProblem() {
        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        let a, b;

        if (operation === '/' || operation === '*') {
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            if (operation === '/') a = a * b; // Чтобы деление было без остатка
        } else {
            a = Math.floor(Math.random() * 50) + 1;
            b = Math.floor(Math.random() * 50) + 1;
        }

        return { a, b, operation };
    }

    // Проверка ответа
    function checkAnswer() {
        const userAnswer = parseFloat(mathAnswer.value);
        if (isNaN(userAnswer)) {
            mathResult.textContent = 'Пожалуйста, введите число!';
            mathResult.style.color = '#e74c3c';
            return;
        }

        let correctAnswer;
        switch (currentProblem.operation) {
            case '+': correctAnswer = currentProblem.a + currentProblem.b; break;
            case '-': correctAnswer = currentProblem.a - currentProblem.b; break;
            case '*': correctAnswer = currentProblem.a * currentProblem.b; break;
            case '/': correctAnswer = currentProblem.a / currentProblem.b; break;
        }

        totalQuestions++;

        if (Math.abs(userAnswer - correctAnswer) < 0.001) {
            correctAnswers++;
            mathResult.textContent = `✅ Верно! (${correctAnswers}/${totalQuestions})`;
            mathResult.style.color = '#2ecc71';
        } else {
            mathResult.textContent = `❌ Неверно! Правильно: ${correctAnswer} (${correctAnswers}/${totalQuestions})`;
            mathResult.style.color = '#e74c3c';
        }

        setTimeout(updateProblem, 1500);
    }

    // Обновление задачи
    function updateProblem() {
        const { a, b, operation } = generateMathProblem();
        currentProblem = { a, b, operation };
        mathProblem.textContent = `${a} ${operation} ${b} = ?`;
        mathAnswer.value = '';
        mathAnswer.focus();
    }

    // Обработчики событий
    mathSubmit.addEventListener('click', checkAnswer);
    mathAnswer.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkAnswer();
    });

    // Инициализация
    let currentProblem;
    updateProblem();
});