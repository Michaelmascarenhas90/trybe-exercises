import React from 'react';
import PropTypes from 'prop-types';

const stateInitAdd = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = stateInitAdd;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateInitAdd);
    event.preventDefault();
  }

  title = (title) => (
    <label htmlFor="title" data-testid="title-input-label">
      Título
      <input
        data-testid="title-input"
        onChange={ this.handleChange }
        type="text"
        name="title"
        value={ title }
      />
    </label>
  );

  subtitle = (subtitle) => (
    <label htmlFor="subtitle" data-testid="subtitle-input-label">
      Subtítulo
      <input
        data-testid="subtitle-input"
        type="text"
        name="subtitle"
        onChange={ this.handleChange }
        value={ subtitle }
      />
    </label>
  );

  imagePath = (imagePath) => (
    <label htmlFor="imagePath" data-testid="image-input-label">
      Imagem
      <input
        type="text"
        name="imagePath"
        value={ imagePath }
        data-testid="image-input"
        onChange={ this.handleChange }
      />
    </label>
  );

  storyline = (storyline) => (
    <label htmlFor="storyline" data-testid="storyline-input-label">
      Sinopse
      <textarea
        data-testid="storyline-input"
        name="storyline"
        type="area"
        onChange={ this.handleChange }
        value={ storyline }
      />
    </label>
  );

  rating = (rating) => (
    <label htmlFor="rating" data-testid="rating-input-label">
      Avaliação
      <input
        name="rating"
        type="number"
        value={ rating }
        data-testid="rating-input"
        onChange={ this.handleChange }
      />
    </label>
  );

  genre = (genre) => (
    <label htmlFor="genre" data-testid="genre-input-label">
      Gênero
      <select
        name="genre"
        data-testid="genre-input"
        value={ genre }
        onChange={ this.handleChange }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    </label>
  )

    button = () => (
      <button
        data-testid="send-button"
        type="submit"
        onClick={ this.handleSubmit }
      >
        Adicionar filme
      </button>
    )

    render() {
      const { onClick } = this.props;
      const {
        title,
        subtitle,
        imagePath,
        storyline,
        rating,
        genre,
      } = this.state;
      return (
        <form data-testid="add-movie-form">
          {this.title(title)}
          {this.subtitle(subtitle)}
          {this.imagePath(imagePath)}
          {this.storyline(storyline)}
          {this.rating(rating)}
          {this.genre(genre)}
          {this.button(onClick, this.state)}
        </form>
      );
    }
}

AddMovie.propTypes = {
  onClick: PropTypes.function,
}.isRequired;

export default AddMovie;
