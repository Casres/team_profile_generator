



const Engineer = require('../Engineer');

test('testing the github grab', () =>{
    const engineer = new Engineer('casres');

    expect(engineer.GitHubUserName).toBe('casres');
});

test('testing the getGitHub method', () => {
    const engineer = new Engineer('', 'www.github.com/casres');

    expect(engineer.getGitHub()).toBe('www.github.com/casres');
});

test('this is testing the getRole', () =>{
    const engineer = new Engineer('', '', 'Engineer');

    expect(engineer.getRole()).toBe('Engineer');
});