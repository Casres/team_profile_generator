



const Employee = require('./Employee');

class AssistantManager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber 
    }

    getRole() {
        return 'Manager Assistant';
    };
};

module.exports = AssistantManager; 