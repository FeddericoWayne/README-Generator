// Function that returns a license badge based on which license is passed in
// If no license is selected by the user, an empty string is returned
function renderLicenseBadge(data) {

  // If Statement to generate license badge at top of README file
  if (data.license[0] === "MIT") {
    return '<img src="https://img.shields.io/badge/license-MIT-yellow?style=plastic">'
  } else if (data.license[0] === "Apache-2.0") {
    return '<img src="https://img.shields.io/badge/license-Apache--2.0-blue?style=plastic">'
  } else if (data.license[0] === "GPL-3.0") {
    return '<img src="https://img.shields.io/badge/license-GPL--3.0-orange?style=plastic">'
  } else if (data.license[0] === "BSD-2-Clause") {
    return '<img src="https://img.shields.io/badge/license-BSD--2--Clause-green?style=plastic">'
  } else if (data.license[0] === "BSD-3-Clause") {
    return '<img src="https://img.shields.io/badge/license-BSD--3--Clause-green?style=plastic">'
  } else if (data.license[0] === "BSD-4-Clause") {
    return '<img src="https://img.shields.io/badge/license-BSD--4--Clause-green?style=plastic">'
  } else if (data.license[0] === "ISC") {
    return '<img src="https://img.shields.io/badge/license-ISC-red?style=plastic">'
  } else if (data.license[0] === "The Unlicense") {
    return '<img src="https://img.shields.io/badge/license-The%20Unlicense-yellowgreen?style=plastic">'
  } else if (data.license[0] === "Zlib") {
    return '<img src="https://img.shields.io/badge/license-Zlib-lightgrey?style=plastic">'
  } else {
    return ""
  }


}

// Function that returns the license link 
// If no license if selected by the user, an empty string is returned
function renderLicenseLink(data) {
  // If statement to determine if user selected any license
  if (data.license[0] === "MIT" || data.license[0] === "Apache-2.0" || data.license[0] === "GPL-3.0" || data.license[0] === "BSD-2-Clause" || data.license[0] === "BSD-3-Clause" || data.license[0] === "BSD-4-Clause" || data.license[0] === "ISC" || data.license[0] === "The Unlicense" || data.license[0] === "Zlib") {
    // Template literal for the generated license link
    return "### [License](#License)"
  } else {
    return ""
  }
  
}; 

// Function that returns the license section of the README file
// If no license is selected by the user, an empty string is returned
function renderLicenseSection(data) {

  // If statement to determine if user selected any license
  if (data.license[0] === "MIT" || data.license[0] === "Apache-2.0" || data.license[0] === "GPL-3.0" || data.license[0] === "BSD-2-Clause" || data.license[0] === "BSD-3-Clause" || data.license[0] === "BSD-4-Clause" || data.license[0] === "ISC" || data.license[0] === "The Unlicense" || data.license[0] === "Zlib") {
    // Template literal for the generated license section
    return `***

  ## <a id="License">License</a>
  
  This App is covered under the ${data.license} license.

  `
  } else {
    return ""
  }

}

// Function that generates the markdown for README file
function generateMarkdown(data) {

  // Template literal for the README file 
  return `# ${data.title.toUpperCase()}  ${renderLicenseBadge(data)}

  ## <a id="Description">Description</a> 

    ${data.description}

***

  ## Table of Content

  ### [Description](#Description)
  ### [Installation](#Installation)
  ### [Usage](#Usage)
  ${renderLicenseLink(data)}
  ### [Contributing](#Contributing)
  ### [Tests](#Tests)
  ### [Questions](#Questions)

***

  ## <a id="Installation">Installation</a>

  ${data.installation}

***

  ## <a id="Usage">Usage</a>

  ${data.usage}

${renderLicenseSection(data)}
***

  ## <a id="Contributing">Contributing</a>

  ${data.contribution}

***

  ## <a id="Tests">Tests</a>

  ${data.tests}

***

  ## <a id="Questions">Questions</a>

  For more info on my work, please check out my GitHub page at: https://github.com/${data.username.toLowerCase()}
  
  Should you have any further questions regarding this App, please don't hesitate to reach out to me via email at: <a href="mailto:${data.email}">${data.email}</a>

  
`;
};

// Making the generateMarkdown function accessible to index.js
module.exports = generateMarkdown;


