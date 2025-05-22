document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById('color-game-modal');
    const openModalBtn = document.getElementById('btnColor');
    const closeModalBtn = modal.querySelector('.close-modal');
    const changeColorBtn = document.createElement('button');


    changeColorBtn.textContent = 'Изменить цвет';
    changeColorBtn.classList.add('game-btn');
    modal.querySelector('.modal-content').append(changeColorBtn);


    openModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });


    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    changeColorBtn.addEventListener('click', function() {
        const randomColor = getRandomColor();
        modal.querySelector('.modal-content').style.backgroundColor = randomColor;
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});