import React, { Component } from 'react';
import CardNotas from '../CardNotas/CardNotas';
import "./style.css"

class ListaDeNotas extends Component {
    render() { 
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index} className="lista-notas_item">
                            <CardNotas titulo={nota.titulo} text={nota.text} />
                        </li>
                    );
                })}
            </ul>

        );
    }
}
 
export default ListaDeNotas;