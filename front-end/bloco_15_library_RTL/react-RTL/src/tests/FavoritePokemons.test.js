import React from 'react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('testa se "no pokemon found" é renderizado ao não encontrar pokemon', () => {
  const { getByText, history } = renderWithRouter(<App />);
  history.push('/favorites');

  const anyPokemon = getByText(/no favorite pokemon found/i);
  expect(anyPokemon).toBeInTheDocument();
});
