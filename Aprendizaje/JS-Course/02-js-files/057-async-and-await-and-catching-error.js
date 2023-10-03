// async & await

const getTodos = async () => {

    const response = await fetch('jsonfile/jinx.json');

    if(response.status !==200 ){
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();

    return data;

};

console.log(1)
console.log(2)

getTodos()
    .then(data =>  console.log('resolved', data))
    .catch(err => console.log('rejected', err.message));

console.log(3)
console.log(4)

// this does not interpurt the code because it is a async
