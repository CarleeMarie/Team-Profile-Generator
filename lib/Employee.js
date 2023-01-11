// creates parent Employee class

class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    present() {
        return this.name + this.id + this.email;
    }
    // this.getName = () => {
        // if (this.raining === true) {
        //     console.log(this.noise);
        //   }
    // };
    this.getID = () => {

    };
    this.getEmail = () => {

    };
    this.getRole = () => {

    };  // returns 'Employee'
}

module.exports = Employee;