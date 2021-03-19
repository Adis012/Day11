// Creat an array here
var myArr = [2, 4, 0, 8, 10];
myArr[0];  // 2
myArr[1];  // 4
myArr[2];  // 0
myArr[3];  // 8
myArr[4];  // 10
myArr[2] = 6;
// end of creating an array

function myArrayFunction(myArr) {
    var myItems = [myArr];
     return myArr;
    // Only change code below this line

    // Only change code above this line
}
console.log(myArrayFunction(myArr));
module.exports = (myArr, myArrayFunction);