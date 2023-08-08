const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.covers.com');
link.innerText = 'let see some sports';

const mssg = document.querySelector('p');

// how to change and modify attribute

console.log(mssg.getAttribute('class'))
mssg.setAttribute('class', 'success')
// you can set a style as well

mssg.setAttribute('style', 'color:green')
