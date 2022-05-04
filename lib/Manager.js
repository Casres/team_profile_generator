



const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // grabs from the super constructor 
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber 
    }

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager; 