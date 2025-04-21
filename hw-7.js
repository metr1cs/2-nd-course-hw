// Задача 1
function toUpperCaseString(inputString) {
    return inputString.toUpperCase();
}
const userInput = prompt("Введите текст:");
console.log(toUpperCaseString(userInput));

// Задача 2
function filterStringsByPrefix(array, prefix) {
    const lowerPrefix = prefix.toLowerCase();

    return array.filter(str =>
        str.toLowerCase().startsWith(lowerPrefix)
    );
}

// Задача 3
const number = 32.58884;

function numbers(number) {
    console.log(Math.floor(number));
    console.log(Math.ceil(number));
    console.log(Math.round(number));
}

numbers(number);

// Задача 4
const arrNumbers = [52, 53, 49, 77, 21, 32];

function arrayMinMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { min, max };
}

const result = arrayMinMax(arrNumbers);
console.log(`Минимальное значение: ${result.min}, Максимальное: ${result.max}`);

// Задача 5
function getRandomNumber(min = 1, max = 10) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    return randomNumber;
}

getRandomNumber();
getRandomNumber(5, 15);

//Задача 6

function generateRandomArray(num) {

    if (!Number.isInteger(num) || num <= 0) {
        console.error("Ошибка: требуется целое положительное число");
        return [];
    }

    const length = Math.floor(num / 2);
    const result = new Array(length);

    for (let i = 0; i < length; i++) {
        result[i] = Math.floor(Math.random() * (num + 1));
    }

    return result;
}
console.log(generateRandomArray(10));

// Задача 7
function getRandomMinMax(min, max) {
    if(!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error('оба параметра должны быть целыми числами')
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateRandomArray(10, 20));

//Задача 8

function printCurrentDate() {
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    const formattedDate = now.toLocaleString('ru-RU', options);

    console.log(`Текущая дата и время: ${formattedDate}`);
}
printCurrentDate();

// Задача 9

function getFutureDate(daysToAdd) {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    return date;
}

const currentDate = new Date();
const futureDate = getFutureDate(73);

console.log('Сегодня:', currentDate.toLocaleDateString('ru-RU'));
console.log('Через 73 дня:', futureDate.toLocaleDateString('ru-RU'));

// Задача 10

function formatRussianDateTime(date) {
    if (!(date instanceof Date)) {
        throw new Error('Параметр должен быть объектом Date');
    }
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const weekdays = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const now = new Date();
console.log(formatRussianDateTime(now));


