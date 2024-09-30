const arr = ['hello', 343, true];

console.log(typeof arr);

console.log(Array.isArray(arr));

// var obj = {
//     name : 'umair',
//     lastName : 'azhar'
// }
// console.log(typeof obj);

// console.log(Array.isArray(obj));

let movies = ['stree2', 'salaar', 'pathan','john Wick', 'spiderman'];

console.log(movies.length); // also goes for strings;

//indexing

console.log(movies[0]); // also works for string;
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]);
console.log(movies[4]);

console.log(movies.indexOf('spiderman'));

console.log(movies[-1]); //wrong method;

console.log(movies.at(-1));// using at function;  // also work for string;

movies[2] = 'james Bond';

console.log(movies);

//slicing

console.log(movies.slice(2));
console.log(movies.slice(1,4));

console.log(movies.slice(-3));

//adding and removing elements

movies.push('Batman'); //adds to the end
movies.unshift('Superman');//adds to the beginning

console.log(movies);


movies.pop();//removes from the end
movies.shift();//removes from the beginning

console.log(movies);

//movies.splice(2,2);                  //remove 2 elements starting from index 2
// movies.splice(2,2, 'Flash', 'bow')  //replace 2 elements starting from index 2
movies.splice(2,0, 'Flash', 'bow')     //insert 2 elements starting from index 2
console.log(movies);





