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