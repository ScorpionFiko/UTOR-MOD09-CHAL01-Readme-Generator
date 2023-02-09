// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (parseInt(license)) {
    case 0:
      return "";
    case 1:
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case 2:
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case 3:
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case 4:
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]";
    case 5:
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case 6:
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
    case 7:
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
    case 8:
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
    case 9:
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]";
    case 10:
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
    case 11:
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]";
    case 12:
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
    case 13:
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
    default:
      return "";
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  switch (parseInt(license)) {
    case 0:
      return "";
    case 1:
      return "(https://opensource.org/licenses/Apache-2.0)";
    case 2:
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case 3:
      return "(https://opensource.org/licenses/MIT)";
    case 4:
      return "(https://opensource.org/licenses/BSD-2-Clause)";
    case 5:
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case 6:
      return "(http://creativecommons.org/publicdomain/zero/1.0/)";
    case 7:
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
    case 8:
      return "(https://opensource.org/licenses/EPL-1.0)";
    case 9:
      return "(https://www.gnu.org/licenses/agpl-3.0)";
    case 10:
      return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case 11:
      return "(https://www.gnu.org/licenses/lgpl-3.0)";
    case 12:
      return "(https://opensource.org/licenses/MPL-2.0)";
    case 13:
      return "(http://unlicense.org/)";
    default:
      return "";
  }

}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === 0 ) {
    return ``;
  }

  return `Please refer to the LICENSE badge at the top of the readme. For more information about the license, please refer to the following link: ${renderLicenseLink(license)}`;
}

// function that renders text of the particular section
// takes in section Title as parameter, the section text, and
// a boolean to check whether the section is the title.
function renderSection(sectionTitle, section, title=false) { 
  if (section === "" ) {
    return ``;
  }
  // formats based on title boolean
  return `#${(title ? ` `:`# ${sectionTitle}\n`)}${section}\n`;
}

// function to render Table of Contents
// does not print sections that are left blank
function renderTOC(data) {
  return `
## Table of Contents
${(data.install !== "")? `- [Installation](#installation)` :``}
${(data.functionality !== "")? `- [Functionality](#functionality)` :``}
${(data.usage !== "")? `- [Usage](#usage)` :``}
${(data.license !== 0)? `- [License](#license)` :``}
${(data.contrib !== "")? `- [Contributing](#contributing)` :``}
${(data.tests !== "")? `- [Tests](#tests)` :``}
${(data.github !== "" || data.email !== "")? `- [Questions](#questions)` :``}
`
}
// function that renders any specific text in the Question section
function renderQuestionSection(data) {
  let message ="";
  if (data.github !== "") {
    message += `View my profile on Github: [${data.github}](https://github.com/${data.github})\n\n`
  }
  if (data.email !== "") {
    message += `Contact me via email: [${data.email}](mailto:${data.email})\n`
  }
  return message;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `${renderSection('title', data.title, true)}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
${renderSection('Description',data.description)}
${renderTOC(data)}

${renderSection('Installation',data.install)}

${renderSection('Functionality',data.functionality)}

${renderSection('Usage',data.usage)}

${renderSection('License',renderLicenseSection(data.license))}

${renderSection('Contributing',data.contrib)}

${renderSection('Tests',data.tests)}

${renderSection('Questions',renderQuestionSection(data))}


`;

}

module.exports = generateMarkdown;
