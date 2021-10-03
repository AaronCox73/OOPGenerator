const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('creates an intern', () => {
    const intern = new Intern('Jake', 420, 'blazeemifyagotem@yahoo.com', 'Harvard', 'Intern');

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
    expect(intern.getRole()).toBe('Intern');
});