// sort method
// example 1 - sorting strings alos we con use reverse

const names = [' mario', 'shan-shun', 'charlie', 'guile', 'ken'];
// name sort
// names.sort();
// console.log(names);

// example 2 - sorting nubmer
const scores = [10, 50, 20, 5, 35, 70, 45];
// scores.sort();
// console.log(scores);

// sort funciont order the array and numbers  in letters it put iin
// alphabetic order and numbers from lower to highest

//example 3 - sorting objects

const players = [
    {name: 'mario', score: 20},
    {name: 'zangief', score: 10},
    {name: 'matthew', score: 50},
    {name: 'shawn', score: 30},
    {name: 'bigboy', score: 70}
];

// players.sort((a,b) =>{
// if (a.score > b.score){
//     return -1;
// } else if (b.score > a.score){
//     return 1;
// } else {
//     return 0;
// }
//
// });

//shorter way
players.sort((a, b) => b.score - a.score);


console.log(players);