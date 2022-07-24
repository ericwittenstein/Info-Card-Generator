// import the Intern class for testing
const Intern = require('../lib/Intern');

// test for the Intern class
describe('Intern', () => {
    // test for the return of the name
    describe('nameTest', () => {
        it('should return an object with the Intern properties of name, id, email, and school, this test checks for correct name return', () => {
            // constructor for this test
            const obj = new Intern('EricGOOD', 1234, 'ericBAD.wittenstein@gmail.com', 'UGA');

            // expected returns to qualify as a passing test
            expect(obj.personName).toEqual('EricGOOD');
        });
    });

    // test for the return of the id number 
    describe('idTest', () => {
        it('should return an object with the Intern properties of name, id, email, and school, this test checks for correct id return', () => {
            // constructor for this test
            const obj = new Intern('EricBAD', 8675309, 'ericBAD.wittenstein@gmail.com', 'UGA');

            // expected returns to qualify as a passing test
            expect(obj.id).toEqual(8675309);
        });
    });

    // test for the return of the email
    describe('emailTest', () => {
        it('should return an object with the Intern properties of name, id, email, and school, this test checks for correct email return', () => {
            // constructor for this test
            const obj = new Intern('EricBAD', 9876, 'ericGOOD.wittenstein@gmail.com', 'UGA');

            // expected returns to qualify as a passing test
            expect(obj.email).toEqual('ericGOOD.wittenstein@gmail.com');
        });
    });

    // test for the return of the Intern-specific school property
    describe('schoolTest', () => {
        it('should return an object with the Intern properties of name, id, email, and school, this test checks for correct school return', () => {
            // constructor for this test
            const obj = new Intern('EricBAD', 1785, 'ericBAD.wittenstein@gmail.com', 'UNC');

            // expected returns to qualify as a passing test
            expect(obj.school).toEqual('UNC');
        });
    });

    // test for the getName method
    describe('getNameTest', () => {
        it('should return the name property of an Intern object by using the getName method', () => {
            const obj = new Intern('EricGOOD', 6666, 'ericBAD.wittenstein@gmail.com', 'UGA');

            expect(obj.getName()).toEqual('EricGOOD');
        });
    });

    // test for the getID method
    describe('getIdTest', () => {
        it('should return the Id property of an Intern object by using the getId method', () => {
            const obj = new Intern('EricBAD', 2813308004, 'ericBAD.wittenstein@gmail.com', 'UGA');

            expect(obj.getId()).toEqual(2813308004);
        });
    });

    // test for the getEmail method
    describe('getEmailTest', () => {
        it('should return the email property of an Intern object by using the getEmail method', () => {
            const obj = new Intern('EricBAD', 2515, 'ericGOOD.wittenstein@gmail.com', 'UGA');

            expect(obj.getEmail()).toEqual('ericGOOD.wittenstein@gmail.com');
        });
    });

    // test for the getRole method
    describe('getRoleTest', () => {
        it('should return the overriding Intern role by using the getRole method', () => {
            const obj = new Intern('EricBAD', 9123, 'ericBAD.wittenstein@gmail.com', 'UGA');

            expect(obj.getRole()).toEqual('Intern');
        });
    });

    // test for the getSchool method
    describe('getSchoolTest', () => {
        it('should return the Intern-specific school property by using the getSchool method', () => {
            const obj = new Intern('EricBAD', 1357, 'ericBAD.wittenstein@gmail.com', 'UNC');

            expect(obj.getSchool()).toEqual('UNC');
        });
    });
});