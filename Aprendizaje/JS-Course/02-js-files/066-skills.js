
const driver =  60

switch (driver){
    case 100 :
        console.log( 'pass')
        break
     case 90 :
        console.log( 'pass')
        break
     case 80 :
        console.log( 'pass')
        break
     case 70 :
        console.log( 'pass')
        break
     case 60 :
        console.log( 'fail')
        break
     case 50 :
        console.log( 'fail')
        break
    default:{
        console.log(' not evaluated yet')
    }

}


/*difference between local scope and globla scope  if a variable is not inside of the backet is gobal
* however if it is inside of the bracket  it is local */
let age = 55;

if (true){
    let age = 60;
    console.log(' first scope', age);

if (true){
    let age = 75;
    console.log( 'second scope', age)
}
}

console.log('global scope', age);


// this is a regular function
const job = function (){
    console.log('good day')
}

job()

// in this fuction is not necesary declare a variable in the local bracket such as let area = 3.14
// just put the return word and that will work.
const calArea = function (radius){
    return 3.14 * radius**2
};

const papi = calArea(5);
console.log(papi);


/* arrow funciton  as long as there only one value only you can remove parentesis  and where it says
* retur it is no necesary  and the backet has to ve remore to put in a shooter way  const
calcArea = radius => 3.14 * radius **2* /
* like the sample above
 */

const calarea = radius => 3.14 *radius**2 ;

const hijo = calarea(5)
console.log(hijo);

// another example

// const greet = function (){
//     return 'hello, world';
// };

const greet = ()  =>    'hello, world';
const result = greet();
console.log(result);


// const bill = function (products, tax){
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     };
//     return total;
// }

const bill = (products,tax) =>{
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

let car = ['mercedes', 'audi', 'toyota', 'carmin'];

const deaLer = ( marcas, index) => {
    console.log(`${index} - estas marcas son buenas ${marcas} `);
};

car.forEach(deaLer);