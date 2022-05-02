


const Employee = require('../Employee');

test ('this is a test run', () => {
    const employee = new Employee('steven', '12345', 'gmail.com');

    // console.log(employee);
    expect(employee).not.toBeNull();
    expect(employee.name).toBe('steven');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('gmail.com');
});

test('testing get name method', () => {
    const employee = new Employee('Jack');

    expect(employee.getName()).toBe('Jack');
});

test('testing getId method', () => {
    const employee = new Employee('Jack','12345');

    expect(employee.getId()).toBe('12345');
});

test('testing getEmail', () => {
    const employee = new Employee('', '', 'gmail.com');

    expect(employee.getEmail()).toBe('gmail.com');
});

test('testing getRole', () => {
    const employee = new Employee('', '', '', 'Employee');

    expect(employee.getRole()).toBe('Employee');
});

