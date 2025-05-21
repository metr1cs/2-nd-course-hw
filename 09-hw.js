

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