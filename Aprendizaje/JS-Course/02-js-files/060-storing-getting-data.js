//store data in local storage
localStorage.setItem('name', 'ken')
localStorage.setItem('jesus', '50')

// get data from local storage
let name = localStorage.getItem('name');
let jesus = localStorage.getItem('jesus');
console.log(name);
console.log(jesus);


// updating data
localStorage.setItem('name', 'setsuna');

name = localStorage.getItem('name');

name = localStorage.getItem('name');
console.log(name);


// delete data from local storage
// localStorage.removeItem('name');

// remo all item from local storage

localStorage.clear();

name = localStorage.getItem('name');

console.log(name);