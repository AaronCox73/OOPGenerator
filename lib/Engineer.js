const inquirer = require('inquirer');

function Engineer(name, id, email, github, Engineer) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.role = Engineer
}

// inquirer
// .prompt({
//     type: 'text',
//     name: 'name',
//     message: "What is Engineer's name?"
// })
// .then(({ name }) => {
//     this.engineer = new Engineer(name);

//     //this.startNewBattle();
// });


Engineer.prototype.getName = function () {
    console.log("Name: " + this.name)
};
Engineer.prototype.getId = function () {
    console.log("ID: " + this.id)
};
Engineer.prototype.email = function () {
    console.log("Email: " + this.email)
};
Engineer.prototype.getGithub = function () {
    console.log("Github: " + this.github)
};

Engineer.prototype.getRole = function () {
    return "Engineer"
}

module.exports = Engineer