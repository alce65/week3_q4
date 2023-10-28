import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { Footer } from './footer';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<div></div>';
    const footer = new Footer('div');
    test('Then it should be instance of Footer', () => {
      expect(footer).toBeInstanceOf(Footer);
      expect(footer).toHaveProperty('selector', 'div');
      expect(footer).toHaveProperty('template');
      expect(footer.element).toBeInstanceOf(HTMLElement);
    });

    test('It should be in the document', () => {
      const element = screen.getByRole('contentinfo');
      expect(element).toBeInTheDocument();
    });
  });
});
