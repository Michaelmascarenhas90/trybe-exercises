import React from "react";
import { listaDeNotas } from "./components/listaDeNotas";

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..."/>
        <button>Criar Nota</button>
      </form>
      <listaDeNotas />
    </section>
  );
}

export default App;
