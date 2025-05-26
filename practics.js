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

console.log('hello');

let cars = ['volvo', 'bmw', 'audi','mercedes'];
