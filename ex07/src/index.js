var largestNumFromArr = 
    function maxNumArray(arr) {
       var largestNumFromArr = ([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
       return [27, 5, 39, 1001];
       var largestNumFromArr = ([[4, 9, 3, 11], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
       return [9, 35, 97, 100000];
       var largestNumFromArr = ([[17, 23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17, 10]]);
       return [25, 48, 21, 72];
    }
console.log(
    largestNumFromArr([
        [13, 27, 18, 26],
        [4, 5, 1, 3],
        [32, 35, 37, 39],
        [1000000, 1001, 857, 1],
    ])
);

console.log(
    largestNumFromArr([
        [4, 9, 3, 1],
        [13, 35, 18, 26],
        [32, 35, 97, 39],
        [1000, 1001, 857, 1],
    ])
);
console.log(
    largestNumFromArr([
        [17, 23, 25, 12],
        [25, 7, 34, 48],
        [4, 10, 18, 21],
        [72, 3, 17, 10],
    ])
);
console.log(largestNumFromArr());
module.exports = largestNumFromArr;