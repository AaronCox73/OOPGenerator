const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const engineerCard = require('./src/engineercard');
const internCard = require('./src/interncard');
const managerCard = require('./src/managercard');
const template = require('./src/page-template')

const employeeDb = []
inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the Team Manager's name?"
        },
        {
            type: 'number',
            name: 'employeeId',
            message: "What is the Team Manager's Employee Identification number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the Team Manager's Email Address?"
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "What is the Team Manager's office number?"
        },


    ]).then(answer => {
        const manager = new Manager(answer.name, answer.employeeId, answer.email, answer.officeNumber)
        employeeDb.push(manager);
        addEmployee();
    })
function addEmployee() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'addEmployee',
        message: "Would you like to add another Employee?",
    }]).then(answers => {
        if (answers.addEmployee) {
            menu();
        } else {
            generateTeam();
        }
    })
}
function generateTeam() {
    console.log(employeeDb);
    let cards = ""
    for (var i = 0; i < employeeDb.length; i++) {
        if (employeeDb[i].getRole() === "Manager") {
            cards = cards + managerCard(employeeDb[i]);
        }
        if (employeeDb[i].getRole() === "Intern") {
            cards = cards + internCard(employeeDb[i]);
        }
        if (employeeDb[i].getRole() === "Engineer") {
            cards = cards + engineerCard(employeeDb[i]);
        }
    }
    fs.writeFileSync("./Output/index.html", template(cards))
};
function menu() {
    inquirer.prompt([{
        type: 'list',
        name: 'menu',
        message: "Chose which employee you would like to add.",
        choices: ["Engineer", "Intern"]
    }]).then(answers => {
        if (answers.menu === "Engineer") {
            addEngineer();
        } else {
            addIntern();
        }
    })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the Engineer's name?"
            },
            {
                type: 'number',
                name: 'employeeId',
                message: "What is the Engineer's Identification number?"
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the Engineer's  Email Address?"
            },
            {
                type: 'text',
                name: 'github',
                message: "What is the Engineer's github username?"
            },


        ]).then(answer => {
            const engineer = new Engineer(answer.name, answer.employeeId, answer.email, answer.github)
            employeeDb.push(engineer);
            addEmployee();
        })
};

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the Intern's name?"
            },
            {
                type: 'number',
                name: 'employeeId',
                message: "What is the Intern's Identification number?"
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the Intern's Email Address?"
            },
            {
                type: 'text',
                name: 'school',
                message: "What is the School the intern is attending"
            },


        ]).then(answer => {
            const intern = new Intern(answer.name, answer.employeeId, answer.email, answer.school)
            employeeDb.push(intern);
            addEmployee();
        })
}