// submit event

/* when you attach a eventlistener in a form which has the submit button
the actual eventlistener it most be attach to the form not the submit button
 */

const form = document.querySelector('.signup-form');
const feedback = document.querySelector(`.feedback`);
const usernamePattern = /^[a-zA-z]{6,12}$/;
// const username = document.querySelector('#username');

// we can use id or name to refrence in the form  and get those value

//preventdefault action
form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    // console.log(form.username.value);

// });

// validation

const username = form.username.value;



if(usernamePattern.test(username)){
    //good feed back info
    feedback.textContent = 'that username is valid';
} else {
    //feedback help info
    feedback.textContent = 'username must cointan letter only ';
}
});

//validation always is gion to be with double //
//and to star it shoudl be with ^ and the to finish with $



//live feedback.
form.username.addEventListener('keyup', e =>{
    console.log(e);
    // console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)){
        form.username.setAttribute('class','success');

    } else {
        form.username.setAttribute('class','error');
    }

});
