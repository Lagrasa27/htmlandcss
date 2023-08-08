// adding and removing classes

// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('hungrybox')
// content.classList.remove('hungrybox')
//
//

const para = document.querySelectorAll('p');

para.forEach(p =>{
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if (p.textContent.includes('success')){
        p.classList.add('success');
    }
});