const userOne = {
    username: 'setsuna',
    email: 'ryu@jscourse.com',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
    username: 'chun-li',
    email: 'chun.li@jscourse.com',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
};

// const userThree = new User('shaun', 'shaun@thenetninja.co.uk');