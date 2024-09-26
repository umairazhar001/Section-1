
// 1. WAP if number is perfect square **************


function isPerfectSquare(num) {

    if (num <= 0 || typeof num !== "number") {
        return false;
    }

    for (let i = 1; i * i <= num; i++) {
        if (i * i === num) {
            return true;
        }
    }

    return false;
}


const number1 = 16;
const number2 = 9;
const number3 = 15;
const number4 = 49;

// console.log(`${number1} is perfect square:
//    ${isPerfectSquare(number1)}`);
// console.log(`${number2} is perfect square:
//    ${isPerfectSquare(number2)}`);
// console.log(`${number3} is perfect square:
//    ${isPerfectSquare(number3)}`);
// console.log(`${number4} is perfect square:
//    ${isPerfectSquare(number4)}`);


// 2. WAP to give grade according to marks *************

let num = 76;


if(num >= 80 && num <= 100){
    console.log('A grade')
}
else if(num >= 60 && num <=79){
    console.log('B grade')
}
else if(num >= 40 && num <=59){
    console.log('C grade')
}else{
    console.log('F grade');
    
}


// 3. WAP to check if a number is negative, positive or zero *********


let n = 0;

if (n > 0) {
    console.log('number if positive')
}

else if (n < 0) {
    console.log('number if negative')
}

else {
    console.log('number is zero')
}



// 4. WAP to check if a triangle is equilateral, Isosceles or scalene **********


var side1 = 12;
var side2 = 7;
var side3 = 14;


	if (Number.isNaN(side1 + side2 + side3)) {
		
		return "Invalid Values! The Length of the sides should only be in numbers";
	} else if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
		
		return "Invalid Values! The sum of the length of any two sides of a triangle should always exceed the length of the third";
	} else {
		if (side1 == side2 && side2 == side3) {
			
			return console.log("The Triangle is EQUILATERAL");
            
		} else if (side1 == side2 || side2 == side3) {
			 
			return  console.log("The triangle is ISOSCELES");
            
		} else {
			
			return console.log("The triangle is SCALENE");
            
		}
	}

