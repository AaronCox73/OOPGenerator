const inquirer = require('inquirer');

function Manager(name, id, email, officeNumber, Manager) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.role = Manager;
}

Manager.prototype.getName = function () {
    console.log("Name: " + this.name);
};
Manager.prototype.getId = function () {
    console.log("ID: " + this.id);
};
Manager.prototype.getEmail = function () {
    console.log("Email: " + this.email);
};
Manager.prototype.getOfficeNumber = function () {
    console.log("Office Number: " + this.officeNumber);
};

Manager.prototype.getRole = function () {
    return "Manager"
}

module.exports = Manager
