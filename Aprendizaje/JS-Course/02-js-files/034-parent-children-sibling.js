// to select all element together
// becuase it is a html collection we cant use arry or queryselectorall
// so we turn the html collection into a array

const article  = document.querySelector('article');

// console.log(article.children);
//
// console.log(Array.from(article.children));
// console.log(typeof article);


// one example
// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });

const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
