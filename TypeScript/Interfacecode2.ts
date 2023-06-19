interface person {
    name: string;
    age: number;
}

interface Employee extends person {
    gender: string;
    salary: number;
}

interface Developer extends Employee {
    exp: number
}

let empcode = <Employee>{};
empcode.name = 'Sambhav Mishra';
empcode.age = 45;
empcode.gender = 'Male';
empcode.salary = 500000000

// console.log(empcode.name);
// console.log(empcode.age);
// console.log(empcode.gender);
// console.log(empcode.salary);

let dev = <Developer>{};
dev.name = 'Sambhav Mishra'
dev.age = 45;
dev.gender = 'Male'
dev.salary = 50000000
dev.exp = 5;
console.log(dev.name);
console.log(dev.age);
console.log(dev.gender);
console.log(dev.salary);
console.log(dev.exp);

