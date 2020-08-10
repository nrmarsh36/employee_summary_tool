// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) { 
    if (!name) {
        throw new Error ("You must enter a name.");
    }
    if (!id) {
        throw new Error ("You must enter an ID.");
    }
    if (!email) {
        throw new Error ("You must enter an email address.");
    };
    this.name = name;
    this.id = id;
    this.email = email
    this.role = role
    };
    getName() {
        return this.name
        console.log(`Name: ${this.name}`)
    };
    getId() {
        return this.id
        console.log(`ID: ${this.id}`)
    };
    getEmail() {
        return this.email
        console.log(`Email: ${this.email}`)
    };
    getRole() {
        return ("Employee")
    };
    printInfo() {
        console.log(`The employee's name is ${this.name}.`)
        console.log(`The employee's id is ${this.id}.`)
        console.log(`The employee's email is ${this.email}.`)
    }

}

module.exports = Employee;