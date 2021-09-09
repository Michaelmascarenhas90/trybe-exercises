import React from "react";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";

import "./assets/App.css";
import "./assets/reset.css";
import { Component } from "react";

class App extends React.Component {

  createCard = (titulo, text) => {
    console.log(`um novo card foi criado ${titulo}, ${text}`)
  } 

  render() {
    return(
      <section className="conteudo">
        <FormCadastro createCard={ this.createCard } />
        <ListaDeNotas />
      </section>
    )
  }
}

export default App;
