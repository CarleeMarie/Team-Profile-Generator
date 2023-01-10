// creates parent Employee class

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName();
    this.getID();
    this.getEmail();
    this.getRole();  // returns 'Employee'
}