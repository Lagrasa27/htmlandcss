// logical operators - OR || and AND &&


const password = 'pa@adf';

if (password.length >= 12 && password.includes('@')){
    console.log('that passowrd is mighty strong');
}else if (password.length >= 8 || password.includes('@') && password.length >= 5 ){
    console.log(' that password is strong enought !!');
} else {
    console.log('password is not strong enough');

}

// logical NOT (!)

/* when you us the exclamation sign ! you aure switching the value of inside
of the parantesis meaning if the vaule is true it change to false when you put it
in front of the variable*/

let user = false;

if (!user){
    console.log('you must be logged in to continue')

}

console.log(!true)
console.log(!false)

