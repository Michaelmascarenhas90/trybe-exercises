import React from "react";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import Header from "./components/header/Header";
import ListaDeCategorias from "./components/ListaCategorias/ListaDeCategorias";

import "./assets/App.css";
import "./assets/reset.css";
class App extends React.Component {

  constructor(){
    super();
    // this.notas = [];
    this.state = {
      notas: [],
      categorias: [],
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

  adicionarCategoria = (nomeCategoria) => {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const newState = {
      ...this.state,
      categorias: novoArrayCategorias,
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
      <div>
        <Header />
        <section className="conteudo">
          <FormCadastro createCard={ this.createCard } />
          <main className="conteudo-principal">
            <ListaDeCategorias
              adicionarCategoria={ this.adicionarCategoria }
              categorias={ this.state.categorias }
            />
            <ListaDeNotas
              deleteCard={ this.deleteCard }
              notas={ this.state.notas }
            />
          </main>
        </section>
      </div>
    )
  }
}

export default App;
