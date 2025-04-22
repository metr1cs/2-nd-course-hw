document.addEventListener('DOMContentLoaded', function() {
    const quizModal = document.getElementById('quiz-modal');
    const quizQuestions = document.getElementById('quiz-questions');
    const quizSubmit = document.getElementById('quiz-submit');
    const quizResult = document.getElementById('quiz-result');
    const quizClose = document.getElementById('quiz-close');

    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 1
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 1
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 1
        }
    ];


    document.querySelectorAll('.cart-5, [href="#product-description-5"], .gamecart__link[href="#quiz-modal"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            quizModal.style.display = 'flex';
            renderQuestions();
        });
    });


    quizClose.addEventListener('click', closeQuizModal);
    quizModal.querySelector('.close-modal').addEventListener('click', closeQuizModal);
    quizModal.addEventListener('click', function(e) {
        if (e.target === quizModal) {
            closeQuizModal();
        }
    });

    function closeQuizModal() {
        quizModal.style.display = 'none';
        quizResult.textContent = '';

        document.querySelectorAll('.quiz-question label').forEach(label => {
            label.style.color = '';
            label.style.fontWeight = '';
        });
    }

    function renderQuestions() {
        if (!quizQuestions) return;

        quizQuestions.innerHTML = '';

        quiz.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quiz-question';
            questionDiv.innerHTML = `
                <h3>Вопрос ${index + 1}: ${q.question}</h3>
                <div class="options-container">
                    ${q.options.map(opt => `
                        <label>
                            <input type="radio" name="question-${index}" value="${opt.split('.')[0].trim()}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            `;
            quizQuestions.appendChild(questionDiv);
        });
    }

    quizSubmit.addEventListener('click', function() {
        let score = 0;
        let allAnswered = true;

        quiz.forEach((q, index) => {
            const selected = document.querySelector(`input[name="question-${index}"]:checked`);
            const options = document.querySelectorAll(`input[name="question-${index}"]`);

            if (!selected) {
                allAnswered = false;
                return;
            }

            options.forEach((option, i) => {
                const label = option.parentElement;
                if (i === q.correctAnswer) {
                    label.style.color = '#2ecc71';
                    label.style.fontWeight = 'bold';
                }
            });

            if (parseInt(selected.value) === q.correctAnswer) {
                score++;
            }
        });

        if (!allAnswered) {
            quizResult.textContent = 'Пожалуйста, ответьте на все вопросы!';
            quizResult.style.color = '#e74c3c';
            return;
        }

        quizResult.textContent = `Вы ответили правильно на ${score} из ${quiz.length} вопросов!`;
        quizResult.style.color = score === quiz.length ? '#2ecc71' : '#e74c3c';

        quizResult.scrollIntoView({ behavior: 'smooth' });
    });
});