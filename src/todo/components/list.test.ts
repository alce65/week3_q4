import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { List } from './list';
import { repo } from '../data/repo';

jest.mock('../data/repo');

describe('Given List component', () => {
  (repo as jest.Mock).mockReturnValue([{}]);
  describe('When we instantiate', () => {
    document.body.innerHTML = '<div></div>';
    const list = new List('div');
    test('Then it should be instance of List', () => {
      expect(list).toBeInstanceOf(List);
    });

    test('It should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
