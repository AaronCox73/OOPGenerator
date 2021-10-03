
const Employee = require('../lib/Employee.js')

test('creates an employee', () => {
    const employee = new Employee('Jim', 1, 'butthead@gmail.com');
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))

});