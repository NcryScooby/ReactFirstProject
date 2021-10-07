import React from "react";
import ListaDeNotas from "./componentes/listaDeNotas";
import FormularioCadastro from "./componentes/FormularioCadastro";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <FormularioCadastro />
        <ListaDeNotas />
      </>
    );
  }
}
export default App;
