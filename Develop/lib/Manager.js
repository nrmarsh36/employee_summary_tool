// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber, role) {
        super(name, id, email)
        this.officeNumber = officeNumber
        const role= "Manager"
        this.role = role
    }; 

    role() {
        console.log(`Role: ${this.role}`)
    };
}