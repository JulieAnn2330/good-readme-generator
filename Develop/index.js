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
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const generateMarkdown = require('./utils/generateMarkdown');

console.log("Welcome to the Good README Generator. Simply answer the next series of questions to generate a top-notch README.");

// array of questions for user
/*const questions = [ '1. What is the title of your project?',
'2. What was the motivation for creating this project?',
'3. Why did you build this project?',
'4. What problem does it solve?',
'5. What did you learn from this project?',
'6. What makes your project stand out?',
'7. What features does your project have?',
'8. What is your GitHub username?',
'9. What license would you prefer to use? (Choose from list)'
];

questions.forEach(element => {
     console.log(element)
})*/

inquirer.prompt([
     {
     type: 'input',
     name: 'title',
     message: '1. What is the title of your project?',
     },
     {
     type: 'input',
     name: 'motivation', 
     message: '2. What was the motivation for creating this project?',
     },
     {
     type: 'input',
     name: 'build',
     message: '3. Why did you build this project?',
     },
     {
     type: 'input',
     name: 'problem',
     message: '4. What problem does it solve?',
     },
     {
     type: 'input',
     name: 'learn',
     message: '5. What did you learn from this project?',
     },
     {
     type: 'input',
     name: 'standOut',
     message: '6. What makes your project stand out?',
     },
     {
     type: 'input',
     name: 'features',
     message: '7. What features does your project have?',
     },
     {
     type: 'input',
     name: 'git',
     message: '8. What is your GitHub username?',
     },
     {
     type: 'list',
     message: "9. Which license would you prefer to use? (Choose from list)",
     name: 'license',
     choices:[
     'MIT',
     'Apache License 2.0',
     'Boost Software License 1.0',
     'The Unlicense', 
     'GNU AGPLv3', 
     'WTFPL',
     ],     
     }
])

.then(answers => {
     console.log(answers.title),
     console.log(answers.motivation),
     console.log(answers.build),
     console.log(answers.problem),
     console.log(answers.learn),
     console.log(answers.standOut),
     console.log(answers.features),
     console.log(answers.git),
     console.log(answers.license),
     writeToFile('log.txt', (JSON.stringify(answers)), generateMarkdown());
})


function writeToFile(_generateMarkdown, answers) {

     fs.writeFile("log.txt", answers, function(err) {

     if (err) {
       return console.log(err);
     }
   
     console.log("Success!");
   
   });
        }

// function to initialize program
/*function init() {
     inquirer.prompt(message).then((answers) => {
    fs.appendFileSync('README.md'), ('# ' + answers.title) + '\n', function(err) {

         if (err) {
           return console.log(err);
         }
       
         console.log("Success!");
}

})
     
}

// function call to initialize program
init();*/ 


