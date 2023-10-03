const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.onreadystatechange);

        if (request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data );
        } else if(request.readyState === 4){
            callback('cloud not fetch data', undefined);
        }
    });

    request.open('GET',resource);
    request.send();

};


getTodos('jsonfile/george.json',(err, data) => {
    console.log(data);
    getTodos('jsonfile/jinx.json',(err, data) => {
        console.log(data);
        getTodos('jsonfile/mario.json',(err, data) => {
            console.log(data);
        });
    });
});

