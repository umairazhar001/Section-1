// global function
function addNums (a,b) {
    var c = a+b;
    // console.log(c);
    
}

addNums(23 , 25);
addNums(236 , 25);
addNums(2367, 25);
addNums(237 , 256);
addNums(23 , 24);

// const nums = (a,b) => {
//     c = a+b;
//     console.log(c);   
// }
// console.log(nums(2,5));
// scoped variable

const getAvg = function (m1, m2, m3){
    var avg = (m1+m2+m3)/3;
    // console.log(avg);
    return avg;
}
const result = getAvg(580,10,15);

// console.log(result);


// scoped variable
const factorial =(n)=> {
    let fact= 1;
    for (let i=2;i<=n;i++){
        fact = fact * i;
    }

    return fact
}
// console.log(factorial());










