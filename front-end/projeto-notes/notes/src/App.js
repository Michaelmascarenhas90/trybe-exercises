import React from "react";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";

import "./assets/App.css";
import "./assets/reset.css";
class App extends React.Component {

  constructor(){
    super();
    this.notas=[];
  }

  createCard = (titulo, text) => {
    const novaNota = {titulo, text}
    this.notas.push(novaNota);
  } 

  render() {
    return(
      <section className="conteudo">
        <FormCadastro createCard={ this.createCard } />
        <ListaDeNotas notas={ this.notas } />
      </section>
    )
  }
}

export default App;
