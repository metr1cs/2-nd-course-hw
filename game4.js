document.addEventListener('DOMContentLoaded', function() {
    const quizModal = document.getElementById('quiz-modal');
    const quizQuestions = document.getElementById('quiz-questions');
    const quizSubmit = document.getElementById('quiz-submit');
    const quizResult = document.getElementById('quiz-result');
    const closeButtons = document.querySelectorAll('#quiz-modal .close-modal, #quiz-close');

    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["Красный", "Синий", "Зеленый"],
            correctAnswer: 1 // Индекс правильного ответа (0-based)
        },
        {
            question: "Сколько дней в неделе?",
            options: ["Шесть", "Семь", "Восемь"],
            correctAnswer: 1
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["Четыре", "Пять", "Шесть"],
            correctAnswer: 1
        }
    ];

    // Открытие модалки
    document.querySelectorAll('[href="#quiz-modal"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            quizModal.style.display = 'flex';
            renderQuestions();
        });
    });

    // Закрытие модалки
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeQuizModal);
    });

    function closeQuizModal() {
        quizModal.style.display = 'none';
        quizResult.textContent = '';
        resetQuestionStyles();
    }

    // Рендер вопросов
    function renderQuestions() {
        quizQuestions.innerHTML = '';
        quiz.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quiz-question';
            questionDiv.innerHTML = `
                <h3>${q.question}</h3>
                <div class="options-container">
                    ${q.options.map((opt, optIndex) => `
                        <label>
                            <input type="radio" name="question-${index}" value="${optIndex}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            `;
            quizQuestions.appendChild(questionDiv);
        });
    }

    // Проверка ответов
    quizSubmit.addEventListener('click', function() {
        let score = 0;
        let allAnswered = true;

        // Сброс стилей перед проверкой
        resetQuestionStyles();

        quiz.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            const options = document.querySelectorAll(`input[name="question-${index}"]`);

            if (!selectedOption) {
                allAnswered = false;
                highlightUnansweredQuestion(index);
                return;
            }

            // Подсветка правильного ответа
            const correctLabel = options[q.correctAnswer].parentElement;
            correctLabel.classList.add('correct-answer');

            if (parseInt(selectedOption.value) === q.correctAnswer) {
                score++;
                selectedOption.parentElement.classList.add('user-correct');
            } else {
                selectedOption.parentElement.classList.add('user-incorrect');
            }
        });

        if (!allAnswered) {
            quizResult.textContent = 'Пожалуйста, ответьте на все вопросы!';
            quizResult.className = 'error';
            return;
        }

        // Отображение результата
        const percentage = Math.round((score / quiz.length) * 100);
        quizResult.innerHTML = `
            <p>Ваш результат: <strong>${score} из ${quiz.length}</strong></p>
            <p>Процент правильных ответов: <strong>${percentage}%</strong></p>
            ${percentage === 100 ? '🎉 Отличный результат!' : percentage > 50 ? '😊 Хорошо!' : '😢 Попробуйте еще!'}
        `;
        quizResult.className = percentage === 100 ? 'perfect' : percentage > 50 ? 'good' : 'bad';
    });

    // Вспомогательные функции
    function resetQuestionStyles() {
        document.querySelectorAll('.quiz-question label').forEach(label => {
            label.classList.remove('correct-answer', 'user-correct', 'user-incorrect');
        });
    }

    function highlightUnansweredQuestion(index) {
        const questionDiv = document.querySelectorAll('.quiz-question')[index];
        questionDiv.style.border = '2px solid #e74c3c';
        setTimeout(() => {
            questionDiv.style.border = '';
        }, 2000);
    }
});