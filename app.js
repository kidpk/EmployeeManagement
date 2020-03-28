const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
​const teamMembers = [] 

const ids = []
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function createManager(){
 //inquire a prompt, ask the user for all the info needed for creating a manger//
 const manager = new Manager (
     name,id,email,officenumber
 )
 teamMembers.push(Manager)
 ids.push(managerid)
 createTeam(); 
}

function createEngineer(){
    const engineer = new Engineer (
        name,id,email,github
    )
    teamMembers.push(Engineer)
    ids.push(engineerid)
    createTeam(); 
}

function createIntern(){
    const intern = new Intern (
        name,id,email,school
    )
    teamMembers.push(Intern)
    ids.push(internid)
    createTeam(); 
}

function createTeam(){
//inquire prompt, do you want to add an engineer or intern? of if done are you ready to build team. 
}
​function buildTeam(){
fs.writeFileSync(outputPath,render(teamMembers),"utf-8")
}
createManager();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
