var monitorsListArray = ["Apple", "Peach", "Berry"]
function myMonitorsFunction(monitorsList) {
    var monitorsList = [["Apple, 1"], ["Peach, 2"], ["Berry, 3"]];


monitorsList = [...arr];
monitorsList = [];
var i;
{
    monitorsList.push ([monitorsListArray[i],i+1]);
}
return monitorsList;

}
myMonitorsFunction(monitorsListArray);
console.log(myMonitorsFunction(monitorsList));
module.exports = myMonitorsFunction;