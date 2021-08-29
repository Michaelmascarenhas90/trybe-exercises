import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="input1">
          Inclui o texto
          <input
            id="input1"
            type="text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="input-checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
