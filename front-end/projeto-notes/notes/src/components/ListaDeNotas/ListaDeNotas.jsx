import React, { Component } from 'react';
import CardNotas from '../CardNotas/CardNotas';
import "./style.css"

class ListaDeNotas extends Component {
    render() { 
        return (
            <ul className="lista-notas">
                {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                    return (
                        <li key={index} className="lista-notas_item">
                            <div>{categoria}</div>
                            <CardNotas />
                        </li>
                    );
                })}
            </ul>

        );
    }
}
 
export default ListaDeNotas;