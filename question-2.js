// 1. WAP to check if a number is palindrome.
// Palindrome are the numbers whose initial and last digit are similar

let a = 42324;

while (q>p) {
    var p = a[0];
    var q = a[a.length-1];
    if (p === q) {
        p++;
        q--;
    }else{

    }
    
}

// 2. WAP to check if a 3-digit number is armstrong
// armstrong number are the numbers which having the sum of cubes of every digit mention.

let sum = 0;
const number = 404

let temp = number;
while (temp > 0) {
    
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10); 
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}


