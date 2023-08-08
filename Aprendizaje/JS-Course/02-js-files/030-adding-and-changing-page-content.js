// changing text in the dom thru js

const para = document.querySelector('p');
 // console.log(para);
 // para.innerText = 'first change text in js';


const paras = document.querySelectorAll('p');
console.log(paras);
paras.forEach(para =>{
    console.log(para.innerText);
    para.innerText += ' here something new ';
});

 const content = document.querySelector('#dog-man');
// console.log(content.innerHTML)
content.innerHTML += '<h2> HERE SOME NEW STUFF</h2>';


const people = ['ruy', 'clive', 'nancy' ];


people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});