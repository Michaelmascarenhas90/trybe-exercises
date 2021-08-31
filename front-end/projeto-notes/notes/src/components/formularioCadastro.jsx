import React, { Component } from "react";

export default class formularioCadastro extends Component {
  render() {
    return(
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..."/>
        <button>Criar Nota</button>
      </form>
    );
  }
}