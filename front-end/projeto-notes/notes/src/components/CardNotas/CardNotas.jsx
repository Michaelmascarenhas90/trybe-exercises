import React, { Component } from 'react';

import "./style.css";
import {ReactComponent as DeleteSVG}from "../../assets/img/delete.svg";

class CardNotas extends Component {
    delete = () => {
        const index = this.props.indice;
        this.props.deleteCard(index);
    }
    render() { 
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.delete}/>
                </header>
                <p className="card-nota_texto">{this.props.text}</p>
            </section>
        );
    }
}
 
export default CardNotas;