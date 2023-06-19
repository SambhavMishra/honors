// Array declaration and initialization 
let students:string[] = ['Aman','Baman','Chaman','Daman'];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

let nums:number[] = [11,22,33,44] 
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);

// Array using for loop 
let arr: string[] = ["Let Us C","Y.Kinetkar", "250"]
let i: any;
for(i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach((i) => {
    console.log(i);
});

for (const key in students) {
    console.log(key);
}

// Array object 
// array_name[:type] = new Array(values)

// let printArr = (array:string[]) => {
//     for (let i in array){
//         console.log(array[i]);
//     }
// }


let arr1:string[] = new Array("Akash","Bakash","Chakash","Dhakash")
// for(let i in arr1) {
//     console.log(arr1[i]);   
// }




// printArr(arr1);

