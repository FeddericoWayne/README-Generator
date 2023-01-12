// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markDownBody = require('./utils/generateMarkdown');


// Questions as an array to gather the user's app information
const questions = [
    // To generate user's GitHub profile link
    {
        type: "input",
        name: "username",
        message: "Hey there! What is your GitHub username?"
    },
    // To generate the title section of the README
    {
        type: "input",
        name: "title",
        message: "Great! Now, what is the title of this project?"
    },
    // To generate the description section of the README
    {
        type: "input",
        name: "description",
        message: "Please describe this project:"
    },
    // To generate the installation section of the README
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instruction (ex: installation URL). If none, press enter to move on:"
    },
    // To generate the usage section of the README
    {
        type: "input",
        name: "usage",
        message: "Please enter the usage information of this project. If none, press enter to move on:"
    },
    // To generate the contributing section of the README
    {
        type: "input",
        name: "contribution",
        message: "Please enter any contribution guidelines to help further this project. To move on for now, press enter:"
    },
    // To generate the test section of the README
    {
        type: "input",
        name: "tests",
        message: 'Please enter any test instructions for the users. If none, press enter to move on:'
    },
    // For the user to select which license to use for the app
    {
        type: 'checkbox',
        name: 'license',
        message: "Select which license you'd like for this project:",
        choices: ["MIT","Apache-2.0","GPL-3.0","BSD-2-Clause","BSD-3-Clause","BSD-4-Clause","ISC","The Unlicense","Zlib"]
    },
    // To generate the email link for the question section of the README
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email in case users of this project have questions about it:'
    },

]



// Function to write to the new README file
function writeToFile(fileName,data) {
    // Using node.js built-in fs library
    fs.writeFile(fileName,data,(err) => {
        err ? console.log(err) : console.log("README file successfully generated!")
    })
}

// Function to start the README generation process
function init() {
    // Using the inquirer's prompt function
    inquirer.prompt(questions)
    .then((data) => {
        // Labelling the content of the section as "N/A" if the user decides to skip certain sections of the README
        if (data.installation === "") {
            data.installation = "N/A"
        };

        if (data.usage === "") {
            data.usage = "N/A"
        }

        if (data.contribution === "") {
            data.contribution = "N/A"
        }

        if (data.tests === "") {
            data.tests = "N/A"
        }
        // Callback 
        writeToFile("README.md",markDownBody(data))
        
    })


};

// Function call to initialize app
init();



