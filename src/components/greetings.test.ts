import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';

import { Greetings } from './greetings';

describe('Given Greetings component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<div></div>';
    const greetings = new Greetings('div');

    test('Then it should be instance of Greetings', () => {
      expect(greetings).toBeInstanceOf(Greetings);
    });

    test('It should be in the document', () => {
      const element = screen.getByRole('region', { name: 'greetings' });
      expect(element).toBeInTheDocument();
    });

    test('Its button should be used', async () => {
      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button');
      await userEvent.type(input, 'Pepe');
      await userEvent.click(button);
      const p = screen.getByText(/Pepe/i);
      expect(p).toBeInTheDocument();
    });
  });
});
