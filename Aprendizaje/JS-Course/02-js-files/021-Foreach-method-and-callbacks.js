// callback & foreach


// we are using a function as an argument which at some point can we call it at
// any givin time

// exmaple 1

/*
const myFunc = (callbackFunc) =>{
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function (value){
    //do something
    console.log(value);
})


 */


// another example

let people = ['ken', 'setsuna', 'clive', 'god', 'thor'];

const logPerson = (person, index) =>{
    console.log(`${index} - Hi there ${person}`);
};


people.forEach(logPerson);

// example

/*
people.forEach( (person,index) => {
    console.log(index,person)

});

 */
