interface Person {
    firstname: string; 
    lastname: string; 
    age: number;
    GetFullName();
    GetAge();
}

class Employee implements Person {
    firstname: string; 
    lastname: string;
    age: number;

    GetFullName() {
        return this.firstname + ' ' + this.lastname;
    }

    GetAge() {
        return this.age;
    }

    constructor(firstname:string, lastname:string, age:number) {
        this.firstname = firstname; 
        this.lastname = lastname;
        this.age = age;
    }
}

let emp1 = new Employee('Sambhav',"Mishra",22);
let fullname = emp1.GetFullName();
console.log(fullname);
