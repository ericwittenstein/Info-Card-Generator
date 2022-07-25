// initial imports for fs, path, inquirerer
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

let employeesArray = [];

// function to create the team manager upon program start; NOTE: This will need to run only once, at the beginning of the run
function init() {
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
}

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
            employeesArray.push(engineer);
            addEmployee();
        }
        // if the user chose to not add any more employee, go to the sendToHTML method
        else {
            sendToHTML();
        }
    });
}

// function to create the employee info card for the employee at the specified index of the employeesArray
function createEmployeeCard(employee) {
    switch (employee.getRole()) {
        case "Intern":
            return `
            <div class="card m-5 shadow" style="width: 25rem;">
                <div class="text-white" style="background-color: #4B9CD3;">
                    <h5 class="card-title m-2">${employee.personName}</h5>
                    <h5 class="card-text m-2">Intern</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item"><a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.school}</li>
                </ul>
            </div>`;

        case "Engineer":
            return `
            <div class="card m-5 shadow" style="width: 25rem;">
                <div class="text-white" style="background-color: #4B9CD3;">
                    <h5 class="card-title m-2">${employee.personName}</h5>
                    <h5 class="card-text m-2">Engineer</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item"><a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></li>
                    <li class="list-group-item">Github: ${employee.github}</li>
                </ul>
            </div>`;
    }
}

// function to check if any employee cards need to be creates, and if so, passes the employee from the employeesArray to the createEmployeeCard function, which will create the html for the card, and then that text is returned and added to the overall text for return to the createInfoCards function
function checkForEmployees() {
    if (employeesArray.length > 1) {
        // creates the employeeCards variable which will hold the collective text of all employee info cards
        let employeeCards = createEmployeeCard(employeesArray[1]);
        for (let i = 2; i < employeesArray.length; i++) {
            employeeCards += createEmployeeCard(employeesArray[i]);
        }
        return employeeCards;
    } else {
        return '';
    }
}

// function to create the html text for the info cards, the first of which will be the manager followed by however many employees there are. i decided to do the employee cards seperate since it's not guarenteed that the user inputs anything
function createInfoCards() {
    return `
    <div class="card m-5 shadow" style="width: 25rem;">
            <div class="text-white" style="background-color: #4B9CD3;">
                <h5 class="card-title m-2">${employeesArray[0].personName}</h5>
                <h5 class="card-text m-2">Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">id: ${employeesArray[0].id}</li>
                <li class="list-group-item"><a href="mailto: ${employeesArray[0].email}" target="_blank">${employeesArray[0].email}</a></li>
                <li class="list-group-item">office number: ${employeesArray[0].officeNumber}</li>
            </ul>
    </div>

        ${checkForEmployees()}
    `
}

// function to create the html text that will be passed into the WriteFile function
function generateHTML() {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Team Contact Info Cards</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid p-3 text-white" style="background-color: #13294b;">
        <div class="container">
            <h2 class="display-5 text-center">Project Team Contact Information</h2>
        </div>
    </div>

    <div class="d-flex flex-wrap justify-content-around mt-3">
        ${createInfoCards()}
    </div>
</body>

</html>`
}

// functions to write to the HTML file
function sendToHTML() {
    return fs.writeFile('./dist/index.html', generateHTML(), (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('The contact information for this team can be found in the index.html file located inside the "dist" folder');
        }
    });
}

// Function call to initialize app
init();