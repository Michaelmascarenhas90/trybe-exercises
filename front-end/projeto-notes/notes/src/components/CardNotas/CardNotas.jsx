import React, { Component } from 'react';

import "./style.css";
import deleteSVG from "../../assets/img/delete.svg";

class CardNotas extends Component {
    render() { 
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <img src={ deleteSVG } alt="svg-botao-delete" />
                </header>
                <p className="card-nota_texto">{this.props.text}</p>
            </section>
        );
    }
}
 
export default CardNotas;