



const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        super();
        this.GitHubUserName = 'casres';
    };

    getGitHub() {
        return `www.github.com/${this.GitHubUserName}`;
    };

    getRole() {
        return 'Engineer'
    };
}

module.exports = Engineer;