console.log("This is module");

function percentage(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum = sum+element;
    
    });
     return sum/arr.length ;
}

function difference(a,b) {
    if (a>b) {
        return a-b;
    }
    else
     return b-a;
}

module.exports = {
    name1: "Dushyant",
    perc: percentage,
    dif: difference
};
// module.exports = difference;