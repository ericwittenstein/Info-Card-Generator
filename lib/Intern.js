// call to import the Employee class file
const Employee = require('./Employee');

// Intern class, which extends from the Employee class, inherits all properties, contains class-specific school property
class Intern extends Employee {
    constructor(personName, id, email, school) {
        super(personName, id, email);
        this.school = school;
    }

    // function to return the Intern-specific school property
    getSchool() {
        return this.school;
    }

    // this function will override the Employee method of the same name
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;