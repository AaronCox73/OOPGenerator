const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates an engineer', () => {
    const engineer = new Engineer('Jeff', 1243, 'idiotjerkidit@hotmail.com', 'Githubtube', 'Engineer');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer')
});


