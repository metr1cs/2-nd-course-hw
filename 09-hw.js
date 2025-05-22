
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
    changeColorTextEl.style.color = 'bleu';

})

// Задача 3

const titleEl = document.querySelector('.title');
const addTextBtnEl = document.querySelector('#changeAddText');

addTextBtnEl.addEventListener('click', function(){
    titleEl.textContent = 'Привет, мир!';
})
