// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
// class Engineer extends Employee
class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email)
        this.github = github;
        // const role = "Engineer"
    }; 
    getGithub() {
        return this.github
        console.log(`Github: ${this.github}`)
    };
    getRole() {
        return ("Engineer")
        console.log(`Role: ${this.role}`)
    };
    printInfo() {
        console.log(`The employee's name is ${this.name}.`)
        console.log(`The employee's id is ${this.id}.`)
        console.log(`The employee's email is ${this.email}.`)
        console.log(`Github: ${this.github}`)
        console.log(`Role: ${this.role}`)
    }
};

