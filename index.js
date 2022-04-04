// Allows interaction with the inquirer module
const inquirer = require("inquirer");

//Import the `fs` module to enable interaction with the file system
const fs = require("fs");

//Allows functionality with generateMarkdown file
const generateMarkdown = require("./utils/generateMarkdown.js");

//File Name/type to be generated after promts are answered
const fileName = "README.md";


// Questions Array for future Prompts
const questions = [
    {
        type: "input",
        message: "Enter GITHUB project title:",
        name: "title"
    },
    {
        type: "input",
        message: "Enter basic summary of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions:",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter usage instructions:",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter contributions to this project:",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter test instructions:",
        name: "tests"
    },
    {
        type: "list",
        message: "Select a license",
        name: "license",
        choices: [
            "MIT",
            "Apache",
            "Eclipse Public",
            "GNU General Public",
            "Boost Software",
        ]
    },
    {
        type: "input",
        message: "Enter GITHUB user name:",
        name: "username"
    },
    {
        type: "input",
        message: "Enter email address:",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    
    // Create Markdown from data
    const readme = generateMarkdown(data);
    
    // Write Markdown file
    // If successful, Success! will display in console
    fs.writeFile(fileName, readme, function (err) {
        if (err) throw err;
        console.log("Success!");
    });
}

// function to initialize application
function init() {
   
    // inquirer module
    inquirer.prompt(questions).then(function(data) {
         writeToFile(fileName,data)
     })
}

// function call to initialize
init();