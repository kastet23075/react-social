import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import MainApp from './App';

test('renders learn react link', () => {
  const { getByText } = render(<MainApp />);
  const linkElement = getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});
