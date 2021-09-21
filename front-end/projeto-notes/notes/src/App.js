import React from "react";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
// import Header from "./components/header/Header";

import "./assets/App.css";
import "./assets/reset.css";
class App extends React.Component {

  constructor(){
    super();
    // this.notas = [];
    this.state = {
      notas: [],
    }
  }

  createCard = (titulo, text) => {
    const novaNota = {titulo, text}
    const novoArrayNotas = [...this.state.notas, novaNota]
    const newState = {
      notas: novoArrayNotas
    }
    this.setState(newState);
  }

  deleteCard = (index) => {
    const arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas })
  }

  render() {
    return(
      <section className="conteudo">
        <FormCadastro createCard={ this.createCard } />
        <ListaDeNotas
          deleteCard={ this.deleteCard }
          notas={ this.state.notas }
        />
      </section>
    )
  }
}

export default App;
