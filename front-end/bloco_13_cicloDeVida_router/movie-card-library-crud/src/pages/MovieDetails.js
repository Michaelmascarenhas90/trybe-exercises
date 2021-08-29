import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: '',
    };
  }

  componentDidMount() {
    this.searchDetails();
  }

  deletedMovie = async (id) => {
    await movieAPI.deleteMovie(id);
  }

  searchDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const request = await movieAPI.getMovie(id);
    this.setState({ loading: false, movie: request });
  }

  render() {
    const {
      loading,
      movie: { title, subtitle, imagePath, storyline, rating, genre },
    } = this.state;

    const { match: { params: { id } } } = this.props;

    const detailsMovie = (
      <div>
        <img src={ `../${imagePath}` } alt="Movie Cover" />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <p>{ `Genre: ${genre}` }</p>
      </div>
    );

    const conditionLoading = loading ? <Loading /> : detailsMovie;

    return (
      <div data-testid="movie-details">
        { conditionLoading }
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.deletedMovie(id) }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
