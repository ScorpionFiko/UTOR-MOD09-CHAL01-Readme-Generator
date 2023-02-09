// TODO: Include packages needed for this application

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Your name:",
        name: "name",
    }, 
    {
        type: "input",
        message: "Project Name:",
        name: "title",
    },    
    {
        type: "input",
        message: "Description:",
        name: "description",
    }, 
    {
        type: "input",
        message: "Installation:",
        name: "install",
    }, 
    {
        type: "input",
        message: "Functionality:",
        name: "functionality",
    }, 
    {
        type: "input",
        message: "Usage:",
        name: "usage",
    }, 
    {
        type: "rawlist",
        message: "License:",
        name: "license",
        choices: [
            {name: "No license", value: 0 },
            {name: "Apache License 2.0", value: 1 },
            {name: "GNU General Public License v3.0", value: 2 },
            {name: "MIT License", value: 3 },
            {name: "BSD 2-Clause 'Simplified' License", value: 4 },
            {name: "BSD 3-Clause 'New' or 'Revised' License", value: 5 },
            {name: "Boost Software License 1.0", value: 6 },
            {name: "Creative Commons Zero v1.0 Universal", value: 7 },
            {name: "Eclipse Public License 2.0", value: 8 },
            {name: "GNU Affero General Public License v3.0", value: 9 },
            {name: "GNU General Public License v2.0", value: 10 },
            {name: "GNU Lesser General Public License v3.0", value: 11 },
            {name: "Mozilla Public License 2.0", value: 12 },
            {name: "The Unlicense", value: 13 },
            
        ],
        default: 0,
    },
    {
        type: "input",
        message: "Contributions to project:",
        name: "contrib",
    }, 
    {
        type: "input",
        message: "Credit to others:",
        name: "credit",
    }, 
    {
        type: "input",
        message: "Tests:",
        name: "tests",
    }, 
    {
        type: "input",
        message: "Github username:",
        name: "github",
    },
    {
        type: "input",
        message: "Email:",
        name: "email",
    },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs');
    fs.writeFile(fileName, data, 'utf-8', (err) => {
        ((err) ? console.error(err) : console.log(`${fileName} successfully created`));
    });
}



// TODO: Create a function to initialize app
function init() {
    const utils = require('./utils/generateMarkdown.js');
    const myServerApp = require('inquirer');

    myServerApp
    .prompt(questions)
    .then((answers) => {
        writeToFile("./samples/json/readme.json", JSON.stringify(answers))
        writeToFile("./samples/readme/readme.md", generateMarkdown(answers));
    }).catch();
}

// Function call to initialize app
init();
