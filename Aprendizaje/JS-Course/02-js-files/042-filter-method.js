// filter method
const scores = [10, 30, 15, 25, 50, 40, 5];

// const filterscore = scores.filter((score) => {
//     return score > 20;
// });

// console.log(filterscore);

const user = [
    {name: 'ken', premium: true},
    {name: 'setsuna', premium: false},
    {name: 'iory', premium: false},
    {name: 'lissandra', premium: true}

];

// becuase is only variable we can shorter even more  from this

// const premiumUsers = user.filter(user =>{
//     return user.premium;
// });

// to this

const premiumUsers = user.filter(user => user.premium);

console.log(premiumUsers);