import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRoute from '../renderWithRouter';
import App from '../App';

// feito sob consulta da pullRequest do Gabriel Dias.
describe('testes do component Pokemon', () => {
  test('se é renderizado um card com as informações do pokemon', () => {
    renderWithRoute(<App />);

    const name = screen.getByTestId('pokemon-name').textContent;
    const type = screen.getByTestId('pokemon-type').textContent;
    const weight = screen.getByTestId('pokemon-weight').textContent;
    const pkmImg = screen.getByAltText(/pikachu sprite/i);

    expect(name).toBe('Pikachu');
    expect(type).toBe('Electric');
    expect(weight).toBe('Average weight: 6.0 kg');
    expect(pkmImg).toBeInTheDocument();
    expect(pkmImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('se contém link que encaminha para detalhes', () => {
    renderWithRoute(<App />);

    const link = screen.getByText(/more details/i);
    expect(link).toBeInTheDocument();

    fireEvent.click(link);

    const details = screen.getByText('Pikachu Details');
    expect(details).toBeInTheDocument();
  });

  test('se contém o icon estrela nos favoritos', () => {
    renderWithRoute(<App />);

    const link = screen.getByText(/more details/i);
    fireEvent.click(link);

    const favorite = screen.getByText(/pokémon favoritado/i);
    expect(favorite).toBeInTheDocument();
    fireEvent.click(favorite);

    const starIcon = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(starIcon).toBeInTheDocument();
    expect(starIcon).toHaveAttribute('src', '/star-icon.svg');
  });
});
