// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github, role) {
        super(name, id, email)
        this.github = github;
        // const role = "Engineer"
        // this.role = role
    }; 

    getGithub() {
        console.log(`Github: ${this.github}`)
    };
    getRole() {
        return "Engineer"
    };

}