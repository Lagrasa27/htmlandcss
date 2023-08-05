//regular function
// const calcArea = function (radius) {
//     return  3.14 * radius **2;
// };

// when we do an arrow function the code is shorter and newer


// arrow function

// in the arrow function when we only have one parameter we can remove
/* the parentesis but if there more than one we need the parentesis
const calcArea = (radius) => {
    return 3.14 * radius **2;
};
this sill works.

    const calcArea = radius => {
    return 3.14 * radius **2;
};

this is even shorter and works

const calcArea = radius => 3.14 * radius **2;

 */

//shorter way to write the code full example
/*
const calcArea = radius => 3.14 * radius **2;


const area = calcArea(5);
console.log('area is:', area);

 */


// const greet = function (){
//     return 'hello, world';
// }

/* another example
const greet = () => 'hello, world';
const result = greet();

console.log(result)

 */


// const bill = function (products, tax){
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     };
//     return total;
// }

const bill =  (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};




console.log(bill([10,15,30,45], 0.5));





