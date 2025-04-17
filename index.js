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

// Задание 1
function displayUntilStopValue(numberSequence, stopValue = 10) {
    for (const value of numberSequence) {
        console.log(value);
        if (value === stopValue) break;
    }
}

const initialSequence = [1, 5, 4, 10, 0, 3];
displayUntilStopValue(initialSequence);

// Задание 2
function locateValueIndex(dataArray, targetValue) {
    return dataArray.indexOf(targetValue);
}

const numberCollection = [1, 5, 4, 10, 0, 3];
console.log(locateValueIndex(numberCollection, 4));

// Задание 3
function combineWithSeparator(itemsArray, separator = ' ') {
    return itemsArray.join(separator);
}

const digitSeries = [1, 3, 5, 10, 20];
console.log(combineWithSeparator(digitSeries));

// Задание 4
function generateSquareMatrix(dimension, fillValue) {
    return Array(dimension).fill().map(() => Array(dimension).fill(fillValue));
}

const squareGrid = generateSquareMatrix(3, 1);
console.log(squareGrid);

// Задание 5
function appendElements(baseArray, elementsToAppend) {
    baseArray.push(...elementsToAppend);
    return baseArray;
}

const primaryArray = [1, 1, 1];
const modifiedArray = appendElements(primaryArray, [2, 2, 2]);
console.log(modifiedArray);

// Задание 6
function processMixedArray(inputArray) {
    const sortedCopy = [...inputArray].sort();
    return sortedCopy.filter(item => typeof item === 'number');
}

const mixedDataSample = [9, 8, 7, 'a', 6, 5];
const processedOutput = processMixedArray(mixedDataSample);
console.log(processedOutput);

// Задание 7
function numberGuessingGame(validNumbers) {
    const userInput = prompt("Угадайте число от 1 до 10:");

    if (userInput === null) {
        alert("Вы отменили ввод");
        return;
    }

    const guessedValue = Number(userInput);
    if (isNaN(guessedValue)) {
        alert("Пожалуйста, введите число");
        return;
    }

    alert(validNumbers.includes(guessedValue) ? "Угадал!" : "Не угадал");
}

const secretValues = [9, 8, 7, 6, 5];
numberGuessingGame(secretValues);

// Задание 8
function reverseCharacterSequence(text) {
    return text.split('').reverse().join('');
}

const originalText = 'abcdef';
const invertedText = reverseCharacterSequence(originalText);
console.log(invertedText);

// Задание 9
function flattenNestedArrays(array2D) {
    return [].concat(...array2D);
}

const nestedData = [[1, 2, 3], [4, 5, 6]];
const linearData = flattenNestedArrays(nestedData);
console.log(linearData);

// Задание 10
function logAdjacentSums(numSequence) {
    for (let i = 0; i < numSequence.length - 1; i++) {
        const current = numSequence[i];
        const next = numSequence[i + 1];
        console.log(`Сумма элементов ${i} и ${i+1}: ${current + next}`);
    }
}

const randomNumSet = Array.from({length: 5}, () => Math.floor(Math.random() * 10) + 1);
console.log("Сгенерированные числа:", randomNumSet);
logAdjacentSums(randomNumSet);

// Задание 11
function computeSquaredValues(integerList) {
    return integerList.map(x => x ** 2);
}

const inputDigits = [1, 2, 3, 4, 5];
const squaredResults = computeSquaredValues(inputDigits);
console.log(squaredResults);

// Задание 12
function measureWordLengths(wordList) {
    return wordList.map(word => word.length);
}

const fruitNames = ["яблоко", "апельсин", "груша", "лимон"];
const lengthMetrics = measureWordLengths(fruitNames);
console.log(lengthMetrics);

// Задание 13
function extractNegativeValues(integerArray) {
    return integerArray.filter(n => n < 0);
}

const signedNumbers = [1, -2, 3, -4, 5, -6];
const negativeValues = extractNegativeValues(signedNumbers);
console.log(negativeValues);

// Задание 14
function generateRandomIntegers(count, maxValue) {
    return Array.from({length: count}, () => Math.floor(Math.random() * (maxValue + 1)));
}

function selectEvenNumbers(numArray) {
    return numArray.filter(n => n % 2 === 0);
}

const randomIntegers = generateRandomIntegers(10, 10);
const evenIntegers = selectEvenNumbers(randomIntegers);
console.log("Исходные значения:", randomIntegers);
console.log("Чётные значения:", evenIntegers);

// Задание 15
function createRandomDataset(size, minVal, maxVal) {
    return Array.from({length: size}, () =>
        Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal
    );
}

function calculateArithmeticMean(valueSet) {
    const sum = valueSet.reduce((total, num) => total + num, 0);
    return sum / valueSet.length;
}

const dataSample = createRandomDataset(6, 1, 10);
const averageValue = calculateArithmeticMean(dataSample);
console.log("Набор данных:", dataSample);
console.log("Среднее значение:", averageValue);