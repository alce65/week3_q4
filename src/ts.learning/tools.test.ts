import { add } from './tools';

describe('first', () => {
  test('should first', () => {
    // Arrange
    const a = 3;
    const b = 6;
    const expected = 9;
    // Act
    const result = add(a, b);
    // Assert
    expect(result).toBe(expected);
  });
});
