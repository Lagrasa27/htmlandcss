// example

const li = document.querySelector('.person')

let gente = ['ruy', 'ramon', 'jonahtan', 'gicely', 'ken'];

 let html = ``;

gente.forEach(function (personas){
    html += ` <li style= "color: green">${personas} </li>`;

});

li.innerHTML = html;