// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// class Intern extends Employee
class Intern extends Employee {
    constructor(school) {
        super("Ryan", 3, "intern@int.com")
        this.school = school
        this.role = "Intern"
    }; 
    getSchool() {
        return this.school
        console.log(`School: ${this.school}`)
    };
    getRole() {
        return this.role
        console.lof(`RoleL ${this.role}`)
    };
    printInfo() {
        console.log(`The employee's name is ${this.name}.`)
        console.log(`The employee's id is ${this.id}.`)
        console.log(`The employee's email is ${this.email}.`)
        console.log(`School: ${this.school}`)
        console.log(`Role: ${this.role}`)
    }
}
