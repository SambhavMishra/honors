// Spread Operator 
let array1 = [11,22,33]
let array2 = [10,20,30];

let copyArray = [...array1] 
console.log('Copied Array: ' + copyArray);

// create new array from existing +array with more new elements
let newArray:any = [...array2,55,66,77]
console.log("New Array: "+newArray);


let mergedArray = [...array1,...array2];
console.log('Merged Array: '+ mergedArray);

let subjects = ['Data Structures','Operating Systems','Object Oriented Programming','Design and Analysis of Algorithms'];
// let [first, second, third, fourth] = subjects 
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);


// let first, second, third, fourth;
// [first, second, third, fourth] = subjects; 
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);

// let first, second, third;
// console.log("Now will print");

// first = subjects[0];
// second = subjects[1];
// third = subjects[2]
// console.log(first);
// console.log(second);
// console.log(third);


// print Subjects using REST parameters
let arr3 = new Array();
[...arr3] = subjects;
console.log(arr3[1]);

let [first,...rest] = subjects;
console.log(first);
console.log(rest);

let arr4 = subjects
console.log(arr4);
