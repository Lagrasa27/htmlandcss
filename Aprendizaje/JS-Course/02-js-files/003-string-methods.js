//common string methods
let email = 'Kenmario@setsuna.com';

// let result = email.lastIndexOf('n')

// let result = email.slice(0,5); // from where to where slice the argument


// let result = email.substr(4,10) you selced where you want to start.

// let result = email.replace('m', 'p') replace a character and if has the same letter it replace the first one

let key = 'llave maestra'

let masterkey = key;
console.log(masterkey.toUpperCase())

// console.log(result)



// template strings
const title = 'best reads of 2019';
const author = 'mario';
const likes = 30;

//concatenation way
// let result = 'the blog called ' + ' title ' + ' by ' + author + ' has ' + likes + ' likes ';
// console.log(result);


//template string way
let result = `the blog called ${title} by ${author} has ${likes} likes `;
console.log(result);

//creating html templates

let html = `
<h2> ${title} </h2>
<p>by ${author}</p>
<span> This blog has ${likes} </span>`;

console.log(html);


const diddy = 'master key';
const ken   = 'ruy';
const fiora     ='ulti of fiora';

let  leage = `this is the ${diddy} made by ${ken} was the creation of ${fiora}`;
console.log(leage);
