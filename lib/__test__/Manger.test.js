





const Manager = require('../Manager');
const Manger = require('../Manager');

test('testing office', () => {
    const manager = new Manager('789');

    expect(manager.officeNumber).toBe('789');
});

test('testing getRole method', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});