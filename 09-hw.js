
// Задача 1
const descriptionEl = document.querySelector('.description');
const btnEl = document.querySelector('#btn');
let originalDiscription = descriptionEl.textContent;

// btnEl.addEventListener('click',function (e){
//     console.log(1);
// })

btnEl.addEventListener('click',function (){
    if (descriptionEl.textContent === ""){
        descriptionEl.textContent = originalDiscription;
    }
    else{
        descriptionEl.textContent = '';
    }
})

// Задача 2

const changeColorTextEl = document.querySelector('#changeColorText');
const changeColorBtnEl = document.querySelector('#changeColorBtn');

changeColorBtnEl.addEventListener('click', function(){
    changeColorTextEl.style.color = 'blue';
})

// Задача 3

const titleEl = document.querySelector('.title');
const addTextBtnEl = document.querySelector('#changeAddText');

addTextBtnEl.addEventListener('click', function(){
    titleEl.textContent = 'Привет, мир!';
})

//Задача 4

const changeDescriptionClass = document.querySelectorAll('.description');
const changeTextBtnEl = document.querySelector('#changeTextBtn');

changeTextBtnEl.addEventListener('click', function(){
    changeDescriptionClass.forEach((changeDescriptionClass) => {
        changeDescriptionClass.textContent = 'Измененный текст';
    })
});

//Задача 5

const descriptionTextEl = document.querySelectorAll('.description');
const btnSomChangeTextEl = document.querySelector('#changeSomTextbtn');

btnSomChangeTextEl.addEventListener('click', function(){
    descriptionTextEl.forEach((changeDescriptionClass) => {
        changeDescriptionClass.textContent = 'Новый текст';
    })
})

//Задача 6

const addBtnEl = document.querySelector('#addElementBtn');
const contentEl = document.querySelector('.content');

addBtnEl.addEventListener('click', function(){
    const addTextElement = document.createElement('h2');
    addTextElement.textContent = 'Новый абзац';
    addTextElement.classList.add('newDescription');
    contentEl.appendChild(addTextElement);

})

// Задача 7

const delitebtnEl = document.querySelector('#delElementBtn');
const removeContentEl = document.querySelector('.newDescription');

delitebtnEl.addEventListener('click', function(){
   const removeTextElement = document.querySelector('.newDescription');
    removeTextElement.remove();
})