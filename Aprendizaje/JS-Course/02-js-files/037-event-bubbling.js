//event bubbling

/* when you have an eventlistener if set to a children it bubbles up
to the parent and so on meaning it keep escaleting up

 */

const ul = document.querySelector('ul')
const button = document.querySelector('button')



button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = ' something new to do ';
      ul.prepend(li);
});

// const items = document.querySelectorAll('li');
// items.forEach(item =>{
//     item.addEventListener('click', e => {
//         console.log('event in LI');
//         // this way can stop the event bubbling up  with stopropagation
//         e.stopPropagation();
//         e.target.remove();
//     });
//
// });

// this is an example of event deligation

ul.addEventListener('click', e =>{
   // console.log('event in UL')
    if (e.target.tagName === "LI"){
        e.target.remove();
    }
})