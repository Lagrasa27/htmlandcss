// find mehod it find the value in certian array

const scores = [10, 5, 0, 40, 40, 10, 90, 70];

const firstHighscore = scores.find((score) => {
    return score > 50;
});

// that can be simplified as well

// const firstHighscore = scores.find(score =>
//   score > 50
// );

console.log(firstHighscore);

