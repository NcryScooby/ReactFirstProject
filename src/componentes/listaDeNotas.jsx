import React from "react";
import { Component } from "react";
import CardNota from "./CardNota"

class ListaDeNotas extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
          <CardNota/>
          </li>
        </ul>
        <ul>
          <li>
          <CardNota/>
          </li>
        </ul>
        <ul>
          <li>
          <CardNota/>
          </li>
        </ul>
      </>
    );
  }
}

export default ListaDeNotas;
