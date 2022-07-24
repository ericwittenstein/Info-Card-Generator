// initial imports for fs, path, inquirerer
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

let employeesArray = [];

// function to create the team manager; NOTE: This will need to run only once, at the beginning of the run
function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Welcome! Please enter the name of the Manager for this project: '
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Please enter the employee ID number for the Manager: '
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter the email address for the Manager: '
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Please enter the office number for the Manager: '
        }
    ]).then(managerAnswers => {
        // initialize a new manager
        const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber);
        // send the manager to the beginning of the employees array
        employeesArray.unshift(manager);
        // call to the add employee function to continue the run
        addEmployee();
    });
};

// function to add an additional employee
function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addAnother',
            message: 'Would you like to add another employee to this team?',
            choices: ['Add Intern', 'Add Engineer', 'No additional employees']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the employee you would like to add: ',
            when: (role) => role.addAnother !== 'No additional employees' //when method checks for prior input and only runs if the user chose to add another employee
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID number for this employee: ',
            when: (role) => role.addAnother !== 'No additional employees'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address for this employee: ',
            when: (role) => role.addAnother !== 'No additional employees'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Please enter the school this Intern attends: ',
            when: (role) => role.addAnother === 'Add Intern' // only runs question when the user chose to add an intern
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter the GitHub username of this Engineer: ',
            when: (role) => role.addAnother === 'Add Engineer' // only runs question when the user chose to add an engineer
        }
    ]).then(employeeInfo => {
        // if the user chose to create an intern
        if (employeeInfo.addAnother === 'Add Intern') {
            const intern = new Intern(employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.internSchool);
            employeesArray.push(intern);
            addEmployee();
        }
        // if the user chose to create an engineer
        else if (employeeInfo.addAnother === 'Add Engineer') {
            const engineer = new Engineer(employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.engineerGithub);
            employeesArray.push(Engineer);
            addEmployee();
        }
        // if the user chose to not add any more employee, go to the sendToHTML method
        else {
            sendToHTML();
        }
    });
};

// functions to write to the HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('The README.md file has now been generated in the same directory level as the project index file. Enjoy!');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
}

// Function call to initialize app
init();