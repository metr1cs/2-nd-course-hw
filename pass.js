//
// let password = 'пароль';
// let addPass = prompt('Введите пароль');
//
//
// if (password === addPass) {
//     console.log('Пароль введен верно ')
//     alert('Пароль введен верно')
// }
// else {
//     console.log('Пароль введен неправильно')
//     alert('Пароль введен неправильно')
//     prompt('Введите пароль');
// }
//
//
// let c = prompt('угадайте число ');
// if (c >= 0 && c < 10 ) {
//     alert('Верно')
//     console.log('Верно')
// }
// else {
//     alert('Не верно')
//     console.log('Не верно')
// }
//
//
// let d = prompt('введите первое число');
// let e = prompt('введите второе число')
//
// if (d > 100 || e > 100 ) {
//     console.log('Верно')
// }
// else {
//     console.log('Не верно')
// }

// let a = '2';
// let b = '3';
// a = +a;
// b = +b;
// alert(a + b);
// console.log(a + b);

// let monthNumber = prompt('Введите номер месяца')
//
// switch (+monthNumber) {
//     case 12:
//     case 1 :
//     case 2 :
//         console.log('Зима')
//         alert('Зима');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Весна')
//         alert('Весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Лето')
//         alert('Лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Осень')
//         alert('Осень');
//         break;
//
//     default:
//             console.log('Такого месяца и времени года не существует')
// }

let j = "Привет"
for (let i = 0; i < 2 ; i++) {
    console.log(j);
}


for (let k = 1; k <= 5 ; k++) {
    console.log(k);
}


for (let m = 7; m <= 22 ; m++) {
    console.log(m);
}

let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400',
}
for (let key in obj){
    console.log(`Имя сотрудника ${key} : зарплата ${obj[key]} долларов`);
}



let n = 1000;
let num = 0;

for (; n >= 50; num++) {
    n = n / 2;
}
console.log("Результат деления:", n);
console.log("Количество итераций:", num);


const firstFriday = 5;
let currentDay = firstFriday;

while (currentDay <= 31) {
    console.log(`Сегодня пятница, ${currentDay}-е число. Необходимо подготовить отчет.`);
    currentDay += 7;
}