const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fileName = "README.md";


// Questions Array
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
    fs.writeFile(fileName, readme, function (err) {
        if (err) throw err;
        console.log("Success!");
    });
}

// function to initialize program
function init() {
   
    // inquirer module
    inquirer.prompt(questions).then(function(data) {
         writeToFile(fileName,data)
     })
}

// function call to initialize program
init();