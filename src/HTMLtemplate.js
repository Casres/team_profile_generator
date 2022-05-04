








var testEmployee = "";

// const generateManager = (manager) => {
//   return `
//     <div class="card" style="width: 18rem;">
//             <div class="card-header">
//                 <h2> <i class="fa-solid fa-briefcase"></i> ${manager.name} </h2>
//                 <h3> <i class="fa-solid fa-briefcase"></i> Manager </h3>
//             </div>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID: ${manager.id} </li>
//                 <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a> </li>
//                 <li class="list-group-item">Office Number: ${manager.officeNumber}  </li>
//             </ul>
//         </div>
//     `;
// };

const generateTeam = (team) => {
  const generateAssistantManager = (AssistantManager) => {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2> ${AssistantManager.name} </h2>
                <h3> <i class="fa-solid fa-briefcase"></i> ${AssistantManager.getRole()} </h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${AssistantManager.getId()} </li>
                <li class="list-group-item">Email: <a href="mailto:${AssistantManager.getEmail()}">${AssistantManager.getEmail()}</a> </li>
                <li class="list-group-item">Office Number: ${AssistantManager.getOfficeNumber()}  </li>
            </ul>
        </div>
        `;
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
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a> </li>
                <li class="list-group-item">GitHub: <a href="www/github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a> </li>
            </ul>
        </div>
        `;
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
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a> </li>
                <li class="list-group-item">School: ${intern.getSchool()} </li>
            </ul>
        </div>
        `;
  };

  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() == "Manager Assistant") {
      testEmployee += generateAssistantManager(team[i]);
    }

    if (team[i].getRole() == "Engineer") {
      testEmployee += generateEngineer(team[i]);
    }

    if (team[i].getRole() == "Intern") {
      testEmployee += generateIntern(team[i]);
    }
  }
  return testEmployee;
};
// manager, <- this goes before team, below
// ${generateManager(manager)} <- this goes above the generateTeam, below
module.exports = (team) => {
  return ` 
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="./style.css">
            <title>Employees</title>
        </head>

        <body>
            <h1 id="title" class="d-flex justify-content-center mt-0">My Team</h1>

            <div class="row d-flex justify-content-around ">
                
                ${generateTeam(team)}
            </div>

        <script src="https://kit.fontawesome.com/da5306b6da.js" crossorigin="anonymous"></script>
        </body>

        </html>
    `;
};
