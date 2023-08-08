// object in array

/*
in object when can create an array of object such as

const blog = [
    {title: 'why mack and chesse is so good', likes: 30},
    {title: '10 that i have learned in this course of js', likes:50}
]

console.log(blog)
 */


let user = {

    name: 'johnwick',
    age: 30,
    email: 'johnwick@thehotkey.com',
    location: 'france',
    blogs: [
        //[' here i got the new job' , ' because i am lerning this'],
        {title: 'why mack and chesse is so good', likes: 30},
        {title: '10 that i have learned in this course of js', likes:50}
    ],

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
            console.log(blog.title, blog.likes)
        })

    }
};

user.logBlogs();
console.log(this);