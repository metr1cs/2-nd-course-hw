
let password = 'пароль';
let addPass = prompt('Введите пароль');


if (password === addPass) {
    console.log('Пароль введен верно ')
    alert('Пароль введен верно')
}
else {
    console.log('Пароль введен неправильно')
    alert('Пароль введен неправильно')
    prompt('Введите пароль');
}