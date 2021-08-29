import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.searchMovies();
  }

  searchMovies = () => {
    this.setState(
      { loading: true },
      async () => {
        const request = await movieAPI.getMovies();
        this.setState({
          movies: request,
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    const showMovieCard = movies.map((movie) => (
      <MovieCard key={ movie.title } movie={ movie } />
    ));

    const conditionLoading = loading ? <Loading /> : (
      <div>
        { showMovieCard }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { conditionLoading }
      </div>
    );
  }
}

export default MovieList;
