//object literals
// to do that you need to use curly brackets
// where name is  it call a key and where it say jhon wick is value

let user = {

    name: 'johnwick',
    age: 30,
    email: 'johnwick@thehotkey.com',
    location: 'france',
    blogs: [' here i got the new job' , ' because i am lerning this']

};

console.log(user);
console.log(user.name);
// when overwrite value like this example
user.age = 35;
console.log(user.age)

// we can also call the value like this with square bracket
console.log(user['email'])

// and also

user['name'] = 'charlie';
console.log(user['name']);

// type of the what it is 
console.log(typeof user);