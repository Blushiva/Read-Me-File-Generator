
// Created a function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  else {  
    return '';
    }
}

export { renderLicenseBadge };

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
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
