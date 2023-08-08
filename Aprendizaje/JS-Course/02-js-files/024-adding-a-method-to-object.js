// object literals and adding a method to it
// method are funcion difined inside of a object
let user = {

    name: 'johnwick',
    age: 30,
    email: 'johnwick@thehotkey.com',
    location: 'france',
    blogs: [' here i got the new job' , ' because i am lerning this'],
    login:  function () {
        console.log('the user log in');
    },
    logout: function () {
    console.log('user log out');
    },
    logBlogs: function () {
        
    }
};

user.login();
user.logout();


//strind method looks similar

const name = 'mario'
name.toUpperCase();
