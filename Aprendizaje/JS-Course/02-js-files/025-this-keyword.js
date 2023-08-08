// object literals

/*
when we have an object and inisde of the object you create a function
in oder to access or invoke that meethod you need to use (this)
and use the normal function method not an arrow function becuase if u use the
arrow funciont when you use the this you getting acces to the global this
not the one inside of the object

and to output each one we can use this example

 */

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
        // console.log(this.blogs);
        console.log('this a method that we can use to access each one');
        this.blogs.forEach(blog => {
            console.log(blog)
        })

    }
};

user.logBlogs();
console.log(this);
