import React, { Component } from "react";
import cardNota from "./cardNota";
export default class listaDeNotas extends Component {
  render(){
    return(
      <ul>
        <li>
          <cardNota />
        </li>
      </ul>
    );
  }
}

