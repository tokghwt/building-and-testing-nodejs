const { greet, greet2 } = require('../../../lib/index');

test('greet "everyone"', () => {
  expect(greet('everyone')).toBe('Hello everyone!');
});

test('greet2 "everyone"', () => {
  expect(greet2('everyone')).toBe('Hi everyone!');
});
