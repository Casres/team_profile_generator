





const Intern = require('../Intern');

test('testing school', () =>{
    const intern = new Intern();

    expect(intern.school).toBe('UCF');
});

test('testing the getSchool method', () => {
    const intern = new Intern();

    expect(intern.getSchool()).toBe('UCF');
});

test('testing getRole method', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});