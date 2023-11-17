/*
here we are learning to add the funcion along the prototype
which is very useful
 */

function User(username, email){
    this.username = username;
    this.email = email;
}

User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
};

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
};

// admin how to create an admin in the class and using the call when can
//get the function from the other user
function Admin(username, email){
    User.call(this, username, email);
}
// and this is how the hnerit the controctur from up there

Admin.prototype = Object.create(User.prototype);


// and to add a function the admin as well
Admin.prototype.deleteUser = function(user){
    // delete the user
};

const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk');

console.log(userOne);

userOne.login().logout();