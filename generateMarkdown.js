
// Created a function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
export function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  else {  
    return '';
    }
}

// Created a function that returns the license link
// If there is no license, it returns an empty string

function renderLicenseLink(license) {
  if(license) {
    return `[License](https://choosealicense.com/licenses/${license}) `;
  }
  else {
    return '';
  } 
}

//Created a function that returns the license section of README
// If there is no license, it returns an empty string

function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](https://choosealicense.com/licenses/${license}) license.`;
  } else {
    return '';
  }
}

// Created a function to generate markdown for README
//use the word export to generate the code and see it in the terminal
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents

    [Description](##description)
    [Installation](##installation)
    [Usage](#usage)
    [Contributors](##contributing)
    [Tests](##tests)
    [License](##license)
    [github](##github)
    [email](##email)
    [Questions](##questions)


${renderLicenseSection(data.license)}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributing}
## Tests
${data.tests}
## License
${data.license}
## github
${data.github}
## email
${data.email}
## Questions
${data.questions}`;
}
console.log(generateMarkdown);
export default generateMarkdown;
