



const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

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