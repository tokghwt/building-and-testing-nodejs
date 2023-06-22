const { greet } = require('../../../lib/index');

test('greet "everyone"', () => {
  expect(greet('everyone')).toBe('Hello everyone!');
});
