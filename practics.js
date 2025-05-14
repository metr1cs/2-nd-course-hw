let obj_1 = {
    name : 'table',
    category_id : 1,
    price : 3000,
};
let obj_2 = {
    name : 'chair',
    category_id : 2,
    price : 1500,
};
let obj_3 = {
    name : 'lamp',
    category_id : 3,
    price : 800,
};
let objects = [obj_1, obj_2, obj_3];

function getObjectsPrice(objects) {
    let totalPrice = 0;
    let a = objects.map(index => totalPrice += index.price);
    let minSumm = Math.min.apply(null, a);
    let maxSumm = Math.max.apply(null, a);
    
    console.log(a);
    console.log('минимальное значение :' + minSumm , 'максимальное значение :' + maxSumm );
}
getObjectsPrice(objects);

//прочитать про map forEach garbage collector js.



function getNumberFibonachi (range){
    let num = [0,1];

    for (let i = num.length ; i < range; i++) {
        let fib = num[i - 2] + num[i - 1]
        num.push(fib);
        console.log(fib);
    }
    console.log(num.includes(range));
    const index = num.indexOf(range=> {console.log(index)});

}
getNumberFibonachi(21);


function getDade (){
    let date = new Date();
    console.log(date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate());
}
getDade();

function getSumm (a , b){
    let sum = a + b;
    console.log(sum);
}
getSumm(5 , 10);

function getName(greeting) {
    let name = prompt("Как тебя зовут?");
    console.log(greeting + ", " + name);
}

getName('Привет');


