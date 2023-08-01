let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25'); even tough it is a string javascript convert that to a number in the background
// console.log(age != 25);
// console.log(age != '25');

// strict comparison  (different types cannot be equal)

console.log(age === 25);
console.log(age === '25'); // this time is falso because witha triple equal is also evaluate the type as well
console.log(age !== 25);
console.log(age !== '25');


// it is better to use triple equal because it provides a more pricise result



