// adding a removing element

const ul = document.querySelector('ul')
// ul.remove();

const button = document.querySelector('button')


//append but the tag at the botoom
//prepend puts it in the top
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = ' something new to do ';
    // ul.append(li);
    ul.prepend(li);
});

const items = document.querySelectorAll('li');
items.forEach(item =>{
    item.addEventListener('click', e => {
        // e.target.style.textDecoration = 'line-through'
        e.target.remove();
    });

});
