import React from "react";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";

import "./assets/App.css";
import "./assets/reset.css";

function App() {
  return(
    <section className="conteudo">
      <FormCadastro />
      <ListaDeNotas />
    </section>
  )
}

export default App;
