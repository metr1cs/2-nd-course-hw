

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

const changeColorTextEl = document.querySelector('#changeColorText');
const changeColorBtnEl = document.querySelector('#changeColorBtn');

changeColorBtnEl.addEventListener('click', function(){
    changeColorTextEl.style.color = 'bleu';

})


