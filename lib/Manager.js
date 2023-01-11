// extends the Employee parent class for the Manager class
// TODO: add officeNumber to properties



class Manager(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName();
    this.getID();
    this.getEmail();
    this.getRole();  // returns 'Manager'
}

module.exports = Manager;