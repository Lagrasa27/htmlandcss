// if statements
// const age = 23;
//
// if(age > 20){
//     console.log('you are over 20 years olds');
//
// }
//
// const wars = ['king', 'master', 'horse', 'knigth']
//
// if (wars.length > 4){
//     console.log(" that's a lof of wards going on this year")
// }
//
//

// you can use else to add another rule to the statement
// and you cause else by it self or along with if


const password = 'pasfadadf';

if (password.length >= 12 ){
    console.log('that passowrd is mighty strong');
}else if (password.length >= 8){
    console.log(' that password is long enought !!');
} else {
    console.log('password is not long enough')

}
// example  || meas or and && means AND

const ken = 'ruy and blanca'

if (ken.length >= 12 && ken.includes('k')){
    console.log('this is ken master');
} else if (ken.length >= 8 || ken.includes('k') ){
    console.log('ruy and ken');
}else {
    console.log('game over');
}

