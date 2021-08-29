import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRoute from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

const pokemon = 'pokemon-name';

describe('teste de pokedex', () => {
  test('se conten um heading com H2 com o texto "Encountered pokémons"', () => {
    renderWithRoute(<App />);

    const h2 = screen.getByRole('heading', { level: 2, name: /encountered pokémons/i });
    expect(h2).toBeInTheDocument();
  });

  describe('Teste se é exibido o prox. Pokémon da lista quando o botão é clicado', () => {
    it('O botão deve conter o texto "Próximo pokémon", e passar para o proximo', () => {
      renderWithRoute(<App />);

      const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });
      expect(nextButton).toBeInTheDocument();

      fireEvent.click(nextButton);

      const nextPokemon = screen.getByTestId(pokemon);
      expect(nextPokemon).toHaveTextContent(/charmander/i);
    });

    test('se volta ao inicio da lista apos o ultimo card', () => {
      renderWithRoute(<App />);

      const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });
      expect(nextButton).toBeInTheDocument();

      const firstPokemon = screen.getByTestId(pokemon);

      pokemons.forEach((pokemonCard, index) => {
        if (pokemonCard[index] < pokemons.length) {
          fireEvent.click(nextButton);
        }
        expect(firstPokemon).toHaveTextContent(pokemons[0].name);
      });
    });
  });

  test('se contém botoes de filtro', () => {
    renderWithRoute(<App />);

    const filter = screen.getByRole('button', { name: /fire/i });
    fireEvent.click(filter);

    const pokemonCard = screen.getByTestId(pokemon);
    expect(pokemonCard).toHaveTextContent(/charmander/i);

    const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });
    fireEvent.click(nextButton);
    expect(pokemonCard).toHaveTextContent(/rapidash/i);
  });

  test('se contém botão de resetar filtro', () => {
    renderWithRoute(<App />);

    const btnReset = screen.getByRole('button', { name: /all/i });
    fireEvent.click(btnReset);

    const firstPokemon = screen.getByTestId(pokemon);
    expect(firstPokemon).toHaveTextContent(/pikachu/i);
  });

  test('os tipos de buttons', () => {
    renderWithRoute(<App />);

    const btnReset = screen.getByRole('button', { name: /all/i });
    const btns = screen.getAllByTestId('pokemon-type-button');
    const pokemonTypes = [];

    pokemons.filter((pokemonIdx) => (
      pokemonTypes.includes(pokemonIdx.type) ? null : pokemonTypes.push(pokemonIdx.type)
    ));
    expect(btns.length).toBe(pokemonTypes.length);
    expect(btnReset).toBeInTheDocument();
  });
});
