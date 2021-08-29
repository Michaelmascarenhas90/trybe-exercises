import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchMovies() {
    const { match: { params: { id: idRoute } } } = this.props;
    this.setState({ movie: await movieAPI.getMovie(idRoute) });
  }

  render() {
    const { shouldRedirect, movie } = this.state;
    const movieCompleted = Object.keys(movie).length;
    /* if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    if (loading) {
      return (
        <Loading />
      );
    } */
    // solução encontrada com o projeto do Paulo Freire
    return (
      <div data-testid="edit-movie">
        { shouldRedirect && <Redirect to="/" /> }
        { movieCompleted === 0 ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } /> }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};

export default EditMovie;
