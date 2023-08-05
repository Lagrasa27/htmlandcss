//variables & block scope
// main reson to use let and const is that you can declare new variable inside
// of a code block which will not interfire with the one outside of it
// meaning the global scope  and thats the main advantage.
// many examples down below


let age = 30;

if (true){
    let age = 40;
    let name = 'bowser';
    console.log('inside 1st code block:' , age,name);

    if (true){
        let age = 50;
        console.log('inside 2nd code block:', age)
    }
}



console.log('outside code block:' ,age,name);