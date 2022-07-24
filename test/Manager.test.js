// import the Manager class for testing
const Manager = require('../lib/Manager');

// test for the Manager class
describe('Manager', () => {
    // test for the return of the name
    describe('nameTest', () => {
        it('should return an object with the Manager properties of name, id, email, and officeNumber, this test checks for correct name return', () => {
            // constructor for this test
            const obj = new Manager('EricGOOD', 1234, 'ericBAD.wittenstein@gmail.com', 66);

            // expected returns to qualify as a passing test
            expect(obj.personName).toEqual('EricGOOD');
        });
    });

    // test for the return of the id number 
    describe('idTest', () => {
        it('should return an object with the Manager properties of name, id, email, and officeNumber, this test checks for correct id return', () => {
            // constructor for this test
            const obj = new Manager('EricBAD', 8675309, 'ericBAD.wittenstein@gmail.com', 66);

            // expected returns to qualify as a passing test
            expect(obj.id).toEqual(8675309);
        });
    });

    // test for the return of the email
    describe('emailTest', () => {
        it('should return an object with the Manager properties of name, id, email, and officeNumber, this test checks for correct email return', () => {
            // constructor for this test
            const obj = new Manager('EricBAD', 9876, 'ericGOOD.wittenstein@gmail.com', 66);

            // expected returns to qualify as a passing test
            expect(obj.email).toEqual('ericGOOD.wittenstein@gmail.com');
        });
    });

    // test for the return of the Manager-specific officeNumber property
    describe('officeNumberTest', () => {
        it('should return an object with the Manager properties of name, id, email, and officeNumber, this test checks for correct officeNumber return', () => {
            // constructor for this test
            const obj = new Manager('EricBAD', 1785, 'ericBAD.wittenstein@gmail.com', 30);

            // expected returns to qualify as a passing test
            expect(obj.officeNumber).toEqual(30);
        });
    });

    // test for the getName method
    describe('getNameTest', () => {
        it('should return the name property of an Manager object by using the getName method', () => {
            const obj = new Manager('EricGOOD', 6666, 'ericBAD.wittenstein@gmail.com', 66);

            expect(obj.getName()).toEqual('EricGOOD');
        });
    });

    // test for the getID method
    describe('getIdTest', () => {
        it('should return the Id property of an Manager object by using the getId method', () => {
            const obj = new Manager('EricBAD', 2813308004, 'ericBAD.wittenstein@gmail.com', 66);

            expect(obj.getId()).toEqual(2813308004);
        });
    });

    // test for the getEmail method
    describe('getEmailTest', () => {
        it('should return the email property of an Manager object by using the getEmail method', () => {
            const obj = new Manager('EricBAD', 2515, 'ericGOOD.wittenstein@gmail.com', 66);

            expect(obj.getEmail()).toEqual('ericGOOD.wittenstein@gmail.com');
        });
    });

    // test for the getRole method
    describe('getRoleTest', () => {
        it('should return the overriding Manager role by using the getRole method', () => {
            const obj = new Manager('EricBAD', 9123, 'ericBAD.wittenstein@gmail.com', 66);

            expect(obj.getRole()).toEqual('Manager');
        });
    });

    // test for the getOfficeNumber method
    describe('getOfficeNumberTest', () => {
        it('should return the Manager-specific officeNumber property by using the getOfficeNumber method', () => {
            const obj = new Manager('EricBAD', 1357, 'ericBAD.wittenstein@gmail.com', 30);

            expect(obj.getOfficeNumber()).toEqual(30);
        });
    });
});