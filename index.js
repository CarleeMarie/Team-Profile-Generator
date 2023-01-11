// this file runs the application

const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page_template');
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");




//TODO use constructor functions to create objects that contain properties of employees


// need an action trigger - click on email in the HTML - to start the command line questions

const manager = new Employee();
const intern = new Employee();
const engineer = new Employee();

// call the methods
manager.getID();


// If we want, we can change an object's properties after they're created
// cats.raining = true;
// cats.makeNoise();

// const massHysteria = (dogs, cats) => {
//     if (dogs.raining === true && cats.raining === true) {
//       console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
//     }
//   };
  
//   massHysteria(dogs, cats);
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

(name, id, email)
    
const promptUser = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the employee's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID number?", 
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the employee's email address?",
    }
    // {
    //   type: 'input',
    //   message: 'Please share your LinkedIn profile.',
    //   name: 'LinkedIn URL'
    // },
    // {
    //     type: 'input',
    //     message: 'Please share your GitHub repo link.',
    //     name: 'GitHub URL',
    // }
  ])
  .then((data) => {
    // TODO: Do I need this next line of code??
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;
// TODO: How do you add/write new employees to the same page??
    fs.pageTemplate(filename, pageTemplate(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
