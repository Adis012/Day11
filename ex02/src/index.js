// Creat a temps array here
var multiArray = [
    [1,2,3],
    [4,5,6,7],
    [8,9]
];
// End of temps array

multiArray[1];
multiArray[2],[1];

function myArrayFunction(arr) {
    var Temps = [...arr];
    var averageDayTemp = [29.75, 36.75, 33, 41.5, 52.5];
    // Only change code below this line

    // Only change code above this line
    return averageDayTemp;
}

console.log(myArrayFunction(multiArray));
module.exports = (multiArray, myArrayFunction);