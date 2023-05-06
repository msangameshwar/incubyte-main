const add = require('./add');

it('Empty string should return 0', () => {
  expect(add('')).toBe(0);
});

it('Two numbers separated by comma should return their sum', () => {
  expect(add('11,2')).toBe(13);
});

it('Single number should return the number', () => {
  expect(add('1')).toBe(1);
});

it('Allow the Add method to handle new lines between numbers (instead of commas)', () => {
  expect(add('1\n2,3')).toBe(6);
});

it('Delimiter can be changed', () => {
  expect(add('//;\n1;2')).toBe(3);
});

it('Ignore greater than 1000', () => {
  expect(add('1,1120')).toBe(1);
});

it('Invalid input', () => {
  expect(add('welcome')).toBe('Invalid Input');
});

it('Ignore character', () => {
  expect(add('1,#,4')).toBe(5);
});

it('Negative inputs throw error', () => {
  expect(add('-1,2')).toThrow();
});
