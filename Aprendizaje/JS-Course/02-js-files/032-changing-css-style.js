// changing style in js

const tittle = document.querySelector('h1')

// tittle.setAttribute('style', 'maring: 50px;');

console.log(tittle.style);
console.log(tittle.style.color);

tittle.style.margin = '50px';
tittle.style.margin = ''; // this way you can remove a style
tittle.style.color = 'darkblue';
tittle.style.fontSize = ' 80px';
