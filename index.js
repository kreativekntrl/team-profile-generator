const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerArray = [];
const engineerArray = [];
const internArray = [];

//Questions for Manager
function managerPrompt() {
    inquirer
        .prompt([{
                type: "input",
                message: "Enter team Manager name: ",
                name: "name",
            },
            {
                type: "input",
                message: "Enter employee id: ",
                name: "id",
            },
            {
                type: "input",
                message: "Enter email: ",
                name: "email",
            },
            {
                type: "input",
                message: "Enter office number: ",
                name: "officeNumber",
            },
            {
                type: "list",
                message: "Which employee would you like to choose next?",
                choices: ["Engineer", "Intern", "team complete"],
                name: "memberChoice",
            },
        ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            managerArray.push(manager);
            switch (response.memberChoice) {
                case "Engineer":
                    engineerPrompt();
                    break;
                case "Intern":
                    internPrompt();
                    break;
                case "team complete":
                    console.log("your team has been created");
                    break;
                default:
                    console.log("team complete");
            }
            managerArray.forEach(response => {
                const managerCard = `
                <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="bg-danger py-4 mb-5">
            <h1 class="text-center text-white">My Team</h1>
        </header>
        <main>
        <div class="container">
        <div class="row d-flex justify-content-center align-items-center">   
                
        <div class="card m-3 shadow" style="width: 300px">
            <div class="card-header bg-primary text-white">
                <p class="h3 name">${response.name}</p>
                <p class="h4 fas fa-mug-hot mr-1">Manager</p>
            </div>
            <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="font-weight-bold id">ID: ${response.id}</span>
                </li>
                <li class="list-group-item">
                    <span class="font-weight-bold email">Email: ${response.email} </span>
                    <a href=""></a>
                </li>
                <li class="list-group-item">
                    <span class="font-weight-bold office">Office: ${response.officeNumber} </span>
                </li>
            </ul>
            </div>
        </div>
                `
                fs.writeFile("./dist/team.html", managerCard, (err) => err ? console.error(err) : null);
            })
        });
}


// prompt Engineer
function engineerPrompt() {
    inquirer
        .prompt([{
                type: "input",
                message: "Enter Engineer Name:",
                name: "name",
            },
            {
                type: "input",
                message: "Enter Employee id:",
                name: "id",
            },
            {
                type: "input",
                message: "Enter Engineer email address:",
                name: "email",
            },
            {
                type: "input",
                message: "Enter Engineer's Github Username:",
                name: "github",
            },
            {
                type: "list",
                message: "Which employee would you like to choose next?",
                choices: ["Engineer", "Intern", "team complete"],
                name: "memberChoice",
            },
        ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            engineerArray.push(engineer);
            switch (response.memberChoice) {
                case "Engineer":
                    engineerPrompt();
                    break;
                case "Intern":
                    internPrompt();
                    break;
                case "team complete":
                    console.log("your team has been created");
                    break;
                default:
                    console.log("must select a team member");
            }
            engineerArray.forEach(response => {
                const engineerCard = `
                <div class="card m-3 shadow" style="width: 300px">
            <div class="card-header bg-primary text-white">
                <p class="h3 name">${response.name}</p>
                <p class="h4 fas fa-glasses mr-1">Engineer</p>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item">
                        <span class="font-weight-bold id">ID: ${response.id}</span>
                    </li>
                    <li class="list-group-item">
                        <span class="font-weight-bold email">Email: ${response.email} </span>
                        <a href=""></a>
                    </li>
                    <li class="list-group-item">
                        <span class="font-weight-bold github">GitHub: ${response.github} </span>
                        <a href=""></a>
                    </li>
               </ul>
          </div>
        </div>
                `
                fs.appendFile("./dist/team.html", engineerCard, (err) => err ? console.error(err) : null)
            })
        });
}

// Intern Prompt
function internPrompt() {
    inquirer
        .prompt([{
                type: "input",
                message: "Enter Intern Name:",
                name: "name",
            },
            {
                type: "input",
                message: "Enter Employee ID:",
                name: "id",
            },
            {
                type: "input",
                message: "Enter Intern email address:",
                name: "email",
            },
            {
                type: "input",
                message: "Enter Intern's Educational Institution:",
                name: "school",
            },
            {
                type: "list",
                message: "Which employee would you like to choose next?",
                choices: ["Engineer", "Intern", "team complete"],
                name: "memberChoice",
            },
        ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            internArray.push(intern);
            switch (response.memberChoice) {
                case "Engineer":
                    engineerPrompt();
                    break;
                case "Intern":
                    internPrompt();
                    break;
                case "team complete":
                    console.log("your team has been created");
                    break;
                default:
                    console.log("must select a team member");
            }
            internArray.forEach((response) => {
                const internCard = `
                <div class="card m-3 shadow" style="width: 300px">
                <div class="card-header bg-primary text-white">
                    <p class="h3 name">${response.name}</p>
                    <p class="h4 fas fa-user-graduate mr-1">Intern </p>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="font-weight-bold id">ID: ${response.id} </span>
                        </li>
                        <li class="list-group-item">
                            <span class="font-weight-bold email">Email: ${response.email} </span>
                            <a href=""></a>
                        </li>
                        <li class="list-group-item">
                            <span class="font-weight-bold school">School: ${response.school} </span>
                        </li>
                    </ul>
                </div>
            </div>
                `
            fs.appendFile("./dist/team.html", internCard, (err) => err ? console.error(err) : null)
            });
        });
}

//Calls manager function
managerPrompt();