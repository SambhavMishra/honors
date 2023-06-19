var Employee = /** @class */ (function () {
    function Employee(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    Employee.prototype.GetFullName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    Employee.prototype.GetAge = function () {
        return this.age;
    };
    return Employee;
}());
var emp1 = new Employee('Sambhav', "Mishra", 22);
var fullname = emp1.GetFullName();
console.log(fullname);
