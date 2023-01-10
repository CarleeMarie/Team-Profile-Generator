// this file runs the application

const inquirer = require('inquirer');

//TODO use constructor functions to create objects that contain properties of employees


// need an action trigger - click on email in the HTML - to start the command line questions

const manager = new Employee();
const intern = new Employee();
// need option to add an engineer or intern to the team

//  Engineer option gives additional prompts for:
//  1. engineer's name
//  2. employee ID
//  3. email address
//  4. GitHub username

//  Intern option gives additional prompts for:
//' 1. intern's name
//  2. employee ID
//  3. email address
//  4. school

//  When user exits the application, the HTML is generated