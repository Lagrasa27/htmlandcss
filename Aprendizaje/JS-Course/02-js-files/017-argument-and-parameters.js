// arguments & parameters

// the order of the argument mus match the order of the parameters
// you can also pre determe the value of the function in the parameter
//default value
// eventought you set a default value in the parameter you can still overwirte
// in the value when you invoke the funcion and write an argument
const speak = function (time = 'night',name = 'mario'){
    console.log(`good ${time} ${name}`);
};

speak()
speak('afternoon')

