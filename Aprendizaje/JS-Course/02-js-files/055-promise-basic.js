const getTodos = (resource) => {

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.onreadystatechange);

            if (request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject('error result');
            }
        });

        request.open('GET',resource);
        request.send();

    });

};


getTodos('jsonfile/george.json').then (data =>{
    console.log('promise 1 resolved:', data)
    return getTodos('jsonfile/jinx.json');
}).then(data =>{
    console.log('promise 2 resolved:', data);
    return getTodos('jsonfile/mario.json')
}).then(data =>{
    console.log('promise 3 resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});


//promise example

// Example

 // const getSomething = () => {
 //
 //     return new Promise((resolve, reject) =>{
 //         // fetch something
 //         resolve('some data');
 //         // reject('some error');
 //     })
 // };

 // getSomething().then((data) =>{
 //     console.log(data)
 // }, (err) =>{
 //     console.log(err);
 // });

// getSomething().then(data => {
//   console.log(data);
// }).catch(err =>{
//     console.log(err);
// })