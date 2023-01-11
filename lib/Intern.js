// extends the Employee parent class for the Intern class
// TODO: add school to properties
// Add the following method: getSchool()

class Intern(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName();
    this.getID();
    this.getEmail();
    this.getRole();  // override to return 'Intern'
    this.getSchool = () => {

    };
}

module.exports = Intern;
