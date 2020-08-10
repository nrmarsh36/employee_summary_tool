// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");
// class Manager extends Employee
class Manager extends Employee{
    constructor(officeNumber) {
        super("Michael", 0, "manager@mgr.com")
        this.officeNumber = officeNumber
        // const role= "Manager"
        this.role = "Manager"
    }; 
    getOfficeNumber() {
        return this.officeNumber
        console.log(`Office Number: ${this.officeNumber}`)
    };
    getRole() {
        return this.role
        console.log(`Role: ${this.role}`)
    };
    printInfo() {
        console.log(`The employee's name is ${this.name}.`)
        console.log(`The employee's id is ${this.id}.`)
        console.log(`The employee's email is ${this.email}.`)
        console.log(`Office Number: ${this.officeNumber}`)
        console.log(`Role: ${this.role}`)
    }
}

