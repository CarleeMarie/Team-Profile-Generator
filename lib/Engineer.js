// extends the Employee parent class for the Engineer class
// TODO: add github username to properties
// TODO: add the following method: getGithub()

function Engineer(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName();
    this.getID();
    this.getEmail();
    this.getRole();  // override to return 'Engineer'
}