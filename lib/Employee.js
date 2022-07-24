// baseline Employee class for holding all overlapping properties
class Employee {
    constructor(personName, id, email) {
        this.personName = personName;
        this.id = id;
        this.email = email;
    }

    // functions to return the properties 
    getName() {
        return this.personName;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    // function to return the employee's role, this will be overriden in each job title class
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;