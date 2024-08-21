//Included packages needed for this application these are required for the application to work
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Created an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for contributing to the project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your valid email address?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide instructions on how to reach you with additional questions:'
    }
];

// Created a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('README file created successfully!');
});
}

// Created a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();
