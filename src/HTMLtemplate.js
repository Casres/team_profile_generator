
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
var testEmployee = '';

const generateTeam = team => {
    const generateManager = (manager) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2> ${manager.getName()} </h2>
                <h3> <i class="fa-solid fa-briefcase"></i> ${manager.getRole()} </h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()} </li>
                <li class="list-group-item">Email: ${manager.getEmail()} </li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}  </li>
            </ul>
        </div>
        `
    };
    const generateEngineer = (engineer) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2> ${engineer.getName()} </h2>
                <h3> <i class="fa-solid fa-calculator"></i> ${engineer.getRole()} </h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()} </li>
                <li class="list-group-item">Email: ${engineer.getEmail()} </li>
                <li class="list-group-item">GitHub: ${engineer.getGitHub()} </li>
            </ul>
        </div>
        `
    };
    const generateIntern = (intern) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2> ${intern.getName()} </h2>
                <h3> <i class="fa-solid fa-mug-hot"></i> ${intern.getRole()} </h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId()} </li>
                <li class="list-group-item">Email: ${intern.getEmail()} </li>
                <li class="list-group-item">School: ${intern.getSchool()} </li>
            </ul>
        </div>
        `
    };

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() == 'Manager') {
            testEmployee += generateManager(team[i]);
        }

        if (team[i].getRole() == 'Engineer') {
            testEmployee += generateEngineer(team[i]);
        }

        if (team[i].getRole() == 'Intern') {
            testEmployee += generateIntern(team[i]);
        }
    };
    return testEmployee;
};




module.exports = team => {
    return ` 
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="./style.css">
            <title>Document</title>
        </head>

        <body>
            <h1 id="title" class="d-flex justify-content-center mt-0">My Team</h1>

            <div class="row d-flex justify-content-around ">
                ${generateTeam(team)}
            </div>

        <script src="https://kit.fontawesome.com/da5306b6da.js" crossorigin="anonymous"></script>
        </body>

        </html>
    `
}

