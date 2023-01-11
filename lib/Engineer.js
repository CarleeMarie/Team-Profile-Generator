// extends the Employee parent class for the Engineer class
// TODO: add github username to properties
// add the following method: getGithub()
const Engineer = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.getGithub = gitHub;
    }
    show() {
        return this.present() + this.gitHub;
    }
    
    // this.getRole();  // override to return 'Engineer'
    // this.getGithub = () => {

    };

        // to print to screen in HTML
    // mycar = new Model("Ford", "Mustang");
    // document.getElementById("demo").innerHTML = mycar.show();
}

module.exports = Engineer;