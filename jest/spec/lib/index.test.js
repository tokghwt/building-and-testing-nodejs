const { greet, greet2, greet3 } = require('../../../lib/index');

test('greet "everyone"', () => {
  expect(greet('everyone')).toBe('Hello everyone!');
});

test('greet2 "everyone"', () => {
  expect(greet2('everyone')).toBe('Hi everyone!');
});

test('greet3 "everyone"', () => {
  expect(greet3('everyone')).toBe('Good morning everyone!');
});
