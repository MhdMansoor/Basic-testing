import { render, screen } from '@testing-library/react';
import Button from '../button';

test('renders button element', () => {
  const {getByTestId} = render(<Button label='click me please' />);
  expect(getByTestId('button')).toHaveTextContent('click me please');
  expect(getByTestId('button')).not.toBeDisabled();
});
