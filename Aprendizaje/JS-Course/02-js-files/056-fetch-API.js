// fetch api

fetch('jsonfile/jinx.json').then(response =>{
    console.log('resolved', response);
   return  response.json();
}).then((data) =>{
    console.log(data);
}).catch((err) =>{
    console.log('rejected',err);
});