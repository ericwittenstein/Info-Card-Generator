// call to import the Employee class file
const Employee = require('./Employee');

// Engineer class, which extends from the Employee class, inherits all properties, contains class-specific github property
class Engineer extends Employee {
    constructor(personName, id, email, github) {
        super(personName, id, email);
        this.github = github;
    }

    // function to return the Engineer-specific github username property
    getGithub() {
        return this.github;
    }

    // this function will override the Employee method of the same name
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;