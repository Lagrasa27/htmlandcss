// reduce method  and it return a value

// const scores = [10, 20, 60, 40, 70, 90, 30];
//
// const result = scores.reduce((acc, curr) =>{
//     if (curr > 50){
//         acc++;
//     }
//     return acc;
// }, 0);
//
// console.log(result);
//
//


const scores = [
    {player: 'mario', score: 50},
    {player: 'Ryu', score: 30},
    {player: 'Jinx', score: 70},
    {player: 'mario', score: 60},
    {player: 'mario', score: 50},
    {player: 'Ryu', score: 30},
    {player: 'Jinx', score: 70},
    {player: 'mario', score: 60},
    {player: 'mario', score: 50},
    {player: 'Ryu', score: 30},
    {player: 'Jinx', score: 70},
    {player: 'mario', score: 60}

];

const marioTotal = scores.reduce((acc, curr) =>{
    if (curr.player === 'mario'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(marioTotal);