const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];

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
            team.push(manager);
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
            team.push(engineer);
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
            team.push(intern);
            console.log(team);
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
            team.forEach((response) => {
                console.log(response);
            });
        });
}

//Calls manager function
managerPrompt();