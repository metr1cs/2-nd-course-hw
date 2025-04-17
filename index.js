// // let a = 10;
// // alert(a);
// // a = 20;
// // alert(a);
// //
// // let iPhone = 2007;
// // alert('год выпуска первого iPhone ' + iPhone);
// //
// // let  creatorJS= 'Брендан Эйх'
// // alert('создатель языка JavaScript  ' + creatorJS);
// //
// // const x = 10;
// // const y = 2;
// // alert('сумма чисел а и b = ' + (x+y) + "\n" + 'разность = ' + (x-y) + "\n" + 'произведение = '+ (x * y) + "\n" + 'частное = ' + (x/y));
// //
// // let resalt = 2 ** 5
// // alert('2 в 5й степени = ' + resalt);
// //
// //
// let z = 9;
// let p = 2;
// alert('остаток от деления 9 и 2 = ' + z % p);
//
// let num = 1;
// num +=  5;
// num -=  3;
// num *=  7;
// num /=  3;
// num  = num++ ;
// num = num --;
// alert(num);
//
//
// let age = prompt('Сколько вам лет ?');
// alert(age);
//
// let user = {
//     name:'Mark',
//     age: 18,
//     isAdmin: true,
// }
// console.log(user);
//
// let firstName = prompt ('Как тебя зовут?')
// alert(`Привет, ${firstName} !`);
//
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
//
// let a = '2';
// let b = '3';
// a = +a;
// b = +b;
// alert(a + b);
// console.log(a + b);
//
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
//         console.log('Такого месяца и времени года не существует')
// }
//
// let j = "Привет"
// for (let i = 0; i < 2 ; i++) {
//     console.log(j);
// }
//
//
// for (let k = 1; k <= 5 ; k++) {
//     console.log(k);
// }
//
//
// for (let m = 7; m <= 22 ; m++) {
//     console.log(m);
// }
//
// let obj = {
//     "Коля" : '200',
//     "Вася" : '300',
//     "Петя" : '400',
// }
// for (let key in obj){
//     console.log(`Имя сотрудника ${key} : зарплата ${obj[key]} долларов`);
// }
//
//
//
// let n = 1000;
// let num = 0;
//
// for (; n >= 50; num++) {
//     n = n / 2;
// }
// console.log("Результат деления:", n);
// console.log("Количество итераций:", num);
//
//
// const firstFriday = 5;
// let currentDay = firstFriday;
//
// while (currentDay <= 31) {
//     console.log(`Сегодня пятница, ${currentDay}-е число. Необходимо подготовить отчет.`);
//     currentDay += 7;
// }
//
//
// function min(a, b) {
//     return a <= b ? a : b;
// }
//
// function checkEvenOdd(num) {
//     return num % 2 === 0 ? 'Число четное' : 'Число нечетное';
// }
//
// function printSquare(num) {
//     console.log(num ** 2);
// }
//
// function checkAge() {
//     const age = prompt('Сколько вам лет?');
//
//     if (age === null || age === '') {
//         alert('Вы ничего не ввели');
//     } else if (isNaN(age) || age < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (age >= 0 && age <= 12) {
//         alert('Привет, друг!');
//     } else {
//         alert('Добро пожаловать!');
//     }
// }
//
//
// function multiplyNumbers(a, b) {
//     const numA = Number(a);
//     const numB = Number(b);
//
//     if (isNaN(numA) || isNaN(numB)) {
//         return 'Одно или оба значения не являются числом';
//     }
//
//     return numA * numB;
// }
// //if (typeof a !== 'number' || typeof b !== 'number') {
// //   return 'Одно или оба значения не являются числом';
// // }
//
// function cubeNumber() {
//     const input = prompt('Пожалуйста, введите число');
//
//     if (input === null || input.trim() === '') {
//         return 'Вы ничего не ввели';
//     }
//     const number = Number(input);
//
//     if (isNaN(number)) {
//         return 'Переданный параметр не является числом';
//     }
//     return `${number} в кубе равняется ${number ** 3}`;
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(cubeNumber());
// }
//
// function createCircle(radius) {
//     return {
//         radius,
//         getArea() {
//             return Math.PI * this.radius ** 2;
//         },
//         getPerimeter() {
//             return 2 * Math.PI * this.radius;
//         }
//     };
// }
//
// const circle1 = createCircle(5);
// const circle2 = createCircle(10);

