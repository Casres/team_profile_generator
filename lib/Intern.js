



const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        super();

        this.school = 'UCF';
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
    
};

module.exports = Intern;