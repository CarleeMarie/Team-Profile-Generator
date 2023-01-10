const inquirer = require('inquirer');

//TODO use constructor functions to create objects that contain properties of employees


//TODO set variables for each type of employee and employee objects with desired properties 
// need an action trigger - click on email in the HTML - to start the command line questions

// properties needed
//  email address or the employee
//  GitHub username
//  1. team manager's name
//  2. employee ID
//  3. email address
//  4. office number

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName();
    this.getID();
    this.getEmail();
    this.getRole();
}

function Manager(officeNumber) {
    //overide getRole above to return Engineer

}

function Intern(school) {
    this.getSchool();
    // this.getRole(); override to return Intern
}

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