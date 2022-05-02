



const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        super();
        this.github = 'casres';
    };

    getGitHub() {
        return `www.github.com/${this.github}`;
    };

    getRole() {
        return 'Engineer'
    };
}

module.exports = Engineer;