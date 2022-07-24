// call to import the Employee class file
const Employee = require('./Employee');

// Manager class, which extends from the Employee class, inherits all properties, and contains class-specific officeNumber property
class Manager extends Employee {
    constructor(personName, id, email, officeNumber) {
        super(personName, id, email);
        this.officeNumber = officeNumber;
    }

    // function to return the Manager-specific office number property
    getOfficeNumber() {
        return this.officeNumber;
    }

    // this function will override the Employee method of the same name
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;