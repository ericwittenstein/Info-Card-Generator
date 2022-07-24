// import the Employee class for testing
const Employee = require('../lib/Employee');

// test for the Employee class
describe('Employee', () => {
    // test for the return of the name
    describe('nameTest', () => {
        it('should return an object with the Employee properties of name, id, email, this test checks for correct name return', () => {
            // constructor for this test
            const obj = new Employee('EricGOOD', 1234, 'ericBAD.wittenstein@gmail.com');

            // expected returns to qualify as a passing test
            expect(obj.personName).toEqual('EricGOOD');
        });
    });

    // test for the return of the id number 
    describe('idTest', () => {
        it('should return an object with the Employee properties of name, id, email, this test checks for correct id return', () => {
            // constructor for this test
            const obj = new Employee('EricBAD', 8675309, 'ericBAD.wittenstein@gmail.com');

            // expected returns to qualify as a passing test
            expect(obj.id).toEqual(8675309);
        });
    });

    // test for the return of the email
    describe('emailTest', () => {
        it('should return an object with the Employee properties of name, id, email, this test checks for correct email return', () => {
            // constructor for this test
            const obj = new Employee('EricBAD', 9876, 'ericGOOD.wittenstein@gmail.com');

            // expected returns to qualify as a passing test
            expect(obj.email).toEqual('ericGOOD.wittenstein@gmail.com');
        });
    });

    // test for the getName method
    describe('getNameTest', () => {
        it('should return the name property of an Employee object by using the getName method', () => {
            const obj = new Employee('EricGOOD', 6666, 'ericBAD.wittenstein@gmail.com');

            expect(obj.getName()).toEqual('EricGOOD');
        });
    });

    // test for the getID method
    describe('getIdTest', () => {
        it('should return the Id property of an Employee object by using the getId method', () => {
            const obj = new Employee('EricBAD', 2813308004, 'ericBAD.wittenstein@gmail.com');

            expect(obj.getId()).toEqual(2813308004);
        });
    });

    // test for the getEmail method
    describe('getEmailTest', () => {
        it('should return the email property of an Employee object by using the getEmail method', () => {
            const obj = new Employee('EricBAD', 2515, 'ericGOOD.wittenstein@gmail.com');

            expect(obj.getEmail()).toEqual('ericGOOD.wittenstein@gmail.com');
        });
    });

    // test for the getRole method
    describe('getRoleTest', () => {
        it('should return the default employee role by using the getRole method', () => {
            const obj = new Employee('EricBAD', 9123, 'ericBAD.wittenstein@gmail.com');

            expect(obj.getRole()).toEqual('Employee');
        });
    });
});