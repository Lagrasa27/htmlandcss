

const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.onreadystatechange);

        if (request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);
        } else if(request.readyState === 4){
            callback('cloud not fetch data', undefined);
        }
    });

    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.send();

};

console.log(1);
console.log(2);
getTodos((err, data) => {
    console.log('call back fired');
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);