import React from 'react';
import { NotFound } from '../components';
import renderWithRouter from '../renderWithRouter';

test('testa se contém H2 com o texto "Page requested not found"', () => {
  const { getByRole } = renderWithRouter(<NotFound />);
  const title = getByRole('heading', { level: 2, name: /page requested not found/i });
  expect(title).toBeInTheDocument();
});

test('testa se a imagen do link é carregada', () => {
  const { getByAltText } = renderWithRouter(<NotFound />);
  const img = getByAltText('Pikachu crying because the page requested was not found');
  expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
