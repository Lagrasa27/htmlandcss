// returning values
/*
when we are returning a value  we have to use a let o cost outside of the code
braket otherwise, when we call the variable it won't show in the global look up
only in the local one which was created
 */

/*
different between codes.

const calcArea = function (radius) {
    let area = 3.14 * radius **2;
    return area;


const area = calcArea(5);
console.log(area);

}
 */


const calcArea = function (radius) {
    return  3.14 * radius **2;

};

const area = calcArea(5);
console.log(area);