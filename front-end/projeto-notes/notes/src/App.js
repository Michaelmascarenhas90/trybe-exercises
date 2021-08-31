import React, { Component } from "react";
import formularioCadastro from "./components/formularioCadastro";
import listaDeNotas from "./components/listaDeNotas";

class App extends Component {
  render() {
    return (
      <section>
        <formularioCadastro />
        <listaDeNotas />
      </section>
    );
  }
}

export default App;
