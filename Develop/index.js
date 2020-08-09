/* Pseudocode
1. Use node.js
2. Command line application
3. Generate good README
4. Take user input to generate README
5. Input fields?

6. Items needed:
   => a. Title
   => b. Short Description of project explaining what, why and how
   => c. Table of Contents
        => i. Links that will take them to the appropriate spot in the doc
   => d. Installation - provide step by step directions for installation 
   => e. Usage - Provide instructions and examples for use including screenshots
   => f. License - include list of options (MIT, Apache License 2.0, Boost Software License 1.0, The Unlicense, GNU AGPLv3, WTFPL)
        => i. Badges - display badge at top of README - this relates to the license
                1. MIT link = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
                2. Apache Link = [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
                3. Boost Software 1.0 = [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
                4. The Unlicense = [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
                5. GNU AGPLv3 = [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
                6. WTFPL = [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
   => g. Contributing - guidelines on how to do so
   => h. Tests - write tests for application and explain how to run them
   => i. Questions  
        => i. Contact info - link to GitHub username and profile
        => ii. email address with directions on how to reach user with additional questions

7. Optional 
    a. Deployed link
    b. Optional Features tag
    c. Credits - List collaborators and link to their GitHub profile,websites utilized with links and 
                tutorials used with links
 
8. Questions to ask - use prompts:
    a. What is the title of your project?
    b. What was your motiviation?
    c. Why did you build this project (NOT because it was homework)
    d. What problem does it solve?
    e. What did you learn?
    f. What makes your project stand out?
    g. Does it have a lot of features ( if so use Features tag)?
    h. GitHub username
    i. License pref

9. Walk-through Video - use Screencastify
*/

const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

console.log("Welcome to the Good README Generator. Simply answer the next series of questions to generate a top-notch README.");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
     return inquirer.prompt([
          {
          type: 'input',
          name: 'title',
          message: '1. What is the title of your project?'
          },
          {
          type: 'input',
          name: 'description',
          message: '2. Provide a brief description of your project.'
          },
          {
          type: 'input',
          name: 'motivation', 
          message: '3. What was the motivation for creating this project?'
          },
          {
          type: 'input',
          name: 'build',
          message: '4. Why did you build this project?'
          },
          {
          type: 'input',
          name: 'problem',
          message: '5. What problem does it solve?'
          },
                 {
          type: 'input',
          name: 'learn',
          message: '6. What did you learn from this project?'
          },
          {
          type: 'input',
          name: 'standOut',
          message: '7. What makes your project stand out?'
          },
          {
          type: 'input',
          name: 'features',
          message: '8. What features does your project have?'
          },
          {
          type: 'checkbox',
          message: '9. What technologies does your project incorporate?',
          name: 'technology',
          choices: [
               'HTML',
               'CSS',
               'Bootstrap',
               'JavaScript',
               'jQuery',
               'moment.js',
               'API Calls',
               'AJAX',
               'node.js',
               'mySQL',
          ]},
          {
          type: 'input',
          name: 'installation',
          message: '10. Are there any required steps to insall the project?'
          },
          {
          type: 'input',
          name: 'use',
          message: '11. How do you use the project?'
          },
          {
          type: 'input',
          name: 'git',
          message: '12. What is your GitHub username?'
          },
          {type: 'input',
          name: 'email',
          message: '13. Provide your email address for questions or comments.'
          },
          {
          type: 'list',
          message: "14. Which license would you prefer to use?",
          name: 'license',
          choices:[
          { title:'https://opensource.org/licenses/MIT', value: 'MIT' },
          { title: 'https://opensource.org/licenses/Apache-2.0', value: 'Apache License 2.0'},
          { title: 'https://opensource.org/licenses/BSL-1.0', value: 'Boost Software License 1.0'},
          { title: 'https://opensource.org/licenses/unlicense', value: 'The Unlicense'}, 
          { title: 'https://opensource.org/licenses/AGPL-3.0', value: 'GNU AGPLv3'} 
          ],    
          } 
     ])
};

function generateREADME(answers) {
 return `
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Good README Generator</title>
</head>
<body><a name="top"></a>
    <h1>${answers.title}</h1><br>

<hr color= "slateblue" noshade>

<h2>Table of Contents:</h2>
<a href="#description" class="contents">1. Description of Project</><br>
<a href="#technology" class="contents">2. Technologies Used</a><br>
<a href="#use" class="contents">3. How to Use the Project</a><br>
<a href="#contributors" class="contents">4. Contributing</a><br>
<a href="#questions" class="contents">5. Questions or Comments</a><br>
<a href="#license" class="contents">6. License</a><br>
<br>

<hr color= "slateblue" noshade>

<h3 id='description'>Description of Project</h3>
<p>${answers.description}</p><br>
<p>${answers.motivation}</p><br>
<p>${answers.build}</p><br>
<p>${answers.problem}</p><br>
<p>${answers.learn}</p><br>
<p>${answers.standOut}</p><br>
<p>${answers.features}</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='techology'>Technologies Used</h3>
<p>${answers.technology}</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='installation'>Installation</h3>
<p>${answers.installation}</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='use'>How to Use the Project</h3>
<p>${answers.use}</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='contributors'>Contributing to the Project</h3>
<p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='questions'>For Questions or Comments</h3>
<p>Please contact me at ${answers.git } or ${answers.email } for questions or comments.</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='license'>License</h3>
<p>${answers.license}</p>
<a href="#top" id="start">(Back to Top of Page)</a><br>

    
</body>
</html> `;
}

// function to initialize program
async function init() {
    try {
         const answers = await promptUser();

         const readMe = generateREADME(answers);

         await writeFileAsync('README.md', readMe);
         console.log('Successfully written to README.md');
         
    } catch (err) {
         console.log(err);
    }
}

// function call to initialize program
init(); 


