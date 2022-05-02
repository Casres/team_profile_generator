








const inquirer = require("inquirer");
const fs = require("fs");
const HTMLTemplate = require("./src/HTMLtemplate");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArr = [];

init();

function init() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "position",
        message: "Would you like to fill a position?",
      },
    ])
    .then(({ position }) => {
      position ? fillPosition() : createHtml();
    });
}

function fillPosition() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'roles',
            message: 'What job would you like to fill?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
    // asking the employee constructor questions to the user
    .then(({roles}) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the employee\'s name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name.');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'id',
                message: 'What is the employee\'s ID # ?',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter an ID #.');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'email',
                message: 'What is the employee\'s email?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter an email');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number of the Manager?',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('Please enter an office number');
                        return false;
                    }
                },
                when: roles == 'Manager'
            },

            {
                type: 'input',
                name: 'GitHub',
                message: 'What is the engineers GitHub?',
                validate: GitHubInput => {
                    if (GitHubInput) {
                        return true;
                    } else {
                        console.log('Please enter the engineers GitHub');
                        return false;
                    }
                },
                when: roles == 'Engineer'
            },

            {
                type: 'input',
                name: 'School',
                message: 'What is the interns school?',
                validate: SchoolInput => {
                    if (SchoolInput) {
                        return true;
                    } else {
                        console.log('Please enter the interns school');
                        return false;
                    }
                },
                when: roles == 'Intern'
            }
        ])
        .then(answers => {
            if (roles == 'Manager') {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                console.log(manager);
                teamArr.push(manager);
            } else if (roles == 'Engineer') {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                teamArr.push(engineer);
            } else {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                teamArr.push(intern);
            }
        })
    })
};
