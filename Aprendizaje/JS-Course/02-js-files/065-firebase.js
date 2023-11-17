
db.collection('Js-course').get().then((snapshot) =>{
    console.log(snapshot);
}).catch(err => {
    console.log(err)
});
