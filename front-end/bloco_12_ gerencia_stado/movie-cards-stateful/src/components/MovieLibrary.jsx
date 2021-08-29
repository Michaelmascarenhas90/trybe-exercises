import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

// const stateInitLibrary = {
//  searchText: '',
//  bookmarkedOnly: false,
//  selectedGenre: '',
//  movies: props.movies,
// };

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange = ({ target }) => {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange = ({ target }) => {
    this.setState({ bookmarkedOnly: target.checked });
  };

  onSelectedGenreChange = ({ target }) => {
    this.setState({ selectedGenre: target.value });
  };

  onSearchText = (searchText, bookmarkedOnly, selectedGenre, movies) => {
    let searchMovies = movies;
    if (searchText !== '') {
      searchMovies = movies.filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }
    if (bookmarkedOnly) {
      searchMovies = searchMovies.filter((movie) => movie.bookmarked);
    }
    if (selectedGenre !== '') {
      searchMovies = searchMovies.filter((movie) => movie.genre === selectedGenre);
    }
    return searchMovies;
  };

  addMovie(cardMovie, movies) {
    this.setState({ movies: [...movies, cardMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <h2> Minha biblioteca de filmes </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ this.onSearchText(searchText,
            bookmarkedOnly,
            selectedGenre,
            movies) }
        />
        <AddMovie onClick={ (cardMovie) => this.addMovie(cardMovie, movies) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.boolean,
  selectedGenre: PropTypes.string,
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
