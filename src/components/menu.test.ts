import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Menu } from './menu';
import { MenuOption } from '../types';

describe('Given Menu component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<div></div>';
    const options: MenuOption[] = [{ path: '/test', label: 'Item de menu' }];
    const menu = new Menu('div', options);
    test('Then it should be instance of Menu', () => {
      expect(menu).toBeInstanceOf(Menu);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('navigation');
      expect(element).toBeInTheDocument();
      const item = screen.getByText(/item/i);
      expect(item).toBeInTheDocument();
    });
  });
});
