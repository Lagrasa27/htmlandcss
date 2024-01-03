
const driver =  60

switch (driver){
    case 100 :
        console.log( 'pass')
        break
     case 90 :
        console.log( 'pass')
        break
     case 80 :
        console.log( 'pass')
        break
     case 70 :
        console.log( 'pass')
        break
     case 60 :
        console.log( 'fail')
        break
     case 50 :
        console.log( 'fail')
        break
    default:{
        console.log(' not evaluated yet')
    }

}



let age = 55;

if (true){
    let age = 60;
    console.log(' first scope', age);

if (true){
    let age = 75;
    console.log( 'second scope', age)
}
}

console.log('global scope', age);


const job = function (){
    console.log('good day')
}

job()