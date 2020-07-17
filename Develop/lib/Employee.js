// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) { 
    if (!name) {
        throw new Error ("You must enter a name.");
    }
    if (!id) {
        throw new Error ("You must enter an ID.");
    }
    if (!email) {
        throw new Error ("You must enter an email address.");
    }

    this.name = name;
    this.id = id;
    this.email = email
    }

    getName() {
        console.log(`Name: ${this.name}`)
    }

    getId() {
        console.log(`ID: ${this.id}`)
    }

    getEmail() {
        console.log(`Email: ${this.email}`)
    }

    getRole() {
        return Employee
    }
}

module.exports = Employee;