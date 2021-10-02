const inquirer = require('inquirer');

function Intern(name, id, email, school, intern) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.role = intern;
};


Intern.prototype.getName = function () {
    console.log("Name: " + this.name);
};
Intern.prototype.getId = function () {
    console.log("ID: " + this.id);
};
Intern.prototype.getEmail = function () {
    console.log("Email: " + this.email);
};
Intern.prototype.getSchool = function () {
    console.log("School: " + this.school);
};
Intern.prototype.getRole = function () {
    return "Intern"
}

module.exports = Intern