// badge function
function badge(license){
  return `![Badge](https://img.shields.io/badge/License-${license}-blueviolet)`
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.description}
  
  ${badge(data.license)}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## License
  The application is covered under the ${data.license} license.
  ## Questions
  **Github Username:** ${data.username}
  **Github Profile:** www.github.com/${data.username}/
  
  **Email Address:** ${data.email}
`;
}

// Export Markdown File
module.exports = generateMarkdown;