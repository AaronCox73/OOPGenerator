const Manager = require('../lib/Manager.js');

test('creates a Manager', () => {
    const manager = new Manager('Icky Vicky', 11, 'smellyvic@gov.com', 12, 'Manager');

    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
});