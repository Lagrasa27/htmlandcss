class User {
    constructor(username, email){
        // this.username = 'mario';
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

/*
now we are goind to see how an adamin can delete a user
 */

class Admin extends User {
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }

    deleteUser(user){
        users = users.filter(u => u.username !== user.username);
        return this; // allow method chaining
    }
}


const userOne = new User('iori', 'iori@jscourse.com');
const userTwo = new User('jax', 'jax@tjscourse.com');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-ninja');


console.log(userThree);

let users = [userOne, userTwo, userThree];

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object





// userOne.login().incScore().incScore().logout()

// userOne.login();
// userOne.logout();
// userTwo.login();
// userTwo.logout();


/*
this used to be the old way to write constructor meethod

function User(username, email){
  this.username = username;
  this.email = email;
  this.login = function(){
    console.log(`${this.username} has logged in`);
  };
}
 */






