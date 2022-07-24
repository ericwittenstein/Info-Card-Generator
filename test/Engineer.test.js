// import the Engineer class for testing
const Engineer = require('../lib/Engineer');

// test for the Engineer class
describe('Engineer', () => {
    // test for the return of the name
    describe('nameTest', () => {
        it('should return an object with the Engineer properties of name, id, email, and github, this test checks for correct name return', () => {
            // constructor for this test
            const obj = new Engineer('EricGOOD', 1234, 'ericBAD.wittenstein@gmail.com', 'ericgitBAD');

            // expected returns to qualify as a passing test
            expect(obj.personName).toEqual('EricGOOD');
        });
    });

    // test for the return of the id number 
    describe('idTest', () => {
        it('should return an object with the Engineer properties of name, id, email, and github, this test checks for correct id return', () => {
            // constructor for this test
            const obj = new Engineer('EricBAD', 8675309, 'ericBAD.wittenstein@gmail.com', 'ericgitBAD');

            // expected returns to qualify as a passing test
            expect(obj.id).toEqual(8675309);
        });
    });

    // test for the return of the email
    describe('emailTest', () => {
        it('should return an object with the Engineer properties of name, id, email, and github, this test checks for correct email return', () => {
            // constructor for this test
            const obj = new Engineer('EricBAD', 9876, 'ericGOOD.wittenstein@gmail.com', 'ericgitBAD');

            // expected returns to qualify as a passing test
            expect(obj.email).toEqual('ericGOOD.wittenstein@gmail.com');
        });
    });

    // test for the return of the Engineer-specific github property
    describe('githubTest', () => {
        it('should return an object with the Engineer properties of name, id, email, and github, this test checks for correct github return', () => {
            // constructor for this test
            const obj = new Engineer('EricBAD', 1785, 'ericBAD.wittenstein@gmail.com', 'ericgitGOOD');

            // expected returns to qualify as a passing test
            expect(obj.github).toEqual('ericgitGOOD');
        });
    });

    // test for the getName method
    describe('getNameTest', () => {
        it('should return the name property of an Engineer object by using the getName method', () => {
            const obj = new Engineer('EricGOOD', 6666, 'ericBAD.wittenstein@gmail.com', 'ericgitBAD');

            expect(obj.getName()).toEqual('EricGOOD');
        });
    });

    // test for the getID method
    describe('getIdTest', () => {
        it('should return the Id property of an Engineer object by using the getId method', () => {
            const obj = new Engineer('EricBAD', 2813308004, 'ericBAD.wittenstein@gmail.com', 'ericgitBAD');

            expect(obj.getId()).toEqual(2813308004);
        });
    });

    // test for the getEmail method
    describe('getEmailTest', () => {
        it('should return the email property of an Engineer object by using the getEmail method', () => {
            const obj = new Engineer('EricBAD', 2515, 'ericGOOD.wittenstein@gmail.com', 'ericgitBAD');

            expect(obj.getEmail()).toEqual('ericGOOD.wittenstein@gmail.com');
        });
    });

    // test for the getRole method
    describe('getRoleTest', () => {
        it('should return the overriding Engineer role by using the getRole method', () => {
            const obj = new Engineer('EricBAD', 9123, 'ericBAD.wittenstein@gmail.com', 'ericgitBAD');

            expect(obj.getRole()).toEqual('Engineer');
        });
    });

    // test for the getGithub method
    describe('getGithubTest', () => {
        it('should return the Engineer-specific github property by using the getGithub method', () => {
            const obj = new Engineer('EricBAD', 1357, 'ericBAD.wittenstein@gmail.com', 'ericgitGOOD');

            expect(obj.getGithub()).toEqual('ericgitGOOD');
        });
    });
});