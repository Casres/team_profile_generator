



const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        super();
        this.officeNumber = '789';
    };

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager; 