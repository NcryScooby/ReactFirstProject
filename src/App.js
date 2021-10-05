import React from "react";
import { ListaDeNotas } from "./componentes/listaDeNotas";

function App() {
  return (
    <>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas/>
    </>
  );
}

export default App;
