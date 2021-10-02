const inquirer = require('inquirer');


function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

Employee.prototype.getName = function () {
    console.log('Name: ' + this.name)
}

Employee.prototype.getId = function () {
    console.log('ID: ' + this.id)
}

Employee.prototype.getEmail = function () {
    console.log('Email: ' + this.email)
}


// write function for getRole 


module.exports = Employee