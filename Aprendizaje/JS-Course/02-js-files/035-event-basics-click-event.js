//click event

// const button = document.querySelector('button');
//
// button.addEventListener('click', () =>{
//     console.log('you click me');
// });


const items = document.querySelectorAll('li');


// to attach even and how to clycle trough them and get some info back.

// E it call event and record all the event 
items.forEach(item =>{
    item.addEventListener('click', e => {
    // console.log('item clicked');
    //     console.log(e);
    //     console.log(e.target);
    //     console.log(item);
        e.target.style.textDecoration = 'line-through'
    });

});

