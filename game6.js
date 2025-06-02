document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('color-game-modal');
    const openModalBtn = document.getElementById('btnColor');
    const closeModalBtn = modal.querySelector('.close-modal');
    const modalContent = modal.querySelector('.modal-content');

    // Создаем кнопку изменения цвета
    const changeColorBtn = document.createElement('button');
    changeColorBtn.textContent = 'Изменить цвет';
    changeColorBtn.classList.add('game-btn');
    modalContent.appendChild(changeColorBtn);

    // Открытие модалки
    openModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'flex'; // Изменено с 'block' на 'flex'
        modalContent.style.backgroundColor = ''; // Сброс цвета при открытии
    });

    // Закрытие модалки
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Изменение цвета
    changeColorBtn.addEventListener('click', function() {
        modalContent.style.backgroundColor = getRandomColor();
    });

    // Генератор случайного цвета
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Закрытие при клике вне окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});