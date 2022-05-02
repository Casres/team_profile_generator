



const generateTeam = team => {
    const generateManager = (manager) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2>Name</h2>
                <h3> <i class="fa-solid fa-briefcase"></i> Manager </h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: </li>
                <li class="list-group-item">Email: </li>
                <li class="list-group-item">Office Number: </li>
            </ul>
        </div>
        `
    };

    const generateEngineer = (engineer) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2>Name</h2>
                <h3> <i class="fa-solid fa-calculator"></i> Engineer </h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: </li>
                <li class="list-group-item">Email: </li>
                <li class="list-group-item">GitHub: </li>
            </ul>
        </div>
        `
    };

    const generateIntern = (intern) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2>Name</h2>
                <h3> <i class="fa-solid fa-mug-hot"></i> Intern</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: </li>
                <li class="list-group-item">Email: </li>
                <li class="list-group-item">School: </li>
            </ul>
        </div>
        `
    };
}


module.exports = team => {
    ` 
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

