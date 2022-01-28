const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

 function startQuestions() {
    function buildTeam() {
        inquirer
        .then((userChoice) => {
            switch(userChoice.memberChoice) {
                case "Manager":
                    managerPrompt();
                    break;
                case "Engineer":
                    engineerPrompt();
                    break;
                case "Intern": 
                    internPrompt();
                    break;
                default:
                    console.log("must select a team member");
            }
        })
    }
}