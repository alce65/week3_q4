import { King } from './king';

describe('Given King class', () => {
  const kingMock = new King('Pepe', 'Pepes', 33, 200);
  describe('When we instantiate it', () => {
    test('Then it should be instance of King', () => {
      expect(kingMock).toBeInstanceOf(King);
    });
    test('Then it should have the supplied properties', () => {
      expect(kingMock).toHaveProperty('name', 'Pepe');
      expect(kingMock).toHaveProperty('isAlive', true);
    });
  });

  describe('When we use talk method', () => {
    test('It should return the character message', () => {
      const expected = 'Vais a morir todos';
      expect(kingMock.talk()).toBe(expected);
    });
  });

  describe('When we use dead method', () => {
    test('It should change isAlive property', () => {
      expect(kingMock).toHaveProperty('isAlive', true);
      kingMock.dead();
      expect(kingMock).toHaveProperty('isAlive', false);
    });
  });
});
